---
layout: note
title: 繰り返し処理（for文、while文）
date: 2025-08-05
categories: [Java]
tags: [Java基礎, for文, while文, do-while, ループ]
---

## 🔁 同じことを何度も行う「ループ処理」

プログラムでは「同じ処理を何回も繰り返す」ことがよくある  
Java では `for` 文や `while` 文を使って、繰り返しを表現

## 🟦 for 文（回数が決まっているとき）

### ✏️ 書き方

```java
for (初期化; 条件; 更新) {
    // 条件がtrueの間くりかえす
}
```

📘 例

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

この例では `i` が 0〜4 まで、5 回繰り返して表示される

## 🟨 while 文（条件を満たす間ずっと）

### ✏️ 書き方

```java
while (条件) {
    // 条件がtrueの間、ずっと繰り返す
}
```

📘 例

```java
int i = 0;
while (i < 3) {
    System.out.println(i);
    i++;
}
```

## 🟪 do-while 文（1 回は必ず実行）

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 3);
```

`do-while` は**必ず 1 回実行される**のが特徴

## 💡 ヒント

| 条件                       | おすすめ文 |
| -------------------------- | ---------- |
| 回数が決まっている         | `for`      |
| 条件次第で回す             | `while`    |
| 1 回だけでも必ず実行したい | `do-while` |

## 📝 まとめ

`for` は「何回まわすか」がわかっているときに便利

`while` は条件によって止めたいときに使う

`do-while` は「最低 1 回実行」が保証される
