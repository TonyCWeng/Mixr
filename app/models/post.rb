# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :text
#  body       :text
#  source     :text
#  file_type  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#

class Post < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
end
