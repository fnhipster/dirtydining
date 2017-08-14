class CreateInspections < ActiveRecord::Migration[5.1]
  def change
    create_table :inspections do |t|
    	t.string :inspection_visit_id, :limit => 7
    	t.string :license_id, :limit => 10
    	t.integer :inspection_number
    	t.integer :visit_number
    	t.string :inspection_class, :limit => 20
  		t.string :inspection_type, :limit => 200
  		t.string :inspection_disposition, :limit => 200
		  t.date :inspection_date
		  t.integer :total_violations
		  t.integer :high_priority_violations
		  t.integer :intermediate_violations
		  t.integer :basic_violations
		  t.boolean :pda_status
		  t.integer :county_number
		  t.integer :license_number
      t.timestamps
    end
  end
end
