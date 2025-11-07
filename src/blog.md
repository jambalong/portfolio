---
layout: page
title: Blog
---

<section class="blog-text">
  A space where I share my journey as a self-taught developer exploring the realms of full-stack and game development. In this Mini-Blog, you’ll find insights, tutorials, and personal reflections on the technologies and tools I encounter along the way.

  <br><br>

  Whether you're a fellow developer, a tech enthusiast, or just curious about the world of coding, I invite you to join me as I navigate the challenges and triumphs of building projects from scratch. Let's learn, create, and grow together!
</section>

<ul class="posts-list">
  {% for post in collections.posts.resources %}
    <div class="post-item">
      {% if post.data.thumbnail %}
        <div class="post-thumbnail">
          <a href="{{ post.relative_url }}">
            <img src="{{ post.data.thumbnail }}" alt="{{ post.data.title }}"/>
          </a>
        </div>
      {% endif %}
      <li class="post-title">
        <a href="{{ post.relative_url }}">{{ post.data.title }}</a>
      </li>
      <br>
    </div>
    <div class="divider"></div>
  {% endfor %}
</ul>
