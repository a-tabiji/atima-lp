---
name: preview
description: Start a local preview server using Python http.server to view the LP in a browser.
allowed-tools: Bash
---

# ローカルプレビュー

ローカルサーバーを起動してLPをプレビューできるようにしてください。

## 手順

1. ポート8000が使用中でないか確認
2. プロジェクトルートで Python HTTP サーバーをバックグラウンド起動:
   ```bash
   python3 -m http.server 8000 &
   ```
3. PID を記録し、ユーザーに以下を案内:
   - メインLP: http://localhost:8000
   - プライバシーポリシー: http://localhost:8000/privacy-policy.html
   - 利用規約: http://localhost:8000/terms-of-service.html
   - 特商法: http://localhost:8000/tokusho.html
4. 停止方法を案内:
   ```bash
   kill <PID>
   # または
   lsof -ti:8000 | xargs kill
   ```
