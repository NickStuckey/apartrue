**HTML Endpoint**
  - GET / -- loads React web app

**JSON Endpoints**
  *Users*
    - GET /api/users
    - GET /api/user/:id
    - DELETE /api/user/:id
    - PATCH /api/user/:id

  *Session*
    - GET /api/session
    - POST /api/session
    - DELETE /api/session

  *Properties*
    - GET /api/properties
      - accepts neighborhood as param
    - GET /api/property/:id
    - POST /api/properties
    - DELETE /api/property/:id
    - PATCH /api/property/:id

  *Reviews*
    - GET /api/reviews
      - accpets a property id as param
    - GET /api/review/:id
    - POST /api/reviews
    - PATCH /api/review/:id
    - DELETE /api/review/:id

  *Neighborhoods*
    - GET /api/neighborhoods 
