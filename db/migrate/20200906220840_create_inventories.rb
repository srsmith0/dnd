class CreateInventories < ActiveRecord::Migration[6.0]
  def change
    create_table :inventories do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
