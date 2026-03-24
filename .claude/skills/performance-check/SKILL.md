---
name: performance-check
description: Check LP performance. Analyzes image sizes, CSS/JS optimization, render-blocking resources, and page speed factors.
allowed-tools: Read, Glob, Grep, Bash
context: fork
agent: Explore
---

# パフォーマンスチェック

LP の表示速度に影響する要因を分析してください。

## チェック項目

### 1. 画像最適化
- 全画像ファイルのサイズ一覧（`du -ah images`）
- 1MB 超のファイルを警告
- WebP 変換の提案
- 適切な画像サイズ（表示サイズ vs 実ファイルサイズ）

### 2. CSS
- ファイルサイズの確認
- 未使用のCSSルールの検出（使用中のstyle-amber.css内）
- CSSの読み込み順序とレンダリングブロック

### 3. JavaScript
- ファイルサイズの確認
- `defer` / `async` 属性の使用状況
- DOM操作のパフォーマンス（querySelectorAll の回数等）

### 4. 外部リソース
- CDN読み込み（Font Awesome, Google Fonts）の影響
- `preconnect` / `preload` の使用状況
- フォント読み込みの最適化（`font-display: swap`）

### 5. 総合評価
- 推定される First Contentful Paint (FCP) への影響要因
- 推定される Largest Contentful Paint (LCP) の要因
- Cumulative Layout Shift (CLS) のリスク

## 出力形式
```
[OK]   項目 — 詳細
[WARN] 項目 — 詳細と改善案
[FAIL] 項目 — 詳細と改善案
```
最後に改善優先度付きのアクションリストを出力。
