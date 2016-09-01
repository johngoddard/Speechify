# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  order       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistTrack < ActiveRecord::Base
  validates :playlist_id, :track_id, presence: true

  belongs_to :track
  belongs_to :playlist
end
