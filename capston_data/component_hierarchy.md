# Component hierarchy

NavBar
  - NavBar search?

SearchPage
  - map
  - searchFrom
AddPropertyPage
  - map
  - addPropertyForm

welcomePage
  - searchFrom

profile page
  - addPropertyForm
  - reviews (filtered by user reviews)
  - map of my favorites (bonus)

propertyShow
  - map
  - leaveReviewForm
  - reviews (filtered by property)

LoginFrom √


+ App (landing page)
  + NAV BAR
    - link to profile or login
    - logo
    - search fields ()
  - search form
  - local real estate news feed (bonus)
  + LOGIN
    - guest login button (form to generate session)
    - create account (form to save user credentials and generate session)
    - ominauth buttons (bonus)
  + BROWSE/NEIGHBORHOOD (search results)
    - list of local apartments (links that redirect to single address show page)
    - filter by available button (filters shown listings to ones with property 'available')
    - google map view
      - pins should highlight on associated review hover, and clicking them will
        redirect to listing show page.
  + SINGLE PROPERTY PAGE
    - reviews (click to link to user profile)
    - claim as owner button (joins user email to property for feedback)
    - write a review button (link to review page)
    + REVIEW FORM
      - property stats (if property exists in database
      - star rating (implemented with click handlers)
      - review body (text)
      - submit buttons
      - save post to site (submit)
      - send feedback to property owner (will send email to associated address)
      - upload photos
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
    + MAP
      - filter by user
      - filter by search credentials
      - included on search page, propertyPage, addProperty page

# Routes
  - component: App // Path: "/"

      - component: NewUser // Path: "users/signup"
      - component: Login // Path: "/users/login"
      - component: UserProfile // Path: "/users/userId"

    - component: Search // Path: "/browse/search"

    - component: Property // Path "/properties" (routes to index)
      - component: SingleProperty // Path: "/properties/propertyId"
      - component: CreateNewPropery // Path: "/properties/new"
      - component: UpdateProperty // Path: "/properties/propertyId"      

    - component: Review // Path: "/reviews"
      - component: NewReveiw // Path: "/reviews/new"
