---
name: user-journey
description: Create a user journey map. Analyzes LP experience, touchpoints, and emotional changes across awareness, interest, consideration, trust, and action stages.
argument-hint: [target (user/photographer/location, default=user)]
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# ユーザージャーニーマップ

指定ターゲットのユーザージャーニーマップを作成してください。

## 引数
- `$ARGUMENTS`: ターゲット種別（user / photographer / location、デフォルト: user）

## ジャーニーステージ

### Stage 1: 認知（Awareness）
- どこで At Ima を知るか（SNS広告、口コミ、検索等を想定）
- LP到達時の期待値・前提知識
- ファーストビューでの反応

### Stage 2: 興味（Interest）
- 「自分に関係ある」と感じるポイント
- 課題共感セクションでの反応
- スクロールを続ける動機

### Stage 3: 理解（Consideration）
- サービス内容の理解度
- 競合との比較（頭の中で起きる比較）
- 疑問・不安の発生ポイント

### Stage 4: 信頼（Trust）
- ユーザーの声、FAQ での安心感
- 料金の納得感
- 残る不安要素

### Stage 5: 行動（Action）
- CTA クリックの決断
- Google フォームでの体験
- 応募後の期待

### Stage 6: 共有（Advocacy）
- 体験後の口コミ可能性
- SNS シェアの動機

## 出力形式

```
| ステージ | ユーザーの行動 | 思考・感情 | LP上の対応要素 | ギャップ・改善点 |
|---------|-------------|----------|-------------|--------------|
```

加えて:
- **感情曲線**: テキストベースで各ステージの感情の上下を可視化
- **ペインポイント**: 各ステージの障壁を特定
- **改善提案**: ジャーニー上の課題に対する具体的なLP改善案
