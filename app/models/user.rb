# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  description       :text
#  password_digest   :string           not null
#  session_token     :string           not null
#  profile_image_url :string
#  image_file_type   :string
#  image_file_size   :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 4, allow_nil: true }

  has_many :tracks, inverse_of: :user
  has_many :playlists, inverse_of: :user

  has_many :playlist_follows

  has_many :followed_playlists, through: :playlist_follows, source: :playlist

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(options)
    user = User.find_by(username: options[:username])
    return nil unless user && user.is_password?(options[:password])
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
