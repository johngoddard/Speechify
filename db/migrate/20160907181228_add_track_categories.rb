class AddTrackCategories < ActiveRecord::Migration
  def change
    add_column :tracks, :category, :string, default: 'other'
    add_index :tracks, :category
  end
end
