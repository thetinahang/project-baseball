class ProductPricesController < ApplicationController
	def index
		@user = User.find(params[:user_id])
		@product = @user.products.find(params[:product_id])
		@product_prices = @product.product_prices
		render json: ProductPriceSerializer.new(@product_prices).serialized_json
	end
end
