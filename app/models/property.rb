class Property < ActiveRecord::Base
  validates :address, :available, presence: true

  
end
