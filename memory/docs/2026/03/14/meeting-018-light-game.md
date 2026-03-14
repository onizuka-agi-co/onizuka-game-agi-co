# Meeting 018: Light Game 現場定例

- **日時:** 2026-03-14 16:03 (JST)
- **参加者:** エージェント
- **場所:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現況の要約
- `PLANNING_MEETING.md` を先頭確認し、required inputs（README / PROJECTS / ROADMAP / DECISIONS / 当日日報）を再チェック。
- GitHub Project #2 の primary queue は quickshot 名義のままだったが、ローカル実体は `games/onigame-dodge60` に存在。
- `games/onigame-quickshot` は現ワークスペースに存在せず、記録と実体のズレが確認された。

## 2. 小さな決定
- 今回の thin slice は「命名・追跡ズレ修正」を完了扱いにする。
- Project #2 の execution item を `onigame-dodge60` 名義へ統一し、次の 1 手を playtest/fix に固定する。
- 企画は増やさず、次runは `Playtest onigame-dodge60 first playable and fix top friction` を実装中心で実行する。

## 3. 実行内容
- `.env` の `ONIZUKA_GITHUB_PAT` をロードし、`gh auth status` で認証有効を確認。
- GitHub Project #2 同期:
  - `Bootstrap onigame-dodge60 one-screen playable prototype`（Done）へ名称・本文を修正
  - `Playtest onigame-dodge60 first playable and fix top friction`（Ready / P0）へ名称・本文を修正
  - `Publish onigame-dodge60 first playable to GitHub Pages`（Backlog）へ名称・本文を修正
- meeting-scope ファイル（会議ログ、日報、DECISIONS、PROJECTS、history）を更新。

## 4. 課題
- `quickshot` 名義の過去ログが残っており、履歴参照時に読み手が混乱しやすい。
- この run は整合性回復を優先したため、playtest の摩擦修正実装は未着手。

## 5. 次の 1 手
- `Playtest onigame-dodge60 first playable and fix top friction` を `In progress` にして、
  30-60秒の初見プレイで見える上位1-3件の摩擦を修正する。

## 確認したファイル
- PLANNING_MEETING.md
- README.md
- PROJECTS.md
- ROADMAP.md
- DECISIONS.md
- memory/docs/2026/03/14/index.md
- memory/docs/history/index.md
- games/README.md
- games/onigame-dodge60/README.md

## 実行したコマンド
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh auth status`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project field-list 2 --owner onizuka-agi-co --format json`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project item-list 2 --owner onizuka-agi-co --limit 100 --format json`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project item-edit ... --title ... --body ...`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project item-edit ... --field-id ... --single-select-option-id ...`

## CEO への申し送りメモ
- Project #2 は `onigame-dodge60` ベースに整列済み。
- 次runは naming/sync ではなく、playtest 実装修正（1 thin slice 完了）を最優先にする。
