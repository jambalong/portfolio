---
layout: page
title: Blog
---

A space where I share my journey as a self-taught developer exploring the realms of full-stack and game development. In this Mini-Blog, you’ll find insights, tutorials, and personal reflections on the technologies and tools I encounter along the way.

Whether you're a fellow developer, a tech enthusiast, or just curious about the world of coding, I invite you to join me as I navigate the challenges and triumphs of building projects from scratch. Let's learn, create, and grow together!

<ul>
  {% for post in collections.posts.resources %}
    <li>
      <a href="{{ post.relative_url }}">{{ post.data.title }}</a>
    </li>
    <br>
  {% endfor %}
</ul>
