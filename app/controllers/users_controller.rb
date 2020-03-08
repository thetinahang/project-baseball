class UsersController < ApplicationController

	def show
		@user = User.find(params[:id]) 
#		if session[:current_user_id] == @user.id
			render json: UserSerializer.new(@user)
#		else
#			render json: { errors: "Not authorized" }
#		end
	end
end
