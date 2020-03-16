class ProductsController < ApplicationController

	def index
		@user = User.find(params[:user_id])
		@products = @user.products
		render json: ProductSerializer.new(@products).serialized_json
	end

	def show
		@user = User.find(params[:user_id])
		@product = @user.products.where(id: params[:id])
		render json: ProductSerializer.new(@product).serialized_json
	end
end
