Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/create'
      get 'activities/index'
      get 'activities/create'
      resources :activities, only: [:index, :create]
      resources :users, only: [:create]
    end
  end
end
