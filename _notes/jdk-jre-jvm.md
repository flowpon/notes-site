---
title: Javaの基礎概念（JDK・JRE・JVM）
date: 2025-08-01
tags: [Java基礎, Java, JDK, JRE, JVM, 環境構築]
---

## Javaの基本構成とは？

Javaを学ぶ上でよく出てくる「JDK」「JRE」「JVM」の違いを整理

### 🧱 JVM（Java Virtual Machine）とは？
- **Javaのプログラムを実行する仮想マシン**
- Javaのソースコードは一度「バイトコード」という形式にコンパイルされ、JVMがそのバイトコードを読み取り実行
- JVMのおかげで、Javaは「どのOSでも動く」特徴（Write Once, Run Anywhere）を持っている

### 🧃 JRE（Java Runtime Environment）とは？
- **Javaプログラムを実行するために必要な環境**
- JVM + 実行に必要なライブラリやクラスが含まれている
- Javaプログラムを「使う」人に必要。

### 🛠️ JDK（Java Development Kit）とは？
- **Javaアプリを開発するための開発ツールキット**
- JRE + コンパイラ（`javac`）、デバッガ、ドキュメント作成ツールなどが含まれる
- Javaプログラムを「作る」人に必要

### ✅ まとめ

| 用語 | 説明 | 含まれるもの |
|------|------|--------------|
| JVM | Javaを実行する仮想マシン | - |
| JRE | Javaを実行するための環境 | JVM + ライブラリ |
| JDK | Java開発用キット | JRE + 開発ツール |
