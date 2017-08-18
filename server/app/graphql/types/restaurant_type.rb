Types::RestaurantType = GraphQL::ObjectType.define do 
	name 'Restaurant'

	field :id, !types.ID 
	field :business_name, !types.String
	field :license_number, !types.String
	field :inspections, -> { !types[Types::InspectionType] }
end