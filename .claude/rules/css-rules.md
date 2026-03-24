---
paths:
  - "css/*.css"
---

# CSS ルール

## テーマ
- 現在使用中: `css/style-amber.css`（index.html から読み込み）
- 色は必ず CSS Custom Properties（`:root` 内の `--color-*`）で定義して使用
- ハードコードされた色値は使わない

## 主要カラー変数
```
--color-primary: hsl(38, 92%, 50%)     アンバー
--color-secondary: hsl(38, 92%, 40%)   ダークアンバー
--color-accent: hsl(20, 90%, 50%)      コーラル/オレンジ
--color-amber-50: hsl(38, 92%, 95%)    セクション背景
--color-text: hsl(20, 14.3%, 4.1%)     テキスト
--color-text-muted: hsl(25, 5.3%, 44.7%)  サブテキスト
```

## レイアウト
- コンテナ: `max-width: 1200px; margin: 0 auto; padding: 0 20px`
- セクション余白: `padding: 80px 0`（モバイルでは `60px 0`）
- グリッド/フレックスを適宜使用

## レスポンシブ
- モバイルファーストで記述
- 主要ブレークポイント: `768px`（タブレット）、`480px`（スマホ）
- メディアクエリは各セクションのスタイル直後に配置

## 命名規則
- セクション名をプレフィックスに使用（例: `.hero-content`, `.faq-question`）
- 状態: `.active` クラスで切り替え
- バリエーション: BEM風（`.btn-primary`, `.btn-secondary`, `.btn-outline`）

## アニメーション
- トランジション: `var(--transition)` （= `all 0.3s ease`）を使用
- ホバー: `box-shadow` と `transform: translateY(-2px)` の組み合わせ
