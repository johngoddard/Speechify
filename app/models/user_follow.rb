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

end
