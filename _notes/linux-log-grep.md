---
layout: note
title: Linux操作（ログ検索：grep）
date: 2026-01-19
categories: [Linux]
tags: [Linux, grep, ログ, 運用, トラブルシュート]
---

## 🔎 grep とは？

`grep` は**ファイルの中から「特定の文字列」を探し出すコマンド**。

ログは量が多いため、  
👉 **目で全部読むのは非現実的**。

そこで**エラー・警告・特定のキーワードだけを検索**するために `grep` を使う。

### 📄 基本形

```bash
grep 検索文字列 ファイル名
```

### 🧪 例

```bash
grep error /var/log/syslog
```

👉 ログの中から `error` を含む行だけ表示される。

### ⚠️ 大文字・小文字に注意

`grep` は **大文字・小文字を区別**する。

```bash
grep Error /var/log/syslog
```

と

```bash
grep error /var/log/syslog
```

は **別物**。

---

## 🔡 大文字・小文字を区別しない（-i）

```bash
grep -i error /var/log/syslog
```

👉 `error / Error / ERROR `をすべて検索。

**実務では -i を使うことが多い。**

## 📖 less と組み合わせる（超重要）

```bash
grep -i error /var/log/syslog | less
```

### 💡 なぜ？

- 結果が多くても安全

- スクロール・検索ができる

- 事故らない

👉**grep 単体より grep + less が基本**

---

## 📂 複数ファイルを検索する

```bash
grep -i error /var/log/*
```

👉 `/var/log` 配下のログをまとめて検索。

### ⚠️ 注意

- 表示量が多くなる

- 必要に応じて`less`を併用

### 🧠 よく検索されるキーワード例

| キーワード | 意味         |
| ---------- | ------------ |
| `error`    | エラー       |
| `fail`     | 失敗         |
| `warn`     | 警告         |
| `denied`   | 権限拒否     |
| `timeout`  | タイムアウト |

👉 **英語が多いのがログの特徴**

---

## 🔄 実務でよくあるログ確認フロー

```bash
ssh user@192.0.2.10
cd /var/log
ls
grep -i error syslog | less
tail -n 50 syslog
exit
```

👉**接続 → ログ確認 → 検索 → 最新確認 → 退出**

---

## ⚠️ grep 使用時の注意点

- `rm` や編集はしない

- ログは基本「読むだけ」

- 結果が出なくても「異常なし」とは限らない

👉 **grep は“ヒント探し”**

---

## ✅ まとめ

| 操作             | 内容               |
| ---------------- | ------------------ |
| 🔎 `grep`        | 文字列検索         |
| 🔡 `-i`          | 大文字・小文字無視 |
| 📖 `grep + less` | 安全な確認         |
| 🧠 error / fail  | よく使う検索語     |

👉 **ログは「読む」より「探す」**
