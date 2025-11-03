---
layout: post
title: "Next Project: WuWa Planner?!"
date: 2025-10-26
thumbnail: /images/thumbnails/wuwa_planner.jpg
---

It's been **severals** weeks since Fall quarter started, and I've carved out some time to build a fun portfolio project. I had an itch to build something new, something that challenges me, and helps me learn **further**. The goal was clear: I wanted to create an app that was not just functional, but genuinely interesting to me, to ensure that I'd stick to it from start to finish. I wanted to gain a solid learning experience and a tangible demonstration of my abilities.

The process of figuring out that a `"Wuthering Waves Planner"` is what spoke to me wasn't instant. It involved a bit of brainstorming, a dash of self-assessment, and a healthy dose of what I was currently passionate about outside of coding.

## Brainstorming Phase: So What Do I Want to Build?

I initially thought wide, so I considered a few different paths:

- **A task manager**: I've been interested in having a tool fr time-blocking, since I wanted assistance in being a bit more productive. It so happened that I worked on a time management design throughout my UX Design course. But ultimately, I wanted something a bit more unique than another `to-do app`.

- **An inventory system**: I was tasked to track some tech inventory during Summer, so I thought rather than a spreadsheet perhaps I could build an app with a `map overview` of the equipment's location. But it didn't spark that immediate _“I need to build this!”_ feeling.

- **A personal finance tracker**: Could be complex, I've been enjoying using `YNAB` and thought of building a similar one. But I didn't have any pain points with the app, and I worried I'd just end up with a simple `CRUD` project.

This process helped me narrow it down to two very strong contenders, both of which were tied directly to my personal hobbies.

{% render "post_image",
  path: "/images/posts/versus.jpg",
  alt: "Versus image: Calisthenics App vs. Wuthering Waves Planner.",
  max_height: "400px",
  caption: "The final showdown: A practical workout app vs. a complex gacha planner."
%}

## The Showdown: Calisthenics vs Gacha

On one hand, I had the calisthenics workout app. As someone who's been training for 4-5 months, I have a real need for a personalized app to track `progressive overload` and progression. This is a great, practical idea that I was geniunely passionate about.

While on the other hand, I had the **Wuthering Waves Planner**. I've been playing the game recently, and I saw two clear challenges: the complex "shopping list" calculation for ascension materials and the puzzle of simulating the `gacha system`.

## Why the Wuthering Waves Planner Won!

While the calisthenics app solved a personal problem, the Wuthering Waves planner gave me a more unique set of _technical challenges_.

The calisthenics app would be focused on tracking user-inputted data over time and possible integration with an exercise API. The WuWa planner, however, would challenge me to learn complex backend queries on a static, pre-seeded database and build an interactive frontend component with probability logic (the simulator). After having gone through a `Statistics` course during summer and currently studying a `Database` course this fall, I thought it would be fun to reinforce the two subjects.

----

# Defining the Roadmap: From Scratch to MVP

Just picking a project wouldn't be enough. To avoid the pitfall of getting overwhelmed and ensure that I actually finish it, I knew I needed a clear roadmap. I learned that for any portfolio project, I shouldn't try to build everything at once.

So, I broke the "Wuthering Waves Planner" down into `four distinct phases`. Each phase has a clear goal, separates the different set of technical skills, and builds on top of the previous phase.

_But first, what are my tools?_

## The Technology Stack

Because I'm focused on mastering backend logic and just love to play with Ruby.. then **Ruby on Rails** was the clear choice.

- **Backend: `Ruby on Rails`** (This will be the core of the project).

- **Database: `PostgreSQL`** (Production-level standard for Rails, and perfect for practicing the database concepts I'm learning).

- **Deployment: `Kamal`** (for container-based deployment) and a **`DigitalOcean Droplet (VPS)`**. Instead of an easier **Platform-as-a-Service (PaaS)** like _Render_ or _Fly.io_, I'm specifically choosing this route. I want to learn how to manage my own deployments from scratch on a server, and this is another key learning goal for the project.

With the tools chosen, here's the gameplan:

## Phase 0: The Infrastructure ("Hello, World!")

**The Goal:** Get a **`"Hello, World!"` app** live and stable using the production deployment stack.

**Why?** By setting up the deployment pipeline before I have any complex code, I'm front-loading one of the biggest technical challenges. I would love to learn how to get a working, `deployable app from Day 1`, rather saving all the infrastructure headaches in the end.

{% render "post_image",
  path: "/images/posts/ascension.jpg",
  alt: "Wuthering Waves character ascension screen showing the list of required materials.",
  max_height: "400px",
  caption: "The exact 'shopping list' problem that Phase 1 (The Ascension Planner) is designed to solve."
%}

## Phase 1: The Ascension Planner

**The Goal:** Pure backend and database mastery 🔥🔥🔥

This is the foundation that all future features will be built on. And it will be a single, public-facing tool which means anyone can use it outright without an account. The most important part of this phase is keeping it focused and working. By _intentionally not_ building user accounts or logins, I'm avoiding a huge source of complexity and making sure I finish this core feature. There are drawbacks, but I'd love to get it working first.

The core features will be:

1. Static Data: I'll create a `seeds.rb` file and pre-populate the database with all the static game data (e.g. Characters, Materials, and their relationships).

2. The Calculator: A simple form with three forms:
  - Select `Character`
  - Select `Current Level`
  - Select `Goal Level`

3. The "Shopping List": When the user submits the form, the page will reload and show the total summed quantity of every material needed.

To keep this phase achievable, the scope is only for character ascension. It will not calculate materials for weapons or character skills; those are stretch goals for Phase 3.

{% render "post_image",
  path: "/images/posts/convene.jpg",
  alt: "Wuthering Waves 'Convene' gacha/pull screen with the buttons.",
  max_height: "400px",
  caption: "The challenge for Phase 2: accurately simulating the complex probability and pity systems behind these pull buttons."
%}

## Phase 2: The Simulator

**The Goal:** Frontend and algorithmic logic mastery 🧨🧨🧨

After the planner is built and deployed, I'll add the Gacha Simulator as a new tab. This is where I'll dive deep into JavaScript using `StimulusJS`. The challenge here isn't the database, but writing the complex probability logic to _accurately_ simulate the game's gacha system.

The core features will be:

- **Base pull rates** (5-star, 4-star, 3-star)

- **Soft Pity** (increasing 5-star chance after 65 pulls)

- **Hard Pity** (the 100% 5-star guarantee at 80 pulls)

- **The 50/50 System** (tracking if the last 5-star was the limited character)

The app will have to manage the user's `state` (their pity count and 50/50 status) as they click the `[Pull 1]` and `[Pull 10]` buttons.

## Phase 3: The Polish

**The Goal:** Showcase I can build a mature, full-feature application 👑👑👑

These are the bells and whistles, for after the first two phases are rock-solid. And it would turn this tool into a true _application_:

- **User Accounts:** Adding `Devise` gem to let users signup, login, and save their plans.

- **Inventory Tracking:** Allowing users to input current materials, and the Planner will subtract that from the `total amount needed` list.

- **Expand Data:** These are new, separate planners or extensions:
    - `Weapon Ascension`
    - `Character Skills`

- **Connect the Features:** When a user "pulls" a new character using the simulator, the app would ask, "Add \[Character] to your planner?"

----

By breaking it down this way, the project feels ambitious but, most importantly, achievable. I'm starting with the infrastructure in `Phase 0` and will document my progress as I go.

Time to get that server provisioned.