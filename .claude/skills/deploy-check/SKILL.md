---
name: deploy-check
description: Run pre-deployment comprehensive checklist. Validates HTML, links, images, meta tags, legal pages, and responsive design in one pass.
allowed-tools: Read, Glob, Grep, Bash
context: fork
agent: Explore
---

# デプロイ前チェック

GitHub Pages へのデプロイ前に総合チェックを実行してください。

## チェックリスト

### 1. ファイル構成
- [ ] 必須ファイルの存在: index.html, privacy-policy.html, terms-of-service.html, tokusho.html, CNAME
- [ ] CNAME の内容が `at-ima.com` であること
- [ ] 不要ファイル（.DS_Store、一時ファイル等）がないこと

### 2. HTML
- [ ] 全HTMLファイルの構文が正しいこと（閉じタグ、ネスト）
- [ ] 全画像に alt 属性があること
- [ ] meta viewport が設定されていること

### 3. リンク
- [ ] 内部リンクの整合性（アンカー、ページ間）
- [ ] CTA の Google フォーム URL が正しいこと
- [ ] 画像パスが実在するファイルを指していること

### 4. CSS/JS
- [ ] CSS ファイルが正常に読み込まれること
- [ ] JS にコンソールエラーの原因となるコードがないこと
- [ ] `console.log` のデバッグ出力が残っていないこと

### 5. SEO
- [ ] title タグが適切であること
- [ ] meta description が設定されていること

### 6. 画像
- [ ] 画像ファイルサイズの確認（1MB超のファイルを警告）
- [ ] 使用されていない画像ファイルの検出

### 7. 法的ページ
- [ ] 改定日が最新であること
- [ ] 料金表記の整合性

## 出力形式
```
[PASS] 項目名
[WARN] 項目名 — 警告内容
[FAIL] 項目名 — エラー内容と修正方法
```
最後にサマリー（PASS/WARN/FAIL 件数）を表示してください。

## quality-gate との違い
- `deploy-check`: **全ファイル対象**の総合チェック（画像サイズ、未使用ファイル、メタタグ含む）。デプロイ前に使う。
- `quality-gate`: **変更ファイルに絞った**品質チェック + Git関連チェック（コミット規約、diff確認）。PR前に使う。
