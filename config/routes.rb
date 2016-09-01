Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update]

    resources :tracks, only: [:index, :create, :destroy, :update, :create]

    resources :playlists, only: [:index, :create, :destroy, :update, :show] do 
      member do
        post 'add_track'
        delete 'remove_track'
      end
    end
  end

  root to: 'static_pages#root'
end
