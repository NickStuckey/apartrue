class AddNumReviewsToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :num_reviews, :integer, default: 0
  end
end
