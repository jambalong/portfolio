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
portfolio_website: portfolio_website.png
whisker_dash: whisker_dash.png
ruby_chess: ruby_chess.png

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

## Whisker Dash

<div class="project-layout">
  
  <div class="project-media">
    <h3><strong><a href="https://www.youtube.com/watch?v=RiQhABsLiw0">YouTube Video</a></strong></h3>
    <h3><strong><a href="https://github.com/jambalong/project_pounce">GitHub Repository</a></strong></h3>
    <h4><em>GDScript, Godot Engine</em></h4>
    <img src="/images/projects/{{ data.whisker_dash }}" alt="Whisker Dash thumbnail" class="project-screenshot">
  </div>

  <div class="project-description">
    <ul>
      <li>In-development <strong>Celeste-like platformer</strong> built in <em>Godot 4.2</em> using <strong>GDScript</strong>.</li>
      <br/>
      <li>Features a <strong>custom platformer physics system</strong> to achieve smooth, responsive, and precise character movement.</li>
      <br/>
      <li>Includes a <strong>level management system</strong> for seamless and consistent transitions between puzzle stages.</li>
      <br/>
      <li><strong>Core Concept</strong>: Players control a cat, navigating levels that emphasize core platformer skills, aiming for an enjoyable feline adventure with charming visuals and playful mechanics.</li>
    </ul>
  </div>

</div>
<br/>
<div class="divider"></div>

## Ruby Chess

<div class="project-layout">
  
  <div class="project-media">
    <h3><strong><a href="https://github.com/jambalong/chess">GitHub Repository</a></strong></h3>
    <h4><em>Ruby, RSpec</em></h4>
    <img src="/images/projects/{{ data.ruby_chess }}" alt="Ruby Chess thumbnail" class="project-screenshot">
  </div>

  <div class="project-description">
    <ul>
      <li><strong>Game Logic:</strong> Built a functional command-line chess game designed for one player against a computer, implemented purely in <strong>Ruby</strong>.</li>
      <br/>
      <li>Implements logic to <strong>prevent illegal moves</strong> based on piece movement rules, ensuring game integrity.</li>
      <br/>
      <li>Correctly determines and declares <strong>check and checkmate</strong> scenarios during gameplay.</li>
      <br/>
      <li>Emphasized <strong>modular class design</strong> and <strong>Single Responsibility Principle (SRP)</strong> for high code maintainability across core game objects (<code>Board</code>, <code>Pieces</code>, <code>Player</code>).</li>
      <br/>
      <li><strong>Testing:</strong> Utilizes <strong>RSpec</strong> to test critical components and methods, ensuring reliability and facilitating efficient debugging.</li>
    </ul>
  </div>

</div>
<br/>
<div class="divider"></div>

## Pebble List

<div class="project-layout">
  
  <div class="project-media">
    <h3><strong><a href="https://jambalong.github.io/pebble-list/">Live Demo</a></strong></h3>
    <h3><strong><a href="https://github.com/jambalong/pebble-list">GitHub Repository</a></strong></h3>
    <h4><em>React, JavaScript, CSS</em></h4>
    <img src="/images/projects/{{ data.pebble_list }}" alt="Pebble List thumbnail" class="project-screenshot">
  </div>

  <div class="project-description">
    <ul>
      <li>Built a functional single-page <strong>Task List application</strong> using <strong>React</strong> and the <code>useState</code> hook for state management.</li>
      <br/>
      <li>Implements core <strong>CRUD (Create, Read, Update, Delete)</strong> functionality for tasks.</li>
      <li><strong>Creation:</strong> New tasks are added via the <code>handleAddTask</code> function, prepending them to the list.</li>
      <br/>
      <li><strong>Update/Toggle:</strong> Tasks can be marked as complete/incomplete using <code>handleToggleComplete</code>, which maps over the array to update state immutably.</li>
      <br/>
      <li><strong>Deletion:</strong> The <code>handleDeleteTask</code> function filters the tasks array to remove a selected item.</li>
      <br/>
      <li>The architecture demonstrates <strong>component-based design</strong>, utilizing <code>TaskInput</code>, <code>TaskList</code>, and more components to separate concerns.</li>
    </ul>
  </div>

</div>
<br/>
<div class="divider"></div>

## Portfolio Website

<div class="project-layout">
  
  <div class="project-media">
    <h3><strong><a href="https://github.com/jambalong/portfolio">GitHub Repository</a></strong></h3>
    <h4><em>Bridgetown, Ruby, HTML, CSS, JavaScript</em></h4>
    <img src="/images/projects/{{ data.portfolio_website }}" alt="Portfolio Website thumbnail" class="project-screenshot">
  </div>

  <div class="project-description">
    <ul>
      <li><strong>Architecture:</strong> Developed this personal portfolio website using <strong>Bridgetown</strong> for modern <strong>Static Site Generation (SSG)</strong>, hosted on DigitalOcean.</li>
      <br/>
      <li>Utilized <strong>Ruby</strong> and <strong>Markdown</strong> for dynamic content injection, template rendering, and streamlined content management.</li>
      <br/>
      <li>Implemented <strong>HTML</strong> and <strong>CSS</strong> for structured layout and styling, ensuring the design is fully responsive across mobile and desktop breakpoints.</li>
      <br/>
      <li><strong>Navigation (Mobile):</strong> Utilized <strong>JavaScript</strong> to implement a dynamic <strong>hamburger menu</strong> that toggles visibility, significantly improving navigation and user experience on mobile screens.</li>
      <br/>
      <li>Managed codebase changes and history using <strong>Git</strong> for version control.</li>
    </ul>
  </div>

</div>
<br/>