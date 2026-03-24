---
name: validate-links
description: Check link integrity across all HTML files. Validates internal links, anchor links, and external link availability.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# リンク検証

全HTMLファイルのリンクを検証してください。

## チェック項目

### 1. 内部ページリンク
- `href="privacy-policy.html"` 等のリンク先ファイルが存在するか
- 各ページのヘッダー・フッターのリンクが統一されているか

### 2. アンカーリンク
- `href="#features"` 等の対応する `id` 属性が存在するか
- ナビゲーションメニューのリンクが正しいか

### 3. 外部リンク
- Google フォーム URL（`https://forms.gle/UD2dHkU2Q1aDZR4VA`）が全CTA で統一されているか
- CDN リンク（Font Awesome, Google Fonts）の URL が有効か
- SNS リンクがプレースホルダー（`#`）のままか確認・報告

### 4. 画像パス
- `src` 属性のファイルが `images/` 配下に存在するか
- `data-src`（lazy loading）のパスも検証

## 出力形式
| ファイル | 行 | リンク | 状態 | 備考 |
の形式で一覧を出力してください。
