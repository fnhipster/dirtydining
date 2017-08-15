class InspectionViolation < ApplicationRecord
	belongs_to :inspection, optional: true 
	belongs_to :violation, optional: true
end