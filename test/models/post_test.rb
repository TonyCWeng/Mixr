# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :text
#  body       :text
#  source     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_type  :string
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
