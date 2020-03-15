class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description

  attributes :user_id do |object|
  	object.user.id
  end

  belongs_to :user
end
