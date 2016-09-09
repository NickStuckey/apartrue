json.extract! user, :id, :username, :bio, :hometown, :is_landlord
json.image_url asset_path(user.image.url)
json.num_reviews user.num_reviews
json.member_since user.created_at.to_date
