class AddGeoLocationCoorinatesColumnToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :geolocation, :string
  end
end
