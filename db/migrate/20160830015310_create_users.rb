class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.text :description
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_image_url
      t.string :image_file_type
      t.string :image_file_size

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
