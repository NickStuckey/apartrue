class RenameReviewsTableToReviews < ActiveRecord::Migration
  def change
    rename_table :reviews_tables, :reviews
  end
end
