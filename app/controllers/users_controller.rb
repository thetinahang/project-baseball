class UsersController < ApplicationController
	def find
	   @user = User.find_by(email: params[:user][:email])
	   if @user
	     render json: @user
	   else
	     @errors = @user.errors.full_messages
	     render json: @errors
	   end
	end
	
	def show
		@user = User.find(params[:id]) 
#		if session[:current_user_id] == @user.id
			render json: UserSerializer.new(@user)
#		else
#			render json: { errors: "Not authorized" }
#		end
	end
end
