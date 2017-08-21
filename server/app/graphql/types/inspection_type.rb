Types::InspectionType = GraphQL::ObjectType.define do 
	name 'Inspection'

	field :id, !types.ID 
	field :inspection_visit_id, !types.String
	field :inspection_disposition, !types.String 
	field :inspection_date, !types.String
	field :total_violations, !types.Int
	field :high_priority_violations, !types.Int 
	field :intermediate_violations, !types.Int
	field :basic_violations, !types.Int
	field :restaurant, -> { Types::RestaurantType }
	field :violations, -> { types[Types::ViolationType] }
end