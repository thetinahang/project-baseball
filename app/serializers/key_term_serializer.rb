class KeyTermSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :value

  belongs_to :product
end
