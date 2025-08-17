---
layout: default
title: Home
---

# Welcome to AI Insights

Explore the latest in artificial intelligence and intelligent agents.

## Featured Articles

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date_to_string }}
{% endfor %}

[View all articles](/blog)