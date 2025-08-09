---
title: 配列の基本と使い方
date: 2025-08-09
tags: [Java基礎, Java, 配列, Array, データ構造]
---

## 📦 複数の値をまとめて扱う「配列」

プログラムでは「同じ種類のデータをまとめて管理したい」ことがある  
Java では**配列**を使うと、1 つの変数名で複数の値を扱える

## 🟦 配列の作り方

### ✏️ 宣言と初期化

```java
int[] scores = new int[3]; // 要素数3のint型配列
scores[0] = 80;
scores[1] = 90;
scores[2] = 70;
```

`scores[0]` → 1 つ目の要素

`scores[1]` → 2 つ目の要素

**インデックス番号は 0 から始まる**ことに注意

## 🟨 宣言と同時に値を入れる方法

```java
int[] scores = {80, 90, 70};
```

## 🔁 配列と for 文

配列の長さは `.length` で取得できる

```java
int[] scores = {80, 90, 70};

for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}
```

### 🟪 拡張 for 文（foreach）

配列を順に処理するだけなら、拡張 for 文が簡単

```java
for (int score : scores) {
    System.out.println(score);
}
```

## 💡 配列の特徴

**要素数は固定**（後から増やせない）

型が同じデータだけを入れられる

番号（インデックス）でアクセス

## 📝 まとめ

配列は同じ型のデータをまとめる入れ物

インデックスは 0 から始まる

`.length` で長さがわかる

順番に処理するなら拡張 for 文が便利
