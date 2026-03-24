---
name: pr
description: Create a GitHub Pull Request. Requires quality-gate PASS. Organizes changes, test results, and quality check status into the PR.
argument-hint: [issue-number (default=infer from branch)]
allowed-tools: Read, Glob, Grep, Bash
---

# PR 作成

GitHub Pull Request を作成してください。

## 引数
- `$ARGUMENTS`: Issue 番号（省略時はブランチ名から推測）

## 前提条件
- `/quality-gate` が PASS していること（FAIL の場合は先に修正を案内）
- 全変更がコミット済みであること

## 手順

### 1. 状態確認
```bash
git status
git log main..HEAD --oneline
git diff main...HEAD --stat
```

### 2. Issue 情報の取得
```bash
gh issue view <issue番号>
```

### 3. PR 内容の整理

**タイトル**: `[#<issue番号>] <概要>`（70文字以内）

**本文テンプレート**:
```markdown
## 概要
closes #<issue番号>

[変更内容の説明（1-3行）]

## 変更内容
- [変更点1]
- [変更点2]
- [変更点3]

## 対象ファイル
- [ファイル1]: [変更概要]
- [ファイル2]: [変更概要]

## 品質チェック結果
- [x] HTML 構文検証 PASS
- [x] リンク検証 PASS
- [x] レスポンシブ検証 PASS
- [x] アクセシビリティ検証 PASS
- [x] コミット規約準拠

## テスト
- [テスト内容と結果]

## スクリーンショット
（デザイン変更がある場合）
```

### 4. プッシュ & PR 作成
```bash
git push -u origin <ブランチ名>
gh pr create --title "<タイトル>" --body "<本文>"
```

### 5. 結果報告
- PR 番号と URL
- 次のステップ: `/review` でセルフレビュー実施を案内
