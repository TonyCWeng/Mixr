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
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness
  attr_reader :password

  has_many :posts,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :author_id

  has_many :likes

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
    foreign_key: :follower_id

  has_many :followers,
    through: :follows,
    source: :follower


  has_attached_file :avatar, default_url: "https://s3-us-west-1.amazonaws.com/mixr-dev/posts/images/000/000/027/original/avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates_attachment_size :avatar, in: 0..20.megabyte

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

  private
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
