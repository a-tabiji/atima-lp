---
name: merge
description: Merge a reviewed PR into main via squash merge. Closes related Issue, deletes branch, and confirms deployment.
argument-hint: [pr-number (default=current branch PR)]
allowed-tools: Bash, Read
---

# PR マージ

レビュー済みの PR を main にマージしてください。

## 引数
- `$ARGUMENTS`: PR 番号（省略時は現在ブランチに関連する PR を自動検出）

## 前提条件
- PR のレビューが完了していること（`/review` で LGTM）
- 未解決のレビューコメントがないこと

## 手順

### 1. PR 状態の確認
```bash
gh pr view <PR番号>
gh pr checks <PR番号>
```
- レビューステータスが approved であること
- CI チェック（ある場合）が PASS であること

### 2. 未解決コメントの確認
```bash
gh api repos/a-tabiji/atima-lp/pulls/<PR番号>/comments
```
- 未解決の指摘がないことを確認

### 3. マージ前確認
ユーザーに以下を確認:
- マージ方法: **Squash merge**（推奨）
- マージコミットメッセージ

### 4. マージ実行
```bash
gh pr merge <PR番号> --squash --delete-branch
```
- `--squash`: コミット履歴をクリーンに保つ
- `--delete-branch`: マージ後にリモートブランチを削除

### 5. Issue クローズの確認
PR 本文に `closes #<issue番号>` が含まれていれば自動クローズされる。
自動クローズされない場合:
```bash
gh issue close <issue番号>
```

### 6. ローカルのクリーンアップ
```bash
git checkout main
git pull origin main
git branch -d <ブランチ名>
```

### 7. デプロイ確認
- `main` へのマージ = GitHub Pages に自動デプロイ
- ユーザーに https://at-ima.com での確認を案内

### 8. 結果報告
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  マージ完了
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PR:     #<PR番号> [タイトル]
Issue:  #<Issue番号> → Closed
Branch: <ブランチ名> → Deleted
Deploy: https://at-ima.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
