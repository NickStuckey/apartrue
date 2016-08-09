@reviews.each do |review|
  json.set! review.id do # NOTE not sure about this syntax, check back on review.id
    json.partial! 'review', review: review
  end
end
