Rails.application.routes.draw do
  namespace :api do
    get 'armor/:id', to: 'characters#armor'
    get 'weapons/:id', to: 'characters#weapons'
    get 'inventory/:id', to: 'characters#inventory'
    get 'skills/:id', to: 'characters#skills'
    resources :characters
  end
  end
