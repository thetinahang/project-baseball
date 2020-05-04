class ProductsController < ApplicationController
	def index
		binding.pry
		@user = User.find(params[:user_id])
		if @user.present? && @user == session_user
			@products = @user.products
			render json: ProductSerializer.new(@products).serialized_json
		else
			render json: {message: "No products found"}
		end
	end

	def show
		@user = User.find(params[:user_id])
		if @user.present? && @user == session_user
			@product = @user.products.where(id: params[:id])
			render json: ProductSerializer.new(@product).serialized_json
		else
			render json: {message: "No products found"}
		end
	end
end
