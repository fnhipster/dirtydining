require 'csv'
require 'net/ftp'

namespace :restaurant do 
	desc "Import restaurant data from dbprftp.state.fl.us"
	task :import => :environment do 

		1.upto(7) do |file_number|
			path_to_file =  Rails.root.join("tmp/hrfood#{file_number}.csv").to_s
			Net::FTP.open("dbprftp.state.fl.us") do |ftp|
				ftp.passive = true
				ftp.debug_mode = true
				ftp.login
				files = ftp.chdir('pub/llweb')
				files = ftp.list('*')
				ftp.getbinaryfile("hrfood#{file_number}.csv", path_to_file)
			end
		end

		1.upto(7) do |file_number|
			path_to_file =  Rails.root.join("tmp/hrfood#{file_number}.csv").to_s
			puts path_to_file
			CSV.foreach(Rails.root.join(path_to_file).to_s) do |row|
				restaurant = Restaurant.new do |r|
					r.county_number = row[22]
					r.license_type_code = row[1]
					r.license_number = row[26]
					r.business_name = row[14]
					r.location_address = "#{row[16]} #{row[17]} #{row[18]}"
					r.location_city = row[19]
					r.location_zipcode = row[21][0..4]
				end
				
				restaurant.save
			end
		end	
	end

	desc "Send to ElasticSearch"
	task :import_elastic => :environment do 
		Restaurant.where(location_zipcode: "33136").each do |restaurant|
			client = Elasticsearch::Client.new host: "elasticsearch", log: true
			#body = self.as_json
			body = {}
			body[:business_name] = restaurant.business_name
			body[:location] = { lat: restaurant.location_latitude, lon: restaurant.location_longitude } if !restaurant.location_latitude.nil? && !restaurant.location_longitude.nil?
			
			client.index index: 'dining', type: 'restaurants', id: restaurant.id, body: body
		end
	end

	desc "Update imported restaurant data with gelocated attributes"
	task :geocode => :environment do
	    Restaurant.where(location_zipcode: "33136").where(location_latitude: nil).where(location_longitude: nil).find_each do |restaurant|
	        geocoded = Geocoder.coordinates(restaurant.full_address)
	        restaurant.location_latitude    = geocoded[0]
	        restaurant.location_longitude   = geocoded[1]
	        restaurant.save
	        puts restaurant
	    end
	end

end