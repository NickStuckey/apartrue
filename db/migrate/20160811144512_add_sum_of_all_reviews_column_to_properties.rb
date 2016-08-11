class AddSumOfAllReviewsColumnToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :sum_all_reviews, :integer, default: 0
  end
end
