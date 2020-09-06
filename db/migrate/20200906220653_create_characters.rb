class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :race
      t.string :character_class
      t.integer :level
      t.integer :xp
      t.string :alignment

      t.timestamps
    end
  end
end
