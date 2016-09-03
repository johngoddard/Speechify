class CreateUserFollows < ActiveRecord::Migration
  def change
    create_table :user_follows do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false

      t.timestamps null: false
    end

    add_index :user_follows, :followee_id
    add_index :user_follows, :follower_id
  end
end
