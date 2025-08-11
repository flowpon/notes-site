---
layout: note
title: "HTML入門ステップまとめ"
date: 2025-08-11
tags: [html, web基礎, ドメイン, 相対パス, 絶対パス]
---

## 📝 HTML の基本

HTML（HyperText Markup Language）は Web ページの骨組みを作るマークアップ言語

・文書は`<!DOCTYPE html>`で HTML5 宣言  
・`<html>`タグ内にすべての要素を記述  
・`<head>`内にはメタ情報（タイトル、文字コード、CSS 読み込みなど）を記述  
・`<body>`内にページに表示する内容（見出し、段落、画像、リンクなど）を記述  
・見出しタグは`<h1>`〜`<h6>`、段落は`<p>`、改行は`<br>`を使用

## 🌐 URL・ドメイン・フォルダ

・**URL**（Uniform Resource Locator）は Web 上のリソースの場所を示す文字列  
 例: `https://example.com/index.html`

・**ドメイン**はインターネット上の住所の名前部分（`example.com`など）

・サイトは通常、複数のフォルダやファイルで構成される

・相対パスと絶対パスの違いを理解することが重要  
絶対パス: `https://example.com/images/photo.png`  
相対パス: `images/photo.png`（現在のファイル位置からの経路）  
`../`で 1 つ上の階層へ移動可能

## 🔗 リンクの挿入

```html
<a href="URL">リンクテキスト</a>
```

`href` 属性でリンク先の URL を指定

外部リンクは完全な URL（例: `https://〜`）、内部リンクは相対パスを利用

`target="_blank"`を付けると新しいタブで開く

`title` 属性を付与するとリンクにマウスを乗せたときに説明が表示される

## 🖼 画像の挿入

```html
<img src="画像のパス" alt="代替テキスト" />
```

`src` 属性で画像ファイルのパスを指定

`alt` 属性は画像が表示できないときの代替テキスト（アクセシビリティにも重要）

`width` や `height` 属性でサイズ指定可能だが、CSS での指定が推奨

相対パスと絶対パスの使い分けを理解しておく

## 📊 テーブル

```html
<table>
  <tr>
    <th>見出し1</th>
    <th>見出し2</th>
  </tr>
  <tr>
    <td>データ1</td>
    <td>データ2</td>
  </tr>
</table>
```

`<table>`タグで表を作成

`<tr>`は行、`<th>`は見出しセル、`<td>`はデータセル

`border` 属性で枠線を付けられるが、CSS での装飾が一般的

`colspan` や `rowspan` でセル結合が可能

## 📨 フォーム

```html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="ユーザー名" />
  <input type="password" name="password" placeholder="パスワード" />
  <input type="submit" value="送信" />
</form>
```

`<form>`タグはユーザーからの入力を受け取り、サーバに送信するための領域

`action` 属性で送信先 URL、`method` 属性で送信方法（`get` または `post`）を指定

`<input>`の `type` で入力形式を指定（`text`, `password`, `email`, `checkbox` など）

`<select>`と`<option>`でプルダウンメニュー、`<textarea>`で複数行入力が可能

## 📋 リスト

```html
<ul>
  <li>項目1</li>
  <li>項目2</li>
</ul>

<ol>
  <li>手順1</li>
  <li>手順2</li>
</ol>
```

`<ul>`は順序なしリスト（箇条書き）、`<ol>`は順序付きリスト（番号付き）

`<li>`はリスト項目

ネストして階層構造のリストも作成できる

## ✏️ インデント

インデントはコードを読みやすくするための字下げ

HTML では表示結果に影響しないが、可読性のため重要

一般的にはネストごとに半角スペース 2〜4 つを追加

チーム作業ではインデントルールを統一しておくことが望ましい
