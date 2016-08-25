class User < ActiveRecord::Base

  has_many :properties
  has_many :reviews

  attr_reader :password

  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  # add relations

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_token
    end
  end

  def reset_token!
    self.session_token = generate_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.base64(16)
  end
end
