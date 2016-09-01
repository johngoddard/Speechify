class AddFileName < ActiveRecord::Migration
  def change
    add_column :tracks, :track_file_name, :string
  end
end
