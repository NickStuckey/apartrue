class AddPropertyRatingsToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :avg_property_rating, :integer
    add_column :properties, :avg_landlord_rating, :integer
  end
end
