race = ["Dwarf", "Human", "Halfling", "High Elf", "Wood Elf", "Half Orc", "Orc"]
armor = ["Leather Helmet", "Iron Helmet", "Shield", "Chainmail", "Leather Armor", "Mage's Robe", "Wizard Hat", "Iron Gauntlets", "Hide Gauntlets", "Leather Bracers" ]
weapons = ["Warhammer","Long Bow", "Short Bow", "Iron Sword", "Greatsword", "Greataxe", "Javelin", "Iron Mace", "Steel Dagger", "Wooden Crossbow"]

32.times do
  c = Character.create(
    name: Faker::Games::ElderScrolls.name,
    race: race.sample,
    character_class: Faker::Games::DnD.klass,
    level: rand(1..20),
    xp: rand(3..2000),
    alignment: Faker::Games::DnD.alignment,
  )
  Skill.create(
    strength: rand(8..16),
    dexterity: rand(8..16),
    constitution: rand(8..16),
    intelligence: rand(8..16),
    wisdom: rand(8..16),
    charisma: rand(8..16),
    speed: rand(8..16),
    character_id: c.id,
  )
  #creates armor
  3.times do Equipment.create(
      name: armor.sample,
      description: Faker::Lorem.sentences(number: 2).join(' '),
      armor_class: rand(1..12),
      damage: 0,
      range: 0,
      armor: true,
      weapon: false,
      character_id: c.id,
  )
  #creates weapons
  Equipment.create(
    name: weapons.sample,
    description: Faker::Lorem.sentences(number: 2).join(' '),
    armor_class: 0,
    damage: "#{rand(1..5)}d#{rand(3..12)}",
    range: rand(20..100),
    armor: false,
    weapon: true,
    character_id: c.id,
)
  end
  
  9.times do
    Inventory.create(
      name: Faker::Hipster.words(number: rand(1..4)).join(' '),
      description: Faker::Lorem.sentences(number: 3).join(' '),
      character_id: c.id,
    )
    end 
  end



  puts "seeded!"