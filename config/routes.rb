Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:show, :index, :create, :destroy] do
      resources :likes, only: [:create]
    end
    resources :likes, only: [:destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
