---
name: check-responsive
description: Check responsive display across the LP. Verifies CSS media query coverage, layout break risks, and touch target sizes.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# レスポンシブチェック

LP全体のレスポンシブ対応状況を監査してください。

## チェック項目

### 1. メディアクエリの網羅性
- `css/style-amber.css` の全メディアクエリを一覧化
- ブレークポイント（768px, 480px）で全セクションが対応されているか確認
- 抜け漏れのあるセクションを報告

### 2. レイアウト崩れリスク
- `width` の固定値（px）がビューポート幅を超える可能性
- `overflow: hidden` の不足箇所
- Flexbox/Grid の `wrap` 設定漏れ
- 画像の `max-width: 100%` 適用漏れ

### 3. タイポグラフィ
- フォントサイズがモバイルで適切か（最小14px推奨）
- 行の長さ（1行あたり最大40文字程度を推奨 — 日本語）

### 4. タッチターゲット
- ボタン・リンクのタッチ領域（最小44x44px推奨）
- タップ可能要素間の間隔

### 5. 横スクロール
- `100vw` の使用によるスクロールバー問題
- テーブルやコードブロックの横溢れ

## 出力形式
問題を重要度（Critical / Warning / Info）で分類し、修正提案を具体的なCSSコード付きで報告してください。
