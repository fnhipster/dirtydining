# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

violations = [
[1,"Approved source",1,0],
[2,"Original container: properly labeled, date marking, consumer advisory",1,0],
[3,"Time and Temperature Control - potentially hazardous/time/temperature control for safety foods (PH/TCS)",1,0],
[4,"Facilities to maintain PH/TCS at the proper temperature",0,1],
[5,"Food and food equipment thermometers provided and accurate",0,1],
[6,"PH/TCS foods properly thawed",0,0],
[7,"Unwrapped or PH/TCS food not re-served",1,0],
[8,"Food protection, cross-contamination",1,0],
[9,"Bare hand contact with RTE food; Alternative Operating Procedure (AOP)",1,0],
[10,"In use food dispensing utensils properly stored",0,0],
[11,"Employee health knowledge; ill/symptomatic employee present",1,0],
[12,"Hands washed and clean, good hygienic practices, eating / drinking /smoking",1,0],
[13,"Clean clothes; hair restraints; jewelry; painted/artificial fingernails",0,0],
[14,"Food-contact and nonfood-contact surfaces designed, constructed, maintained, installed, located",0,0],
[15,"Non-food contact surfaces designed, constructed, maintained, installed, located",0,0],
[16,"Dishwashing facilities; chemical test kit(s); gauges",0,1],
[17,"Thermometers, gauges, test kits provided",0,1],
[18,"Pre-flushed, scraped, soaked",0,0],
[19,"Wash, rinse water clean, proper temperature",0,0],
[20,"Sanitizing concentration or temperature",1,0],
[21,"Wiping cloths; clean and soiled linens; laundry facilities",0,0],
[22,"Food-contact surfaces clean and sanitized",1,0],
[23,"Non-food contact surfaces clean",0,0],
[24," Storage/handling of clean equipment, utensils; air drying",0,0],
[25,"Single-service and single-use items",0,0],
[26,"Single service articles not re-used",0,0],
[27,"Water source safe, hot (100°F) and cold under pressure",0,1],
[28,"Sewage and wastewater disposed properly",0,1],
[29,"Plumbing installed and maintained; mop sink; water filters; backflow prevention",0,1],
[30,"Cross-connection, back siphonage, backflow",0,1],
[31,"Hand wash sinks, hand washing supplies and hand wash sign",1,0],
[32,"Bathrooms",0,0],
[33,"Garbage and refuse; premises maintained",0,0],
[34,"Outside storage area clean, enclosure properly constructed",0,0],
[35,"No presence or breeding of insects/rodents/pests; no live animals, outer openings protected from insects/pests, rodent proof",0,1],
[36,"Floors, walls, ceilings and attached equipment properly constructed and clean; rooms and equipment properly vented",0,0],
[37,"Walls, ceilings, and attached equipment, constructed, clean",0,0],
[38,"Lighting provided as required; fixtures shielded or bulbs protected",0,0],
[39,"Rooms and equipment - vented as required",0,0],
[40,"Employee personal belongings",0,0],
[41,"Chemicals/toxic substances",1,0],
[42,"Cleaning and maintenance equip",0,0],
[43,"Complete separation from living/sleeping area/private premise; kitchen restricted – no unauthorized personnel",0,0],
[44,"Clean and soiled linen segregated and properly stored",0,0],
[45,"Fire extinguishing equipment (FOR REPORTING PURPOSES ONLY)",0,0],
[46,"Exits not blocked or locked (FOR REPORTING PURPOSES ONLY)",0,0],
[47,"Electrical wiring/outlets in good repair (FOR REPORTING PURPOSES ONLY)",0,0],
[48,"Gas appliances; boiler certificate current/posted (FOR REPORTING PURPOSES ONLY)",0,0],
[49,"Flammable/combustible materials (FOR REPORTING PURPOSES ONLY)",0,0],
[50,"Current license properly displayed",0,1],
[51,"Other conditions sanitary and safe operation",0,0],
[52,"Misrepresentation; misbranding",0,1],
[53,"Food management certification valid / Employee training verification",1,0],
[54,"Florida Clean Indoor Air Act",0,0],
[55,"Automatic Gratuity Notice",0,0],
[56,"Copy of Chapter 509, Florida Statutes, available (no longer used per Chapter 2008-55, Laws of Florida)",0,0],
[57,"Hospitality Education Program information provided (information only – not a violation)",0,0],
[58,"Smoke Free (information only – no longer used)",0,0]]

violations.each do |violation|
	v = Violation.new do |v|
		v.description = violation[1]
		v.is_risky_factor = violation[2]
		v.is_primary_concern = violation[3]
	end

	v.save
end