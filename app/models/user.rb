class User < ApplicationRecord
	has_secure_password

	validates_presence_of :email
	validates_uniqueness_of :email

	has_many :products
	has_many :key_terms, through: :products
end
