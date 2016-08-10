class Property < ActiveRecord::Base
  validates :address, :zipcode, :available, :lat, :lng, presence: true

  belongs_to :neighborhood
  has_many :reviews

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "skyline.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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
