---
title: 条件分岐の基本（if文とswitch文）
date: 2025-08-03
tags: [Java基礎, Java, if文, switch文, 条件分岐]
---

## ✅ 条件によって動きを変える「分岐」

プログラムでは「ある条件を満たしたらこうする」という**判断**がよく出てくる  
Java では「`if` 文」や「`switch` 文」を使って、**条件による分岐**が書ける

## 🟦 if 文の基本

### ✏️ 書き方

```java
if (条件式) {
    // 条件がtrueのとき実行される
}
```

必要に応じて `else` や `else if` を追加できる

```java
if (score >= 90) {
    System.out.println("とても良い！");
} else if (score >= 60) {
    System.out.println("合格です");
} else {
    System.out.println("再テスト！");
}
```

💬 どう動く？
`score` が 90 以上 →「とても良い！」

60 以上 90 未満 →「合格です」

それ以外 →「再テスト！」

## 🟨 switch 文の基本

### ✏️ 書き方

```java
switch (変数) {
    case 値1:
        // 値1のときの処理
        break;
    case 値2:
        // 値2のときの処理
        break;
    default:
        // どれにも当てはまらないとき
}
```

📘 例

```java
int day = 3;

switch (day) {
    case 1:
        System.out.println("月曜日");
        break;
    case 2:
        System.out.println("火曜日");
        break;
    case 3:
        System.out.println("水曜日");
        break;
    default:
        System.out.println("不明な曜日");
}
```

この場合、`day` が `3` なので「水曜日」と表示される

## 💡 使い分けのヒント

| シーン                                           | おすすめ文 |
| ------------------------------------------------ | ---------- |
| 条件が複雑なとき                                 | `if`       |
| 値の種類が決まっているとき（曜日やメニューなど） | `switch`   |

## 📝 まとめ

`if` 文は「条件が true のときにだけ実行」

`else if` / `else` でさらに条件を追加できる

`switch` 文は「特定の値」によって分岐するのに便利

`break` を忘れると、下の `case` も連続して実行されるので注意！
