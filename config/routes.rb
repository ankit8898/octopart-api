Rails.application.routes.draw do
  #resources :search,only: [:index]

  namespace :api do
    get '/search' => 'search#index', :as => 'search'
  end
end
