class RemoveZipcodeConstraintPropertiesTable < ActiveRecord::Migration
  def change
    change_column :properties, :zipcode, :integer, null: true
  end
end
