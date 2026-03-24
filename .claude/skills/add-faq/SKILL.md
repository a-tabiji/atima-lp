---
name: add-faq
description: Add a new question and answer to the FAQ section. Generates accordion-ready HTML.
argument-hint: [question] [answer]
allowed-tools: Read, Edit
---

# FAQ項目追加

## 引数
- `$0`: 質問文
- `$1`: 回答文（省略時はユーザーに確認）

## 手順

1. `index.html` の `.faq` セクションを確認
2. 既存の `.faq-item` の直後に以下を追加:
   ```html
   <div class="faq-item">
     <h3 class="faq-question">[質問文]</h3>
     <div class="faq-answer">
       <p>[回答文]</p>
     </div>
   </div>
   ```
3. 既存のFAQとの重複・矛盾がないか確認

## 注意
- `js/main.js` のアコーディオン機能は `.faq-question` クラスを自動検出するため、JS変更は不要
- 回答が長い場合は `<p>` タグで段落を分ける
