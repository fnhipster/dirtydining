class ElasticsearchWorker
  include Sidekiq::Worker

  def perform(restaurant_id)
  	restaurant = Restaurant.find(restaurant_id)
  	restaurant.send_to_elasticsearch
  end
end
