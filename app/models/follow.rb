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

class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true
  validates :follower_id, uniqueness: { scope: :followee }

  belongs_to :followee,
    class_name: "User",
    primary_key: :id,
    foreign_key: :followee_id

  belongs_to :follower,
    class_name: "User",
    primary_key: :id,
    foreign_key: :follower_id

end
