Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :allRestaurants, !types[Types::RestaurantType] do 
    resolve -> (obj, args, ctx) { Restaurant.limit(20).all }
  end
end
