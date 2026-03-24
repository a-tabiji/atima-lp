---
paths:
  - "js/*.js"
---

# JavaScript ルール

## 基本方針
- バニラ JS のみ。外部ライブラリ・フレームワーク追加禁止
- 全コードは `DOMContentLoaded` イベント内で実行
- ES6+ 構文を使用（const/let、アロー関数、テンプレートリテラル）

## 既存機能（main.js）
- 年表示: `#current-year` に現在年を挿入
- 画像遅延読み込み: IntersectionObserver + `data-src`
- モバイルメニュー: `.mobile-menu-btn` トグル
- ヘッダースクロール: `requestAnimationFrame` で `.header-scrolled` 切り替え（100px閾値）
- FAQ アコーディオン: `.faq-question` クリックで `.active` トグル
- ステークホルダータブ: `data-target` 属性でタブ切り替え
- スムーズスクロール: ヘッダー高さ分オフセット

## パフォーマンス
- スクロールイベントは `requestAnimationFrame` でスロットル
- DOM 操作は最小限に
- イベントデリゲーションを検討

## アクセシビリティ
- `aria-expanded` 属性を動的に管理
- キーボード操作に対応（Enter/Space でのトグル）
