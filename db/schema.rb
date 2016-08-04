# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160804161212) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "neighborhoods", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "neighborhoods", ["name"], name: "index_neighborhoods_on_name", unique: true, using: :btree

  create_table "properties", force: :cascade do |t|
    t.string   "address",         null: false
    t.integer  "owner_id"
    t.integer  "neighborhood_id"
    t.integer  "price"
    t.integer  "num_bedrooms"
    t.boolean  "available",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "geolocation"
  end

  add_index "properties", ["address"], name: "index_properties_on_address", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "hometown"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token"
    t.string   "password_digest"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
