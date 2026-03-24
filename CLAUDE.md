# At Ima（あっといま）LP プロジェクト

## プロジェクト概要
予約不要で呼べる出張カメラマンサービス「At Ima」のランディングページ。
三者マーケットプレイス（ユーザー/カメラマン/施設）のモニター募集を目的とする。

- 運営: A-Tabiji合同会社
- ドメイン: at-ima.com
- ホスティング: GitHub Pages（mainブランチデプロイ）
- ブランチ戦略: feature → develop（統合検証） → main（リリース）

## 技術スタック
- 純粋な静的サイト（HTML/CSS/JavaScript）— フレームワーク・ビルドツールなし
- CSS: Amberテーマ（`css/style-amber.css`）を使用中。CSS Custom Properties で色管理
- JS: バニラJS（`js/main.js`）。IntersectionObserver、requestAnimationFrame使用
- 外部依存: Font Awesome 6.0.0（CDN）、Google Fonts（Noto Sans JP）

## ファイル構成
```
index.html              # メインLP
privacy-policy.html     # プライバシーポリシー
terms-of-service.html   # 利用規約
tokusho.html           # 特定商取引法に基づく表記
color-palette.html      # カラーパレット参照用
css/style-amber.css     # 使用中のテーマ（CSS変数は :root で定義）
css/style.css           # ベーステーマ（未使用）
css/style-green.css     # グリーンテーマ（未使用）
css/style-stylish.css   # スタイリッシュテーマ（未使用）
js/main.js             # JavaScript
images/                 # 画像アセット（hero/, features/, steps/, voices/, stakeholders/）
```

## LP セクション構成（index.html）
1. header — ナビゲーション
2. .hero — ヒーロー（キャッチコピー + フローティング画像）
3. .problems — 課題提起（3つの悩み）
4. .features — 3つの特徴（すぐ撮影/体験重視/リーズナブル）
5. .how-it-works — 利用方法（4ステップ）
6. .voices — ユーザーの声（2件）
7. .stakeholders — ステークホルダータブ（ユーザー/カメラマン/施設）
8. .faq — よくある質問（4件、アコーディオン）
9. .cta — CTA（3つのボタン）
10. footer — フッター

## コーディング規約
- インデント: スペース2つ
- HTML: セマンティックタグ使用、img には必ず alt 属性
- CSS: CSS Custom Properties（`--color-*`）でカラー管理、新しい色は `:root` に追加
- JS: バニラJSのみ、ライブラリ追加不可。イベントリスナーは DOMContentLoaded 内で登録
- 画像: `images/` 配下のサブディレクトリに配置、lazy loading 対応

## デザインルール
- カラー: Amberテーマの CSS変数に準拠（`--color-primary`, `--color-accent` 等）
- フォント: Noto Sans JP（300/400/500/700）
- コンテナ幅: max-width 1200px
- 角丸: `--border-radius: 8px`, `--border-radius-large: 12px`
- トランジション: `--transition: all 0.3s ease`
- レスポンシブ: モバイルファースト

## CTA リンク
全CTAボタンは Google フォーム（`https://forms.gle/UD2dHkU2Q1aDZR4VA`）へリンク

## 開発ワークフロー
```
/issue → /branch → /tdd → /quality-gate → /pr → /review → /merge → リリース時: develop → main
```

1. `/issue [タイトル]` — GitHub Issue を作成
2. `/branch [Issue番号]` — `develop` からブランチを切る（命名規則: `<type>/#<Issue番号>-短い説明` 例: `feat/#12-hero-section`, `fix/#34-form-validation`）
3. `/tdd [Issue番号]` — TDDサイクルで開発（RED→GREEN→REFACTOR）
4. `/quality-gate` — PR前の品質チェック（HTML/リンク/レスポンシブ/a11y/コミット規約）
5. `/pr` — Pull Request を作成（ベース: `develop`）
6. `/review` — code-reviewer でセルフレビュー
7. `/merge` — Squash merge → Issue クローズ
8. リリース時: リリースPRを作成（ベース: `main`, ヘッド: `develop`）→ マージ → GitHub Pages デプロイ

詳細は `.claude/rules/git-workflow.md` を参照。

## Agent Teams（並列チーム作業）
複数のエージェントを並列起動し、チームで作業する機能。
```
/team-build [タスク or プリセット名]   # カスタムまたはプリセットチームを構築
/team-ux-audit                        # UX総合監査（UXアナリスト + ペルソナテスター + コピーアナリスト）
/team-lp-review                       # LP総合レビュー（技術 + デザイン + マーケ）
/team-launch-prep                     # ローンチ準備（法務 + SEO + QA + マーケ）
```
操作: `Shift+Down` でチームメイト間を移動、`Ctrl+T` でタスクリスト表示。

## 注意事項
- CNAME ファイルは編集禁止
- 法的ページ（privacy-policy, terms-of-service, tokusho）の編集は法的要件を理解した上で行うこと
- 画像バイナリの直接編集は禁止
