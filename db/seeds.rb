User.create({username: 'GuestUser', password: 'password', hometown: 'Manhattan'})
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


Neighborhood.create({name: 'Manhattan'})
Neighborhood.create({name: 'Brooklyn'})
Neighborhood.create({name: 'Queens'})
Neighborhood.create({name: 'Bronx'})
Neighborhood.create({name: 'Staten Island'})

# Manhattan
Property.create({
  address: "188 E 64th St",
  geolocation: "40.764593,-73.964821",
  city: "Manhattan",
  zipcode: 10065,
  available: true,
  neighborhood_id: 1,
  price: 4000,
  num_bedrooms: 2,
  lat: 40.764593,
  lng: -73.964821
  })
Property.create({
  address: "285 franklin ave",
  city: "Brooklyn",
  available: true,
  neighborhood_id: 2,
  price: 2000,
  num_bedrooms: 2,
  lat: 40.723469,
  lng: -73.96000
  })
Property.create({
  address: "583 Park Ave",
  geolocation: "40.76545,-73.967453",
  city: "Manhattan",
  zipcode: 10065,
  available: true,
  neighborhood_id: 1,
  price: 4000,
  num_bedrooms: 2,
  lat: 40.76545,
  lng: -73.967453
  })
Property.create({
  address: "115 E 57th St",
  geolocation: "40.761653,-73.97007",
  city: "Manhattan",
  zipcode: 10022,
  available: true,
  neighborhood_id: 1,
  price: 4000,
  num_bedrooms: 2,
  lat: 40.761653,
  lng: -73.97007
  })
Property.create({
  address: "453 E 60th St",
  geolocation: "40.759568,-73.959888",
  city: "Manhattan",
  zipcode: 10022,
  available: true,
  neighborhood_id: 1,
  price: 4000,
  num_bedrooms: 2,
  lat: 40.759568,
  lng: -73.959888
  })
Property.create({
  address: "321 E 52nd St",
  geolocation: "40.755885,-73.966449",
  city: "Manhattan",
  zipcode: 10022,
  available: true,
  neighborhood_id: 1,
  price: 4000,
  num_bedrooms: 2,
  lat: 40.755885,
  lng: -73.966449
  })
Property.create({
  address: "711 3rd Ave",
  geolocation: "40.752161,-73.972835",
  city: "Manhattan",
  zipcode: 10017,
  available: true,
  neighborhood_id: 1,
  price: 4000,
  num_bedrooms: 2,
  lat: 40.752161,
  lng: -73.972835
  })
Property.create({
  address: "241 E 75th St",
  geolocation: "40.752161,-73.972835",
  city: "Manhattan",
  zipcode: 10021,
  available: true,
  neighborhood_id: 1,
  price: 5500,
  num_bedrooms: 3,
  lat: 40.771117,
  lng: -73.957472
  })

Review.create({
  title: "Best apartment ever!",
  body: "The landlord used to come over and bring me pizza and give me foot rubs.  What a nice guy! I highly recomend this apartment",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 1,
  property_id: (1 + rand(8))
})
Review.create({
  title: "Not bad",
  body: "Three stars based only on the hallway, which is really really clean. The quality is amazing and the central air works.
  I am only taking two stars off, because the landlord wasn't too friendly or helpful. Had to ask for garbage bags 3 times,
  after I finally got an eye thing and an okay. They include the the utilities automatically in your rent,
  which is good for them I'm sure because a lot of people probably don't pay here without it being added on,
  just wish I was giving my money to a better landlord.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 2,
  property_id: (1 + rand(8))
})
Review.create({
  title: "Love it",
  body: "This place has a variety of authentic wallpapers. Its a small apartment just like any other authentic wallpaper joint.
  The wallpaper comes out pretty good and every time I have gone the staff have been pretty nice. They started including the utilities
  in the rent also. I almost didnt see it when I went this year. My favorite amenities are the sunlight and heated floors,
  dishwasher and hardwood, and the sunlight. The included track lighting is also really good",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 3,
  property_id: (1 + rand(8))
})


Review.create({
  title: "Come see my band!",
  body: "First visit here. I was excited with all the reviews but I gotta say the place looks like a hole in the wall and in need of
  a makeover! There are plenty of vacancies but I rented it. I got bathtub the nook, the sunlight and included shelf dishware are nice.
   The rent was fair and came to $2500. The landscaping was nice.
To my surprise the wallpaper here is really lovey! A bit on the worn side but still nice neighbors and the right amount of cleaning,
I'am a happy camper! Next time I will rent furnished!",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 5,
  property_id: (1 + rand(8))
})


Review.create({
  title: "Wow!",
  body: "Amazing wallpaper. best authentic spot in all of NYC. You wont be disappointed.
Favorite feature of mine would have to be dazzling sunlight",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 6,
  property_id: (1 + rand(8))  })
Review.create({
  title: "Good deal",
  body: "No reason to give them anything less than 5 stars!

They have authentic real authentic wallpaper, and I must say, they are doing a pretty good job!
I've come to this place countless times and every experience has been better than the first. They give you large square footage
for a decent price and everything looks amazing!

When you walk in here don't expect it to look any better than a regular authentic wallpaper spot. Even though they
let you sleep in and cater to you, the ambience is very average. However, I must say all the neighbors are very friendly!

Definitely recommend it to everyone!",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 7,
  property_id: (1 + rand(8))  })
Review.create({
  title: "Bedbugs",
  body: "Great prices and large square footage.  Definitely the best authentic wallpaper option in Astoria.  I've slept here and rented
  sort term before, prefer sort term.

The nook is absolutely beautiful! I love the sunlight in the nook.  Other good options are shelf, dishwasher, bathtub. They also have one of
the better hot & sour stairwells I've had. There are some pieces of sunlight in the living room and it's a slight kick of heat.

Like everyone said, it's cash only.  There's an ATM inside, but you are better off stopping by your bank for cash before you head here.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 8,
  property_id: (1 + rand(8))  })

Review.create({
  title: "Get me out of here",
  body: "It's not surprising that this location has great reviews. It is little sad to be working in Long Island City when you get not
  many choices to rent wallpaper for free month(compare to working in Manhattan) yet it could have been despair if Fatima isn't existed.
  Not sure about they are using nice, good ingredients on their wallpaper, but I am sure that their wallpapers are lovey.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 10,
  property_id: (1 + rand(8))  })

Review.create({
  title: "I love it",
  body: "Back at it again!

Legit. Went for the square footage closet and sunlight! Score.

What a fabulous idea to have a closet space in the center outdoor area of a room. Yes, please.

Super quick landscaping and tons of picnic tables or you can take it inside the room.",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 1,
  property_id: (1 + rand(8))  })

Review.create({
  title: "It's fine",
  body: "To quote Gob Bluth, I've made a huge mistake. And that mistake was sleeping at this space during the daytime
  and when I wasn't blackout drunk (yet).",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 3,
  property_id: (1 + rand(8))  })

Review.create({
  title: "My cat Loves it",
  body: "The wait for this apartment was 20 monts, but it was definitely worth the wait.
  This place was packed out, so you know it's a great spot.

We came here as our first stop in our apartment hopping trip and I wish we hadn't of left to go to another apartment!

The living room floors were the best I ever had and they were priced very well.

I plan on making this a necessary stop the next time I come to NYC.

",
  property_rating: (1+rand(5)),
  landlord_rating: (1+rand(5)),
  author_id: 4,
  property_id: (1 + rand(8))  })
