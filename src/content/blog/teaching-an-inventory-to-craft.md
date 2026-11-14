---
title: "Teaching an Inventory to Craft"
seoTitle: "3-to-1 Crafting Math in a Rails Service Object"
description: "How Pangu Terminal works out what you can craft from spare lower-tier materials, and the mistakes I made getting there."
date: "2026-03-13"
tags: ["Ruby on Rails", "Service Objects", "Testing"]
---

When I [planned Pangu Terminal](/blog/wuthering-waves-planner-rails-postgresql/), the last phase included inventory tracking "so the planner subtracts what you already have". Subtraction was the easy half. In Wuthering Waves, weapon and skill materials come in four tiers, and three of one tier can be crafted into one of the next. A player with none of a tier and a pile of the tier below isn't really missing anything. I wanted the inventory page to say so.

## Grouping Materials Into Families

The materials table had no idea which items belonged together. Cadence Seed, Cadence Bud, Cadence Leaf and Cadence Blossom were four unrelated rows. I added a column for the family:

```ruby
add_column :materials, :item_group_id, :string
add_index :materials, :item_group_id
```

The seed file fills it in. The seeder takes the name of the rarity-2 item as the group id and carries it forward to the tiers that follow:

```ruby
if grouped && data[:rarity] == 2
  current_group_id = data[:name].parameterize
end
```

All four Cadence items end up with `cadence-seed`. This depends on each family being listed lowest tier first in the seed data. The rest of the seeding setup is in [the schema post](/blog/building-the-pangu-terminal-schema/).

## One Tier Down

The service takes two hashes keyed by material id: what you own and what your plans require. For each required material with a deficit, it looks one tier down in the same family:

```ruby
owned = @owned[lower_tier_material.id] || 0
needed = @required[lower_tier_material.id] || 0
surplus = [ owned - needed, 0 ].max

craftable_count = surplus / 3
```

The `surplus` line is the important one. The lower tier is often required by the same plan, so only what is left after its own requirement can be spent. One of the tests uses these numbers: you own 6 of the rarity-2 item, the plan needs 3 of them and 1 of the rarity-3 item. The surplus is 3, so 1 can be crafted.

I wrote the first version on January 26 with a commit message ending in "needs testing". It took me six days to take my own advice. On February 1 I wrote unit tests for it, then wired it into the inventory page.

## EXP Potions Work the Other Way

EXP potions also come in four tiers, but nothing gets crafted. Any tier can be spent, and each is worth a fixed amount of EXP. A Basic Resonance Potion is worth 1,000 and a Premium one is worth 20,000. Plans state their EXP requirement in basic potions, so the service converts everything you own into EXP and divides:

```ruby
def calculate_exp_satisfaction(material)
  # Plans always express EXP requirements in rarity-2 terms
  return 0 unless material.rarity == 2

  exp_group = @materials.values.select { |m| same_exp_type?(material, m) }
  satisfied_exp = exp_group.sum { |m| (@owned[m.id] || 0) * (m.exp_value || 0) }
  (satisfied_exp / material.exp_value).floor
end
```

One Premium potion counts as 20 Basic ones. The inventory page shows a badge when a requirement is being met by higher tiers.

## A Check That Passed by Accident

To decide whether a material could be crafted at all, the first version had this:

```ruby
material.category.in?("Weapon and Skill Material") &&
  material.material_type.in?(%w[EnemyDrop ForgeryDrop])
```

The second line is a normal use of `in?` with an array. The first line passes a string, and `in?` with a string asks whether the receiver is a substring of it. So the check was "is this category a substring of Weapon and Skill Material". It gave the right answers only because none of the other categories in my seed data is a substring of that one. Wrong code that returns right answers doesn't announce itself. I found it a month later and changed it to `==`.

## The Rewrite

On March 13 I rewrote the service for clarity. The tests came first this time. I added more edge cases, then rewrote, then updated the tests for the renamed keys.

The old version ran a `Material.find_by` for each material it touched and another for each lower tier it looked up. The new one loads its materials once in the initializer and searches them in memory.

The category check went away. Only craftable families get a group id in the seeds, so the column already answers the question:

```ruby
def synthesizable?(material)
  material.item_group_id.present?
end
```

The return value got smaller too. The first version returned a hash describing each crafting opportunity, with the source material's id and name and the surplus available. By the end of February I had cut that hash down to one number. The rewrite returns that number as `craftable_count`, or nil when there is nothing to craft.

The service still only looks one tier down. If you need a rarity-5 item and your spare stock is at rarity 3, it reports nothing.
