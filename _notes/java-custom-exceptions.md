---
title: 独自例外の作成と利用
date: 2025-08-09
tags: [Java応用, Java, 例外処理, throw, throws, Exception]
---

## 🛠 自分専用のエラーを作る「独自例外」

Java には多くの例外クラスがあるが、  
**自分のプログラム専用のエラー**を作りたい場合は「独自例外クラス」を作成

## 🟦 独自例外クラスの作り方

例外クラスを継承して作る

```java
// 例外クラスは通常 Exception または RuntimeException を継承
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
```

### 📘 独自例外を使う例

```java
public class Main {
    public static void main(String[] args) {
        try {
            checkScore(45);
        } catch (MyException e) {
            System.out.println("エラー発生: " + e.getMessage());
        }
    }

    public static void checkScore(int score) throws MyException {
        if (score < 60) {
            throw new MyException("点数が低すぎます");
        }
        System.out.println("合格です！");
    }
}
```

## 💡 RuntimeException との違い

`Exception` を継承した場合 → **チェック例外**（`throws` 宣言が必要）

`RuntimeException` を継承した場合 → **非チェック例外**（`throws` 宣言不要）

## 📝 まとめ

独自例外は `Exception` または `RuntimeException` を継承して作る

`throw` で発生させ、`catch` で受け取る

エラーメッセージは `super(message)` で親クラスに渡す
