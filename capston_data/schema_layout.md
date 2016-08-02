**Schema Layout**

  *Users*
                 id | integer | not null
               name | string  | not null
           hometown | string  |
    password_digest | string  | not null
      session_token | string  | not null

  *Reviews*
             id | integer | not null, primary key
      author_id | integer | not null, foreign key
           body | text    | not null
    star_rating | integer    | not null

  *Property Reviews*
             id | integer | not null, foreign key
      review_id | integer | not null, primary key
    property_id | integer | not null, primary key


  *Properties*
                 id | integer | not null
            address | string  | not null
           owner_id | integer | foreign key
    neighborhood_id | integer | foreign key
              price | integer | not null
               size | integer | not null
          available | boolean |

  *Neighborhood*
      id | integer | not null
    name | string  | not null
