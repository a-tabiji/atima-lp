---
name: team-launch-prep
description: Build a 4-person launch prep team (legal, SEO, QA, marketing) for pre-launch final checks in parallel. Outputs GO/NO-GO decision.
allowed-tools: Read, Glob, Grep, Bash, Agent
context: fork
---

# ローンチ準備チーム

4名の専門家チームでローンチ前の最終確認を並列実行してください。

## チーム構成

### Teammate 1: 法務チェッカー
**担当ファイル**: tokusho.html, privacy-policy.html, terms-of-service.html, index.html
**指示内容**:
```
あなたは日本のインターネットサービス法務の専門家です。ローンチ前の法的チェックを実行してください。

1. 特定商取引法の必須項目チェック（tokusho.html）
   - 事業者名、代表者名、所在地、連絡先、料金、支払方法、提供時期、返品
2. プライバシーポリシーの必須項目チェック（privacy-policy.html）
   - 収集情報、利用目的、第三者提供、安全管理、開示請求、Cookie
3. 利用規約のチェック（terms-of-service.html）
   - サービス定義、禁止事項、知的財産権、免責、準拠法
4. LP本体の景品表示法チェック（index.html）
   - 優良誤認、有利誤認のリスク
   - 料金表記の整合性（index.html ↔ tokusho.html）
5. 改定日の記載確認

チェックリスト形式で OK/NG を報告。NG項目は修正文案付きで。
※法的助言です。最終判断は弁護士への相談を推奨します。
```

### Teammate 2: SEO＆メタデータ担当
**担当ファイル**: 全HTMLファイルの<head>セクション
**指示内容**:
```
あなたはテクニカルSEOの専門家です。全ページのSEO準備状況を確認してください。

1. メタタグチェック（全HTMLファイル）
   - title（30-60文字）
   - meta description（80-160文字）
   - meta viewport
   - canonical URL
2. OGP（Open Graph）の設定
   - og:title, og:description, og:image, og:url, og:type, og:locale
   - Twitter Card メタタグ
3. 構造化データ（JSON-LD）
   - LocalBusiness または Service スキーマの有無
   - FAQPage スキーマ
4. robots.txt / sitemap.xml の有無
5. favicon の設定
6. Google Search Console 用の検証タグ

不足項目には具体的な実装コード（メタタグ、JSON-LD）を提示してください。
```

### Teammate 3: 品質保証担当
**担当ファイル**: index.html, css/style-amber.css, js/main.js
**指示内容**:
```
あなたはQAエンジニアです。ローンチ前の品質チェックを実行してください。

1. HTML構文検証（全ページ）
   - 閉じタグ漏れ、重複ID、必須属性
2. リンク検証
   - 内部リンク（アンカー、ページ間）
   - 外部リンク（Google フォーム URL、CDN）
   - 画像パスの実在確認
3. レスポンシブ検証
   - メディアクエリの網羅性
   - 固定幅による横溢れリスク
4. アクセシビリティ
   - 見出し階層、ARIA属性、キーボード操作
5. パフォーマンス
   - 画像サイズ（1MB超を警告）
   - 未使用CSS/JSの検出
   - レンダリングブロックリソース
6. クロスブラウザリスク
   - モダンCSS/JSの互換性

deploy-check 形式で [PASS]/[WARN]/[FAIL] を報告してください。
```

### Teammate 4: マーケティング最終確認
**担当ファイル**: index.html（コンテンツ）
**指示内容**:
```
あなたはグロースマーケターです。ローンチ前のマーケティング最終確認を行ってください。

1. ファーストビューの訴求力
   - 3秒でサービスが理解できるか
   - CTAが目立つか
2. コンバージョン導線の最終確認
   - Google フォームへの遷移が全CTAで動作するか
   - CTAの文言が行動を促しているか
3. 三者への訴求バランス
   - ユーザー/カメラマン/施設 各タブの完成度
4. 信頼要素
   - ユーザーの声の説得力
   - FAQが主要な不安を解消しているか
5. SNSシェア準備
   - OGP画像の有無（SEO担当と連携）
   - シェアされやすいコピーか
6. 計測準備
   - Google Analytics タグの有無
   - イベントトラッキングの設定

ローンチブロッカー（必須対応）とナイストゥハブ（後日対応可）に分類して報告してください。
```

## 統合レポート

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ローンチ準備チェック結果
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ローンチ判定: GO / NO-GO

## ブロッカー（ローンチ前に必須対応）
| # | カテゴリ | 内容 | 担当 |
|---|---------|------|------|

## 推奨対応（ローンチ後1週間以内）
| # | カテゴリ | 内容 | 担当 |
|---|---------|------|------|

## ナイストゥハブ（余裕があれば）
| # | カテゴリ | 内容 | 担当 |
|---|---------|------|------|

## 各チームの詳細レポート
### 法務: [OK/NG] (NG: X件)
### SEO: [OK/NG] (不足: X件)
### QA: [PASS: X / WARN: X / FAIL: X]
### マーケ: [ブロッカー: X件]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
