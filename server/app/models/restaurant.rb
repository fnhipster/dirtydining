class Restaurant < ApplicationRecord
  has_many :inspections, foreign_key: :license_number, primary_key: :license_number
  
  def full_address
		"#{self.location_address}, #{self.location_city} #{self.location_state}, #{self.location_zipcode}"
  end

  def send_to_elasticsearch
  	client = Elasticsearch::Client.new host: "elasticsearch", log: true

  	body = self.as_json #include: {inspections: {include: :violations}}
		
		if !self.location_latitude.nil? && !self.location_longitude.nil?
  		body[:location] = { lat: self.location_latitude, lon: self.location_longitude } 
  	end

  	client.index index: 'code-for-miami', type: self.model_name.plural, id: self.id, body: body
  end

  def self.find_by_geolocation(lat, lon, distance = "1km")
    query = Jbuilder.encode do |json|
      json.query do 
        json.bool do
          json.filter do 
            json.geo_distance do 
              json.distance distance
              json.location do 
                json.lat lat
                json.lon lon
              end
            end
          end
        end
      end

      json.sort do 
        json.array! ['_geo_distance'] do
          json._geo_distance do 
            json.location do
              json.lat lat
              json.lon lon
            end
            json.order "asc"
            json.unit "km"
          end
        end
      end
    end

    client = Elasticsearch::Client.new host: "elasticsearch", log: true
    results = client.search index: 'code-for-miami', type: self.model_name.plural, body: query
  end
end
