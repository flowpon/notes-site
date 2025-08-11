---
layout: default
title: FlowBook
---

<header>
  <button id="toggle-dark-mode">🌓 ダークモード切替</button>
  <h1><a href="{{ site.baseurl }}/">FlowBook📚</a></h1>
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

<div class="main-container">
  <!-- 左側カテゴリ -->
  <aside class="sidebar">
    <h3>Category</h3>
    <ul>
      {% assign all_categories = site.notes | map: 'categories' | join: ',' | split: ',' | uniq | sort %}
      {% for category in all_categories %}
        {% if category != "" %}
          <li>
            <a href="#" class="category-link" data-category="{{ category | downcase }}">
              {{ category }}
            </a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </aside>

  <!-- 右側ノート一覧 -->
  <section class="content">
    <!-- パジネーション設定 -->
    <div class="pagination-controls">
      <label for="items-per-page">1ページ表示数:</label>
      <select id="items-per-page">
        <option value="5" selected>5件</option>
        <option value="10">10件</option>
        <option value="20">20件</option>
        <option value="-1">全件</option>
      </select>
    </div>

  <div id="home">
    <ul id="notes-container">
      {% for note in site.notes %}
        <li class="note-item"
            data-categories="{{ note.categories | join: ',' | downcase }}"
            data-tags="{{ note.tags | join: ',' | downcase }}"
            data-content="{{ note.content | strip_html | truncate: 300 | escape }}"
            data-title="{{ note.title | downcase }}">
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

  <!-- パジネーション -->
  <div id="pagination" class="pagination" style="display: none;">
    <button id="prev-btn" class="pagination-link prev">← 前のページ</button>
    <div id="pagination-numbers" class="pagination-numbers"></div>
    <button id="next-btn" class="pagination-link next">次のページ →</button>
  </div>

  <div id="pagination-info" class="pagination-info"></div>
  </section>
</div>

<!-- カテゴリ絞り込み用スクリプト -->
<script src="{{ site.baseurl }}/assets/js/category-filter.js"></script>
