class ProductPrice < ApplicationRecord
  belongs_to :product

  def price_dollars
  	self.price.to_f / 100
  end

  def price_dollars=(val)
  	self.price = val * 100
  end
end
