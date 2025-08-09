---
title: メソッドの基本（定義と呼び出し）
date: 2025-08-09
tags: [Java基礎, Java, メソッド, 関数, 引数, 戻り値]
---

## ⚙️ 繰り返し使える処理の部品「メソッド」

プログラムでは、同じ処理を何度も書くのは効率が悪く、間違いの元になる  
そこで、処理をひとまとめにして名前をつけたものが**メソッド**  
メソッドを作っておくと、必要なときに何度でも呼び出せる

## 🟦 メソッドの作り方

```java
戻り値の型 メソッド名(引数の型 引数名, ...) {
    // 実行したい処理
    return 戻り値; // 戻り値がある場合
}
```

### 📘 例 1：引数なし・戻り値なし

```java
public static void greet() {
    System.out.println("こんにちは！");
}

public static void main(String[] args) {
    greet(); // メソッド呼び出し
}
```

### 📘 例 2：引数あり・戻り値あり

```java
public static int add(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int sum = add(3, 5); // 3+5 → 8
    System.out.println("合計: " + sum);
}
```

## 🟨 複数メソッドの組み合わせ

メソッドは他のメソッドから呼び出すこともできます。

```java
public static boolean isPass(int score) {
    return score >= 60;
}

public static void main(String[] args) {
    int[] scores = {80, 55, 70};
    for (int score : scores) {
        if (isPass(score)) {
            System.out.println(score + "点 → 合格");
        } else {
            System.out.println(score + "点 → 不合格");
        }
    }
}
```

## 💡 ヒント

`引数` → メソッドに渡す材料

`戻り値` → メソッドが返す結果

処理を分けることで、読みやすく再利用しやすいコードになる

## 📝 まとめ

メソッドは「処理の部品」

引数と戻り値で柔軟に使える

同じ処理はメソッドにまとめると効率的
