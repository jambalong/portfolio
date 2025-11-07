---
# Feel free to add content and custom Front Matter to this file.

layout: default

ruby: ruby.svg
javascript: javascript.svg
html: html5.svg
css: css3.svg
ruby_on_rails: ruby_on_rails.svg
hotwire: hotwire.png
react: react.svg
tailwind: tailwind.svg
godot_engine: godot_engine.svg
rspec: rspec.svg
git: git.svg
neovim: neovim.svg
github_actions: github_actions.svg
docker: docker.svg
kamal: kamal.png
linux: linux.svg

pebble_list: pebble_list.png
portfolio: portfolio_page.png
pounce: project_pounce.png
chess: chess_cli.png

---

# Developer **|** Ruby & Rails **|** WA, USA

----

# About Me

Hi, I’m **John-Alvin**, a Full Stack Developer specializing in Ruby on Rails. Coding truly fuels my soul, and the thrill of continuous learning is absolutely addictive! Driven and constantly seeking to deepen my knowledge, I thrive on embracing new challenges. My interest in cybersecurity, particularly devops, informs my approach to building more robust and secure applications that solve real-world problems.

I value clear communication and actively seek opportunities to share insights and connect with fellow developers. Explore my projects on [GitHub](https://github.com/jambalong) and follow my programming adventures and learning experiences on [my blog](/blog). Beyond professional development, my hobby in game development broadens my creative problem-solving skills.

When not coding, you'll find me engrossed in a good book 📚 or exploring new recipes in the kitchen 🔪.

----

# Skills

<div class="skills-container">
  <div class="skill">
    <img src="/images/logos/{{ data.ruby }}" alt="Ruby" class="skill-icon">
    <span class="skill-name">Ruby</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.ruby_on_rails }}" alt="Ruby on Rails" class="skill-icon">
    <span class="skill-name">Ruby on Rails</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.hotwire }}" alt="Hotwire" class="skill-icon">
    <span class="skill-name">Hotwire</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.javascript }}" alt="JavaScript" class="skill-icon">
    <span class="skill-name">JavaScript</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.react }}" alt="React" class="skill-icon">
    <span class="skill-name">React</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.html }}" alt="HTML" class="skill-icon">
    <span class="skill-name">HTML</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.css }}" alt="CSS" class="skill-icon">
    <span class="skill-name">CSS</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.tailwind }}" alt="Tailwind" class="skill-icon">
    <span class="skill-name">Tailwind</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.godot_engine }}" alt="Godot Engine" class="skill-icon">
    <span class="skill-name">Godot Engine</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.rspec }}" alt="RSpec" class="skill-icon">
    <span class="skill-name">RSpec</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.git }}" alt="Git" class="skill-icon">
    <span class="skill-name">Git</span>
  </div>
  <!-- <div class="skill">
    <img src="/images/logos/{{ data.neovim }}" alt="Neovim" class="skill-icon">
    <span class="skill-name">Neovim</span>
  </div> -->
  <div class="skill">
    <img src="/images/logos/{{ data.github_actions }}" alt="GitHub Actions" class="skill-icon">
    <span class="skill-name">GitHub Actions</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.docker }}" alt="Docker" class="skill-icon">
    <span class="skill-name">Docker</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.kamal }}" alt="Kamal" class="skill-icon">
    <span class="skill-name">Kamal</span>
  </div>
  <div class="skill">
    <img src="/images/logos/{{ data.linux }}" alt="Linux" class="skill-icon">
    <span class="skill-name">Linux</span>
  </div>
</div>

----

# Projects

## Project Pounce

### **[YouTube Video](https://www.youtube.com/watch?v=RiQhABsLiw0)**

### **[GitHub Repository](https://github.com/jambalong/project_pounce)**

#### _GDScript, Godot Engine_

<img src="/images/projects/{{ data.pounce }}" alt="Project Pounce thumbnail" class="project-screenshot">

- In-development **Celeste-like platformer** built in *Godot 4.2* using **GDScript**.

- Features a **custom platformer physics system** to achieve smooth, responsive, and precise character movement.

- Includes a **level management system** for seamless and consistent transitions between puzzle stages.

- **Core Concept**: Players control a cat, navigating levels that emphasize core platformer skills, aiming for an enjoyable feline adventure with charming visuals and playful mechanics.

<br/>

## Chess CLI

### **[GitHub Repository](https://github.com/jambalong/chess)**

#### _Ruby, RSpec_

<img src="/images/projects/{{ data.chess }}" alt="Chess CLI thumbnail" class="project-screenshot">

- **Game Logic:** Built a functional command-line chess game designed for one player against a computer, implemented purely in **Ruby**.

- Implements logic to **prevent illegal moves** based on piece movement rules, ensuring game integrity.

- Correctly determines and declares **check and checkmate** scenarios during gameplay.

- Emphasized **modular class design** and **Single Responsibility Principle (SRP)** for high code maintainability across core game objects (Board, Pieces, Player).

- **Testing:** Utilizes **RSpec** to test critical components and methods, ensuring reliability and facilitating efficient debugging.

<br/>

## Pebble List

## **[Live Demo](https://jambalong.github.io/pebble-list/)**

### **[GitHub Repository](https://github.com/jambalong/pebble-list)**

#### _React, JavaScript, CSS_

<img src="/images/projects/{{ data.pebble_list }}" alt="Pebble List thumbnail" class="project-screenshot">

- Built a functional single-page **Task List application** using **React** and the `useState` hook for state management.

- Implements core **CRUD (Create, Read, Update, Delete)** functionality for tasks.

- **Creation:** New tasks are added via the `handleAddTask` function, prepending them to the list.

- **Update/Toggle:** Tasks can be marked as complete/incomplete using `handleToggleComplete`, which maps over the array to update state immutably.

- **Deletion:** The `handleDeleteTask` function filters the tasks array to remove a selected item.

- The architecture demonstrates **component-based design**, utilizing `TaskInput`, `TaskList`, and more components to separate concerns.

<br>

## Portfolio Website

### **[GitHub Repository](https://github.com/jambalong/portfolio)**

#### _Bridgetown, Ruby, HTML, CSS, JavaScript_

<img src="/images/projects/{{ data.portfolio }}" alt="Portfolio Website thumbnail" class="project-screenshot">

- **Architecture:** Developed this personal portfolio website using **Bridgetown** for modern **Static Site Generation (SSG)**, hosted on DigitalOcean.

- Utilized **Ruby** and **Markdown** for dynamic content injection, template rendering, and streamlined content management.

- Implemented **HTML** and **CSS** for structured layout and styling, ensuring the design is fully responsive across mobile and desktop breakpoints.

- **Navigation (Mobile):** Utilized **JavaScript** to implement a dynamic **hamburger menu** that toggles visibility, significantly improving navigation and user experience on mobile screens.

- Managed codebase changes and history using **Git** for version control.
