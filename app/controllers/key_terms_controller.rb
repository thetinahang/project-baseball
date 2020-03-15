class KeyTermsController < ApplicationController
	def index
		@user = User.find(params[:user_id])
		@product = @user.products.find(params[:product_id])
		@key_terms = @product.key_terms
		render json: KeyTermSerializer.new(@key_terms).serialized_json
	end
end
