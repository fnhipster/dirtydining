class CreateCounties < ActiveRecord::Migration[5.1]
  def change
    create_table :counties do |t|
    	t.integer :county_number
    	t.string :county_name, :limit => 50
    	t.string :district, :limit => 3
      t.timestamps
    end
  end
end
