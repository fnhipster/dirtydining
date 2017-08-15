# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170814134059) do

  create_table "counties", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "county_number"
    t.string "county_name", limit: 50
    t.string "district", limit: 3
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inspection_violations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "violation_id"
    t.integer "violation_count"
    t.integer "inspection_visit_id"
    t.index ["inspection_visit_id"], name: "index_inspection_violations_on_inspection_visit_id"
  end

  create_table "inspections", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "inspection_visit_id", limit: 7
    t.string "license_id", limit: 10
    t.integer "inspection_number"
    t.integer "visit_number"
    t.string "inspection_class", limit: 20
    t.string "inspection_type", limit: 200
    t.string "inspection_disposition", limit: 200
    t.date "inspection_date"
    t.integer "total_violations"
    t.integer "high_priority_violations"
    t.integer "intermediate_violations"
    t.integer "basic_violations"
    t.boolean "pda_status"
    t.integer "county_number"
    t.integer "license_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["license_number"], name: "index_inspections_on_license_number"
  end

  create_table "restaurants", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "county_number"
    t.string "license_type_code", limit: 5
    t.string "rank_code", limit: 10
    t.string "license_number"
    t.string "licensee_name", limit: 200
    t.string "business_name", limit: 200
    t.string "location_address", limit: 200
    t.string "location_city", limit: 200
    t.string "location_state", limit: 2
    t.string "location_zipcode", limit: 10
    t.decimal "location_latitude", precision: 10, scale: 7
    t.decimal "location_longitude", precision: 10, scale: 7
    t.integer "critical_violations_before_2013"
    t.integer "noncritical_violations_before_2013"
    t.date "expiry_date"
    t.date "last_inspection_date"
    t.integer "units"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["license_number"], name: "index_restaurants_on_license_number"
    t.index ["location_zipcode"], name: "index_restaurants_on_location_zipcode"
  end

  create_table "violations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "description"
    t.boolean "is_risky_factor"
    t.boolean "is_primary_concern"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
