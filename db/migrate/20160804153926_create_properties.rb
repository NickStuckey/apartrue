class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :address, null: false
      t.integer :owner_id
      t.integer :neighborhood_id
      t.integer :price
      t.integer :num_bedrooms
      t.boolean :available, null: false

      t.timestamps null: false
    end

    add_index :properties, :address, unique: true
  end
end
