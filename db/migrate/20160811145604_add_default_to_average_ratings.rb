class AddDefaultToAverageRatings < ActiveRecord::Migration
  def change
    change_column :properties, :avg_landlord_rating, :integer, default: 0
    change_column :properties, :avg_property_rating, :integer, default: 0
  end
end
