Types::RestaurantType = GraphQL::ObjectType.define do 
	name 'Restaurant'

	field :id, !types.ID 
	field :business_name, !types.String
	field :license_number, !types.String
	field :location_latitude, !types.Float
	field :location_longitude, !types.Float
	field :inspections, !types[Types::InspectionType] do 
		argument :limit, types.Int
		resolve ->(obj, args, ctx) {
			if(args[:limit]) 
				obj.inspections.order(inspection_date: "desc").limit(args[:limit])
			else
				obj.inspections
			end
		}
	end	
end