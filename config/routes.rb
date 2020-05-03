Rails.application.routes.draw do
  resources :product_prices
  # resources :key_terms
  # resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#  resources :sessions, only: [:create]
#  resources :registrations, only: [:create]
#  delete :logout, to: 'sessions#logout'
#  get :logged_in, to: 'sessions#logged_in'

#  scope '/api' do
  	resources :users do 
	  	resources :products do
	  		resources :key_terms
        resources :product_prices
	  	end
    end
#    post 'user_token', to: 'user_token#create'
#    post 'find_user', to: 'users#find'
#  end

  # resource :users, only: [:create]
  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"
end
