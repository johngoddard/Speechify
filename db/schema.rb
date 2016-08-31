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

ActiveRecord::Schema.define(version: 20160831161050) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tracks", force: :cascade do |t|
    t.string   "title",           null: false
    t.integer  "user_id",         null: false
    t.string   "artist",          null: false
    t.string   "track_image_url"
    t.string   "image_file_type"
    t.string   "image_file_size"
    t.string   "audio_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "tracks", ["artist"], name: "index_tracks_on_artist", using: :btree
  add_index "tracks", ["user_id"], name: "index_tracks_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",          null: false
    t.text     "description"
    t.string   "password_digest",   null: false
    t.string   "session_token",     null: false
    t.string   "profile_image_url"
    t.string   "image_file_type"
    t.string   "image_file_size"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
