class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.boolean :shared, default: true
      t.string :playlist_image_url

      t.timestamps null: false
    end

    add_index :playlists, :user_id
  end
end
