class CreateSubhoods < ActiveRecord::Migration
  def change
    create_table :subhoods do |t|
      t.string :name, null:false
      t.integer :city_id

      t.timestamps null: false
    end
  end
end
