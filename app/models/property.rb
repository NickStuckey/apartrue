class Property < ActiveRecord::Base
  validates :address, :available, :lat, :lng, presence: true

  def self.in_bounds?(bounds)
    properties = self.where(
      :lat => bounds['southWest']['lat']...bounds['northEast']['lat'],
      :lng => bounds['southWest']['lng']...bounds['northEast']['lng']
      )
    properties
  end
end
