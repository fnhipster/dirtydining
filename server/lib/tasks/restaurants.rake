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
			CSV.foreach(Rails.root.join("tmp/file.csv").to_s) do |row|
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
end