class Review < ActiveRecord::Base
  validates :title, :body, :property_rating, :landlord_rating, presence: true

  def average_rating
    
  end
end
