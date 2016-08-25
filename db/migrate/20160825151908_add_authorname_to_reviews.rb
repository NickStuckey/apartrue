class AddAuthornameToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :author_name, :string
  end
end
