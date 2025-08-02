---
title: Javaのソースコード構造
date: 2025-08-02
tags: [Java基礎, Java, ソースコード構造, クラス, メソッド, main関数]
---

## Java プログラムの基本構造

Java のソースコードは「クラス」を単位に構成される

### 💡 最小構成の例

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("こんにちは、Java！");
  }
}
```

### 🧱 各要素の説明

```java
public class HelloWorld: //クラス名。ファイル名と同じにする。

public static void main(String[] args): //Java アプリの入口（メインメソッド）

System.out.println(...): //コンソールに出力
```

### 📂 ファイルとクラスのルール

クラス名とファイル名は同じ（例：`HelloWorld.java`）

Java のソースファイルは `.java` で保存する
