class ProductPrice < ApplicationRecord
  belongs_to :product

  def price_dollars
  	self.amount.to_f / 100
  end

  def price_dollars=(val)
  	self.amount = val * 100
  end
end
