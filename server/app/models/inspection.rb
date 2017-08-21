class Inspection < ApplicationRecord
	has_many :inspection_violations, foreign_key: :inspection_visit_id, primary_key: :inspection_visit_id
	has_many :violations, through: :inspection_violations

	belongs_to :restaurant, foreign_key: :license_number, primary_key: :license_number
end
