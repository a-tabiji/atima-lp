---
name: tdd
description: Develop using TDD cycle. RED (detect issues via quality checks) → GREEN (implement fix) → REFACTOR (clean up code).
argument-hint: [issue-number or task description]
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---

# TDD 開発

静的サイト向けの TDD サイクルで開発を進めてください。

## 引数
- `$ARGUMENTS`: Issue 番号またはタスクの説明

## TDD サイクル

### Phase 1: RED（現状の問題を検出）

開発対象に応じて、まず品質チェックで「あるべき姿とのギャップ」を明確にする:

1. **Issue の受け入れ条件を確認**
   ```bash
   gh issue view <issue番号>
   ```

2. **関連する品質チェックを実行**
   - HTML を変更する場合 → `/validate-html` 相当のチェック
   - CSS を変更する場合 → `/check-responsive` 相当のチェック
   - アクセシビリティ関連 → `/check-a11y` 相当のチェック
   - リンク追加・変更 → `/validate-links` 相当のチェック

3. **検出された問題 + Issue の要件をテストケースとして定義**
   ```
   テストケース一覧:
   - [ ] TC1: [具体的な検証項目]
   - [ ] TC2: [具体的な検証項目]
   ...
   ```

### Phase 2: GREEN（最小限の実装で要件を満たす）

1. テストケースを1つずつ解決するコードを書く
2. 各テストケース解決後に検証:
   - HTML 変更 → 構文チェック
   - CSS 変更 → 既存レイアウトへの影響確認
   - JS 変更 → エラーがないか確認
3. 全テストケースが PASS するまで繰り返す

### Phase 3: REFACTOR（コード品質の向上）

1. 重複コードの削除
2. CSS 変数の活用（ハードコードされた値の排除）
3. セマンティクスの改善
4. 不要なコードの除去

### サイクル完了後

1. **最終品質チェック**（全テストケースの再確認）
2. **変更の要約をコミットメッセージとして準備**
   ```
   <type>(#<issue番号>): <概要>

   - TC1: [内容] ✅
   - TC2: [内容] ✅
   ```
3. **コミット**（ユーザーに確認の上）
4. **次のステップの案内**: `/quality-gate` で品質ゲートを通過させる

## 進捗表示
各フェーズの開始・完了時にステータスを表示:
```
🔴 RED: テストケースを定義中...
🟢 GREEN: TC1 を解決中...
🔵 REFACTOR: コードを整理中...
✅ サイクル完了: 全 N テストケース PASS
```
