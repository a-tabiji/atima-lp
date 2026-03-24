---
paths:
  - "**/*.html"
---

# HTML ルール

## 構造
- DOCTYPE は `<!DOCTYPE html>`、lang は `ja`
- 原則として、セクションは `<section class="セクション名" id="セクション名">` の形式（ヒーローセクションなどナビからリンクされないセクションは `id` なしも可）
- 各セクション内は `.container` でラップ
- セクションタイトルは `.text-center` > `h2.section-title`

## アクセシビリティ
- img には必ず日本語の alt 属性を設定
- インタラクティブ要素には aria-label を付与
- ボタンに `aria-expanded` 属性を適切に管理
- 見出し階層（h1→h2→h3）を飛ばさない

## パフォーマンス
- 画像は lazy loading を検討（`data-src` + IntersectionObserver）
- 外部リソースには `rel="preconnect"` を使用

## テンプレートパターン
- FAQ: `.faq-item` > `h3.faq-question` + `div.faq-answer`
- ユーザーの声: `.voice-item` > `.voice-image` + `p.voice-text` + `p.voice-author` + `.voice-sample`
- ステップ: `.step` > `.step-number` + `h3` + `p` + `.step-image`
- 特徴: `.feature-item` > `.feature-icon` + `h3.feature-title` + `p` + `.feature-image`

## 外部リンク
- CTA は Google フォーム URL を使用
- SNS リンクは `#` プレースホルダー（実URL未設定）
