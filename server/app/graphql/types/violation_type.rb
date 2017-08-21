Types::ViolationType = GraphQL::ObjectType.define do 
	name 'Violation'

	field :id, !types.ID 
	field :description, !types.String
	field :is_risky_factor, !types.Boolean
	field :is_primary_concern, !types.Boolean
end