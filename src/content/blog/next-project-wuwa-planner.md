---
title: "Next Project: WuWa Planner?!"
date: "2025-10-26"
description: "Choosing a portfolio project that balances personal passion with technical challenges in Ruby on Rails and probability logic."
thumbnail: "/images/thumbnails/wuwa_planner.jpg"
readTime: "7 min read"
tags: ["Ruby on Rails", "Web Development", "Project Planning"]
---

It has been several weeks since the Fall quarter started, and I have finally carved out time to build a new portfolio project. I had an itch to build something that challenges me and helps me learn further. 

The goal was clear: I wanted to create an app that was not just functional, but genuinely interesting to me. I wanted to ensure I would stick to it from start to finish while gaining a tangible demonstration of my abilities.

The process of choosing a "Wuthering Waves Planner" was not instant. It involved brainstorming, self-assessment, and a healthy dose of what I am currently passionate about outside of coding.

## Brainstorming Phase

I initially thought widely and considered a few different paths:

* **A task manager**: I have been interested in time-blocking tools since working on a design in my UX course. Ultimately, I wanted something more unique than another to-do app.
* **An inventory system**: After tracking tech inventory over the summer, I considered building an app with a map overview of equipment locations. However, it didn't spark that immediate "I need to build this" feeling.
* **A personal finance tracker**: I enjoy using YNAB and thought about building something similar. I worried, however, that I would just end up with a simple CRUD project without enough unique pain points to solve.

This process helped me narrow it down to two strong contenders tied directly to my personal hobbies.

![Versus image: Calisthenics App vs. Wuthering Waves Planner.](/images/posts/versus.jpg)
*The final showdown: A practical workout app versus a complex gacha planner.*

## The Showdown: Calisthenics vs Gacha

On one hand, I had the calisthenics workout app. As someone who has been training for several months, I have a real need for a personalized app to track progressive overload. It was a practical, passion-driven idea.

On the other hand, I had the **Wuthering Waves Planner**. I have been playing the game recently and saw two clear technical challenges: the complex "shopping list" calculation for ascension materials and the puzzle of simulating the gacha probability system.

## Why the Wuthering Waves Planner Won

While the calisthenics app solved a personal problem, the Wuthering Waves planner offered a more unique set of technical challenges.

The planner challenges me to learn complex backend queries on a pre-seeded database and build interactive frontend components with probability logic. After finishing a Statistics course this summer and currently studying Databases, I thought it would be fun to reinforce those two subjects.

---

## Defining the Roadmap

Just picking a project is not enough. To avoid getting overwhelmed, I knew I needed a clear roadmap. I learned that for any portfolio project, I should not try to build everything at once. 

I broke the planner down into four distinct phases. Each phase has a clear goal and builds on the previous one.

### The Technology Stack

Because I am focused on mastering backend logic, **Ruby on Rails** was the clear choice.

* **Backend:** Ruby on Rails (the core of the project).
* **Database:** PostgreSQL (the production-level standard for Rails).
* **Deployment:** Kamal for container-based deployment on a DigitalOcean Droplet. 

Instead of an easier platform like Render, I am specifically choosing this route. I want to learn how to manage my own deployments from scratch on a VPS.

## Phase 0: The Infrastructure

**The Goal:** Get a "Hello, World!" app live and stable using the production deployment stack.

By setting up the deployment pipeline before writing complex code, I am front-loading one of the biggest technical challenges. I would love to learn how to get a deployable app working from Day 1, rather than saving infrastructure headaches for the end.

![Wuthering Waves character ascension screen showing the list of required materials.](/images/posts/ascension.jpg)
*The exact "shopping list" problem that Phase 1 (The Ascension Planner) is designed to solve.*

## Phase 1: The Ascension Planner

**The Goal:** Pure backend and database mastery.

This is the foundation for all future features. It will be a public-facing tool, meaning anyone can use it without an account. By intentionally not building user accounts yet, I am avoiding early complexity to ensure I finish the core feature.

1.  **Static Data:** I will create a `seeds.rb` file to pre-populate the database with game data like characters and materials.
2.  **The Calculator:** A simple form to select a character, current level, and goal level.
3.  **The Shopping List:** When submitted, the page will show the total summed quantity of every material needed.

## Phase 2: The Simulator

**The Goal:** Frontend and algorithmic logic mastery.

After the planner is deployed, I will add the Gacha Simulator. This is where I will dive into JavaScript using **StimulusJS**. The challenge here is writing the probability logic to accurately simulate the game's system, including soft pity (increasing chances after 65 pulls) and the "50/50" guarantee system.

![Wuthering Waves 'Convene' gacha/pull screen with the buttons.](/images/posts/convene.jpg)
*The challenge for Phase 2: accurately simulating the complex probability and pity systems behind these pull buttons.*

## Phase 3: The Polish

**The Goal:** Showcase a mature, full-feature application.

These are the features that turn a tool into a true application:

* **User Accounts:** Using the Devise gem to let users save their plans.
* **Inventory Tracking:** Allowing users to input current materials so the planner can subtract them from the total needed.
* **Expanded Data:** Adding weapons and character skills to the calculator.

---

By breaking it down this way, the project feels ambitious but achievable. I am starting with the infrastructure in Phase 0 and will document my progress as I go. 

Time to get that server provisioned.