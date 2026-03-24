---
name: review
description: Run code review on a PR. Reviews HTML/CSS/JS quality, UX, and accessibility. Categorizes findings as Critical/Warning/Suggestion/Question.
argument-hint: [pr-number (default=current branch PR)]
allowed-tools: Read, Glob, Grep, Bash
---

# PR レビュー

PR の変更内容をレビューしてください。

## 引数
- `$ARGUMENTS`: PR 番号（省略時は現在ブランチに関連する PR を自動検出）

## 手順

### 1. PR 情報の取得
```bash
gh pr view <PR番号>
gh pr diff <PR番号>
```

### 2. 変更ファイルの特定
```bash
gh pr diff <PR番号> --name-only
```

### 3. レビュー観点

#### コード品質
- HTML: セマンティクス、ネスト構造、属性の適切さ
- CSS: 変数活用、レスポンシブ対応、一貫性
- JS: エラーハンドリング、パフォーマンス、メモリリーク

#### デザイン一貫性
- 既存セクションとの視覚的統一感
- CSS変数の適切な使用
- 余白・角丸・トランジションの統一

#### UX
- ユーザー導線への影響
- モバイルでの操作性
- CTA の視認性

#### アクセシビリティ
- ARIA 属性
- キーボード操作
- 見出し階層

#### SEO
- メタタグへの影響
- 見出し構造
- 画像 alt 属性

### 4. レビューコメントの整理

重要度で分類:
```
🔴 Critical（必須修正）: マージブロッカー
🟡 Warning（推奨修正）: 品質向上のため修正推奨
🔵 Suggestion（提案）: より良くするための提案
💬 Question（質問）: 意図の確認
```

### 5. レビュー結果の投稿
```bash
gh pr review <PR番号> --comment --body "<レビューコメント>"
```

または指摘がない場合:
```bash
gh pr review <PR番号> --approve --body "LGTM"
```

### 6. 結果報告
- 指摘件数のサマリー（Critical / Warning / Suggestion / Question）
- 指摘がある場合: 修正後に再レビュー（`/review`）を案内
- 指摘がない場合: `/merge` でマージを案内
