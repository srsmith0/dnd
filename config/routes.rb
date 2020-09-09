Rails.application.routes.draw do
  namespace :api do
    get 'armor/:id', to: 'characters#armor'
    get 'weapons/:id', to: 'characters#weapons'
    get 'inventory/:id', to: 'characters#inventory'
    get 'skills/:id', to: 'characters#skills'
    get 'filter_by_class/:character_class', to: 'characters#filter_by_class'
    resources :characters
  end
  end
