class Restaurant < ApplicationRecord
  has_many :inspections, foreign_key: :license_number, primary_key: :license_number
  def full_address
		"#{self.location_address}, #{self.location_city} #{self.location_state}, #{self.location_zipcode}"
  end

  def send_to_elasticsearch
  	client = Elasticsearch::Client.new host: "elasticsearch", log: true

  	body = self.as_json include: {inspections: {include: :violations}}
		
		if !self.location_latitude.nil? && !self.location_longitude.nil?
  		body[:location] = { lat: self.location_latitude, lon: self.location_longitude } 
  	end

  	client.index index: 'code-for-miami', type: self.model_name.plural, id: self.id, body: body
  end
end
