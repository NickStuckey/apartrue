**AUTH CYCLES**

  *Session API Request Actions*
    - signUp
      1. invoked from signUp form onSubmit
      2. POST /api/users
      3. receiveCurrentUser is set as callback
    - logIn
      1. invoked from signIn onSubmit
      2. POST /api/session is called.
      3. receiveCurrentUser is set as the callback.
    - logOut
      1. invoked from Navbar onClick
      2. DELETE /api/session is called.
      3. removeCurrentUser is set as the success callback.
    - fetchCurrentUser
      1. invoked from App in didMount
      2. GET /api/session is called.
      3. receiveCurrentUser is set as the success callback.


  *Session API Response Actions*
    - receiveCurrentUser
      1. invoked from an API callback
      2. stores in currentUser in CurrentUserStore

    - removeCurrentUser
      1. invoked from an API callback
      2. removes currentUser in CurrentUserStore

**Property Cycles**

  *property API request actions*
    - getPropertyByAddress
      1. invoked from updatePropertyForm, searchAddressForm
      2. GET /api/properties is called.
      3. receiveSingleProperty is passed as callback
#          how to implement this?

    - getPropertyById
      1. invoked from searchCriteriaForm, searchAddressForm
      2. GET /api/properties is called.
      3. receiveSingleProperty is passed as callback

    - getAllProperties
      1. invoked from BrowseProperties componentDidMount
      2. GET /api/properties/
      3. receiveAllProperties is passed as callback

    - createProperty
      1. invoked from CreatePropertyForm onSubmit
      2. POST /api/properties
      3. createProperty is passed as callback

    - deleteProperty
      1. invoked from SingleProperty delete button onClick
      2. DELETE /api/properties/propertyID
      3. deleteProperty is passed as callback

    - updateProperty
      1. invoked from UpdatePropertyForm onSubmit
      2. PATCH /api/properties/propertyID
      3. receiveSingleProperty is passed as callback

  *Property API response actions*
    - receiveAllProperties
      1. invoked from an API callback
      2. PropertyStore updates properties and emits change

    - receiveSingleProperty
      1. invoked from an API callback
      2. PropertyStore updates properties[:id] and emits change

    - removeProperty
      1. invoked from an API callback
      2. PropertyStore updates properties[:id] and emits change

**Review Cycles**

  *Review API Request actions*

    - getAllReveiwsForUser
      1. invoked from UserProfile on componentDidMount
      2. GET /api/reviews is called.
      3. receiveAllReviews is passed as callback

    - getAllReviewsForProperty
      1. invoked from SingleProperty on componentDidMount
      2. GET /api/reviews is called.
      3. receiveAllReview is passed as callback

    - createReview
      1. invoked from createReviewForm onSubmit
      2. POST /api/reviews
      3. createReview is passed as callback

    - deleteReview
      1. invoked from UserProfile via delete button onClick
      2. DELETE /api/reviews/reviewId
      3. deleteReview is passed as callback

    - updateReview
      1. invoked from updateReview onSubmit
      2. PATCH /api/reviews/reviewId
      3. receiveSingleReview is passed as callback

  *Review API response actions*
    - receiveAllReviews
      1. invoked from an API callback
      2. ReviewStore updates reviews and emits change

    - receiveSingleReview
      1. invoked from an API callback
      2. ReviewStore updates reviews[:id] and emits change

    - removeReview
      1. invoked from an API callback
      2. ReviewStore updates reviews[:id] and emits change

**User Cycles**
  *Delete current users account*
    - deleteCurrentUser
      1. invoked from UserProfile via deleteUser button onClick
      2. DELETE /api/users/userId
      3. receiveSingleUser is passed as callback

**SearchSuggestion Cycles**

  - fetchPropertySearchSuggestions
    1. invoked from PropertySearchBar onChange when there is text
    2. GET /api/properties is called with text param.
    3. receiveSearchSuggestions is set as the success callback.

  - fetchNeighborhoodSearchSuggestions
    1. invoked from NeighborhoodSearchBar onChange when there is text
    2. GET /api/properties is called with text param.
    3. receiveSearchSuggestions is set as the success callback.

  - receiveSearchSuggestions
    1. invoked from an API callback.
    2. SearchSuggestion store updates suggestions and emits change.

  - removeSearchSuggestions
    1. invoked from PropertySearchBar onChange when empty
    2. SearchSuggestion store resets suggestions and emits change.
