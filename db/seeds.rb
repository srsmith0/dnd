race = ["Dwarf", "Human", "Halfling", "High Elf", "Wood Elf", "Half Orc",]

10.times do
  c = Character.create(
    name: Faker::Games::ElderScrolls.name,
    race: race.sample,
    character_class: Faker::Games::DnD.klass,
    level: rand(1..7),
    xp: rand(3..500),
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
  Equipment.create(
      name: Faker::Games::Pokemon.name,
      description: Faker::GreekPhilosophers.quote,
      armor_class: rand(1..12),
      damage: "4d8",
      range: rand(20..100),
      armor: Faker::Boolean.boolean,
      weapon: Faker::Boolean.boolean,
      character_id: c.id,
  )
  end

  30.times do
  Inventory.create(
    name: Faker::Games::Zelda.item,
    description: Faker::TvShows::RickAndMorty.quote,
    character_id: rand(1..10),
  )
  end 

  puts "seeded!"