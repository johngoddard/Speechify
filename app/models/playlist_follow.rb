# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ActiveRecord::Base
  validates :user_id, :playlist_id, presence: true
  validates :user_id, uniqueness: {scope: :playlist_id}

  belongs_to :playlist
  belongs_to :user
end
