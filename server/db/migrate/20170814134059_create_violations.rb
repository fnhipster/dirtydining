class CreateViolations < ActiveRecord::Migration[5.1]
  def change
    create_table :violations do |t|
    	t.string :description, :limit => 255
    	t.boolean :is_risky_factor
    	t.boolean :is_primary_concern
      t.timestamps
    end

    create_join_table :inspections, :violations do |t|
    	t.integer :violation_count
    	t.index [:inspection_id, :violation_id]
    end
  end
end
