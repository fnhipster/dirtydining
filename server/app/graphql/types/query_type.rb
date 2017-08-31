Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :restaurant do 
  	type Types::RestaurantType
  	argument :id, !types.ID 
  	description "Find a Restaurant by ID"
  	resolve ->(obj, args, ctx) {
  		Restaurant.find(args["id"])
  	}
  end

  field :restaurants, !types[Types::RestaurantType] do 
    argument :latitude, !types.Float
    argument :longitude, !types.Float
    argument :latitudeDelta, !types.Float 
    argument :longitudeDelta, !types.Float 
    description "Find Restaurants by Latitude and Longitude"
    resolve ->(obj, args, ctx) {
      results = Restaurant.find_by_geolocation(args[:latitude], args[:longitude], args[:latitudeDelta], args[:longitudeDelta])
      if results['hits']['total'] > 0
        ids = results['hits']['hits'].pluck("_id")
        Restaurant.where(id: ids).order("field(id, " + ids.join(",") + ")")
      else
        []
      end
    }
  end
end
