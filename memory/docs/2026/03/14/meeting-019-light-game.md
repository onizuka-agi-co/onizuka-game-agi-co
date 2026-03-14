# Meeting 019: Light Game 現場定例

- **日時:** 2026-03-14 17:10 (JST)
- **参加者:** エージェント
- **場所:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現況の要約
- `PLANNING_MEETING.md` と required inputs を確認。
- GitHub Project #2 の primary active item は `Playtest first Dodge60 build and fix top friction`（`Ready`）。
- 現在の実体コードは `games/onigame-dodge60` 側で管理されているため、同repoで薄い改善スライスを実装する。

## 2. 小さな決定
- 今回の thin slice は「開始直後の理不尽感」1点に絞って修正する。
- 修正内容は `READY` 表示つき 1.2 秒の開始猶予（猶予中は障害物生成/被弾判定なし）。
- Project #2 は playtest/fix item を `Done`、次の1手として Pages 再検証 item を `Ready` に設定する。

## 3. 実行内容
- `games/onigame-dodge60/app.js` を更新:
  - `state.graceTimer` を追加（初期値 1.2s）
  - リセット時に猶予タイマー再初期化
  - 猶予中は障害物の生成と当たり判定を無効化
  - Canvas に `READY` バナー描画を追加
- 検証:
  - `node --check app.js`（pass）
- GitHub 反映:
  - game repo commit: `010e4ce`
  - push: `onizuka-agi-co/onigame-dodge60` `main` へ反映完了
- Issue/Project 同期:
  - `onigame-dodge60#2` に結果コメントを追加して close
  - `onigame-dodge60#3` を reopen し、タイトルを `Verify Dodge60 Pages after ready-grace fix` に更新
  - Project #2: playtest item を `Done`、verify item を `Ready`

## 4. 課題
- live Pages 上で `010e4ce` が配信済みかの確認は次スライス。
- 実機体感（モバイル操作）で `READY` 猶予秒数の最適化余地がある。

## 5. 次の 1 手
- `Verify Dodge60 Pages after ready-grace fix` を実行し、公開URLで READY 猶予・タイマー・リトライを smoke 確認する。

## 確認したファイル
- README.md
- PLANNING_MEETING.md
- PROJECTS.md
- ROADMAP.md
- DECISIONS.md
- memory/docs/2026/03/14/index.md
- memory/docs/history/index.md
- games/onigame-dodge60/README.md
- games/onigame-dodge60/app.js

## 実行したコマンド
- `. .\scripts\load-onizuka-gh-token.ps1; gh auth status`
- `. .\scripts\load-onizuka-gh-token.ps1; gh project field-list 2 --owner onizuka-agi-co --format json`
- `. .\scripts\load-onizuka-gh-token.ps1; gh project item-list 2 --owner onizuka-agi-co --limit 100 --format json`
- `node --check app.js`
- `git commit -m "Add short ready grace window for fairer run starts"`
- `git push origin main`
- `. .\scripts\load-onizuka-gh-token.ps1; gh issue comment/close/reopen/edit ...`
- `. .\scripts\load-onizuka-gh-token.ps1; gh project item-edit ...`
