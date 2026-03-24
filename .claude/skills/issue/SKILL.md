---
name: issue
description: Create a GitHub Issue. Organizes task purpose, acceptance criteria, and related sections into a structured ticket.
argument-hint: [title] [description (optional)]
allowed-tools: Read, Glob, Grep, Bash
---

# Issue 作成

GitHub Issue を作成してください。

## 引数
- `$0`: Issue タイトル
- `$1` 以降: 説明（省略時はタイトルから推測して作成）

## 手順

1. **タイトルの整理**
   - 簡潔で具体的なタイトルにする
   - 動詞で始める（「追加」「修正」「改善」等）

2. **Issue の分類**
   引数とコンテキストから適切なラベルを判断:
   - `enhancement`: 新機能・セクション追加
   - `bug`: バグ修正
   - `improvement`: UX・パフォーマンス・アクセシビリティ改善
   - `design`: デザイン・CSS変更
   - `docs`: ドキュメント・法的ページ
   - `seo`: SEO関連

3. **Issue 本文の作成**
   以下のテンプレートで作成:

   ```markdown
   ## 概要
   [何を、なぜ行うかの説明]

   ## 対象ファイル
   - [変更が予想されるファイル一覧]

   ## 受け入れ条件
   - [ ] [条件1]
   - [ ] [条件2]
   - [ ] [条件3]
   - [ ] `/validate-html` PASS
   - [ ] `/check-responsive` Critical ゼロ
   - [ ] `/check-a11y` Critical ゼロ

   ## 参考
   [関連する情報、スクリーンショット、URL等]
   ```

4. **Issue 発行**
   ```bash
   gh issue create --title "[タイトル]" --body "[本文]" --label "[ラベル]"
   ```

5. **結果の報告**
   作成された Issue 番号と URL をユーザーに報告

## 注意
- LP の現状を `index.html` 等から確認し、対象ファイルを正確に記載する
- 受け入れ条件には品質チェック（validate-html, check-responsive, check-a11y）を必ず含める
