class Subhood < ActiveRecord::Base
  belongs_to(
    :neighborhood,
    primary_key: :id,
    foreign_key: :city_id
   )
end
