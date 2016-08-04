class AddZipcodeAndCityToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :zipcode, :integer, null: false
    add_column :properties, :city, :string
  end
end
