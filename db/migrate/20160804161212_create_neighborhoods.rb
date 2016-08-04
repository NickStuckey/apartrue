class CreateNeighborhoods < ActiveRecord::Migration
  def change
    create_table :neighborhoods do |t|
      t.string :name

      t.timestamps null: false
    end

    add_index :neighborhoods, :name, unique: true
  end
end
