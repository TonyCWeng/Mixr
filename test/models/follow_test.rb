# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_follows_on_followee_id                  (followee_id)
#  index_follows_on_followee_id_and_follower_id  (followee_id,follower_id) UNIQUE
#  index_follows_on_follower_id                  (follower_id)
#

require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
