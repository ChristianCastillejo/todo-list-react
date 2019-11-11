Rails.application.routes.draw do
  resources :todos do
    resources :items
  end
  post 'login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
  get 'loggedinuser', to: 'users#current'
end
