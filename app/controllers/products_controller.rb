class ProductsController < ApplicationController

	def index
		@user = User.find(params[:user_id])
		@products = user.products
	end

	def show
		@user = User.find(params[:user_id])
		@product = user.products.where(id: params[:id])
		@key_terms = @product.key_terms
		@product_price = @product.product_prices.last
	end
end
