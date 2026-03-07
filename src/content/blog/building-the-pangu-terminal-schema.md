---
title: "Building the Pangu Terminal Schema"
date: "2025-12-08"
description: "How I modeled a complex game dataset in PostgreSQL: cost tables, mapping tables, JSONB outputs, and the seeding patterns that kept it maintainable."
thumbnail: "/images/thumbnails/pangu_schema.jpg"
readTime: "6 min read"
tags: ["Ruby on Rails", "PostgreSQL", "Database Design", "Project Planning"]
---

With the app live and stable after [the deployment battle](/blog/rails-kamal-deployment-errors), it was finally time to actually build something. And the first real decision wasn't writing a single line of application code. It was figuring out the database.

I knew from the start that Pangu Terminal was going to be data-heavy. The whole point of the planner is to calculate exactly how many materials a player needs to fully ascend a character or weapon. That means I needed the game's data modeled accurately and queryable, all of it, before I could write a single calculator method.

So I sat down and asked: *what are my entities?*

## Starting with the "Who" and "What"

The two main subjects in the planner are **Resonators** (characters) and **Weapons**. Those were obvious. Then you have **Materials**, the items you collect to actually do the ascending. That's the core of it: who needs what.

But "who needs what" wasn't enough. I also needed to know *how much* at each level. This is where the schema started getting wider. Resonators have four distinct upgrade tracks: level costs, ascension costs, skill costs, and Forte Node costs. Weapons are simpler: just levels and ascension. Each of those became its own cost table.

At this point the schema looked roughly like this:

```
Resonator                 Weapon
    |                       |
ResonatorAscensionCost  WeaponAscensionCost
LevelCost               LevelCost
SkillCost
ForteNodeCost
```

And then I needed mapping tables, the layer that answers "Resonator A needs *which specific* materials." Since each resonator uses a unique set of boss drops and regional specialties, I couldn't just hardcode that into the cost tables. `ResonatorMaterialMap` and `WeaponMaterialMap` handled that. There's also `WeaponTypeMaterial` for materials shared across a weapon category.

By the time the core schema was done, I had 10+ tables before a single user-facing model existed.

## The Seeding Problem

I had seeded databases before on smaller learning projects, but nothing like this. Wuthering Waves has a lot of resonators, each with their own materials, cost progressions, and Forte Node configurations. Doing this without thought, just writing a `create!` call for every single record, works fine until you need to rerun your seeds. And I had to rerun them constantly during development.

A few things I landed on to keep it sane:

**Split the seeds into multiple files.** Instead of one massive `seeds.rb`, I organized them into numbered files that run in order: `01_resonators.rb`, `02_weapons.rb`, `03_materials.rb`, and so on. The main `seeds.rb` just finds and loads them in sorted order. This made it much easier to update one section without touching everything else, and it's immediately obvious where to look when game data changes.

**Use data structures and loop through them.** Rather than writing individual `create!` calls, I defined the data as constants (hashes or arrays) and looped through them with a seeder function. Keeps it DRY. Adding a new resonator means adding one hash entry, not writing 15 new lines.

**Use `find_or_initialize_by` with an update after.** If I rerun seeds (and I had to do this constantly during development), I don't want duplicate records. But I also want updates to actually apply if I corrected a value. So the pattern became: find or initialize by the stable identifier, then update the attributes you care about.

```ruby
resonator = Resonator.find_or_initialize_by(name: data[:name])
resonator.update!(
  rarity: rarity,
  element: element,
  weapon_type: data[:weapon_type],
  image_url: "/images/resonators/#{filename}.png"
)
```

It's not fancy, but it's reliable. Rerunning seeds never broke anything.

**Wrap the whole thing in a transaction.** The main `seeds.rb` runs everything inside `ActiveRecord::Base.transaction`. If any file fails mid-seed, the entire database rolls back to a clean state. No half-seeded data to debug.

```ruby
ActiveRecord::Base.transaction do
  $SEED_DATA = {}
  Dir[Rails.root.join("db", "seeds", "*.rb")].sort.each do |file|
    load file
  end
rescue StandardError => e
  raise ActiveRecord::Rollback
end
```

The `$SEED_DATA` global hash is also worth explaining. Each seeded record gets stored in it by a snake_case lookup key: `$SEED_DATA[:jiyan]`, `$SEED_DATA[:shell_credit]`, etc. The mapping tables in later seed files use this hash to look up already-created records instead of hitting the database again mid-seed. It's a simple pattern but it made the mapping files a lot cleaner.

One edge case worth mentioning: the Rover resonator needed a custom ascension cost template. Every other resonator follows a standard progression, but Rover is the player character and has different costs at certain ranks. Rather than hacking the standard template to handle an exception, I created a separate `RoverAscensionCost` template for it. It's a small thing but it's the kind of real-world messiness that shows up in any dataset with enough records.

## JSONB for Planner Output

One schema decision I went back and forth on was how to store the output of the planner calculations. When a user creates a plan, the result is essentially a shopping list: a bunch of materials with quantities.

The two options were a traditional join table (a `plan_materials` table with `material_id` and `quantity`) or a JSONB column directly on the Plan model.

I went with JSONB, and I'm glad I did. The join table approach was tempting because it feels more "correct" relationally. You get foreign keys, you can query by material, you can validate at the database level. But the planner output isn't really relational data. It's a calculation result. A snapshot of "here's what you need right now based on your current levels." Storing it as a proper join table would mean writing and deleting rows every time the plan gets recalculated, which adds complexity for no real benefit. The output from the calculator is already a Ruby hash of material IDs mapped to quantities, and JSONB is a natural fit. It just deserializes back into a hash whenever you need it.

The column is `plan_data`, and the calculator output lives under an `"output"` key inside it:

```ruby
# plan.plan_data["output"] looks like:
{
  "42" => 46,   # material_id => quantity
  "17" => 40,
  "1"  => 210000,
  ...
}
```

If I ever needed to query across all plans to find "which plans require material X," a join table would be the right call. But for calculating and displaying a single plan's shopping list, JSONB keeps it simple.

## What I'd Do Differently

The main thing I've reconsidered is the cost tables. I ended up with five separate tables for cost progression data that never changes: `LevelCost`, `ResonatorAscensionCost`, `SkillCost`, `ForteNodeCost`, and `WeaponAscensionCost`. Since this is static game data, you could make a reasonable argument for collapsing some of these into a single table with a `type` column. Fewer tables, same queryability, simpler seeds.

The mapping tables are similar. `ResonatorMaterialMap`, `WeaponMaterialMap`, and `WeaponTypeMaterial` might be consolidatable depending on how different the relationships actually are. I haven't done it because the calculator services are built on top of the current structure and refactoring has no practical upside right now. But if I were starting fresh, I'd think harder about it before normalizing that aggressively for data that never moves.

The JSONB decision I'd make the same way again.