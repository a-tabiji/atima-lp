---
name: quality-gate
description: Run pre-PR quality gate. Checks HTML validation, links, responsive, accessibility, commit conventions, and diff. All gates must PASS before PR creation.
allowed-tools: Read, Glob, Grep, Bash
context: fork
agent: Explore
---

# 品質ゲート

PR 作成前の必須チェックを実行してください。全項目 PASS で PR 作成可能になります。

## チェック項目

### Gate 1〜4: コード品質チェック
`/deploy-check` と同等の品質チェックを**変更ファイルに絞って**実行する:
- Gate 1: HTML 構文検証（閉じタグ、重複ID、必須属性、ネスト構造）
- Gate 2: リンク検証（アンカー、ページ間、画像パス、CTA URL統一）
- Gate 3: レスポンシブ検証（メディアクエリ対応、固定幅リスク、タッチターゲット）
- Gate 4: アクセシビリティ検証（見出し階層、ARIA、キーボード操作、色コントラスト）

### Gate 5: コミット規約
```bash
git log main..HEAD --oneline
```
- コミットメッセージが `<type>(#<issue>): <概要>` 形式に準拠しているか
- type が正しいか（feat, fix, improve, style, docs, refactor, test, chore）

### Gate 6: diff 確認
```bash
git diff main...HEAD --stat
```
- 意図しないファイルの変更がないか
- CNAME, `.claude/settings.json` 等の保護ファイルが変更されていないか

## 出力形式

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  品質ゲート結果
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PASS] Gate 1: HTML 構文検証
[PASS] Gate 2: リンク検証
[WARN] Gate 3: レスポンシブ検証 — Warning 1件
[PASS] Gate 4: アクセシビリティ検証
[PASS] Gate 5: コミット規約
[PASS] Gate 6: diff 確認
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
結果: PASS（WARN 1件）→ PR 作成可能
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 判定基準
- **PASS**: 全 Gate が PASS または WARN のみ → PR 作成可能
- **FAIL**: いずれかの Gate に FAIL がある → 修正が必要

## deploy-check との違い
- `quality-gate`: **変更ファイルに絞った**品質チェック + Git関連チェック（コミット規約、diff確認）。PR前に使う。
- `deploy-check`: **全ファイル対象**の総合チェック（画像サイズ、未使用ファイル、メタタグ含む）。デプロイ前に使う。

FAIL がある場合は修正方法を具体的に提示し、修正後に再実行を案内。
PASS の場合は `/pr` での PR 作成を案内。
