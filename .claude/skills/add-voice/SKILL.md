---
name: add-voice
description: Add a new user testimonial to the voices section. Generates HTML following the existing template.
argument-hint: [user-attribute e.g. "mom of 3yo"] [testimonial-text]
allowed-tools: Read, Edit
---

# ユーザーの声 追加

## 引数
- `$0`: 利用者の属性（例: 「2歳のお子さまのママ」）
- `$1`: 感想テキスト（省略時は属性に基づいて提案）

## 手順

1. `index.html` の `.voice-container` を確認
2. 既存の `.voice-item` パターンに沿って追加:
   ```html
   <div class="voice-item">
     <div class="voice-image">
       <img src="images/voices/[ファイル名]" alt="利用者の写真" class="voice-user-image" />
     </div>
     <p class="voice-text">「[感想テキスト]」</p>
     <p class="voice-author">[利用者の属性]</p>
     <div class="voice-sample">
       <img src="images/voices/[サンプル写真]" alt="[撮影シーンの説明]" />
     </div>
   </div>
   ```
3. 画像ファイルが存在しない場合は、プレースホルダーパスを設定しユーザーに通知

## コピーの方針
- 鉤括弧「」で囲む
- 具体的な体験エピソードを含める
- サービスの価値（体験に集中/全員で写真/気軽さ）が自然に伝わる内容にする
