class ProductPriceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :amount

  belongs_to :product
end
