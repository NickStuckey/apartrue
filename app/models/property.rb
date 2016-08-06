class Property < ActiveRecord::Base
  validates :address, :available, :lat, :lng, presence: true

  belongs_to :neighborhood

  belongs_to(
    :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id
  )

  def self.in_bounds?(bounds)
    properties = self.where(
      :lat => bounds['southWest']['lat']...bounds['northEast']['lat'],
      :lng => bounds['southWest']['lng']...bounds['northEast']['lng']
      )
    properties
  end
end
