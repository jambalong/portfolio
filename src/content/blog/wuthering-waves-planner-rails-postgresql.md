---
title: "Wuthering Waves Planner: Rails + PostgreSQL"
date: "2025-10-26"
description: "A portfolio project combining a materials calculator, database design, and Kamal deployment. Here's my planning and tech choices."
thumbnail: "/images/thumbnails/wuwa_planner.jpg"
readTime: "5 min read"
tags: ["Ruby on Rails", "Web Development", "Project Planning"]
---

Fall quarter started a few weeks ago and I've been picking a portfolio project. I wanted something with actual technical problems to solve, not another CRUD app.

The two options I took seriously were a calisthenics app to track progressive overload and a Wuthering Waves planner. The workout app solves a real problem I have, but the technical work is pretty shallow. The planner has two things I want to figure out: a materials calculator built on a nontrivial pre-seeded database, and a gacha simulator with real probability logic (soft pity, 50/50 guarantees). I finished a Statistics course this summer and I'm currently in Databases, so both of those line up well right now.

![Versus image: Calisthenics App vs. Wuthering Waves Planner.](/images/posts/versus.jpg)
*Calisthenics app on the left, Wuthering Waves planner on the right.*

Stack is Ruby on Rails with PostgreSQL. For deployment I'm using Kamal on a DigitalOcean droplet instead of something managed like Render. I want to know how to run my own deployments, so I'm doing that part first rather than leaving it for the end.

The plan breaks into four phases:

**Phase 0** is getting a Hello World app live and stable on that stack. Infrastructure before anything else.

**Phase 1** is the ascension planner. A form to pick a character, current level, and target level, and a materials shopping list as output. No user accounts yet. I want the calculator working before adding auth.

![Wuthering Waves character ascension screen showing the list of required materials.](/images/posts/ascension.jpg)
*The shopping list problem Phase 1 is built around.*

**Phase 2** is the gacha simulator. The probability logic for soft pity (rates increase after 65 pulls) and the 50/50 system is the part I'm least sure about. It lives mostly on the frontend with StimulusJS.

![Wuthering Waves 'Convene' gacha/pull screen with the buttons.](/images/posts/convene.jpg)
*The pity and probability system behind these pull buttons is what Phase 2 is about.*

**Phase 3** is user accounts via Devise, inventory tracking so the planner subtracts what you already have, and expanding the calculator to cover weapons and skills.

Starting with Phase 0. Writing as I go.
