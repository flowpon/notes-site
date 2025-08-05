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
      placeholder="ノートのタイトルやタグ、内容で検索..." 
      class="search-input"
    >
    <div class="search-icon">🔍</div>
  </div>
</header>

<div id="home">
  <ul>
    {% for note in site.notes %}
      <li class="note-item" 
          data-tags="{{ note.tags | join: ',' | downcase }}"
          data-content="{{ note.content | strip_html | truncate: 300 | escape }}">
        <a href="{{ site.baseurl }}{{ note.url }}">
          <h2>✿ {{ note.title }}</h2>
          {% if note.tags %}
            <div class="tags">
              {% for tag in note.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </a>
      </li>
    {% endfor %}
  </ul>
</div>
