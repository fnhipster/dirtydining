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
  end

  create_table "inspections_violations", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "inspection_id", null: false
    t.bigint "violation_id", null: false
    t.integer "violation_count"
    t.index ["inspection_id", "violation_id"], name: "index_inspections_violations_on_inspection_id_and_violation_id"
  end

  create_table "restaurants", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "county_number"
    t.string "license_type_code", limit: 5
    t.integer "license_number"
    t.string "business_name", limit: 200
    t.string "location_address", limit: 200
    t.string "location_city", limit: 200
    t.string "location_zipcode", limit: 10
    t.decimal "location_latitude", precision: 10, scale: 7
    t.decimal "location_longitude", precision: 10, scale: 7
    t.integer "critical_violations_before_2013"
    t.integer "noncritical_violations_before_2013"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "violations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "description"
    t.boolean "is_risky_factor"
    t.boolean "is_primary_concern"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
