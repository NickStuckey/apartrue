**Implementation Timeline**


*whats left*
  - fix error handling on controllers to not create objects
  - style prop show
  - style submit form
  - set up user profile
  - fix auth

  *current bugs to fix*
    - fix empty review display for ratings in jbuilder
    - fix property submit and display
    - style property show

    - fix login redirect
      - log out button disapears
      - review form only shows up when signed in
      - delete button only shows up for user reviews

    - style property add
    - add user profile update form
    - style user profile
    - get rid of two extra reviews on refresh

  *Phase 1: backend and authentication* (2 days, W1 tuesday, wednesday) √
    - create new project √
    - create User model √
    - authentication backend setup √
    - create StaticPages controller and root view √
    - set up webpack & flux scaffold with skeleton files √
      - login form √
      - sign up form √
      - ever present logout button √
    - setup APIUtil to interact with the API √
    - set up flux cycle for frontend auth √
    - user signup/signin components √
    - blank landing component after signin √
    - style signin/signup components √
    - seed users √
    - launch to haroku √

  *Phase 2: properties, neighborhoods, API, and components* (2 days, w1 thursday, friday)
    - create Properties model √
    - create Neighborhood model √
    - seed database with Neighborhoods √

    - CRUD API for Properties √
    - set up google map api to view properties √
    - add properties with google map api √

    - create all properties forms and components, set up FLUX √
    - CSS style new components

  *Phase 3: Reviews, User profiles* (2 days, w2 monday, tuesday)
    - create Reviews model √
    - create Users model √
    - seed database with reviews for each user
    - JBuilder for reviews √
    - JBuilder for users √
    - CRUD API for reviews √
    - CRUD API for users
    - style user profile page
    - style review submit and update form √
    - set up flux for reviews √
    - set up flux for users √
    - CSS style sign up, sign in forms

  *Phase 4: search and fuzzy finders* (1 day, w2 wednesday)
    - implement auto complete search for properties √
    - add fuzzy finder to add property form

    - CSS style submit property, review property forms

  *Phase 5: google maps* (1 day, w2 thursday)
    - implement google map api on browse neighborhood page √
    - CSS style browse neighborhoods page, homepage

    http://apartrue.herokuapp.com/#/?_k=ev3yd2
