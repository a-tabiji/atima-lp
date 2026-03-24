---
name: team-build
description: Build an Agent Team. Proposes optimal team composition for the task and launches multiple agents in parallel. Use for complex multi-perspective work.
argument-hint: [task description or preset (ux-audit/lp-review/launch-prep/custom)]
allowed-tools: Read, Glob, Grep, Bash, Agent
---

# Agent Team ビルダー

タスクに最適なエージェントチームを構築し、並列作業を開始してください。

## 引数
- `$ARGUMENTS`: タスクの説明、またはプリセット名

## プリセットチーム

引数がプリセット名の場合、対応するチーム構成を即座に起動する。
カスタムの場合は、タスク内容からチーム構成を提案してユーザーに確認後起動する。

### プリセット一覧

#### `ux-audit` — UX総合監査チーム
詳細: `/team-ux-audit`

#### `lp-review` — LP総合レビューチーム
詳細: `/team-lp-review`

#### `launch-prep` — ローンチ準備チーム
詳細: `/team-launch-prep`

#### `custom` — カスタムチーム
タスク説明からチーム構成を動的に提案。

## カスタムチーム構築手順

1. **タスク分析**
   - タスクの目的と成果物を明確にする
   - 必要な専門領域を特定する
   - 並列化可能な作業を洗い出す

2. **チーム編成の提案**
   以下の形式でユーザーに提案:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     チーム編成案
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   タスク: [タスク概要]
   チームサイズ: [N名]

   メンバー:
   1. [役割名] — [担当領域]
   2. [役割名] — [担当領域]
   3. [役割名] — [担当領域]

   作業フロー:
   [並列/順次の作業フロー図]
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

3. **チーム起動**
   ユーザーの承認後、Agent Team を構築:
   - 各チームメイトに明確な役割と担当ファイルを割り当て
   - 共有タスクリストを作成
   - ファイル競合を避けるため、担当ファイルを分離

## チーム構築のベストプラクティス

### チームサイズ
- 3〜5名が最適（トークンコストとのバランス）
- 1名あたり5〜6タスクが目安

### ファイル競合の回避
- 各メンバーが異なるファイルを担当するよう分割
- 同一ファイルを複数メンバーが編集する場合は順次実行

### コミュニケーション
- メンバー間で発見を共有（特に他メンバーの作業に影響する発見）
- チームリードが定期的に進捗を確認

### 利用可能なエージェント定義
プロジェクトの `.claude/agents/` に定義済みの専門エージェント:
- `ux-consultant` — UX分析
- `lp-designer` — デザインレビュー
- `copywriter` — コピーライティング
- `marketing-strategist` — マーケ戦略
- `code-reviewer` — コードレビュー
- `legal-advisor` — 法務チェック
