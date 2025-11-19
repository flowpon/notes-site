---
layout: note
title: C# ラムダ式とデータ操作（LINQ）
date: 2025-11-19
categories: [C#]
tags: [C#, ラムダ式, デリゲート, Func, Action, LINQ, イベント]
---

## 🧱 デリゲート（delegate）

### 仕組み

- デリゲートは「メソッドを変数のように扱える型」
- どんな引数と戻り値を持つメソッドを参照できるかを型として定義する
- これにより「処理を引数として渡す」「あとから処理を切り替える」ことが可能になる

### 例

```c#
public delegate int Calc(int x, int y);  // デリゲート型の定義

public static int Add(int a, int b) => a + b;

Calc calc = Add;  // Addメソッドを代入
int result = calc(3, 5);  // 8
```

### ポイント

- デリゲートは「関数ポインタ」のような役割を持つ
- イベントやコールバック処理の基盤になる

---

## 🧩 Func / Action（汎用デリゲート）

### Func

- 戻り値がある処理を表す汎用デリゲート
- 書き方：`Func<引数型, 戻り値型>`
- 最大 16 個の引数を指定できる

```c#
Func<int, int> doubleIt = x => x * 2;
Console.WriteLine(doubleIt(4));  // 8
```

### Action

- 戻り値がない処理（void）を表す汎用デリゲート
- 書き方：`Action<引数型>`

```c#
Action<string> greet = name => Console.WriteLine($"Hello, {name}!");
greet("your name");  // Hello, your name!
```

### ポイント

- delegate を毎回定義しなくても済む
- 汎用的に使えるため、C#の標準的な書き方としてよく登場する

---

## 🧠 ラムダ式（lambda expression）

### 特徴

- 匿名関数を簡潔に書くための記法
- 変数に代入したり、メソッドの引数に直接渡せる
- LINQ やイベントでよく使われる

### 書き方のバリエーション

```c#
x => x + 1                  // 引数1つ、処理1行
(x, y) => x * y             // 引数複数
x => { var y = x * 2; return y + 1; }  // 複数行処理
```

### ポイント

- `=>` は「goes to」のイメージ
- 左側が引数、右側が処理内容
- 短い処理なら 1 行で書けるのでコードが読みやすくなる

---

## 🔔 イベント（event）

### 特徴

- 「何かが起きたときに処理を呼び出す仕組み」
- 実態はデリゲートのリスト
- UI 操作や通知処理でよく使われる

### 例

```c#
public event Action OnClick;

OnClick += () => Console.WriteLine("クリックされた！");
```

### ポイント

- `+=` で処理を追加、`-=` で削除
- 複数の処理を登録できる
- ボタンやフォームの操作に紐づける場面で頻出

---

## 🔍 LINQ × ラムダ式

### 特徴

- LINQ は「リストや配列などのデータを操作するための機能」
- SQL のような感覚で絞り込み・変換・集計ができる
- ラムダ式と組み合わせることで直感的に書ける

### 例

```c#
var numbers = new List<int> { 1, 2, 3, 4, 5 };

var evens = numbers.Where(x => x % 2 == 0);   // 偶数だけ抽出
var doubled = numbers.Select(x => x * 2);     // 2倍に変換
```

### よく使うメソッド

| メソッド            | 目的           | 使用例                           |
| ------------------- | -------------- | -------------------------------- |
| `Where`             | 条件で絞り込み | `list.Where(x => x > 10)`        |
| `Select`            | 要素の変換     | `list.Select(x => x * 2)`        |
| `Count`             | 条件に合う数   | `list.Count(x => x % 2 == 0)`    |
| `OrderBy`           | 昇順ソート     | `list.OrderBy(x => x.Length)`    |
| `OrderByDescending` | 降順ソート     | `list.OrderByDescending(x => x)` |

---

## 🔄 全体のつながり

```
delegate（基本）
   ↓
Func / Action（汎用型）
   ↓
ラムダ式（処理を簡潔に記述）
   ↓
LINQやイベントで活用
```

---

## ✅ まとめ

| 用語     | 役割・特徴                                              |
| -------- | ------------------------------------------------------- |
| delegate | メソッドを変数のように扱う型。処理を渡せる              |
| Func     | 戻り値ありの汎用 delegate                               |
| Action   | 戻り値なしの汎用 delegate                               |
| ラムダ式 | 処理を簡潔に書くための記法。Func や Action に代入できる |
| イベント | delegate で処理を登録し、何かが起きたときに実行         |
| LINQ     | データ操作のための機能。ラムダ式と組み合わせて使う      |
