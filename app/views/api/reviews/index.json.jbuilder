prop_sum = 0
lord_sum = 0

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'review', review: review
      prop_sum += review.property_rating
      lord_sum += review.landlord_rating
    end
  end
end

num_reviews = @reviews.length

json.property_stats do
  if num_reviews > 0
    json.avgPropertyRating (prop_sum / num_reviews)
    json.avgLandlordRating (lord_sum / num_reviews)
  end
end
