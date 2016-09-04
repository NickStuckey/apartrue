class Neighborhood < ActiveRecord::Base
  validates :name, presence: true

  has_many :properties
  has_many :subhoods

  def self.create_and_return_id(name)
    Neighborhood.create({name: name}).id
  end
end
