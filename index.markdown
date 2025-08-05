---
layout: default
title: FlowBook
---

<header>
  <button id="toggle-dark-mode">🌓 ダークモード切替</button>
  <h1>FlowBook📚</h1>
  <!-- 検索ボックス -->
  <div class="search-container">
    <input 
      type="text" 
      id="search-input" 
      placeholder="ノートのタイトルやタグで検索..." 
      class="search-input"
    >
    <div class="search-icon">🔍</div>
  </div>
</header>

<div id="home">
  <ul>
    {% for note in site.notes %}
      <li data-tags="{{ note.tags | join: ',' | downcase }}">
        <a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
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
