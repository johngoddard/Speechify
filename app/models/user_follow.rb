# == Schema Information
#
# Table name: user_follows
#
#  id          :integer          not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserFollow < ActiveRecord::Base
  validates :follower_id, :follower_id, presence: true
  validates :follower_id, uniqueness: {scope: :followee_id}

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :User
end
