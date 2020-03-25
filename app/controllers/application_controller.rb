class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection

	protect_from_forgery with: :exception
	skip_before_action :verify_authenticity_token
end
