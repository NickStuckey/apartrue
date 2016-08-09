# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



# User.create({username: 'GuestUser', password: 'password', hometown: 'Manhattan'})
# User.create({username: 'ILovePizza', password: 'password', hometown: 'Manhattan'})
# User.create({username: 'NickStuckey', password: 'password', hometown: 'Manhattan'})
# User.create({username: 'MrDudeGuy', password: 'password', hometown: 'Manhattan'})
# User.create({username: 'CrazyPugLady', password: 'password', hometown: 'Brooklyn'})
# User.create({username: 'Hockey_fan', password: 'password', hometown: 'Bronx'})
# User.create({username: 'IHateHockey', password: 'password', hometown: 'Bronx'})
# User.create({username: 'bBoi1988', password: 'password', hometown: 'Bronx'})
# User.create({username: 'Creative_username', password: 'password', hometown: 'Bronx'})
# User.create({username: 'Mike_K', password: 'password', hometown: 'Queens'})
# User.create({username: 'DebbieHuang', password: 'password', hometown: 'Queens'})
# User.create({username: 'ParaDoxox', password: 'password', hometown: 'Queens'})
# User.create({username: 'MrBobBobbington', password: 'password', hometown: 'Staten Island'})


# Neighborhood.create({name: 'manhattan'})
# Neighborhood.create({name: 'brooklyn'})
# Neighborhood.create({name: 'queens'})
# Neighborhood.create({name: 'bronx'})
# Neighborhood.create({name: 'staten island'})

# Manhattan
# Property.create({
#   address: "188 E 64th St",
#   geolocation: "40.764593,-73.964821",
#   city: "Manhattan",
#   zipcode: 10065,
#   available: true,
#   neighborhood_id: 1,
#   price: 4000,
#   num_bedrooms: 2,
#   lat: 40.764593,
#   lng: -73.964821
#   })
# Property.create({
#   address: "583 Park Ave",
#   geolocation: "40.76545,-73.967453",
#   city: "Manhattan",
#   zipcode: 10065,
#   available: true,
#   neighborhood_id: 1,
#   price: 4000,
#   num_bedrooms: 2,
#   lat: 40.76545,
#   lng: -73.967453
#   })
# Property.create({
#   address: "115 E 57th St",
#   geolocation: "40.761653,-73.97007",
#   city: "Manhattan",
#   zipcode: 10022,
#   available: true,
#   neighborhood_id: 1,
#   price: 4000,
#   num_bedrooms: 2,
#   lat: 40.761653,
#   lng: -73.97007
#   })
# Property.create({
#   address: "453 E 60th St",
#   geolocation: "40.759568,-73.959888",
#   city: "Manhattan",
#   zipcode: 10022,
#   available: true,
#   neighborhood_id: 1,
#   price: 4000,
#   num_bedrooms: 2,
#   lat: 40.759568,
#   lng: -73.959888
#   })
# Property.create({
#   address: "321 E 52nd St",
#   geolocation: "40.755885,-73.966449",
#   city: "Manhattan",
#   zipcode: 10022,
#   available: true,
#   neighborhood_id: 1,
#   price: 4000,
#   num_bedrooms: 2,
#   lat: 40.755885,
#   lng: -73.966449
#   })
# Property.create({
#   address: "711 3rd Ave",
#   geolocation: "40.752161,-73.972835",
#   city: "Manhattan",
#   zipcode: 10017,
#   available: true,
#   neighborhood_id: 1,
#   price: 4000,
#   num_bedrooms: 2,
#   lat: 40.752161,
#   lng: -73.972835
#   })
# Property.create({
#   address: "241 E 75th St",
#   geolocation: "40.752161,-73.972835",
#   city: "Manhattan",
#   zipcode: 10021,
#   available: true,
#   neighborhood_id: 1,
#   price: 5500,
#   num_bedrooms: 3,
#   lat: 40.771117,
#   lng: -73.957472
#   })

Review.create({
  title: "Best apartment ever!",
  body: "The landlord used to come over and bring me pizza and give me foot rubs.  What a nice guy!",
  property_rating: 5,
  landlord_rating: 5,
  author_id: 2,
  property_id: 1
  })
