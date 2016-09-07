class ChangeCategoryDefault < ActiveRecord::Migration
  def change
    change_column_default :tracks, :category, :nil
  end
end
