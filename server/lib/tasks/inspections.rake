require 'csv'
require 'net/ftp'
require 'open-uri'

namespace :inspection do 
	desc "Download inspection data from from dbprftp.state.fl.us"
	task :download => :environment do 
		1.upto(7) do |file_number|
			path_to_file =  Rails.root.join("tmp/#{file_number}fdinspi.csv").to_s
			Net::FTP.open("dbprftp.state.fl.us") do |ftp|
				ftp.passive = true
				ftp.debug_mode = true
				ftp.login
				files = ftp.chdir('pub/llweb')
				files = ftp.list('*')
				ftp.getbinaryfile("#{file_number}fdinspi.csv", path_to_file)
			end
		end
	end

	desc "Import inspection data"
	task :import => :environment do 
		1.upto(7) do |file_number|
			destination_file =  Rails.root.join("tmp/#{file_number}fdinspi.csv").to_s
			import_file(destination_file)
		end	
	end

	desc "Download inspection history from http://www.myfloridalicense.com/dbpr/sto/file_download/hr/"
	task :download_history => :environment do
		1.upto(7) do |file_number|
			file = "#{file_number}fdinspi_1617.csv"
			destination_file = Rails.root.join("tmp/#{file}").to_s
			IO.copy_stream(open("http://www.myfloridalicense.com/dbpr/sto/file_download/hr/#{file}"), destination_file)
		end
	end

	desc "Import inspection history from http://www.myfloridalicense.com/dbpr/sto/file_download/hr/"
	task :import_history => :environment do 
		1.upto(7) do |file_number|
			file = "#{file_number}fdinspi_1617.csv"
			destination_file = Rails.root.join("tmp/#{file}").to_s
			import_file(destination_file)
		end
	end

	def import_file(file_name)
		inspections = []
		violations = []
		puts file_name
		CSV.foreach(file_name.to_s, :encoding => 'windows-1251:utf-8') do |row|
			inspection_date = row[14].split("/")

			inspection = Inspection.new do |i|
				i.inspection_visit_id = row[81]
				i.license_id = row[80]
				i.inspection_number = row[9]
				i.visit_number = row[10]
				i.inspection_class = row[11]
				i.inspection_type = row[12]
				i.inspection_disposition = row[13]
				i.inspection_date = "#{inspection_date[2]}-#{inspection_date[0]}-#{inspection_date[1]}"
				i.total_violations = row[17]
				i.high_priority_violations = row[18]
				i.intermediate_violations = row[19]
				i.basic_violations = row[20]
				i.pda_status = row[21]
				i.county_number = row[1]
				i.license_number = row[4]
			end

			1.upto(58) do |violation_number|
				row_index = 21 + violation_number
				violation = row[row_index]
				if violation.to_i > 0 
					violations << InspectionViolation.new(violation_id: violation_number, violation_count: violation, inspection_visit_id: inspection.inspection_visit_id)
				end
			end
			inspections << inspection
		end
		Inspection.import inspections, batch_size: 100
		InspectionViolation.import violations, batch_size: 100
	end
end
