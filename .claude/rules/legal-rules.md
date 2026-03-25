---
paths:
  - "privacy-policy.html"
  - "terms-of-service.html"
  - "tokusho.html"
  - "legal-archive/**"
---

# 法的ページ編集ルール

## 重要
- 法的ページの内容変更は慎重に行うこと
- 変更時は変更箇所と理由を必ずユーザーに説明すること
- 最終的な法的判断は弁護士による確認を推奨

## 特定商取引法に基づく表記（tokusho.html）
- 必須項目: 事業者名、代表者名、所在地、連絡先、販売価格、支払方法、提供時期、返品・キャンセル
- デジタルコンテンツ販売の場合: 返品不可特約、動作環境、申込の撤回・解除方法も必須
- 運営: A-Tabiji合同会社

## プライバシーポリシー（privacy-policy.html）
- 個人情報保護法に準拠
- 収集情報、利用目的、第三者提供、安全管理措置を明記
- 決済代行業者への委託は第三者提供セクションに明記すること

## 利用規約（terms-of-service.html）
- サービス内容、禁止事項、免責事項、準拠法を明記
- 損害賠償責任制限条項には「故意または重大な過失を除き」を必ず含める（消費者契約法8条）

## 共通
- 各ページのヘッダー・フッター構造は index.html と統一
- 改定日を明記すること
- 3ファイル間で矛盾がないか横断確認すること（料金、救済方法、受付時間、決済手段など）

## バージョン管理

### ファイル構成
```
terms-of-service.html              # 常に最新版
privacy-policy.html                # 常に最新版
tokusho.html                       # 常に最新版
legal-archive/
  terms-of-service-v1.0.html       # 過去版（閲覧専用）
  privacy-policy-v1.0.html
  tokusho-v1.0.html
```

### バージョニング規則
- メジャー（v1.0 → v2.0）: 条項の追加・削除・大幅な内容変更
- マイナー（v1.0 → v1.1）: 文言修正・誤記訂正・表現の明確化

### 改定手順
1. 改定前の現行版を `legal-archive/` にコピー（例: `terms-of-service-v1.0.html`）
2. アーカイブ版のヘッダーに「この版は過去の版です。最新版は [こちら] をご確認ください。」を追加
3. 最新版（`terms-of-service.html`）を改定
4. 最新版の施行日・改定日を更新
5. 最新版の改定履歴テーブルに新しい行を追加
6. 3ファイル間の整合性を確認（料金・決済手段・救済方法・受付時間など）
7. コミットメッセージ: `docs(#XX): 利用規約を v2.0 に改定（写真データ販売対応）`

### 改定履歴テーブル（各ページ末尾に設置）
```html
<section class="terms-section">
  <h2>改定履歴</h2>
  <table class="info-table">
    <tr><th>版</th><th>施行日</th><th>概要</th></tr>
    <tr><td>v2.0</td><td>20XX-XX-XX</td><td>写真データ販売対応</td></tr>
    <tr>
      <td>v1.0</td><td>2025-06-04</td>
      <td>制定 <a href="legal-archive/terms-of-service-v1.0.html">閲覧</a></td>
    </tr>
  </table>
</section>
```
