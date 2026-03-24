---
name: check-seo
description: Run SEO audit. Checks meta tags, OGP, structured data (JSON-LD), heading hierarchy, and internal link structure.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# SEO 監査

LP全体のSEO対応状況を監査してください。

## チェック項目

### 1. メタタグ
- `<title>` の有無と長さ（30-60文字推奨）
- `<meta name="description">` の有無と長さ（80-160文字推奨）
- `<meta name="viewport">` の設定
- canonical URL の設定

### 2. OGP（Open Graph Protocol）
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `og:locale` = `ja_JP`
- Twitter Card メタタグ（`twitter:card`, `twitter:title` 等）

### 3. 構造化データ
- JSON-LD で `LocalBusiness` または `Service` スキーマの有無
- FAQ ページの `FAQPage` スキーマ
- 料金の `Offer` スキーマ

### 4. 見出し階層
- h1 は1ページに1つ
- h2→h3 の階層が論理的
- キーワードが見出しに含まれているか

### 5. 画像SEO
- alt 属性にキーワードが含まれているか
- ファイル名が説明的か

### 6. 内部リンク
- 全ページ間のリンク構造
- フッターリンクの整合性
- アンカーリンクの動作

### 7. パフォーマンス指標
- 画像サイズの最適化状況
- CSS/JS の読み込み順序
- レンダリングブロックリソース

## 出力形式
優先度付きのチェックリストと、具体的な修正コード（メタタグ、JSON-LD等）を提案してください。
