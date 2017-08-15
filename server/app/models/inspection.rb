class Inspection < ApplicationRecord
	has_many :inspection_violations
	has_many :violations, through: :inspection_violations
end
