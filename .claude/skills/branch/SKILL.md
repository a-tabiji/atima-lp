---
name: branch
description: Create a development branch linked to an Issue. Follows branch naming conventions, branches from main.
argument-hint: [issue-number] [type (feat/fix/improve/docs/style, default=auto)]
allowed-tools: Bash, Read
---

# ブランチ作成

Issue に紐づく開発ブランチを作成してください。

## 引数
- `$0`: Issue 番号（例: `12`）
- `$1`: ブランチ種別（省略時は Issue の内容から自動判定）

## 手順

1. **Issue の内容を確認**
   ```bash
   gh issue view $0
   ```

2. **ブランチ種別の決定**
   Issue のラベルや内容から判定:
   - `enhancement` → `feat/`
   - `bug` → `fix/`
   - `improvement` → `improve/`
   - `docs` → `docs/`
   - `design` → `style/`

3. **ブランチ名の生成**
   Issue タイトルから kebab-case の概要を生成:
   - 例: Issue #12「料金比較セクションを追加」→ `feat/#12-add-pricing-section`
   - 日本語タイトルは英語に変換

4. **main を最新化してブランチ作成**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <ブランチ名>
   ```

5. **結果の報告**
   - 作成したブランチ名
   - 紐づく Issue 番号と URL
   - 次のステップ（`/tdd` で TDD 開発を開始）を案内

## 命名規則
```
feat/#<issue番号>-<概要>
fix/#<issue番号>-<概要>
improve/#<issue番号>-<概要>
docs/#<issue番号>-<概要>
style/#<issue番号>-<概要>
```
