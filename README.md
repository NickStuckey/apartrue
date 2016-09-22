# AparTrue
[AparTrue](aparture.heroku.com) is an online app that that allows users to review apartments they have lived in.  Built using Ruby on Rails, Javascript, and ReactJS.

## Features
### User Authentication
Sessions are kept secure throughout the stack.  The users password is digested into a secure has for storage, and all back end api calls are validated using cookies.  Front end authentication operates independently of secure back end information without making unnecessary api calls using a session token, and the user is stored as a variable in the 'Session Store'.

```ruby
def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  return nil unless user && user.is_password?(password)
  user
end

def password=(password)
  self.password_digest = BCrypt::Password.create(password)
  @password = password
end

def ensure_session_token
  self.session_token ||= generate_token
end

def ensure_session_token_uniqueness
  while User.find_by(session_token: self.session_token)
    self.session_token = generate_token
  end
end

def reset_token!
  self.session_token = generate_token
  self.save
  self.session_token
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def generate_token
  SecureRandom.base64(16)
end
```

### Fuzzy-finder
Built using Google's places and search box api, the fuzzy finder loads all documented properties from the database and then checks user input for matches.  If a match is found, the user is directed to that properties show page.  If no match is found in the database, the user is transferred to a 'Property Form' where they can submit a new apartment to be reviewed.  

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

The staged property is then pre-filled into the property upload form.

### Property Form
An html upload form that is pre-populated with the data returned from the Google Places Search Box.  The user may then add additional information and upload a picture.  Front end validation is performed on all necessary form fields to avoid unnecessary API calls.  The pictures are uploaded using the paperclip gem and hosted on Amazon Web Services.

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
Users can leave text reviews as well as 'Star' rankings for new or existing properties.  The review is registered to the database, returning the new average rating for the property which is updated in real time on the page using ActiveRecord and React.  If a user searches and views a property without being logged in, they will be given an option to login without being redirected via a react-modal.

The users session is validated and determines the content they see:

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

![ScreenShot](/screenshots/login_modal.png)

### React Modals
Users must be logged in to add reviews.  They can login directly from a properties 'Show Page'.  The login form is implemented using React Modals.

### User Profile
Users can upload a profile picture or edit their personal information.  Files are uploaded using Amazon Web Services, with the figaro and paperclip gems.

![ScreenShot](/screenshots/user_profile.png)
