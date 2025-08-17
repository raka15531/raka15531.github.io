---
layout: default
title: Home
---

<div class="hero animated">
  ![AI Brain Illustration](/assets/images/ai-brain.png){: .hero-image}
  <h1>Welcome to AI Insights</h1>
  <p>Exploring the frontier of artificial intelligence</p>
</div>

<section class="featured-articles">
  {% for post in site.posts limit:3 %}
  <article class="article-card">
    <img src="{{ post.image | default: '/assets/images/ai-default.jpg' }}" alt="{{ post.title }}">
    <h3>{{ post.title }}</h3>
    <p>{{ post.date | date: "%d %b %Y" }}</p>
    <a href="{{ post.url }}" class="btn">Read More</a>
  </article>
  {% endfor %}
</section>
