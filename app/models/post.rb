# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  title              :text
#  body               :text
#  source             :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  post_type          :string
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#

class Post < ApplicationRecord
  include Rails.application.routes.url_helpers
  validates :author_id, presence: true

  has_one_attached :image

  validates :image, file_content_type: {
                      allow: ['image/jpeg', 'image/png', 'audio/mp3','audio/mpeg', 'video/mp4'],
                      if: -> { image.attached? },
                    },
                    file_size: { less_than: 10.megabyte, if: -> { image.attached? }, }

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  has_many :likes

  def image_url
    rails_blob_path(self.image, disposition: "attachment", only_path: true)
  end

end
