# 開発ワークフロールール

## フロー概要
```
Issue作成 → ブランチ切る → TDD開発 → 品質チェック → PR作成 → レビュー対応 → マージ
```

## リポジトリ
- リモート: `origin` → `https://github.com/a-tabiji/atima-lp.git`
- オーナー: `a-tabiji`
- デフォルトブランチ: `main`
- デプロイ: `main` ブランチが GitHub Pages に自動デプロイ

## ブランチ命名規則
```
feat/#<issue番号>-<概要>      # 新機能・セクション追加
fix/#<issue番号>-<概要>       # バグ修正
improve/#<issue番号>-<概要>   # 改善（UX、パフォーマンス、アクセシビリティ）
docs/#<issue番号>-<概要>      # ドキュメント・法的ページ
style/#<issue番号>-<概要>     # デザイン・CSS変更
```
例: `feat/#12-add-pricing-section`, `fix/#15-faq-accordion-bug`

## コミットメッセージ
```
<type>(#<issue番号>): <概要>

<本文（任意）>
```
type: feat, fix, improve, style, docs, refactor, test, chore
例: `feat(#12): 料金比較セクションを追加`

## TDD（テスト駆動開発）
静的サイトのため、自動テストフレームワークは使わない。代わりに以下をテストとする:
1. **HTML検証**: 構文エラーなし（`/validate-html`）
2. **リンク検証**: リンク切れなし（`/validate-links`）
3. **レスポンシブ確認**: 主要ブレークポイントで崩れなし（`/check-responsive`）
4. **アクセシビリティ**: WCAG準拠（`/check-a11y`）

TDDサイクル:
1. RED: 品質チェックで現状の問題点を検出
2. GREEN: 問題を解決するコードを書く
3. REFACTOR: コードを整理

## 品質ゲート（PR作成前の必須チェック）
以下を全て PASS しないと PR を作成しない:
- [ ] `/validate-html` — HTML構文エラーなし
- [ ] `/validate-links` — リンク切れなし
- [ ] `/check-responsive` — レスポンシブ問題なし（Critical ゼロ）
- [ ] `/check-a11y` — アクセシビリティ問題なし（Critical ゼロ）
- [ ] コミットメッセージが規約に準拠

## PR ルール
- ベースブランチ: `main`
- タイトル: `[#<issue番号>] <概要>`
- 本文: 変更内容、テスト結果、スクリーンショット（デザイン変更時）
- レビュー: code-reviewer エージェントでセルフレビュー

## レビュー対応
- 指摘を修正したら、**必ず各レビューコメントに返信**する
- 返信には対応内容と該当コミットハッシュを含める（例: 「修正しました。(abc1234)」）
- 対応不要と判断した場合は、理由を添えて返信する
- 返信は `gh api repos/{owner}/{repo}/pulls/{pr}/comments` に `in_reply_to` パラメータ付きで投稿する

## マージ
- レビュー指摘事項を全て解決してからマージ
- Squash merge を推奨（コミット履歴をクリーンに保つ）
- マージ後に Issue をクローズ
