---
name: add-stakeholder-tab
description: Add a new stakeholder tab (target audience) to the stakeholders section. Generates tab button and content together.
argument-hint: [target-name] [fa-icon-name] [description]
allowed-tools: Read, Edit
---

# ステークホルダータブ追加

## 引数
- `$0`: ターゲット名（例: 「イベント主催者」）
- `$1`: Font Awesome アイコン名（例: `fa-calendar-alt`）
- `$2`: ターゲットの説明

## 手順

1. `index.html` の `.stakeholder-tabs` と `.stakeholder-contents` を確認
2. タブボタンを `.stakeholder-tabs` に追加:
   ```html
   <button class="stakeholder-tab" data-target="[id]">
     <i class="fas [アイコン]"></i>
     [ターゲット名]
   </button>
   ```
3. タブコンテンツを `.stakeholder-contents` に追加（既存タブの構造に準拠）:
   - `.hero-badge` バッジ
   - `h3` キャッチコピー
   - `.hero-features-tab` 特徴4つ
   - `.benefits-list` メリット2つ
   - `.hero-cta-tab` CTAボタン
   - `.hero-visual-tab` ビジュアル
4. `css/style-amber.css` にタブ固有のカラー定義を追加

## 注意
- タブ切り替えJSは `data-target` 属性を自動検出するため、JS変更は不要
- 画像が未準備の場合はプレースホルダーパスを使用
