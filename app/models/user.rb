class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  # add relations

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
  end

  def is_password?(password)
    self.password_digest == BCrypt::Password.new(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = generate_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generte_token
  end

  def generate_token
    SecureRandom.base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_token
    end
  end
end
