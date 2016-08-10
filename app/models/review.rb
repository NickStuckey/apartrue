class Review < ActiveRecord::Base
  validates :title, :body, :property_rating, :landlord_rating, presence: true

  belongs_to :property

  belongs_to(
    :author,
    class_name: :User,
  )

  def average_rating

  end

  def self.find_all_for_property(prop_id)
    self.where(property_id: prop_id)
  end

end
