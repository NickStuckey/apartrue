# AparTrue
[AparTrue](aparture.heroku.com) is an online app that that allows users to review apartments they have lived in.  Built using Ruby on Rails, JavaScript, and ReactJS.

## Features
### User Authentication

Sessions are kept secure throughout the stack.  Sessions are validated on the backend whenever an API call is made.  
```ruby
def ensure_session_token
  self.session_token ||= generate_token
end

def ensure_session_token_uniqueness
  while User.find_by(session_token: self.session_token)
    self.session_token = generate_token
  end
end
```

On the client side, a cookie is kept in a session store to allow users to avoid unnecessary API calls.
```js
if (SessionStore.isUserLoggedIn()) {
  sessionOption = <ReviewForm
    className="review-form-component"
    propertyId={this.props.params.propertyId}/>;
} else {
  sessionOption = <button
    className="login-to-review button"
    onClick={this.openModal}>Login to leave a review</button>;
}
```

### Fuzzy-finder
The fuzzy finder uses Google places API to self-populate with possible address matches.  When a search is submitted,
An API call is made to the application database to return that properties view page.  If the property is not yet included
in the database, the address is formatted and pre-filled into the property upload form.

![ScreenShot](/screenshots/fuzzy_finder.png)

```js
handleSubmit(e) {
  e.preventDefault();
  if (!this.state.places[0]) { return; }

  const fullAddress = this.state.places[0];
  const formattedAddress = fullAddress.formatted_address;
  let addressParts, zipcode;

  if (formattedAddress) {
    addressParts = formattedAddress.split(', ');
    zipcode = addressParts[2].slice(3);
  } else {
    addressParts = fullAddress.name.split(', ');
  }

  const city =  addressParts[1];
  const streetAddress = addressParts[0];

  const property = PropertyStore.findByStreetAddress(streetAddress);
  PropertyActions.stageProperty({
    address: streetAddress,
    zipcode: zipcode,
    city: city
  });
  if (!!property) {
    hashHistory.push(`properties/${property.id}`);
  } else {
    hashHistory.push("properties/new");
  }
}
```

### Property Form
An HTML upload form that is pre-populated with the data returned from the Google Places search box.  The user may then add additional information and upload a picture.  Front end validation is performed on all necessary form fields to avoid unnecessary API calls.

![ScreenShot](/screenshots/prop_form.png)

### Criteria Search
Users can search through properties registered in the database by multiple filter criteria.  When the search form is submitted the new filters are registered to the FilterStore.

The search component listens for updates to the FilterStore, sets the map parameters accordingly, then renders the map component and the property index component via the SearchResults container component.
```js
_onFilterChange () {
  const filters = FilterStore.filters();
  let mapCenter;
  if (filters.neighborhoodId){
    mapCenter = MapUtil.updateMapCenter(filters.neighborhoodId);
  } else {
    mapCenter = MapUtil.defaultCenter();
  }
  PropertyActions.fetchAllPropertiesWithParams(filters);
  this._scroll();

  const results = <SearchResults
    id="results"
    mapCenter={ mapCenter }
    className="search-map-wrapper"/>;
  this.setState({results: results});
},
```

![ScreenShot](/screenshots/search_results.png)

### Reviews

Users can leave text reviews as well as star rankings for new or existing properties.  The review is registered to the database with an API call that also updates average ratings for the listing.

```ruby
def update_rating_averages!
  ratings = {
    count: self.reviews.count,
    prop_avg: self.reviews.average(:property_rating),
    lord_avg: self.reviews.average(:landlord_rating)
  }

  prop_avg, lord_avg = 0, 0
  if ratings[:count] > 0
    prop_avg = ratings[:prop_avg].round
    lord_avg = ratings[:lord_avg].round
  end

  self.avg_property_rating = prop_avg
  self.avg_landlord_rating = lord_avg
  self.save!
end
```

If a user searches and views a property without being logged in, they will be given an option to login without being redirected.
The users session is validated and determines the content they see:

![ScreenShot](/screenshots/login_modal.png)

### User Profile
Users can upload a profile picture or edit their personal information.  File uploads are hosted using AWS S3 for storage, with the Figaro gem for AWS security credentials and Paperclip for easy uploads.

![ScreenShot](/screenshots/user_profile.png)
