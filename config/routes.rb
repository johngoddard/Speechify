Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update]

    resources :tracks, only: [:index, :create, :destroy, :update, :create]
  end

  root to: 'static_pages#root'
end
