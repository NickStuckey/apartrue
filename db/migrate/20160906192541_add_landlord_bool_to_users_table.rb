class AddLandlordBoolToUsersTable < ActiveRecord::Migration
  def change
    add_column :users, :is_landlord, :boolean, default: false
  end
end
