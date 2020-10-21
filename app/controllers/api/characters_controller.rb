class Api::CharactersController < ApplicationController
  def index
    render json: Character.all
  end

  def filter_by_class
    filtered_characters = []
    Character.all.each do |c| 
      if c.character_class == params[:character_class]
        filtered_characters << c 
      end
    end
    render json: filtered_characters 
  end
  
  def show
    character = Character.find(params[:id])
    render json: character
  end

  def destroy
    render json: Character.find(params[:id]).destroy

  end

  def inventory
    render json: Character.set_inventory(params[:id])
  end

  def armor
    render json: Character.set_armor(params[:id])
  end

  def weapons
    render json: Character.set_weapons(params[:id])
  end

  def skills
    render json: Character.set_skills(params[:id])
  end

end
