# AparTrue
[AparTrue](aparture.heroku.com) is an online app that that allows users to review apartments they have lived in.  Built using Ruby on Rails, Javascript, and ReactJS.

## Features
### User Authentication
Sessions are kept secure throughout the stack.  The users password is digested into a secure has for storage, and all back end api calls are validated using cookies.  Front end authentication operates independently of secure back end information without making unnecessary api calls using a session token, and the user is stored as a variable in the 'Session Store'.

### Fuzzy-finder
Built using Google's places and search box api, the fuzzy finder loads all documented properties from the database and then checks user input for matches.  If a match is found, the user is directed to that properties show page.  If no match is found in the database, the user is transferred to a 'Property Form' where they can submit a new apartment to be reviewed.

### Property Form
An html upload form that is pre-populated with the data returned from the Google Places Search Box.  The user may then add additional information and upload a picture.  Front end validation is performed on all necessary form fields to avoid unnecessary API calls.  The pictures are uploaded using the paperclip gem and hosted on Amazon Web Services.

### Criteria Search
Users can search through properties registered in the database by multiple filter criteria.  The Existing properties are loaded into the 'Property Store' asynchronously while the user if filling out the form to improve search speed.  When the search form is submitted the new filters are registered to a 'Filter Store' which emits change, causing the search page to re-render and display a Google Map component and a list of the matching properties.

### Reviews
Users can leave text reviews as well as 'Star' rankings for new or existing properties.  The review is registered to the database, returning the new average rating for the property which is updated in real time on the page using ActiveRecord and React.  

### React Modals
Users must be logged in to add reviews.  They can login directly from a properties 'Show Page'.  The login form is implemented using React Modals.

### User Profile
Users can upload a profile picture or edit their personal information.  Files are uploaded using Amazon Web Services, with the figaro and paperclip gems.

![ScreenShot](/screenshots/user_profile.png)
