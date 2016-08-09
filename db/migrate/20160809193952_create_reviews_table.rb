class CreateReviewsTable < ActiveRecord::Migration
  def change
    create_table :reviews_tables do |t|
      t.integer :author_id, null:false
      t.integer :property_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :property_rating, null:false
      t.integer :landlord_rating, null:false
    end
  end
end
