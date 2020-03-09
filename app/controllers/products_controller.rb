class ProductsController < ApplicationController

	def index
		@user = User.find(params[:user_id])
		binding.pry
		@products = @user.products
		render json: ProductSerializer.new(@products).serialized_json
	end

	def show
		@user = User.find(params[:user_id])
		@product = @user.products.where(id: params[:id])
		@key_terms = @product.key_terms
		@product_price = @product.product_prices.last
	end
end
