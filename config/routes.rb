Rails.application.routes.draw do
  resources :key_terms
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
end
