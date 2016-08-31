class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :artist, null: false
      t.string :track_image_url
      t.string :image_file_type
      t.string :image_file_size
      t.string :audio_url

      t.timestamps null: false
    end

    add_index :tracks, :user_id
    add_index :tracks, :artist
  end
end
