class Property < ActiveRecord::Base
  validates :address, :zipcode, :available, :lat, :lng, presence: true

  belongs_to :neighborhood

  belongs_to(
    :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id
  )

  def self.satisfy_params(filters)
    properties = self.where(
        lat:  filters[:bounds][:southWest][:lat]...filters[:bounds][:northEast][:lat],
        lng: filters[:bounds][:southWest][:lng]...filters[:bounds][:northEast][:lng]
      ).where('price < ?', filters[:price])
      .where('num_bedrooms = ?', filters[:num_bedrooms])
      .where('neighborhood_id = ?', filters[:neighborhood_id])
    properties
  end
end
