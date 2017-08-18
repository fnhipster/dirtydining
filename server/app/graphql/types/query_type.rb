Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :allRestaurants, !types[Types::RestaurantType] do 
    resolve -> (obj, args, ctx) { Restaurant.limit(10).all }
  end

  field :restaurant do 
  	type Types::RestaurantType
  	argument :id, !types.ID 
  	description "Find a Restaurant by ID"
  	resolve ->(obj, args, ctx) {
  		Restaurant.find(args["id"])
  	}
  end
end
