class AddLatLongToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :lat, :float
    add_column :properties, :lng, :float
  end
end
