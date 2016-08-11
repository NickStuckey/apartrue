class AddTypeSpecificReviewSums < ActiveRecord::Migration
  def change
    remove_column :properties, :sum_all_reviews
    add_column :properties, :sum_all_property_reviews, :integer, default: 0
    add_column :properties, :sum_all_landlord_reviews, :integer, default: 0
  end
end
