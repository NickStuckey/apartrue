Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :properties, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy]
  end
end
