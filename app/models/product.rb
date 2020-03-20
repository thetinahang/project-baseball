class Product < ApplicationRecord
  belongs_to :user

  has_many :key_terms
  has_many :product_prices
end
