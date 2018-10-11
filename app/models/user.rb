# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#

class User < ApplicationRecord
  include Rails.application.routes.url_helpers
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  after_initialize :ensure_session_token
  before_validation :add_default_avatar
  before_validation :ensure_session_token_uniqueness
  attr_reader :password

  has_many :posts,
           class_name: :Post,
           primary_key: :id,
           foreign_key: :author_id

  has_many :likes

  has_many :liked_posts,
           through: :likes,
           source: :posts

  has_many :followings,
           class_name: :Follow,
           primary_key: :id,
           foreign_key: :follower_id

  has_many :followed_users,
           through: :followings,
           source: :followee

  has_many :followed_posts,
           through: :followed_users,
           source: :posts

  has_many :follows,
           class_name: :Follow,
           primary_key: :id,
           foreign_key: :followee_id

  has_many :followers,
           through: :follows,
           source: :follower


  has_one_attached :avatar
  validates :avatar, file_content_type: { allow: ["image/jpeg", "image/png"], if: -> { avatar.attached? }, },
                     file_size: { less_than: 10.megabyte, if: -> { avatar.attached? }, }

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  def avatar_url
    rails_blob_path(self.avatar, disposition: "attachment", only_path: true)
  end

  private

  def add_default_avatar
    unless self.avatar
      self.avatar.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'avatar.png')), filename: 'avatar.png', content_type: 'image/png')
    end
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end
