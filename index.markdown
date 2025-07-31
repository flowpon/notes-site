---
layout: default
title: ホーム
---

<header>
  <h1>FlowBook📚</h1>
</header>

<div id="home">
  <ul>
    {% for note in site.notes %}
      <li data-tags="{{ note.tags | join: ',' | downcase }}">
        <a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a> - {{ note.date | date: "%Y/%m/%d" }}
      </li>
    {% endfor %}
  </ul>
</div>

<div class="tag-filters">
  <button class="tag-filter" data-tag="all">すべて</button>
  {% assign all_tags = site.notes | map: 'tags' | join: ',' | split: ',' | uniq %}
  {% for tag in all_tags %}
    {% if tag != "" %}
      <button class="tag-filter" data-tag="{{ tag | strip }}">{{ tag | strip }}</button>
    {% endif %}
  {% endfor %}
</div>
