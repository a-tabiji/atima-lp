---
name: new-section
description: Add a new section to the LP. Generates HTML structure, CSS (Amber theme), responsive styles, and animations together.
argument-hint: [section-name] [purpose and content description]
allowed-tools: Read, Edit, Write, Glob, Grep
---

# 新セクション追加

LPに新しいセクションを追加してください。

## 引数
- `$0`: セクション名（英語、kebab-case）
- `$1`以降: セクションの目的・内容の説明

## 手順

1. **現状確認**: `index.html` と `css/style-amber.css` を読み、既存セクションの構造・スタイルパターンを把握する
2. **HTML作成**: 以下のテンプレートに沿って `index.html` の適切な位置にセクションを追加
   ```html
   <section class="[セクション名]" id="[セクション名]">
     <div class="container">
       <div class="text-center">
         <h2 class="section-title">タイトル</h2>
         <p>サブタイトル</p>
       </div>
       <!-- セクション固有のコンテンツ -->
     </div>
   </section>
   ```
3. **CSS作成**: `css/style-amber.css` に以下を追加
   - セクション背景・余白
   - コンテンツのレイアウト（Flexbox/Grid）
   - ホバーエフェクト・トランジション
   - レスポンシブ対応（768px, 480px ブレークポイント）
   - 既存テーマの CSS変数（`--color-*`）を使用
4. **ナビゲーション更新**: 必要に応じて header の nav-menu にリンクを追加
5. **JS対応**: インタラクションが必要な場合は `js/main.js` に追加

## 品質基準
- 既存セクションとの視覚的一貫性を保つ
- モバイル表示で崩れないこと
- img を含む場合は alt 属性必須
- セクション間の余白が統一されていること
