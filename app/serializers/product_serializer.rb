class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description

  belongs_to :user
end
