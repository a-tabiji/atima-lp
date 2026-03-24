---
name: validate-html
description: Run HTML syntax validation. Detects unclosed tags, nesting errors, deprecated attributes, and duplicate IDs.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# HTML 構文チェック

全HTMLファイルの構文を検証してください。

## チェック項目

### 1. 構造エラー
- 閉じタグの漏れ・不一致
- 不正なネスト（例: `<p>` 内の `<div>`）
- DOCTYPE 宣言の正しさ

### 2. 属性
- 重複 ID の検出
- 必須属性の欠落（img の alt、a の href）
- 非推奨属性の使用

### 3. セマンティクス
- `<section>` に見出し要素があるか
- `<address>` の適切な使用
- インライン要素内のブロック要素

### 4. リンク整合性
- 内部アンカーリンク（`href="#xxx"`）の対応する `id` が存在するか
- ページ間リンクのファイルが存在するか

### 5. 文字コード
- UTF-8 の宣言
- 特殊文字のエンティティ表記

## 対象ファイル
- index.html
- privacy-policy.html
- terms-of-service.html
- tokusho.html

## 出力形式
ファイル名と行番号付きでエラーを報告してください。
