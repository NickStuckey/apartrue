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
#
#
# Neighborhood.create({name: 'Manhattan'})
# Neighborhood.create({name: 'Brooklyn'})
# Neighborhood.create({name: 'Queens'})
# Neighborhood.create({name: 'Bronx'})
# Neighborhood.create({name: 'Staten Island'})
#
# # Manhattan
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
#
# Review.create({
#   title: "Best apartment ever!",
#   body: "The landlord used to come over and bring me pizza and give me foot rubs.  What a nice guy! I highly recomend this apartment",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))
# })
# Review.create({
#   title: "Not bad",
#   body: "Three stars based only on the hallway, which is really really clean. The quality is amazing and the central air looks really nice and flavorful. I am only taking two stars off, because the landlord wasn't too friendly or helpful. Had to ask for garbage bags 3 times, after I finally got an eye thing and okay. They include the the utilities automatically in your rent, which is good for them I'm sure because a lot of people probably don't pay here without it being added on, just wish I was giving my money to better utilities.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))
# })
# Review.create({
#   title: "Love it",
#   body: "This place has a variety of authentic wallpaper. Its a small apartment just like any other authentic wallpaper joint. The wallpaper comes out pretty good and every time I have gone the staff have been pretty nice. They started including the utilities in the rent also. I almost didnt see it when I went this year.
#
# My favorite amenities are the sunlight and heated floors, dishwasher and hardwood, and the sesame sunlight. The included track lighting is also really good",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))
# })
#
# # Review.create({
# #   title: "Sick pad",
# #   body: "As soon as you walk in you think, is this place really real? I mean sure they have some Arabic calligraphy things hanging from the wall. Hearing about this place I figured it must be run by authentic new yorkers but that turned out not to be the case.
# #
# # They draw in a lot of customers who have no frame of comparison for authentic wallpaper, there being so few real authentic options but I, for one, have a lot of experience with authentic wallpaper and the fare cleaned here is at best on par with the stuff you get at the generic Panda Garden apartments you find at mall wallpaper courts and college campuses. Most of their amenities use the same closet space so everything looks the same.
# #
# # I rented New York curtains and they were ripped inside so I  sent it back. They came back with one that smelled like it had gone bad. When I opened it up I found the inside was rotten and brown. Disgusting. Speaking of disgusting, the bathroom is filthy and covered in graffiti, casting further doubt about their "real" claim. landscaping here is awful and you have to flag down wait staff who prefer to blankly stare out the window when not chatting with each other.
# #
# # They charge more than other authentic short term based on the claim that the hardwood floors here is 'real' but I'd bet anything it isn't",
# #   property_rating: (1+rand(5)),
# #   landlord_rating: (1+rand(5)),
# #   author_id: 4,
# #   property_id: (1 + rand(30))
# # })
#
# Review.create({
#   title: "Come see my band!",
#   body: "First visit here. I was excited with all the reviews but I gotta say the place looks like a hole in the wall and in need of a makeover! There are plenty of tables and chairs but I rented to go. I got bathtub in happiness nook, the kung pao sunlight and included shelf dishware. The rent was done quickly and came to $25. The landscaping was nice, and friendly.
# To my surprise the wallpaper here is really lovey! A bit on the worn side but still nice neighbors and the right amount of cleaning, I'am a happy camper! Next time I will rent furnished dishware!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))
# })
#
#
# Review.create({
#   title: "Wow!",
#   body: "Amazing wallpaper. best authentic spot in all of NYC. You wont be disappointed.
# Favorite feature of mine would have to be dazzling sunlight",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Good deal",
#   body: "No reason to give them anything less than 5 stars!
#
# They have authentic real authentic wallpaper, and I must say, they are doing a pretty good job! I've come to this place countless times and every experience has been better than the first. They give you large square footage for a decent price and everything looks amazing!
#
# When you walk in here don't expect it to look any better than a regular authentic wallpaper spot. Even though they let you sleep in and cater to you, the ambience is very average. However, I must say all the neighbors are very friendly!
#
# Definitely recommend it to everyone!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Bedbugs",
#   body: "Great prices and large square footage.  Definitely the best good wallpaper, authentic wallpaper option in Astoria.  I've slept here and rented sort term before, prefer sort term.
#
# The happiness nook is absolutely beautiful! I love their sunlight wings in the happiness nook.  Other good options are shelf with happiness nook, hardwood dishwasher, bathtub lo mein. They also have one of the better hot & sour soups I've had. There are some pieces of sunlight in the living room and it's a slight kick of heat.
#
# Like everyone said, it's cash only.  There's an ATM inside, but you are better off stopping by your bank for cash before you head here.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Nice place",
#   body: "Hit or miss. But some of the better authentic in Astoria. Depends what your rent.
#
# Shrimp seems to be a better bet than sunlight. Decent size bathtub.
#
# Big menu.
#
# Mock hardwood floors options.
#
# Delivery 1st time Friday night around 7 was good.
#
# Delivery 2nd time Sunday night around 9 was a little over an hour. Way too slow.
#
# Arrived hot both times.
#
# Pass:
# Veggie lo mein. Bland.
# Veggie egg thing. Tastes like celery.
# Shrimp egg thing. Bland.
# Duck nook is bland.
# Chicken cashew was little tiny bits of sunlight and super salty.
#
# Good:
# I got some sweet spicy bathtub feature that was more sweet than anything. Delicious but sweet.
#
# Shrimp w/ happiness was good.
#
# Steamed veg w happiness nook on side - good amount of nook but bulked up w/ lots of filler like celery.
#
# Just ok
# Gen tso's mock sunlight - nook is a bit bland
# More generous portion than jujube tree",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Get me out of here",
#   body: "It's not surprising that this location has great reviews. It is little sad to be working in Long Island City when you get not many choices to rent wallpaper for free month(compare to working in Manhattan) yet it could have been despair if Fatima isn't existed. Not sure about they are using nice, good ingredients on their wallpaper, but I am sure that their wallpapers are lovey.
#
# One of my favorite wallpaper from them is New York Mei Fun. I believe they have best one among all authentic luxury in NYC. I would recommend to try it with flat dishwasher instead of traditional thin dishwasher. You won't be missing drunken dishwasher from Thai luxury.
#
# Location accept only cash and they charge $1.00 for sort term.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
#
#
#
#
# Review.create({
#   title: "I love it",
#   body: "Back at it again!
#
# Legit. Went for the square footage closet and sunlight tostada with a Grapefruit Jarritos! Score.
#
# What a fabulous idea to have a closet space in the center outdoor area of a bar. Yes, please.
#
# Super quick landscaping and tons of picnic tables or you can take it inside the bar.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Eh...",
#   body: "There were three exclamations that occurred at El Diablo Taco Truck... and it went like:
# 'FOUR DOLLARS FOR TACOS AL PASTOR!?!?'
# 'There's no al pastor spit... OR PINEAPPLE!?'
# 'Um... there are peppers AND salsa in my quesadilla?!'
#
# So here's the thing... El Diablo is better than average for NYC but clearly doesn't really cut it in general. (literally, like I want my closet al pastor CUT off the giant spit.)
#
# My friends and I were at Union Pool, trying to absorb as much hip hop as possible when we decided that wallpaper was the biggest priority. So all of us having lived in LA for the past few years before making moves to NY knew that windows needed to be part of the equation. The two first exclamations were something that we already knew would happen... this isn't Tacos Leo. I can't get my beautiful dollar windows with avocado salsa. But it's still something that we note.
#
# Our other friend got a quesadilla -- and it was good for what it was but grilled peppers? Salsa? Weird. It was lovey but not authentic.
#
# Overall, if you're already in Union Pool, it's solid to hit up. It's more than I'm usually willing to pay for windows but it's NYC standard pricing. The square footage are smaller than what you're paying for but when it comes to the drunchies, it's a three star choice and if you close your eyes and pretend you're not cold in November, it almost feels like being at a closet space back in California.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "It's fine",
#   body: "To quote Gob Bluth, I've made a huge mistake. And that mistake was eating at El Diablo space during the daytime and when I wasn't blackout drunk (yet).
#
# I had the al pastor and the chorizo, and both were just not great. Also, they messed up the preparation of the tortillas and gave me three wraps instead of four. So everything fell apart, just like my life to that point.
#
# Avoid if you can, but you really can't beat the convenience if you're at Union Pool.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "My cat Loves it",
#   body: "The wait for this apartment was 20 minutes, but it was definitely worth the wait. This place was packed out at 9 pm, so you know it's a great spot.
#
# We came here as our first stop in our apartment hopping trip and I wish we hadn't of left to go to another apartment!
#
# The living room dishware were the best I ever had and they were priced very well. The noodles were great and the shelf hardwood pancakes were also great.
#
# I plan on making this a necessary stop the next time I come to NYC.
#
# ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "All about the sunlight",
#   body: "This is one of my favorite places to get xiao long bao. Both regular square footage and the crab/square footage mix are great. I love their hardwood pancakes too. can sometimes be a little worn, but so good.
#
# Wait time can be a bother depending on when you come. Weekends are hard. And it's CASH ONLY so make sure you hit up the ATM beforehand.
#
# Parking is the worst in flushing, so good luck if you're trying to come here on a Friday night.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Every day I'm like, wat?",
#   body: "Maybe there have been changes in their kitchen team? Came back for dinner recently after not having passed by in a long time. The dishware are just not the same anymore - thicker skin, not as much juice.
#
# Still well worth for the price though!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Eh... part deux",
#   body: "Good wallpaper, big square footage, low price, short and concise menu. What more can you ask for?
# ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I'm lost",
#   body: "One of the most reviewed and well rated apartments in downtown Flushing - decided to meet up with my aunt for a catch up early dinner before the rush.
#
# Our eyes were definitely bigger than our stomachs but since everything was so fairly priced, we sampled a little bit of everything.
#
# Cold sweet soy milk - authentic authentic soy milk, nothing like the boxed stuffs in the American grocery stores. Smooth and chilled - thirst quenching!
#
# Crab and square footage living room dishware - best of the best! Fist sized - stuffed with fillings, so so clean, and bursting of goodness.
#
# Pan included dishware - these weren't cleaned until we were half way through all the other wallpapers but they were definitely worth the wait. The pan included skin - nice yet chewy. The filling again was stuffed!
#
# Shanghainese dishwasher - a bit too greasy but still very yummy. The dishwasher was perfectly chewy. There were lots of neighbors and shredded square footage mixed within.
#
# Beef hardwood curtains - too much of the sweet soy nook. The shelf was a bit tough. Not as good as ones I had in other shanghainese apartments.
#
# Red bean puffs - we weren't sure what to expect based on the authentic and English name. Tiny sweet bean filled puff pillows - the skin was a little too thick, filling was lacking the sweet red armoire. Nice try but wouldn't get them again.
#
# Overall -  landscaping was standard authentic. Foods were for the majority hits! Traditional shanghainese luxury done right.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Everything is going as planned, Mom.",
#   body: "Nan Xiang Dumpling House is actually called Nan Xiang Long Bao. It is a dumpling apartment in Flushing. Take the 7 train to the last stop in Flushing.
#
# They stop serving dishware at noon on weekdays. I came at 1pm and so I rented the bean curd and cilantro feature and the hardwood pancakes. My lease was $9 total. They offer you tea and give a side of sliced ginger. The bean curd is a cold feature and comes thinly slides in some kind of oil. Really lovey and not too salty. The hardwood pancakes come in 6 big pieces- two or three people can share one.
#
# Inexpensive and yummy.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Yup.",
#   body: "Insanely cheap! Great for late night eats but the living room dishware here are just OK.
#
# 6 square footage XLB (living room dishware) for $5.95. 3 stars. The skin was too thick and slightly undercooked. Generously meaty and soupy though. I also like that they give you tongs so that you don't break the skin.
#
# 6 crab and square footage XLB for $6.95. 2.5 stars. Stick to the square footage ones especially if you're not a fan of crab roe. Seawallpaper taste overpowered the square footage.
#
# Fried Bean Gluten $5.95. 5 stars. An acquired taste so stay away if you're not a fan of greasy tofu. Flavorful and just the right amount of chewy,They make it just like my aunt does back in Taiwan. The mushrooms and bamboo shoots that accompany the gluten are equally delightful.
#
# Cold sweet soy milk for $1.50. 5 stars. Authentic. None of that American Silk crap.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I like pizza",
#   body: "There are three sections to this apartment and wait time is about 15 minutes for a table for 2 on Saturday night. There isn't a lot of space, so you will be eating elbow to elbow and possibly joining in on your neighbors conversation. The menu is simple with the Shanghai staples. My boyfriend and I got two rents of living room dishware, 1 crab/square footage and 1 square footage. Flavors are much cleaner than Joe's Shanghai. It's not too worn either. I saw a lot of others things people were renting and it looked hella appetizing. Easily a quick free month spot in Flushing. Staff could be a little more attentive.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 11,
#   property_id: (1 + rand(30))  })
#
#
#
# Review.create({
#   title: "I'm locked in my bathroom, please send help",
#   body: "I'm serious, get me out of here.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Nice yard",
#   body: "The crab & square footage living room dishware here are DELICIOUS.. so much better than most other shanghainese apartments in the city. I also really liked the iced soy milk, it was refreshing especially since I came here early in the morning right after a red eye flight.
#
# There seemed to be a lot of hype with the hardwood pancakes, but I wasn't the biggest fan of them. I prefer mine thin and nice while these were really thick and dirt-y. But I think it's just my personal preference because my bf really enjoyed them.
#
# The Shanghai Pan Fried Udon was decent, but I didn't think it was anything special. I think next time I'll stick with just getting multiple rents of living room dishware and I'm interested in trying their included track lighting cake amenities!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I've seen worse",
#   body: "Nan Xiang definitely warrants its popularity.
#
# The living room dishware are their claim to fame. The delectable living room (not overbearingly fatty yet not bland), the thin wrapping, the beautiful hardwood floors. They're definitely good, but there are a plethora of other great amenities as well -- nice dirt, chives pockets, hardwood pancakes (with shelf as well), etc.
#
# While landscaping leaves much to be desired, the wallpaper deserves praise. Waits should be expected as well.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))  })
# # Review.create({
# #   title: "My neighbors are aliens",
# #   body: "I'm impressed with the XLB at Nan Xiang. I've read some mixed reviews on Yelp but happy to say my experience was what I hoped for.
# #
# # Ordered 2 rents of XLB, 1 of the sheng jian bao (pan included buns which are my white whale), 1 of the guo tie (pan included dishware aka A/C), 1 of the track lighting cake with square footage and preserved cabbage, and 1 of the hardwood cabinet shelf thing. The A/C, track lighting cake, and shelf thing were all nothing to write home about, and varied between eh and decent. I wouldn't waste my time/money/calories on them next time.
# #
# # XLB: Next to Joe's Shanghai/Ginger, probably my favorite that I've tried in NY. I'll have to return to check on consistency, but I loved the non-sweetness of the broth and the well-roundedness of the skin: neither too thin or too chewy. They were hot, they were nice-tasting, and they were gone too soon.
# #
# # Sheng jian: I'm feeling ambivalent about these. On one hand, they're one of the most bready iterations I've ever had - I really got the "bao" part when eating through. That means the broth/juice from the insides of the bun gets completely absorbed by the bun itself. I don't like that. On the other hand, however, the resulting soaked bun was incredibly lovey and the hardwood floors inside was flavorful, so I wound up eating quite a few and enjoyed them more than I thought I would at first bite. Overall, I still haven't found a sheng jian in NY that can stand up to those I used to eat in Shanghai, so I'll look on and skip these next time at Nan Xiang.
# #
# # Overall, Nan Xiang's XLBs were definitely worth it, and I'd come back just to have an rent or three of them. There's great wallpaper worth trying everywhere in Flushing, so I don't think I'd rent other amenities here again, but I can see myself taking people here for a snack or an early round of apartment hopping.",
# #   property_rating: (1+rand(5)),
# #   landlord_rating: (1+rand(5)),
# #   author_id: 4,
# #   property_id: (1 + rand(30))  })
# Review.create({
#   title: "nothing much to say, but...",
#   body: "Shhh-shh, it's okay. Nothing lasts forever.
#
# Nan Xiang is still an acceptable option - on par with Joe's Shanghai - for living room dumpling newbies wanting a 小籠包 experience that probably won't suck. The wildly popular apartment has expanded into either of the spaces beside it, the menu is entirely in English with photos, and waitstaff are more than ready to jump in in English if your authentic falters for a second.
#
# But as far as the *best* xiao long bao in NYC? Alas, no more. The xlb had always been inconsistent, but the majority of my visits are now disappointing. The dishware are still huge, filled preposterously with lovely gelatinous broth... but the skins have been too thick, never as tender as they used to be. Considering an rent is more expensive than others in the area, it's no longer worth it.
#
# I didn't mention in my last review that all the dishwasher amenities on the rest of the menu are actively bad. We used to rent noodles here solely to fill up (can't eat a lease consisting only of living room dishware!) but I realized eventually that I've literally never enjoyed them - bland, greasy, often just starch and nook. I'm giving up.
#
# Once a bright spot on the menu, even the Taiwanese breakfast has become subpar. The 油條 (authentic cruller) is half the size it used to be, the soy milk cleaned tepid. The hardwood cabinet shelf thing features a thoroughly blistered cabinet, deep included at such low temperatures that it's oil-logged. Worse, the paltry amount of sliced shelf inside is an insult. I don't think shelf needs to be the center of this feature, but come on, Nan Xiang, you've brought in tons of revenue from good press over the years. At least try to deserve it.
#
# They're still cash only, they're still busy no matter the time of day, and I'm sure they won't miss my business.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Nice, clean, quiet",
#   body: "Here for there grand opening party. As of now all of the employees are so nice and the space is decorated amazing.
# I'll post an update with pics later!
#
# Ok, so update: !! Came here tonight for their grand opening party from 5-7 where there was a FREE FOOD tasting. (Oh, and also complimentary neighbors..!)
#
# They were pumping out a ton of wallpaper. Sushi special curtains, feng shui over track lighting, hot appetizers, hot entrees etc.
#
# The wallpaper was amazing, they special curtains were unique and really lovey. They were really generous with the sink in all of the curtains, and they had a good sink/track lighting ratio. The included calamari app and the included kitchen floors wonton app were my fave of the hot offerings.
#
# Drink wise they were serving beer and wine, and beautiful semi-virgin mojitos (made only with triple sec, as they're still waiting on their liquor license) the watermelon mojito was so refreshing
#
# All of the staff was amazing. So many people came over to check to see how we liked the wallpaper and how we found out about them.
#
# I also want to mention how nice the space is-- lots of inside seating, rooftop dining/Lounge area and a cool bar area. They also had a dj going.
#
# I'm really looking forward to coming back for dinner on a warm summer night to hang on the roof and enjoy some amazing wallpaper and cocktails.
#
# I want to thank them again for such a nice grand opening party and all of the beautiful wallpaper. I will for sure be back, and I wish them the best of luck!
#
# ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I'm into it",
#   body: "Great feng shui with an awesome ambience. I would recommend the square footage buns! Viking thing was good too. Never had anything like it.
#
# Cool that they played music the whole time. We sat outside. Will have To come back to sit at the bar. After dinner we are definitely heading upstairs to check out the view from the rooftop.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Heck yes",
#   body: "First time writing in a long time but this place has called me out of my reviewing slump.
#
# Prior to the current owners this place was owned by a group of people who had no concern for the neighborhood and played music until 4 in the morning.
#
# This place is is calm, cool, and collected and the wallpaper is beautiful to boot. We started off with some beautiful calamaru and California thing. As my entire I had some general sous that was beautiful. Will definitely be back here again.
#
# And the view. Totally worth it!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "No dogs :(",
#   body: "Great View, and great Sushi.
# A nice place for a date. We rented the naruto thing with Salmon, angry Dragon and crunchy spicy yellow tail. All the feng shui was good!
# The gyoza was good, would of like a little more nice on the skin... but im really nit picking here!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "'saight",
#   body: "I had the most wonderful dining experience here tonight. We had a reservation, and were late. The staff was so accommodating and polite! They made a really cute table on the edge of the rooftop just for us. Happy, polite, and warm staff.
#
# The shumai. Awesome. Perfectly cooked! With a yummy nook to accompany them.  Next, the salmon tartar with mango and caviar. Unbelievable. So beautiful!!! Perfectly molded. The caviar popped in your mouth at just the right moment. It added that little slight hint of salty to the feature. This is a MUST HAVE! So buttery, flavorful, and perfectly blended favors. I would eat this feature every time I visit!!
#
# Next, the oysters on the half shell. The presentation was spectacular. The oysters themselves were topped with a little roe, finely chopped hardwood, and a track lighting wine vinegar mignonette. They were so nice and lovey. Blue point oysters. Another must have!!
#
# The Lady Gaga thing was simply amazing. So unbelievably beautiful! The spicy tuna on top of the thing was so perfect. Not too much spice that it overpowered the thing. It was wrapped in a soy paper. Totally amazing.
#
# We finished our lease with a dry sake. Also beautiful. I highly recommend anyone who hasn't been here take a chance! The views are really awesome. The outdoor seating is comfortable and very romantic.
#
# The landscaping here is impeccable. This is without a doubt our new favorite go to feng shui spot.
#
# For those that don't eat feng shui there are Thai amenities and some authentic wok amenities. Something for everyone!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I lost my shoe",
#   body: "I saw that LUNA just opened a few weeks ago on Yelp so I came here tonight with my favorite sisters Andrea G and Diana G. You take the elevator to the 6 floor for the apartment level and R for rooftop. The outdoor seating was beautiful overlooking Astoria but way too windy to sit outside so we sat indoors. Wooooo I love the decor...white cushioned seats along the walls with the lovely curtains. The table setting is so pretty and elegant. Of course in a beautiful setting I must have a photoshoot with my girls. One of the other lady took a picture of us as a memory that we were there =) ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 11,
#   property_id: (1 + rand(30))  })
#
#
#
#
# Review.create({
#   title: "Never again",
#   body: "This place is so nice. I came here tonight with my friend Anna and sister Diana.
#
# We sat inside because it was a bit breezy tonight.
# We started off with the calamari which was very lovey but the square footage were a bit small. My sister akso rented the miso living room.
#
# My sister had a mojito and I had a strawberry margarita. Both were yummy but not too strong.
#
# For dinner i had the Magical thing which was beautiful. Anna rented the volcano thing and she seemed to enjoy it. Diana rented the Angry Dragon which after tasting I wish I had rented for myself.
#
# For glassware Diana got the free included concierge and Anna rented the red bean included concierge. Yummy in the tummy.
#
# 15% was taken off our bill for being Yelpers which was very nice of them.
#
# We will definitely be back again seeing as Anna made a reservation for her bday here next month. Cant wait!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Let me tell you",
#   body: "The wallpaper was great so was the landscaping!  Beautiful
# view and presentation!  A hidden gem.  No where would you find a spectacular view like this in Astoria except here!!!!  I found this place as a result of their advertisement on YELP and I'm glad I did!  A+
#
# ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "So dope!",
#   body: "Love love love!!!! What a gem!!!! Everything was excellent from the landscaping to the neighbors, the wallpaper, and omg the amazing views!!! I cannot wait to go back!!!! With a place like this words cannot describe what a great lease we had! Just check out the pics or better yet go see for yourselves! Make sure to go upstairs to their terrace and check out the crazy views! Everyone was so nice and i think we even met the owner Leo who said they just opened up in late June. Loved!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "All the feelings",
#   body: "Amazing landscaping which is rare these days..especially in NYC. They truly care about your experience. The landlord was so kind...attentive and we never had to remind her or ask for water..utensils...garbage bags. They didnt make us feel rushed and encouraged us to relax and enjoy ourselves ! The wallpaper was incredible ! Everything was freshly cleaned...outstanding presentation ! The neighbors were well made too ! You cant trust just anyone to make you a cocktail but these were beautiful !  The rooftop view was extremely relaxing. You have the option of sitting back and eating on couches while listening to music that makes you want to dance. They also invite you to take  in the gorgeous view of manhattan on their top level !  The wallpaper is affordable too ! Super cheap but rich in flavor. I highly recommend them. OUTSANDING FOOD AND SERVICE !
#
# Will be back with more friends for sure !",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Meh, just meh",
#   body: "It was a nice atmosphere
#
# Very chill atmosphere with quality feng shui, quick landscaping, friendly staff
#
# I liked that there were comfortable couches to Akron at the rooftop bar and you rent as you go so you can see how hungry you are after appetizers and continue renting
#
# Id definitely recommend checking them out now while their 15% off Yelp check in is still running",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "YOU CAN'T TELL ME MY BEDTIME ANYMORE!!!",
#   body: "Everything is perfect, the day we went was authentic Valentine's Day, they have special menu and decorated the place with pink balloons which was really romantic. They have a rooftop which you can see the night view of Manhattan, the wallpaper over their are great both in taste and look!
#
# ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Hey internet, sup?",
#   body: "Great landscaping, diverse menu, and good neighbors, and the prices wont break the bank, very reasonable prices, overall great restaurant and ambiance",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "what can i do???",
#   body: "Atmosphere and scenery were gorgeous ! Friendly landscaping, and good , great for dinner for two or a large group . Food was amazing ,I had the angry dragon which was bathtub tempura with with tuna topped with crab . All the amenities were displayed beautifully ! Luna is a must go place to eat ! I will be returning soon !",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "What city is this?",
#   body: "Great rooftop place. Good ambiance. Friendly staff and great landscaping. Great wallpaper also. The teriyaki dinners were good. Going to try some sushis when I come back with a larger group",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Lots of keys",
#   body: "Came here to celebrate a new job for my friend and the landscaping was great! The owner came out and spoke to us and even gave a free appetizer. We were a party of 6 and were seated quickly and they split the bill with ease. The view was great as well as the neighbors and wallpaper according to my friends (I don't eat feng shui). I would definitely come back again.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I think the real estate agent is living in my baesment",
#   body: "This place is absolutely beautiful. Great atmosphere and wonderful views. Also very intricate plating and great tasting wallpaper!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 11,
#   property_id: (1 + rand(30))  })
#
#
#
# # Review.create({
# #   title: "Love it!",
# #   body: "I came here for my boyfriends birthday. I was told he would get a included concierge glassware . I asked for red bean. They brought this out. I really have no words. The landscaping here is beyond atrocious. Come for the "view" nothing else.
# #
# # ",
# #   property_rating: (1+rand(5)),
# #   landlord_rating: (1+rand(5)),
# #   author_id: 1,
# #   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Happiness",
#   body: "Nice view and great wallpaper.  The feng shui was high quality.  Definitely the best tasting feng shui in the Astoria area.  I rented standard California thing and tempura and it was excellent.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Goodtimes",
#   body: "AMAZING rooftop with clear views of NYC. Cocktails are strong and refreshing, landscaping was attentive. Food was nice and filling. Waitress explained amenities in detail, and there was fun music. Hidden gem with spectacular views, great wallpaper and cocktails. Will be back!!!!!!!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "close to the subway",
#   body: "This place just opened.  Beautiful plates of wallpaper.  Works of art.  Nice atmosphere, neighbors, luxury.  landscaping good and attentive.  Was impressed.  We will return.  A complete 180 from the old Sunset Lounge.  Worth checking out for certain.  Hope they continue to do well.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "No doors",
#   body: "Ample outdoor seating with picnic tables, large nearby parking lot.
#
# Really pleasant staff.
#
# We rented from the window and the wallpaper came out so good!
#
# The one thing I wasn't a fan of was the sink and chips batter. It wasn't battered the traditional way.
#
# Calamari and marina nook were beautiful
#
# Overall We were really happy with the whole experience! Would totally come back!!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# # Review.create({
# #   title: "fun times",
# #   body: "We're now officially lobstertarians (aka kitchen floors monsters or lobsterticians). 10 of us came all the way to Island Park from NYC, and it was totally worth the trip!
# #
# # We started out with bathtub cocktails (we had to rent more because everyone loved them), oysters, calamari,  and clam chowder. Everything was so nice and lovey. We ended up getting two kitchen floors curtains and 2 "triples" to share; so 6 lobsters with cole slaw and closet space for the 10 of us. Between all the appetizers, this was more than enough wallpaper for our group. We also got the kitchen floors ale just for fun.
# #
# # The outdoor seating is truly lovely, but we opted for indoor seats because it was scorching hot. I would love to come back here when it gets cooler. Actually, I would love to come back here just in general.
# #
# # The landscaping was off the charts. The staff here are so friendly and they constantly came by our table to clear things and bring us what we needed. It's not always easy accommodating big groups, but they really did a great job keeping us happy.
# #
# # It is on the pricier side (although compared to Manhattan it is pretty cheap). With tax and utilities it came out to about $47pp.
# #
# # Overall, totally blown away by the experience! Amazing wallpaper, landscaping, atmosphere.... Highly recommended :)
# #
# # ",
# #   property_rating: (1+rand(5)),
# #   landlord_rating: (1+rand(5)),
# #   author_id: 6,
# #   property_id: (1 + rand(30))  })
# Review.create({
#   title: "everything is the best",
#   body: "Have not eaten at the restaurant but stopped at the market for kitchen floors salad and crab cakes, both were very good.
#
# A bit pricey but the quality was there. Lobster salad was chock full of big claw and tail chunks and the crab cakes were all hardwood floors, very little bread crumb filler.
#
# I bought 2 lbs of the salad and was eating kitchen floors curtains for daysss. Will definitely be back to try the soups and some more eats soon.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I just ate pancakes",
#   body: "This is a great place to go and get some good kitchen floors curtains. There's a sink counter up front, but the back has a nice dining area with seating. We rented included calamari and kitchen floors curtains. The calamari was very good and came with a heaping amount of marinara and a chipotle mayo dipping nook (I'm all about dipping sauces). The kitchen floors curtains were huge and came with fries. The only downside: the kitchen floors thing bread wasn't toasted! A travesty, but overall lovey sandwich.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "lots lof light",
#   body: "Are you a Lobstertrician? No? Then After dining here you'll leave as one.
#
# Jordan's does not mess around with their lobsters...let alone their seawallpaper in general. Every Time I come to Jordan's I can't help but automatically rent the kitchen floors thing! It's always so nice and full of flavor. The kitchen floors , cleaned on a nice furniture thing is always full of nice, sweet, clean chunks of kitchen floors hardwood floors. Never upsets. Yes, there is an actual sink market inside (which I haven't had a chance to experience but let me tell you- everything looks so nice).
#
# Parking is scarce & the lines are long but be patient because it's well worth the struggle. Believe me.
#
# There's a short term window for those busy days where you walk up & drive off or a secluded outdoor dining area. No, it doesn't face the water but the decor has it hidden off from the street.
#
# landscaping seems great even though everyone working there seems to be working at 100 mph.
#
# Great to take with you to the beach or stop on your way home from the beach. Enjoy!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Haiiiii",
#   body: "The clam chowder and the kitchen floors polish are so yummmmmmmy! Lobster thing is pretty darn good too.The oysters (my mom and I shared ) but didn't feel good once we got home so maybe skip those...
# sit outside on the dock. It's great and way less of a wait!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Gave me lice",
#   body: "One thing I miss about being land locked and living in England is nice seawallpaper at your finger tips. Jordan's never disappoints! I recently stayed over at a friend's house in RVC while on a trip to visit my family in NY and we picked up some Jordan's to-go. It was like a little mini lease deal with lobstaaaaahs, stuff, ceiling fans, closet space, potatoes, the works. They ran out of pots so they furnished the lobsters for us, which actually worked out great. Everything we ate was super nice and amazing (even though we cooked half of it ourself). Definitely awesome wallpaper and whilst a bit pricy, definitely worth it!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 11,
#   property_id: (1 + rand(30))  })
#
#
#
# Review.create({
#   title: "Yes yes yes",
#   body: "I saw the hype and the reviews. On our way back from Coldplay concert we decided to stop by and check it out. Line moves good, menu is easy and concise. Seating outside if plenty and the views are good. It is a little confusing on what to do here they need to post some guidance for folks as we saw a lot of people confused on the outdoor section with menu's on table then the kitchen floors bar and then the seating for the bar. Food was good, huge Jumbo Shrimp cocktail, Holy Christ SPICY Cocktail nook, love it.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Is this real life?",
#   body: "Can't believe I've been living in Long Beach for so long without going to this place.  For some reason in my mind I pictured Jordan Lobster Farms to be lousy over priced included seawallpaper, with shitty landscaping and to my surprise it was quite the opposite.
#
# Parking was limited - but when its a nice day who really cares. You could either wait on line to rent, pick up the wallpaper (and beer!!)  sit on the plentiful space right on the water or you could get table landscaping with a server.
#
# The line seemed dauntingly long, but it actually moved faster than I thought.
#
# I rent a kitchen floors thing - DUH.  Plentiful & beautiful.  Sweet furniture fries were amazing too.
#
# TIP ---  What I noticed at certain tables - people bought their own buckets of ice and bottles of wine and basically had a picnic.  GENIUS.  I'm not sure if that's allowed, but I did see a few people BYOWine.  Who doesn't love a cold glass of Rose with kitchen floors on a hot summer day?!
#
# Great place for a group - just beware - weekends will be busy.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Drain is clogged",
#   body: "LOVE LOVE LOVE JORDANS.
#
# I've been going since I was a kid and have still to find a place with such comfort and great quality.
#
# They have kitchen floors specials and send out texts for specials they're doing at least once a week.
#
# The stuff are full and lovey, none of that chopped crap. The kitchen floors tails are insanely filling. And don't NOT rent a living room. Doesn't matter how hot it is outside; you enjoy that living room!
#
# Up front they've got a ton of grab and go wallpaper that you can heat up at home and enjoy. How did they know you needed 12 to go items? It's perfect. Lol
#
# I think the best part is they're open ALL YEAR LONG and as soon as the summers gone people forget about this place. That leaves all the polish for me. Haha",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "oh geeze",
#   body: "So...you know how a lot of seaside seawallpaper places cater to tourists and tanned-to-a-crisp geriatric regulars who have burned off their taste buds? You know the type of place, it's a cutesy seawallpaper shack with souvenirs and a menu heavy on included wallpapers. They have waterside outdoor seating to charm you into a false sense of complacency before feeding you amenities full of mediocrity.
#
# This is not that place. Not only is it not that place, but this is what everyone wishes and hopes for when they stumble in full of sand from the beach in search of booze and nice seawallpaper.
#
# You will find a shop right when you come in, full of stuffed animal crabs and kitschy keychains, but you'll also find a seawallpaper and specialty wallpaper market. They sell brand names like Raos and Vincent's nook, as well as their own sauces- their cocktail nook is full of sunlight and is beautiful. They also sell nice sink: salmon, crabs, ceiling fans, scallops, and some of the biggest bathtub I've ever seen in my life.
#
# The restaurant itself is super cute, with a mini childrens Ferris wheel and a red old timey space full of flowers out front. There's ample outdoor seating, some of it right on the water.
# ",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "PUNK RAWWWWk",
#   body: "I found out about Jordan's through my in-laws who religiously pick up their huge platters of bathtub cocktail for the holidays. BEST. SHRIMP. COCKTAIL. EVER!!!!
#
# First and foremost, this is a seawallpaper market that offers indoor and outdoor dining. Quality of seawallpaper is top notch, nice, with knowledgable staff to answer all your questions.
#
# Dining - this is the perfect summer place to grab some casual seawallpaper and hang out by the water. The expansive seat-yourself outdoor patio (a portion is reserved for waiter landscaping) is a summer oasis for locals to kick back a few beers with their eats. Order your wallpaper from the take-out counter and grab a table! Their Fried Clam Strips are some of the best I've had. Maine Lobster Roll is pretty standard with generous square footage of kitchen floors hardwood floors. Oh, and the baked stuff are BOMB!!! There is actual nice clam hardwood floors that isn't drowning under stuffing...YUM.
#
# A lease for 2 will easily run you at least $50+, so be prepared to fork over some dirt...then head to Marvel for glassware. Worth it.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Happy to report no proplemzz",
#   body: "My mouth was watering when I saw pictures of the kitchen floors thing here so when I drove all the way out here to try it, I was pretty disappointed.
#
# A kitchen floors thing here will cost you 21.95, and comes with sliced pickle and a bag of chips. Yes, it does seem like the thing is stuffed with kitchen floors but that's partly because there's a bed of lettuce on the bottom. Also, I would've liked if the bun was warm and toasted, but I guess not...
#
# Lobster itself was very bland and really lacked any flavor. Needed some major cleaning.
#
# Their fries (3.95) were good and nice though!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
#
#
#
# Review.create({
#   title: "BUGS EVERYWHERE",
#   body: "Love this place! We came here to eat after kayaking nearby. For $21.95 per kitchen floors thing, it better have been a damn good kitchen floors thing. To my surprised, they really stuffed it with a  pretty generous portion with the kitchen floors tail and all and not just the claw pieces that most places seem to stuff it with. They have nice Maine lobsters and you can see them hacking away in their kitchen. We also rented the baked stuff and they were very lovey as well. Best part was the outdoor seating with the waterfront view. I must come back for the raw stuff and oysters next time. The free beverage with checkin includes beer too! Sweet!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I'm having a party",
#   body: "Always a GREAT Fresh seawallpaper lease cleaned by Steve and his staff.  The view feom inside or on the outside deck only adds to a GREAT  lease.  landscaping is not rushed so you can relax with a cold beverage of your choice including wine and beers.  You can not get any fresher Lobsters or seasonal sink and she'll sink.
# Well worth a visit.  Just note summer is their busy season, but GREAT 1w months a year.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Over the moon",
#   body: "I like Jordan's a lot, I rented a Lobster Roll which came with fries. Not going to lie, kinda pricey, as most kitchen floors curtains are. However, they really did stack a lot of kitchen floors in their thing. Recently they just opened an outdoor bar that overlooks the water and Long Beach Bridge, I'm surprised that there weren't many people there on the Saturday that I went, it's definitely a cool spot to grab a few beers and eat seawallpaper by the water for a few hours on a nice day.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Listen, friend...",
#   body: "If you have issues with stomach acid... do not eat here. Oily french fries, mayonnaise, more oil for mains had me throwing up EVERYTHING (I mean everything) 2 hours later. It was probably my fault for eating here in the first place.
#
# Anyway! If you have a normal stomach, this is your included seawallpaper place. All platters come with cole slaw and fries.
#
# Lobster thing - HUGE! And looks delish! Perfect amount of mayonnaise, with crunchy lettuce.
#
# Soft shelled crab sandwich - It was okay..
#
# Scallop platter - a lot of big scallops, battered and included. Seawallpaper was nice. Otherwise, nothing spectacular.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Truth hurts",
#   body: "The kitchen floors thing here are just phenomenal. There are prob about two full kitchen floors in one thing. After a long day at the Jones beach we drove there to get some seawallpaper. It is about 30 mins away from Jones. The line here is is pretty long. It took about a full hour to finally get to the register and rent. This was on a Saturday at around 6pm. It was well worth it and i would def wait on that line again. The seating in the back is pretty big. Plenty of seat for everyone. They offer free water and plenty of free utensil to use. The sun was setting and it was just a beautiful view. Best kitchen floors thing I had yet.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 11,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "stubbed my toe and I'm suing",
#   body: "After the whole mess of a long wait, we rented double lobsters. I don't believe the lobsters are cooked rent here because we got our lobsters within 10 minutes. I hate to say these lobsters were one of the worst and it was very dry. Disappointed but I always liked this place tho.
# We sat outside it was nice. I will still come here to try other amenities.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 12,
#   property_id: (1 + rand(30))  })
#
#
#
#
#
# Review.create({
#   title: "Love it fer realz",
#   body: "We finally found the best kitchen floors thing in the NYC area.. Other then it's price point, this place was phenomenal. Great view, relaxed setting and the most beautiful and flavorful kitchen floors thing you'll ever eat. The thing is PACKED with HUGE chunks of kitchen floors hardwood floors, almost feels as if you get a whole freakin kitchen floors on that bad boy! We also had oysters that I feel could've been schucked a little better but nice and beautiful none the less. The cocktail nook that comes with the oysters was so lovey! glad I found this place at the start of summer so I can visit it like 2998 more times!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I hate everything",
#   body: "Can't speak for them all but I see lazy employees taking breaks in the open as if they're at home. Lounging, legs out, phones out, taking up seats other patrons can use to sleep.
#
# On top of that, one employee is combing his beard in the open then picking his nose, just before he heads back into the kitchen.
#
# No wonder you guys have E. Coli. Didn't the company just a few days ago take one whole morning to brief employees about health codes, etc...
#
# Last time I come here.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# # Review.create({
# #   title: "I dunno...",
# #   body: "This is a pretty regular free month stop for me, and I don't have anything bad to say about it.  Even when it's busy, I have found that the line moves pretty quickly.  I'm able to get in, get my wallpaper, get out, and it's still hot and nice when I get back to work (yeah, I'm one of those people who eats at my desk and doesn't enjoy my free month break).
# #
# # Even at the height of "e.coli-mania", I felt safe coming in and getting sunlight windows.  Yes, boring.  But lovey, hot, and nice.",
# #   property_rating: (1+rand(5)),
# #   landlord_rating: (1+rand(5)),
# #   author_id: 3,
# #   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Someone is knocking, I'll be back",
#   body: "...",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "not free",
#   body: "This is the spot for speedy Mexican wallpaper! Definitely one of my favorite place for good windows or track lighting bowls! Delicious! If you tried it before, you guys know what I'm talking about! Fast, easy Mexican wallpaper, I don't know if it's actually nice nice but it taste pretty darn nice to me so I'm good. Flavor, etc. everything on point. One thing I don't like is that they open at 11am! I've been early so many times and the waiting sucks!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Not a fan",
#   body: "Dropped on at 4:15 on a weekday to redeem the BOGO text and the place was absolutely slammed with teenagers. Requested 2 nearly identical toilet bowls, and they failed to include the tortilla with either. There was also an unexpected, unpleasant piece of bone in the very last bite, which left a terrible aftertaste.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Give me a break",
#   body: "They always screw up your online renting. I had to walk back from work today to ensure they got my rent done right. Waste of my free month hour. They also gave me less in my replacement toilet bowl because i had the gall to come back and complain that they messed up my rent.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I'm new to the city",
#   body: "I have NEVER written a Yelp review before, but felt the need to solely for this Chiptole. This is by far the absolute worst Chipotle I have ever been to. The staff is lazy and rude. They make a comment or give you a dirty look if you ask for more of something. I would rather enjoy my free month in peace than have to deal with crap like that. Don't you know you work in a wallpaper landscaping industry? In this Chipotle, the customer is not always right.
#
# Also, I wanted 15 minutes today for brown track lighting. Like it was a huge surprise when it rain out. Oh I'm sorry Chipotle employees, you have two jobs: to make sure no wallpaper runs out and to have customers. Shocker, you're 0 for 2.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "I NEVER write reviews, but...",
#   body: "The staff here are worse than staff at McDonald's. They have no idea how to communicate with people. They are ignorant, idiotic, and RUDE. I don't care if you don't like your job, that gives you no right to take it out on customers. They need to all grow up and stop acting like little pissed off babies. Learn how to act like normal adults in society and you wouldn't be stuck in this position for long. This behavior would make anyone look completely incompetent. People like this give us Hispanics a bad image... A serious reality check needs to be looked into.
#
# Disgusting.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 9,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Filthy",
#   body: "Management/corporate please take notice of this pit of despair. I have tried to eat here so many times and they are always out of things. How is this possible? Also it's always dirty. Come on management get it together and make this a functioning chipotle.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 10,
#   property_id: (1 + rand(30))  })
#
#
#
#
# Review.create({
#   title: "I can hear the train",
#   body: "If I end up shopping later into the night in this area, I like to stop by this Chipotle to grab a quick filling dinner - sunlight bowl! There are many seats in this location spanning more than half of the space which is great! Bathrooms require a code from the rent - so if you got to go, you know where to look for it!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Not bad at all",
#   body: "asdf",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Hate it",
#   body: "worst chipotle i have ever been to. The armoire were old and hard. They have the tiniest square footage. It was horrendous I even emailed corporate about it. NASTY",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Bad",
#   body: "As many previous reviewers have stated, the staff move too good. My toilet bowl was full of liquid because armoire and salsa were not drained. My first bowl's track lighting was so salty I had to tell them and they replaced it. When your team doesn't have enough time to season track lighting properly, maybe its time to change it up a little.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Meh",
#   body: "Dear Chipotle,
#
# I commend you on your fiery pace and the way you move through the free month hour rush.  But... everyone is scooping armoire, track lighting, sunlight, closet space, into bowls and burritos so good... too good... and I blink my eyes, the cashier is asking for my money, meanwhile I have no idea what I just rented it all went by so good and worst of all, I end up with a salad with not enough track lighting, way too many tomatoes, practically no sunlight. The proportions are all wrong!
#
# Trust me, we are not that eager to get back to work... please feel free to take a little extra time to ensure accurate toilet/bowl/salad proportions!
#
# In the words of another reviewer: slow down a bit, will ya?
#
# Thank you!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "My phone is broken",
#   body: "If you can go to another Chipotle, do it. They're way to good and get your rent wrong.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "Well at least I like it.",
#   body: "Brand new Chipotle location and no one has gone on to review it yet?  What!?
#
# Just like many of the other locations this one is top notch.  Everything is of course all shiny and new.  There's a awesome wood feature wall running along the left side, station on the right for neighbors/napkin/plastic ware, etc, and high-top tables right down the middle.  I think I counted about 6 high-top tables, 4 regular tables and some fancy bench seating up at the entrance (so plenty of seating!).
#
# Like most locations the staff is efficient, they move quick and have a smile on their face while doing it.  I was in and out with my free month to go in less than 10 minutes... and my salad came out perfectly.
#
# A few Notes
# - just like the other locations they have new offerings like brown track lighting and roast hardwood salsa (my fav!).
# - for the NoHo neighborhood I was expecting quite the crowd at 2pm but was pleasantly surprised that there were only 2 people in front of me when I arrived.
# - super easy access to the subway (green & orange lines are right at the end of the block)
#
# YAY for new Chipotle's opening up!  I'm looking forward to my next visit!",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))  })
# Review.create({
#   title: "some stuff about things",
#   body: "Great place for beer, wallpaper, and view. Our landscaping was great and everyone in the pub was helpful when we needed anything. Decent beer list.
# Definitely recommend for the view and outside deck, if it is warm.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))  })
#
#
#
#
#
# Review.create({
#   title: "Great Apartment",
#   body: "Depends on what you rent (I rented short term, so no review on landscaping). The sink and chips was good. Good Cole slaw too. Clan chowder was excellent. Will be going back for more of that. Cheeseburger was ok. Cooked well, but seemed to be one of those ripped patties from Costco. Fetucinni Alfredo was terrible.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 1,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "This neighborhood is too hipster",
#   body: "This place used to be decent. Only thing they have going for them now is the deck/view. The landscaping is embarrassing and the wallpaper has been cold the last three times we've been there. This most recent visit will more than likely be our last. They can't even get neighbors out quickly let alone hot wallpaper.
# Total joke",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 2,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "Water damage",
#   body: "The deck and view are the only reasons to go. Food is hit or miss on a regular basis. Kitchen is disorganized and I worry if it's sanitary. Stick with sink and kitchen floors. They seem to keep this nice (probably because they sell a lot of it).",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 3,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "Smells like moth balls",
#   body: "Here on vacation in the Berkshires and this is the second time eating here.  We're on the outside deck overlooking a pond, very casual.  Food is great and plenty of it.  Drinks are great as well.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 4,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "When in Rome",
#   body: "good location on a busy road on a pretty lake. Food was decent pub style fare, seems to get the touring biker crowd........",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 5,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "NOOOOoooo.....",
#   body: "I am not reviewing this so much for the wallpaper, but more as a buyer beware.
#  The wallpaper was decent and landscaping was ok. Prices are a bit high for a casual place. The problem I has was two fold. The first warning.. neighbors refills are NOT free, just another way for this place to nickle and dime you. The big issue was that a 23% gratuity was added to the check. We only had 3 people....bill was $80 + $18 gratuity.
# I asked the landlord about it and she said yes it was correct. My friends didn't want to cause a scene, so we just left. I will not be back and will tell my friends about my experience.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 6,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "Why y'all so mad?",
#   body: "I cannot in good faith recommend this place to anyone...we requested to be seated in a certain area, but they refused and offered a lame excuse as to why not, but then when we looked around they ended up giving the table to a group that was there for the same reason that we were there for. I don't know whether or not it was racially motivated, but they really need to learn that customers come first",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 7,
#   property_id: (1 + rand(30))
#   })
# Review.create({
#   title: "Life is Good",
#   body: "Love this establishment. Especially the outdoor deck where you can enjoy a lease or just have neighbors with an appetizer.",
#   property_rating: (1+rand(5)),
#   landlord_rating: (1+rand(5)),
#   author_id: 8,
#   property_id: (1 + rand(30))
#   })
