# == Schema Information
#
# Table name: playlists
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text             not null
#  user_id            :integer          not null
#  shared             :boolean          default(TRUE)
#  playlist_image_url :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :title, :description, :user_id, presence: true

  belongs_to :user
  has_many :playlist_tracks, dependent: :destroy
  has_many :tracks, through: :playlist_tracks, source: :track

  def max_track
    if self.playlist_tracks.length > 0
      self.playlist_tracks.max_by{|el| el.order}.order
    else
      0
    end
  end
end
