Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :session, only: [:create, :destroy]
    resources :user, only: [:create, :destroy]
  end
end
