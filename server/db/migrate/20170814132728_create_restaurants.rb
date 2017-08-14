class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
    	t.integer :county_number
    	t.string :license_type_code, :limit => 5
    	t.integer :license_number
    	t.string :business_name, :limit => 200
    	t.string :location_address, :limit => 200
    	t.string :location_city, :limit => 200
    	t.string :location_zipcode, :limit => 10
    	t.decimal :location_latitude, { precision: 10, scale: 7 }
    	t.decimal :location_longitude, { precision: 10, scale: 7 }
    	t.integer :critical_violations_before_2013
    	t.integer :noncritical_violations_before_2013
      t.timestamps
    end
  end
end
