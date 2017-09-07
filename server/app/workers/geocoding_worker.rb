class GeocodingWorker
  include Sidekiq::Worker

  def perform(restaurant_id)
  	restaurant = Restaurant.find(restaurant_id)
  	geocoded = Geocoder.coordinates(restaurant.full_address)
    restaurant.location_latitude  = geocoded[0]
    restaurant.location_longitude = geocoded[1]
    restaurant.save
  end
end
