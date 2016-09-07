# == Schema Information
#
# Table name: tracks
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  user_id         :integer          not null
#  artist          :string           not null
#  track_image_url :string
#  image_file_type :string
#  image_file_size :string
#  audio_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  track_file_name :string
#  category        :string           default("other")
#

class Track < ActiveRecord::Base
  validates :title, :artist, :user, presence: true
  validates :artist, length: {maximum: 80}
  validates :category, inclusion: { in: %w(politics sports history entertainment other)}, allow_blank: true

  belongs_to :user, inverse_of: :tracks
  has_many :playlist_tracks, dependent: :destroy
  has_many :playlists, through: :playlist_tracks, source: :playlist


  private
end
