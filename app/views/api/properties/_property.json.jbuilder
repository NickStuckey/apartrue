json.extract! property, :id, :address, :zipcode, :lat, :lng, :city,
:num_bedrooms, :available, :price, :owner_id

json.image_url asset_path(property.image.url)
