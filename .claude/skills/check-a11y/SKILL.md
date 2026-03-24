---
name: check-a11y
description: Run accessibility audit against WCAG 2.1 AA. Checks HTML structure, ARIA attributes, keyboard navigation, and color contrast.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# アクセシビリティ監査

WCAG 2.1 AA 基準でLP全体を監査してください。

## チェック項目

### 1. HTML構造
- 見出し階層（h1→h2→h3）の正しさ — h1は1つのみ
- ランドマーク要素（header, main, nav, footer）の使用
- `lang="ja"` 属性の設定

### 2. 画像
- 全 `<img>` の `alt` 属性の有無と品質
- 装飾画像には `alt=""` または `role="presentation"`
- 意味のある画像には具体的な説明文

### 3. ARIA属性
- `aria-label` の適切な使用（特にアイコンボタン）
- `aria-expanded` の動的管理（FAQ、モバイルメニュー）
- `role` 属性の適切な使用

### 4. キーボード操作
- 全インタラクティブ要素にフォーカスが当たるか
- タブ順序が論理的か
- FAQ アコーディオンの Enter/Space キー対応
- フォーカスインジケーターの可視性

### 5. 色とコントラスト
- テキストと背景のコントラスト比（最低 4.5:1）
- ボタンテキストのコントラスト
- 色のみに依存した情報伝達がないか

### 6. フォーム・リンク
- リンクテキストが文脈なしで意味をなすか
- 同じテキストで異なるリンク先がないか

## 出力形式
WCAG基準番号付きで問題を報告し、修正コードを提案してください。
