class Restaurant < ApplicationRecord
  has_many :inspections, foreign_key: :license_number, primary_key: :license_number
  geocoded_by :full_address, latitude: :location_latitude, longitude: :location_longitude 
  scope :to_geocode, -> { where(location_latitude: nil).where(location_longitude: nil) }

  def full_address
    [location_address, location_city, location_state, location_zipcode].compact.join(', ')
  end

  def location_address
    super.strip
  end

  def send_to_elasticsearch
  	client = Elasticsearch::Client.new host: "elasticsearch", log: true

  	body = self.as_json #include: {inspections: {include: :violations}}
		
		if !self.location_latitude.nil? && !self.location_longitude.nil?
  		body[:location] = { lat: self.location_latitude, lon: self.location_longitude } 
  	end

  	client.index index: 'code-for-miami', type: self.model_name.plural, id: self.id, body: body
  end

  def self.find_by_geolocation(lat, lon, latdelta, londelta, distance = "1km")
    north_latitude = lat + latdelta / 2
    north_longitude = lon + londelta / 2
    south_latitude = lat - latdelta / 2
    south_longitude = lon - londelta / 2

    logger.info north_latitude
    logger.info north_longitude
    logger.info south_latitude
    logger.info south_longitude

    query = Jbuilder.encode do |json|
      json.query do 
        json.bool do
          json.filter do 
            json.geo_bounding_box do 
              json.location do 
                json.top_left do 
                  json.lat north_latitude
                  json.lon north_longitude
                end

                json.bottom_right do 
                  json.lat south_latitude
                  json.lon south_longitude
                end
              end
            end
          end
        end
      end
    end

    client = Elasticsearch::Client.new host: "elasticsearch", log: true
    results = client.search index: 'code-for-miami', type: self.model_name.plural, body: query
  end
end
