class CreateEquipment < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.integer :armor_class
      t.string :damage
      t.integer :range
      t.boolean :armor
      t.boolean :weapon

      t.timestamps
    end
  end
end
