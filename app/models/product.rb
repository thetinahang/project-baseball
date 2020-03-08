class Product < ApplicationRecord
  belongs_to :user

  has_many :key_terms
end
