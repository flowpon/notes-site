---
title: 例外処理（try-catch-finally）
date: 2025-08-03
tags: [Java基礎, Java, 例外処理, try-catch, finally, throw, throws]
---

## ⚠️ プログラム中のエラー「例外」

プログラム実行中に、**予期しない状況やエラー**が起こることがる  
たとえば、

- ファイルが見つからない
- ネットワーク接続に失敗
- 0 で割ろうとした

このような状況を Java では**例外（Exception）**として扱う

## 🟦 try-catch 文

例外が発生しても、プログラムを安全に続行するための仕組み

```java
try {
    // 例外が起こるかもしれない処理
} catch (例外クラス 変数名) {
    // 例外が発生したときの処理
}
```

### 📘 例

```java
public static void main(String[] args) {
    try {
        int result = 10 / 0; // 0で割る → ArithmeticException
        System.out.println(result);
    } catch (ArithmeticException e) {
        System.out.println("エラー: 0で割ることはできません");
    }
}
```

## 🟨 finally ブロック

`finally` は**例外があってもなくても必ず実行される処理**を記述する

```java
try {
    System.out.println("処理開始");
} catch (Exception e) {
    System.out.println("エラー発生");
} finally {
    System.out.println("終了処理");
}
```

## 🟪 throw と throws

**throw（例外を発生させる）**

```java
throw new IllegalArgumentException("不正な引数です");
```

**throws（例外を呼び出し元に通知）**

```java
public static void readFile(String path) throws IOException {
    // ファイル読み込み処理
}
```

## 💡 ヒント

**try** → 危険そうな処理を囲む

**catch** → 例外を受け取って処理

**finally** → 後片付け処理（ファイルを閉じるなど）

**throw** → 自分で例外を投げる

**throws** → 呼び出し元に「この例外が起こるかも」と伝える

## 📝 まとめ

例外処理を使うと、エラーが起きても安全にプログラムを続けられる

`finally` は必ず実行されるので、リソース解放に便利

`throw` と `throws` の違いを覚えておく
