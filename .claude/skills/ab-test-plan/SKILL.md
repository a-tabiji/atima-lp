---
name: ab-test-plan
description: Propose A/B test candidates with hypotheses, test variables, variations, expected impact, and priority ranking.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# A/Bテスト計画

LPの改善仮説に基づくA/Bテスト候補を提案してください。

## 分析手順

1. `index.html` を読み、現在のLP構成を把握
2. CVに影響しそうな要素を特定
3. テスト可能な仮説を立案

## テスト候補の観点

### コピー系
- ヒーローのキャッチコピー
- CTAボタンの文言
- セクションタイトル
- マイクロコピー

### デザイン系
- CTAボタンの色・サイズ
- ヒーロー画像の選択
- セクション順序の入れ替え
- ファーストビューの構成

### 構成系
- FAQ の位置（CTA の前 vs 後）
- ユーザーの声の件数
- 料金表示のタイミング
- ステークホルダータブ vs 個別ページ

### 導線系
- CTA の数と配置
- 中間CTAの追加
- 固定CTAバー（モバイル）

## 出力形式

テストごとに:
```
### テスト #[N]: [テスト名]

**仮説**: [もし X を Y に変えたら、Z が改善するだろう。なぜなら...]
**対象要素**: [HTML上の具体的な要素]
**バリエーション**:
  - Control: [現状]
  - Variant A: [変更案]
  - Variant B: [変更案]（任意）
**測定指標**: [クリック率、スクロール率等]
**期待効果**: [高/中/低]
**実装難易度**: [高/中/低]
**優先度**: [高/中/低]
```

最後に優先度マトリクス（期待効果 × 実装難易度）を表示。
