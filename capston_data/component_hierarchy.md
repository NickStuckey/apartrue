# Component hierarchy

+ App (landing page)
  - nav bar
  - search form
  - link to browse by neighborhood
  - link to add add new property page (or redirect to login)
  + LOGIN
    - guest login button (form to generate session)
    - create account (form to save user credentials and generate session)
    - ominauth buttons
  + BROWSE/NEIGHBORHOOD
    - list of local apartments (links that redirect to single address show page)
    - filter by available button (filters shown listings to ones with property 'available')
    - google map view
      - pins should highlight on associated review hover, and clicking them will
        redirect to listing show page.
  + SINGLE PROPERTY PAGE
    - basic info
    - reviews (click to link to user profile)
    - claim as owner button (joins user email to property for feedback)
    - write a review button (link to review page)
      + SUBMIT NEW REVIEW
        - property stats (if property exists in database)
        - review form
        - star rating (implemented with click handlers)
        - review body (text)
        - submit buttons
        - save post to site (submit)
        - send feedback to property owner (will send email to associated address)
#       - add photos form (upload or drag and drop)
  + NEW PROPERTY PAGE
    - a form to create a new property and save it to the database
  + USER PROFILE
    - profile picture
    - list of friends
    - reviews posted (click review to link to single property page)
    - about user blurb
    - delete profile (will remove users reviews using FLUX methodology)
    - update profile
      + UPDATE PROFILE
        - info form (pre-filled with old stats and info)
        - submit button (sends post request and redirects to user profile)
        - photo upload

# Routes
  - component: App // Path: "/"

    - component: User // Path: "/users" (routes to signIn)
      - component: NewUser // Path: "users/new"
      - component: Login // Path: "/users/signIn"
      - component: UserProfile // Path: "/users/userId"

    - component: Browse // Path: "/browse/neighborhood-name" (possible do away with 'browse' and just have a store of neighborhood names
        that are possible routes, and just pick a default)

    - component: Property // Path "/properties" (routes to index)
      - component: SingleProperty // Path: "/properties/123-some-address"
      - component: CreateNewPropery // Path: "/properties/new"
      - component: UpdateProperty // Path: "/properties/propertyID"      

    - component: Review // Path: "/reviews"
      - component: NewReveiw // Path: "/reviews/new"
