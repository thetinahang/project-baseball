class UsersController < ApplicationController
	skip_before_action :require_login, only: [:create]

#	def find
#	   @user = User.find_by(email: params[:user][:email])
#	   if @user
#	     render json: @user
#	   else
#	     @errors = @user.errors.full_messages
#	     render json: @errors
#	   end
#	end
#	
#	def show
#		@user = User.find(params[:id]) 
##		if session[:current_user_id] == @user.id
#			render json: UserSerializer.new(@user)
##		else
##			render json: { errors: "Not authorized" }
##		end
#	end

	def create
		user = User.create(user_params)
		if user.valid?
			payload = {user_id: user.id}
			token = encode_token(payload)
			render json: {user: user, jwt: token}
		else
			render json: {errors: user.errors.full_messages}, status: :not_acceptable
		end
	end

	private

	def user_params
		params.permit(:email, :password)
	end
end
