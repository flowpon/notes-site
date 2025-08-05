---
layout: note
title: Javaの基礎概念（JDK・JRE・JVM）
date: 2025-08-01
tags: [Java基礎, Java, JDK, JRE, JVM, 環境構築]
---

## Java の基本構成とは？

Java を学ぶ上でよく出てくる「JDK」「JRE」「JVM」の違いを整理

### 🧱 JVM（Java Virtual Machine）とは？

- **Java のプログラムを実行する仮想マシン**
- Java のソースコードは一度「バイトコード」という形式にコンパイルされ、JVM がそのバイトコードを読み取り実行
- JVM のおかげで、Java は「どの OS でも動く」特徴（Write Once, Run Anywhere）を持っている

### 🧃 JRE（Java Runtime Environment）とは？

- **Java プログラムを実行するために必要な環境**
- JVM + 実行に必要なライブラリやクラスが含まれている
- Java プログラムを「使う」人に必要。

### 🛠️ JDK（Java Development Kit）とは？

- **Java アプリを開発するための開発ツールキット**
- JRE + コンパイラ（`javac`）、デバッガ、ドキュメント作成ツールなどが含まれる
- Java プログラムを「作る」人に必要

### ✅ まとめ

| 用語 | 説明                      | 含まれるもの     |
| ---- | ------------------------- | ---------------- |
| JVM  | Java を実行する仮想マシン | -                |
| JRE  | Java を実行するための環境 | JVM + ライブラリ |
| JDK  | Java 開発用キット         | JRE + 開発ツール |
