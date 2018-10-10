Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :index] do
      resource :follow, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:show, :index, :update, :create, :destroy] do
      resource :like, only: [:create, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
