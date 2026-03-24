---
name: check-legal
description: Check legal pages (Terms of Service, Privacy Policy, Tokusho) for consistency and required item compliance.
allowed-tools: Read, Glob, Grep
context: fork
agent: Explore
---

# 法的ページチェック

法的ページの整合性と法的要件の充足を検証してください。

## 対象ファイル
- `privacy-policy.html`
- `terms-of-service.html`
- `tokusho.html`

## チェック項目

### 1. 特定商取引法（tokusho.html）
必須項目の記載確認:
- [ ] 事業者名（法人名）
- [ ] 代表者名
- [ ] 所在地
- [ ] 電話番号またはメールアドレス
- [ ] 販売価格（税込表記）
- [ ] 支払方法・時期
- [ ] サービス提供時期
- [ ] 返品・キャンセルポリシー
- [ ] 追加費用の有無

### 2. プライバシーポリシー（privacy-policy.html）
- [ ] 収集する個人情報の種類
- [ ] 利用目的
- [ ] 第三者提供の有無と条件
- [ ] 安全管理措置
- [ ] 開示・訂正・削除の請求方法
- [ ] 問い合わせ先
- [ ] Cookie 等の使用に関する記載

### 3. 利用規約（terms-of-service.html）
- [ ] サービス内容の定義
- [ ] 禁止事項
- [ ] 知的財産権
- [ ] 免責事項
- [ ] 規約変更の手続き
- [ ] 準拠法・管轄裁判所

### 4. 横断チェック
- 会社名・連絡先がファイル間で一致しているか
- サービス料金の記載が index.html と tokusho.html で一致しているか
- 改定日が記載されているか

## 出力形式
チェックリスト形式で OK / NG を報告し、NG 項目には改善案を提示してください。
