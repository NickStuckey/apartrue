User.create({username: 'GuestUser', password: 'password', hometown: 'Manhattan', bio: "Thanks for trying AparTrue!  Check out the search tab to find existing properties or add new ones, or browse listings by criteria and location around NYC.  Apartrue is a single page app build with Ruby on Rails, using JavaScript and React.  "})
User.create({username: 'ILovePizza', password: 'password', hometown: 'Manhattan'})
User.create({username: 'NickStuckey', password: 'password', hometown: 'Manhattan'})
User.create({username: 'MrDudeGuy', password: 'password', hometown: 'Manhattan'})
User.create({username: 'CrazyPugLady', password: 'password', hometown: 'Brooklyn'})
User.create({username: 'Hockey_fan', password: 'password', hometown: 'Bronx'})
User.create({username: 'IHateHockey', password: 'password', hometown: 'Bronx'})
User.create({username: 'bBoi1988', password: 'password', hometown: 'Bronx'})
User.create({username: 'Creative_username', password: 'password', hometown: 'Bronx'})
User.create({username: 'Mike_K', password: 'password', hometown: 'Queens'})
User.create({username: 'DebbieHuang', password: 'password', hometown: 'Queens'})
User.create({username: 'ParaDoxox', password: 'password', hometown: 'Queens'})
User.create({username: 'MrBobBobbington', password: 'password', hometown: 'Staten Island'})

#
Neighborhood.create({name: 'Manhattan'})
Neighborhood.create({name: 'Brooklyn'})
Neighborhood.create({name: 'Queens'})
Neighborhood.create({name: 'Bronx'})
Neighborhood.create({name: 'Staten Island'})

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
#   address: "285 franklin ave",
#   city: "Brooklyn",
#   available: true,
#   neighborhood_id: 2,
#   price: 2000,
#   num_bedrooms: 2,
#   lat: 40.723469,
#   lng: -73.96000
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
  body: "The landlord used to come over and bring me pizza and give me foot rubs.  What a nice guy! I highly recomend this apartment",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 1,
  property_id: (1 + rand(10))
})

Review.create({
  title: "Not bad",
  body: "Three stars based only on the hallway, which is really really clean.
  The quality is amazing and the central air looks really nice and flavorful. I am only taking two stars off,
  because the landlord wasn't too friendly or helpful. Had to ask for garbage bags 3 times, after I finally got an eye thing and okay.
  They include the the utilities automatically in your rent, which is good for them I'm sure because a lot of people
  probably don't pay here without it being added on, just wish I was giving my money to better utilities.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 2,
  property_id: (1 + rand(10))
})
#
# Review.create({
#   title: "Love it",
#   body: "This place has a variety of authentic wallpaper. Its a small apartment just like any other authentic wallpaper joint.
#   The wallpaper comes out pretty good and every time I have gone the staff have been pretty nice. They started including
#   the utilities in the rent also. I almost didnt see it when I went this year.  My favorite amenities are the sunlight and heated floors,
#   dishwasher and hardwood, and the sesame sunlight. The included track lighting is also really good",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(10))
# })


Review.create({
  title: "Come see my band!",
  body: "First year here. I was excited with all the reviews but I gotta say the place looks like a hole in the wall and in need of a makeover! There is plenty of light but I could use more. I got a new bathtub installed. The rent is reasonable. The landscaping was nice.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 5,
  property_id: (1 + rand(10))
})


Review.create({
  title: "Wow!",
  body: "Amazing wallpaper. best spot in all of NYC. You wont be disappointed.
Favorite feature of mine would have to be dazzling sunlight",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 6,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Good deal",
  body: "No reason to give them anything less than 5 stars!
Very quiet, and I must say, the property manager is doing a pretty good job! I've come to this place countless years and
every one has been better than the last. They give you large square footage for a decent price and everything looks amazing!
Definitely recommend it to everyone!",

  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 7,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Bedbugs",
  body: "Great prices and large square footage. But, as I said bedbugs.  And the landlord want's to be paid in cash?? kinda sketchy",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 8,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Nice place",
  body: "One of the better pads in Astoria. Depends what your rent.  Decent size bathtub.
Mock hardwood floors options.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 9,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Get me out of here",
  body: "It's surprising that this location has great reviews. It is little sad to be working in Long Island City when you get not many choices to rent in the area,
  but at least it's close to the train.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 10,
  property_id: (1 + rand(10))  })

Review.create({
  title: "I love it",
  body: "Back at it again!  Legit. Went for the square footage closet space and sunlight, Score.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 1,
  property_id: (1 + rand(10))  })

Review.create({
  title: "It's fine",
  body: "To quote Gob Bluth, I've made a huge mistake. And that mistake was eating at El Diablo space during the daytime and when I wasn't blackout drunk (yet).
anyways, the apartment is find, I just wanted to share my pain.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 3,
  property_id: (1 + rand(10))  })

Review.create({
  title: "My cat Loves it",
  body: "The wait for this apartment was 2 years, but it was definitely worth the wait. This place was packed out at 9 pm, so you know it's a great spot.
We came here as our first stop in our apartment viewing day, and I wish we hadn't of left to go to another apartment!",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 4,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Every day I'm like, wat?",
  body: "Maybe there have been changes in their management team?  Used to be clean, quiet, decent people living here.  Now there are screaming children runnning the halls at all hours of the night.
Still well worth for the price though!",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 6,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Eh... part deux",
  body: "Good wallpaper, big square footage, low price. What more can you ask for?",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 7,
  property_id: (1 + rand(10))  })

Review.create({
  title: "I'm lost",
  body: "One of the most reviewed and well rated buildings in the area, my mom still thinks it's a toilet.  I'm like, 'mom, i live in new york, this is making it.'  She just doesn't get me.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 8,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Yup.",
  body: "Insanely cheap! Great for late night afterparty but the living room here is just OK.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 10,
  property_id: (1 + rand(10))  })

Review.create({
  title: "I like pizza",
  body: "And I like this apartment",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 11,
  property_id: (1 + rand(10))  })

Review.create({
  title: "I'm locked in my bathroom, please send help",
  body: "I'm serious, get me out of here.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 1,
  property_id: (1 + rand(10))  })

Review.create({
  title: "Nice yard",
  body: "The square footage is not bad, but no amenities!",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 2,
  property_id: (1 + rand(10))  })
  Review.create({
  title: "Life is Good",
  body: "Love this establishment. Especially the outdoor deck where you can enjoy chill.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 8,
  property_id: (1 + rand(10))
  })


Subhood.create({name: "Upper Manhattan", city_id: 1})
Subhood.create({name: "Manhattan", city_id: 1})
Subhood.create({name: "New York", city_id: 1})
Subhood.create({name: "Marble Hill", city_id: 1})
Subhood.create({name: "Inwood", city_id: 1})
Subhood.create({name: "Fort George", city_id: 1})
Subhood.create({name: "Washington Heights", city_id: 1})
Subhood.create({name: "Hudson Heights", city_id: 1})
Subhood.create({name: "West Harlem", city_id: 1})
Subhood.create({name: "Hamilton Heights", city_id: 1})
Subhood.create({name: "Manhattanville", city_id: 1})
Subhood.create({name: "Morningside Heights", city_id: 1})
Subhood.create({name: "Central Harlem", city_id: 1})
Subhood.create({name: "Harlem", city_id: 1})
Subhood.create({name: "Strivers Row", city_id: 1})
Subhood.create({name: "Astor Row", city_id: 1})
Subhood.create({name: "Sugar Hill", city_id: 1})
Subhood.create({name: "Marcus Garvey Park", city_id: 1})
Subhood.create({name: "Le Petit Senegal", city_id: 1})
Subhood.create({name: "East Harlem", city_id: 1})
Subhood.create({name: "Upper East Side", city_id: 1})
Subhood.create({name: "Lenox Hill", city_id: 1})
Subhood.create({name: "Carnegie Hill", city_id: 1})
Subhood.create({name: "Yorkville", city_id: 1})
Subhood.create({name: "Upper West Side", city_id: 1})
Subhood.create({name: "Manhattan Valley", city_id: 1})
Subhood.create({name: "Lincoln Square", city_id: 1})
Subhood.create({name: "Midtown", city_id: 1})
Subhood.create({name: "Midtown", city_id: 1})
Subhood.create({name: "Columbus Circle", city_id: 1})
Subhood.create({name: "Sutton Place", city_id: 1})
Subhood.create({name: "Rockefeller Center", city_id: 1})
Subhood.create({name: "Diamond District", city_id: 1})
Subhood.create({name: "Theater District", city_id: 1})
Subhood.create({name: "Turtle Bay", city_id: 1})
Subhood.create({name: "Midtown East", city_id: 1})
Subhood.create({name: "Midtown", city_id: 1})
Subhood.create({name: "Tudor City", city_id: 1})
Subhood.create({name: "Little Brazil", city_id: 1})
Subhood.create({name: "Times Square", city_id: 1})
Subhood.create({name: "Hudson Yards", city_id: 1})
Subhood.create({name: "Midtown West", city_id: 1})
Subhood.create({name: "Hells Kitchen", city_id: 1})
Subhood.create({name: "Garment District", city_id: 1})
Subhood.create({name: "Herald Square", city_id: 1})
Subhood.create({name: "Koreatown", city_id: 1})
Subhood.create({name: "Murray Hill", city_id: 1})
Subhood.create({name: "Tenderloin", city_id: 1})
Subhood.create({name: "Madison Square", city_id: 1})
Subhood.create({name: "Neighborhoods", city_id: 1})
Subhood.create({name: "Flower District", city_id: 1})
Subhood.create({name: "Brookdale", city_id: 1})
Subhood.create({name: "Hudson Yards", city_id: 1})
Subhood.create({name: "Kips Bay", city_id: 1})
Subhood.create({name: "Rose Hill", city_id: 1})
Subhood.create({name: "NoMad	East", city_id: 1})
Subhood.create({name: "Peter Cooper Village", city_id: 1})
Subhood.create({name: "Chelsea", city_id: 1})
Subhood.create({name: "Flatiron Distric", city_id: 1})
Subhood.create({name: "Gramercy Park", city_id: 1})
Subhood.create({name: "Stuyvesant Square", city_id: 1})
Subhood.create({name: "Union Square", city_id: 1})
Subhood.create({name: "Stuyvesant Town", city_id: 1})
Subhood.create({name: "Meatpacking District", city_id: 1})
Subhood.create({name: "Waterside Plaza", city_id: 1})
Subhood.create({name: "Downtown Manhattan", city_id: 1})
Subhood.create({name: "Little Germany", city_id: 1})
Subhood.create({name: "Alphabet City", city_id: 1})
Subhood.create({name: "East Village", city_id: 1})
Subhood.create({name: "Greenwich Village", city_id: 1})
Subhood.create({name: "NoHo", city_id: 1})
Subhood.create({name: "Bowery", city_id: 1})
Subhood.create({name: "West Village", city_id: 1})
Subhood.create({name: "Lower East Side", city_id: 1})
Subhood.create({name: "SoHo", city_id: 1})
Subhood.create({name: "Nolita", city_id: 1})
Subhood.create({name: "Little Italy", city_id: 1})
Subhood.create({name: "Chinatown", city_id: 1})
Subhood.create({name: "Financial District", city_id: 1})
Subhood.create({name: "Five Points", city_id: 1})
Subhood.create({name: "Cooperative Village", city_id: 1})
Subhood.create({name: "Two Bridges", city_id: 1})
Subhood.create({name: "Tribeca", city_id: 1})
Subhood.create({name: "Civic Center", city_id: 1})
Subhood.create({name: "Radio Row", city_id: 1})
Subhood.create({name: "South Street Seaport", city_id: 1})
Subhood.create({name: "Battery Park City", city_id: 1})
Subhood.create({name: "Little Syria", city_id: 1})

Subhood.create({name: "Brooklyn", city_id: 2})
Subhood.create({name: "Brooklyn Heights", city_id: 2})
Subhood.create({name: "Brooklyn Navy Yard", city_id: 2})
Subhood.create({name: "Admirals Row", city_id: 2})
Subhood.create({name: "Cadman Plaza", city_id: 2})
Subhood.create({name: "Clinton Hill", city_id: 2})
Subhood.create({name: "Downtown Brooklyn", city_id: 2})
Subhood.create({name: "Bridge Plaza", city_id: 2})
Subhood.create({name: "DUMBO", city_id: 2})
Subhood.create({name: "Fort Greene", city_id: 2})
Subhood.create({name: "Fulton Ferry", city_id: 2})
Subhood.create({name: "Pacific Park", city_id: 2})
Subhood.create({name: "Prospect Heights", city_id: 2})
Subhood.create({name: "Vinegar Hill", city_id: 2})
Subhood.create({name: "South Brooklyn", city_id: 2})
Subhood.create({name: "Boerum Hill", city_id: 2})
Subhood.create({name: "Carroll Gardens", city_id: 2})
Subhood.create({name: "Columbia Street Waterfront District", city_id: 2})
Subhood.create({name: "Cobble Hill", city_id: 2})
Subhood.create({name: "Gowanus", city_id: 2})
Subhood.create({name: "Park Slope", city_id: 2})
Subhood.create({name: "South Park Slope", city_id: 2})
Subhood.create({name: "Greenwood Heights", city_id: 2})
Subhood.create({name: "Red Hook", city_id: 2})
Subhood.create({name: "Northeastern Brooklyn", city_id: 2})
Subhood.create({name: "Bedford–Stuyvesant", city_id: 2})
Subhood.create({name: "Bed-Stuy", city_id: 2})
Subhood.create({name: "Bedford", city_id: 2})
Subhood.create({name: "Ocean Hill", city_id: 2})
Subhood.create({name: "Stuyvesant Heights", city_id: 2})
Subhood.create({name: "Wyckoff Heights", city_id: 2})
Subhood.create({name: "Little Poland", city_id: 2})
Subhood.create({name: "Central Brooklyn", city_id: 2})
Subhood.create({name: "Crown Heights", city_id: 2})
Subhood.create({name: "Weeksville", city_id: 2})
Subhood.create({name: "Ditmas Park", city_id: 2})
Subhood.create({name: "Flatbush", city_id: 2})
Subhood.create({name: "Beverley Squares", city_id: 2})
Subhood.create({name: "East Flatbush", city_id: 2})
Subhood.create({name: "Farragut", city_id: 2})
Subhood.create({name: "Fiske Terrace", city_id: 2})
Subhood.create({name: "Pigtown", city_id: 2})
Subhood.create({name: "Prospect Park", city_id: 2})
Subhood.create({name: "Kensington", city_id: 2})
Subhood.create({name: "Ocean Parkway", city_id: 2})
Subhood.create({name: "Prospect Lefferts Gardens", city_id: 2})
Subhood.create({name: "Prospect Park South", city_id: 2})
Subhood.create({name: "West Midwood", city_id: 2})
Subhood.create({name: "Windsor Terrace", city_id: 2})
Subhood.create({name: "Wingate", city_id: 2})
Subhood.create({name: "Midwood", city_id: 2})
Subhood.create({name: "Western Brooklyn", city_id: 2})
Subhood.create({name: "Bath Beach", city_id: 2})
Subhood.create({name: "Bay Ridge", city_id: 2})
Subhood.create({name: "Bensonhurst", city_id: 2})
Subhood.create({name: "Borough Park", city_id: 2})
Subhood.create({name: "Dyker Heights", city_id: 2})
Subhood.create({name: "Mapleton", city_id: 2})
Subhood.create({name: "New Utrecht", city_id: 2})
Subhood.create({name: "Sunset Park", city_id: 2})
Subhood.create({name: "Chinatown", city_id: 2})
Subhood.create({name: "Sunset Industrial Park", city_id: 2})
Subhood.create({name: "Southern Brooklyn", city_id: 2})
Subhood.create({name: "Barren Island", city_id: 2})
Subhood.create({name: "Bergen Beach ", city_id: 2})
Subhood.create({name: "Georgetown", city_id: 2})
Subhood.create({name: "Coney Island", city_id: 2})
Subhood.create({name: "Brighton Beach", city_id: 2})
Subhood.create({name: "Manhattan Beach", city_id: 2})
Subhood.create({name: "Sheepshead Bay  ", city_id: 2})
Subhood.create({name: "Madison", city_id: 2})
Subhood.create({name: "Sea Gate", city_id: 2})
Subhood.create({name: "Flatlands", city_id: 2})
Subhood.create({name: "Gerritsen Beach", city_id: 2})
Subhood.create({name: "Gravesend", city_id: 2})
Subhood.create({name: "White Sands", city_id: 2})
Subhood.create({name: "Homecrest", city_id: 2})
Subhood.create({name: "Marine Park", city_id: 2})
Subhood.create({name: "Mill Basin", city_id: 2})
Subhood.create({name: "Plumb Beach", city_id: 2})
Subhood.create({name: "Eastern Brooklyn", city_id: 2})
Subhood.create({name: "Brownsville", city_id: 2})
Subhood.create({name: "Canarsie", city_id: 2})
Subhood.create({name: "East New York", city_id: 2})
Subhood.create({name: "City Line", city_id: 2})
Subhood.create({name: "Cypress Hills", city_id: 2})
Subhood.create({name: "New Lots", city_id: 2})
Subhood.create({name: "Spring Creek", city_id: 2})
Subhood.create({name: "Starrett City", city_id: 2})
Subhood.create({name: "Highland Park", city_id: 2})
Subhood.create({name: "Northern Brooklyn", city_id: 2})
Subhood.create({name: "Bushwick", city_id: 2})
Subhood.create({name: "East Williamsburg", city_id: 2})
Subhood.create({name: "Greenpoint", city_id: 2})
Subhood.create({name: "Williamsburg", city_id: 2})

Subhood.create({name: "Queens", city_id: 3})
Subhood.create({name: "Astoria", city_id: 3})
Subhood.create({name: "Astoria Heights", city_id: 3})
Subhood.create({name: "Ditmars", city_id: 3})
Subhood.create({name: "Hunters Point", city_id: 3})
Subhood.create({name: "Little Egypt", city_id: 3})
Subhood.create({name: "Long Island City", city_id: 3})
Subhood.create({name: "Blissville", city_id: 3})
Subhood.create({name: "Dutch Kills", city_id: 3})
Subhood.create({name: "Queensbridge", city_id: 3})
Subhood.create({name: "Queensview", city_id: 3})
Subhood.create({name: "Ravenswood", city_id: 3})
Subhood.create({name: "Sunnyside", city_id: 3})
Subhood.create({name: "Sunnyside Gardens", city_id: 3})
Subhood.create({name: "Northeastern Queens", city_id: 3})
Subhood.create({name: "Bayside", city_id: 3})
Subhood.create({name: "Bay Terrace", city_id: 3})
Subhood.create({name: "Oakland Gardens", city_id: 3})
Subhood.create({name: "Bellerose", city_id: 3})
Subhood.create({name: "College Point", city_id: 3})
Subhood.create({name: "Douglaston", city_id: 3})
Subhood.create({name: "Flushing", city_id: 3})
Subhood.create({name: "Auburndale", city_id: 3})
Subhood.create({name: "Broadway-Flushing", city_id: 3})
Subhood.create({name: "Chinatown", city_id: 3})
Subhood.create({name: "Downtown Flushing", city_id: 3})
Subhood.create({name: "Koreatown", city_id: 3})
Subhood.create({name: "Linden Hill", city_id: 3})
Subhood.create({name: "Murray Hill", city_id: 3})
Subhood.create({name: "Willets Point", city_id: 3})
Subhood.create({name: "Pomonok", city_id: 3})
Subhood.create({name: "Electchester", city_id: 3})
Subhood.create({name: "Queensboro Hill", city_id: 3})
Subhood.create({name: "Floral Park", city_id: 3})
Subhood.create({name: "Fresh Meadows", city_id: 3})
Subhood.create({name: "Hillcrest", city_id: 3})
Subhood.create({name: "Utopia", city_id: 3})
Subhood.create({name: "Fort Totten", city_id: 3})
Subhood.create({name: "Glen Oaks", city_id: 3})
Subhood.create({name: "North Shore Towers", city_id: 3})
Subhood.create({name: "Kew Gardens Hills", city_id: 3})
Subhood.create({name: "Little Neck", city_id: 3})
Subhood.create({name: "Whitestone", city_id: 3})
Subhood.create({name: "Beechhurst", city_id: 3})
Subhood.create({name: "Malba", city_id: 3})
Subhood.create({name: "Central Queens", city_id: 3})
Subhood.create({name: "Corona", city_id: 3})
Subhood.create({name: "LeFrak City", city_id: 3})
Subhood.create({name: "North Corona", city_id: 3})
Subhood.create({name: "East Elmhurst", city_id: 3})
Subhood.create({name: "Elmhurst", city_id: 3})
Subhood.create({name: "Forest Hills", city_id: 3})
Subhood.create({name: "Forest Hills Gardens", city_id: 3})
Subhood.create({name: "Fresh Pond", city_id: 3})
Subhood.create({name: "Glendale", city_id: 3})
Subhood.create({name: "Jackson Heights", city_id: 3})
Subhood.create({name: "Kew Gardens", city_id: 3})
Subhood.create({name: "Briarwood", city_id: 3})
Subhood.create({name: "Maspeth", city_id: 3})
Subhood.create({name: "Middle Village", city_id: 3})
Subhood.create({name: "Rego Park", city_id: 3})
Subhood.create({name: "Ridgewood", city_id: 3})
Subhood.create({name: "Wyckoff Heights", city_id: 3})
Subhood.create({name: "Woodside", city_id: 3})
Subhood.create({name: "Southeastern Queens", city_id: 3})
Subhood.create({name: "Bellaire", city_id: 3})
Subhood.create({name: "Brookville", city_id: 3})
Subhood.create({name: "Cambria Heights", city_id: 3})
Subhood.create({name: "Hollis Hills", city_id: 3})
Subhood.create({name: "Hollis", city_id: 3})
Subhood.create({name: "Holliswood", city_id: 3})
Subhood.create({name: "Jamaica", city_id: 3})
Subhood.create({name: "Jamaica Center", city_id: 3})
Subhood.create({name: "Jamaica Estates", city_id: 3})
Subhood.create({name: "Jamaica Hills", city_id: 3})
Subhood.create({name: "Laurelton", city_id: 3})
Subhood.create({name: "Meadowmere", city_id: 3})
Subhood.create({name: "Queens Village", city_id: 3})
Subhood.create({name: "Rochdale Village", city_id: 3})
Subhood.create({name: "Rosedale", city_id: 3})
Subhood.create({name: "Saint Albans", city_id: 3})
Subhood.create({name: "South Jamaica", city_id: 3})
Subhood.create({name: "Springfield Gardens", city_id: 3})
Subhood.create({name: "Warnerville", city_id: 3})
Subhood.create({name: "Southwestern Queens", city_id: 3})
Subhood.create({name: "The Hole", city_id: 3})
Subhood.create({name: "Howard Beach", city_id: 3})
Subhood.create({name: "Hamilton Beach", city_id: 3})
Subhood.create({name: "Howard Park", city_id: 3})
Subhood.create({name: "Lindenwood", city_id: 3})
Subhood.create({name: "Old Howard Beach", city_id: 3})
Subhood.create({name: "Ramblersville", city_id: 3})
Subhood.create({name: "Rockwood Park", city_id: 3})
Subhood.create({name: "Ozone Park", city_id: 3})
Subhood.create({name: "South Ozone Park", city_id: 3})
Subhood.create({name: "Tudor Village", city_id: 3})
Subhood.create({name: "Richmond Hill", city_id: 3})
Subhood.create({name: "Woodhaven", city_id: 3})
Subhood.create({name: "The Rockaways", city_id: 3})
Subhood.create({name: "Arverne", city_id: 3})
Subhood.create({name: "Bayswater", city_id: 3})
Subhood.create({name: "Belle Harbor", city_id: 3})
Subhood.create({name: "Breezy Point", city_id: 3})
Subhood.create({name: "Broad Channel", city_id: 3})
Subhood.create({name: "Edgemere", city_id: 3})
Subhood.create({name: "Far Rockaway", city_id: 3})
Subhood.create({name: "Hammels", city_id: 3})
Subhood.create({name: "Neponsit", city_id: 3})
Subhood.create({name: "Rockaway Beach", city_id: 3})
Subhood.create({name: "Rockaway Park", city_id: 3})
Subhood.create({name: "Roxbury", city_id: 3})
Subhood.create({name: "Seaside", city_id: 3})


Subhood.create({name: "Staten Island", city_id: 5})

Subhood.create({name: "Annadale", city_id: 5})
Subhood.create({name: "Arden Heights", city_id: 5})
Subhood.create({name: "Arlington", city_id: 5})
Subhood.create({name: "Arrochar", city_id: 5})
Subhood.create({name: "Bay Terrace", city_id: 5})
Subhood.create({name: "Bloomfield", city_id: 5})
Subhood.create({name: "Brighton Heights", city_id: 5})
Subhood.create({name: "Bulls Head", city_id: 5})
Subhood.create({name: "Castleton", city_id: 5})
Subhood.create({name: "Castleton Corners", city_id: 5})
Subhood.create({name: "Charleston", city_id: 5})
Subhood.create({name: "Chelsea", city_id: 5})
Subhood.create({name: "Clifton", city_id: 5})
Subhood.create({name: "Concord", city_id: 5})
Subhood.create({name: "Dongan Hills", city_id: 5})
Subhood.create({name: "Egbertville", city_id: 5})
Subhood.create({name: "Elm Park", city_id: 5})
Subhood.create({name: "Eltingville", city_id: 5})
Subhood.create({name: "Emerson Hill", city_id: 5})
Subhood.create({name: "Fort Wadsworth", city_id: 5})
Subhood.create({name: "Graniteville", city_id: 5})
Subhood.create({name: "Grant City", city_id: 5})
Subhood.create({name: "Grasmere", city_id: 5})
Subhood.create({name: "Great Kills", city_id: 5})
Subhood.create({name: "Greenridge", city_id: 5})
Subhood.create({name: "Grymes Hill", city_id: 5})
Subhood.create({name: "Hamilton Park", city_id: 5})
Subhood.create({name: "Heartland Village", city_id: 5})
Subhood.create({name: "Huguenot", city_id: 5})
Subhood.create({name: "Lighthouse Hill", city_id: 5})
Subhood.create({name: "Livingston", city_id: 5})
Subhood.create({name: "Manor Heights", city_id: 5})
Subhood.create({name: "Mariners Harbor", city_id: 5})
Subhood.create({name: "Meiers Corners", city_id: 5})
Subhood.create({name: "Midland Beach", city_id: 5})
Subhood.create({name: "New Brighton", city_id: 5})
Subhood.create({name: "New Dorp", city_id: 5})
Subhood.create({name: "New Springville", city_id: 5})
Subhood.create({name: "Oakwood", city_id: 5})
Subhood.create({name: "Ocean Breeze", city_id: 5})
Subhood.create({name: "Old Place", city_id: 5})
Subhood.create({name: "Old Town", city_id: 5})
Subhood.create({name: "Pleasant Plains", city_id: 5})
Subhood.create({name: "Port Richmond", city_id: 5})
Subhood.create({name: "Princes Bay", city_id: 5})
Subhood.create({name: "Randall Manor", city_id: 5})
Subhood.create({name: "Richmond Valley", city_id: 5})
Subhood.create({name: "Richmondtown", city_id: 5})
Subhood.create({name: "Rosebank", city_id: 5})
Subhood.create({name: "Rossville", city_id: 5})
Subhood.create({name: "Sandy Ground", city_id: 5})
Subhood.create({name: "Shore Acres", city_id: 5})
Subhood.create({name: "Silver Lake", city_id: 5})
Subhood.create({name: "South Beach", city_id: 5})
Subhood.create({name: "St. George", city_id: 5})
Subhood.create({name: "Stapleton", city_id: 5})
Subhood.create({name: "Stapleton Heights", city_id: 5})
Subhood.create({name: "Sunnyside", city_id: 5})
Subhood.create({name: "Todt Hill", city_id: 5})
Subhood.create({name: "Tompkinsville", city_id: 5})
Subhood.create({name: "Tottenville", city_id: 5})
Subhood.create({name: "Tottenville Beach", city_id: 5})
Subhood.create({name: "Travis", city_id: 5})
Subhood.create({name: "Ward Hill", city_id: 5})
Subhood.create({name: "Westerleigh", city_id: 5})
Subhood.create({name: "West New Brighton", city_id: 5})
Subhood.create({name: "Willowbrook", city_id: 5})
Subhood.create({name: "Woodrow", city_id: 5})

Subhood.create({name: "Bedford Park", city_id: 4})
Subhood.create({name: "Belmont", city_id: 4})
Subhood.create({name: "Fordham", city_id: 4})
Subhood.create({name: "Kingsbridge", city_id: 4})
Subhood.create({name: "Kingsbridge Heights", city_id: 4})
Subhood.create({name: "Van Cortlandt Village", city_id: 4})
Subhood.create({name: "Marble Hill", city_id: 4})
Subhood.create({name: "Norwood", city_id: 4})
Subhood.create({name: "Riverdale", city_id: 4})
Subhood.create({name: "Central Riverdale", city_id: 4})
Subhood.create({name: "Fieldston", city_id: 4})
Subhood.create({name: "Hudson Hill", city_id: 4})
Subhood.create({name: "North Riverdale", city_id: 4})
Subhood.create({name: "Spuyten Duyvil", city_id: 4})
Subhood.create({name: "University Heights", city_id: 4})
Subhood.create({name: "Woodlawn", city_id: 4})
Subhood.create({name: "Southwest Bronx", city_id: 4})
Subhood.create({name: "Downtown Bronx", city_id: 4})
Subhood.create({name: "East Tremont", city_id: 4})
Subhood.create({name: "Highbridge", city_id: 4})
Subhood.create({name: "Hunts Point", city_id: 4})
Subhood.create({name: "Longwood", city_id: 4})
Subhood.create({name: "Foxhurst", city_id: 4})
Subhood.create({name: "Woodstock", city_id: 4})
Subhood.create({name: "Melrose", city_id: 4})
Subhood.create({name: "Morris Heights", city_id: 4})
Subhood.create({name: "Morrisania", city_id: 4})
Subhood.create({name: "Crotona Park East", city_id: 4})
Subhood.create({name: "Mott Haven", city_id: 4})
Subhood.create({name: "Port Morris", city_id: 4})
Subhood.create({name: "The Hub", city_id: 4})
Subhood.create({name: "Tremont", city_id: 4})
Subhood.create({name: "Mount Eden", city_id: 4})
Subhood.create({name: "Mount Hope", city_id: 4})
Subhood.create({name: "West Farms", city_id: 4})
Subhood.create({name: "East Bronx", city_id: 4})
Subhood.create({name: "Allerton", city_id: 4})
Subhood.create({name: "Bronxwood", city_id: 4})
Subhood.create({name: "Laconia", city_id: 4})
Subhood.create({name: "Baychester", city_id: 4})
Subhood.create({name: "Bronxdale", city_id: 4})
Subhood.create({name: "City Island", city_id: 4})
Subhood.create({name: "Co-op City", city_id: 4})
Subhood.create({name: "Eastchester", city_id: 4})
Subhood.create({name: "Edenwald", city_id: 4})
Subhood.create({name: "Indian Village", city_id: 4})
Subhood.create({name: "Olinville", city_id: 4})
Subhood.create({name: "Morris Park", city_id: 4})
Subhood.create({name: "Pelham Gardens", city_id: 4})
Subhood.create({name: "Pelham Parkway", city_id: 4})
Subhood.create({name: "Van Nest", city_id: 4})
Subhood.create({name: "Wakefield", city_id: 4})
Subhood.create({name: "Williamsbridge", city_id: 4})
Subhood.create({name: "Bronx River", city_id: 4})
Subhood.create({name: "Bruckner", city_id: 4})
Subhood.create({name: "Castle Hill", city_id: 4})
Subhood.create({name: "Clason Point", city_id: 4})
Subhood.create({name: "Country Club", city_id: 4})
Subhood.create({name: "Edgewater Park", city_id: 4})
Subhood.create({name: "Harding Park", city_id: 4})
Subhood.create({name: "Parkchester", city_id: 4})
Subhood.create({name: "Park Versailles", city_id: 4})
Subhood.create({name: "Westchester Heights", city_id: 4})
Subhood.create({name: "Pelham Bay", city_id: 4})
Subhood.create({name: "Pelham Bay Park", city_id: 4})
Subhood.create({name: "Orchard Beach", city_id: 4})
Subhood.create({name: "Soundview", city_id: 4})
Subhood.create({name: "Schuylerville", city_id: 4})
Subhood.create({name: "Throggs Neck", city_id: 4})
Subhood.create({name: "Unionport", city_id: 4})
Subhood.create({name: "Westchester Square", city_id: 4})
