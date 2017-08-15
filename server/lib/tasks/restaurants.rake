require 'csv'
require 'net/ftp'

namespace :restaurant do 
	desc "Download restaurant data from from dbprftp.state.fl.us"
	task :download => :environment do 
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
	end

	desc "Import restaurant data"
	task :import => :environment do 
		1.upto(7) do |file_number|
			restaurants = []
			path_to_file =  Rails.root.join("tmp/hrfood#{file_number}.csv").to_s
			puts path_to_file
			CSV.foreach(Rails.root.join(path_to_file).to_s) do |row|
				
				expiry_date = row[29].split("/")
				last_inspection_date = row[30].split("/")

				restaurant = Restaurant.new do |r|
					r.county_number = row[22]
					r.license_type_code = row[1]
					r.rank_code = row[3]
					r.licensee_name = row[2]
					r.license_number = row[26].tr("A-Z","")
					r.business_name = row[14]
					r.location_address = "#{row[16]} #{row[17]} #{row[18]}"
					r.location_city = row[19]
					r.location_state = row[20]
					r.location_zipcode = row[21][0..4]
					r.expiry_date = "#{expiry_date[2]}-#{expiry_date[0]}-#{expiry_date[1]}" 
        	r.last_inspection_date = "#{last_inspection_date[2]}-#{last_inspection_date[0]}-#{last_inspection_date[1]}"
        	r.units = row[31]
				end
				
				restaurants << restaurant
			end
			Restaurant.import restaurants, batch_size: 100
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