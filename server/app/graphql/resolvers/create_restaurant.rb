class Resolvers::CreateRestaurant < GraphQL::Function 
	argument :business_name, !types.String
	argument :license_number, !types.String

	type Types::RestaurantType

	def call(_obj, args, ctx)
		Restaurant.create!(
			business_name: args[:business_name],
			license_number: args[:license_number]
		)
	end
end