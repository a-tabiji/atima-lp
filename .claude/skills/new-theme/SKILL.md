---
name: new-theme
description: Create a new CSS theme variant based on style-amber.css by replacing color definitions in :root.
argument-hint: [theme-name] [primary-color-hsl] [accent-color-hsl]
allowed-tools: Read, Write, Edit, Glob
---

# 新テーマ作成

## 引数
- `$0`: テーマ名（英語、例: `ocean`）
- `$1`: メインカラー（HSL値推奨、例: `hsl(200, 80%, 50%)`）
- `$2`: アクセントカラー

## 手順

1. `css/style-amber.css` を読み込み、構造を把握
2. `css/style-[テーマ名].css` として新ファイルを作成
3. `:root` 内の CSS変数のみを差し替え:
   - `--color-primary` → 指定メインカラー
   - `--color-secondary` → メインカラーの暗い版
   - `--color-accent` → 指定アクセントカラー
   - `--color-amber-*` → テーマに合わせた同系色のバリエーション
   - `--color-primary-rgb` → RGB値を更新
4. ファイル冒頭のコメントをテーマ名に更新
5. `color-palette.html` にテーマのカラーパレットを追加

## 注意
- レイアウト・タイポグラフィ・アニメーションのCSSは変更しない（色のみ）
- `index.html` の `<link>` タグは変更しない（ユーザーに切り替え方法を案内）
