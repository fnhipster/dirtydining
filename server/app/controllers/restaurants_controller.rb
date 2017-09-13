class RestaurantsController < ApplicationController
	def search
		query = Jbuilder.encode do |json|
			json.query do 
				json.bool do
					json.filter do 
						json.geo_distance do 
							json.distance "1km"
							json.location do 
								json.lat params[:lat]
								json.lon params[:lon]
 							end
 						end
 					end
 				end
			end

			json.sort do 
				json.array! ['_geo_distance'] do
					json._geo_distance do 
						json.location do
							json.lat params[:lat]
							json.lon params[:lon]
						end
						json.order "asc"
						json.unit "km"
					end
				end
			end
		end

		client = Elasticsearch::Client.new host: "elasticsearch", log: true
		results = client.search index: 'code-for-miami', type: 'restaurants', body: query

    render json: results
	end

	def host 
		render html: Socket.gethostname
	end
end
