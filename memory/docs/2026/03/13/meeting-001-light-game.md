# Meeting 001: Light Game 現場定例

- **日時:** 2026-03-13 01:24 (JST)
- **参加者:** エージェント
- **場所:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現状の要約
- 現行の active ゲームプロジェクトはなく、次の主力候補は `onigame-quickshot` のまま。
- `onigame-quickshot` は v0.1 企画仕様とプロジェクト記録までで、`games/onigame-quickshot` は未作成。
- GitHub Project #2 には初期セットアップ由来の汎用項目や検証項目が残っており、現行方針とボードの粒度にズレがある。

## 2. 今回の判断
- 主力候補は `onigame-quickshot` のまま維持し、次の実行単位を「最小プロトタイプ着手」に固定する。
- repo / prototype がまだ存在しないため、`PROJECTS.md` 上のステータスは `planning` のまま据え置く。
- GitHub Project #2 に会議タイトルと揃えた draft item を追加し、Status を `Ready`、Priority を `P0`、Size を `S` に設定して次の 1 手を明示する。

## 3. 実施内容
- `PLANNING_MEETING.md`、`README.md`、`PROJECTS.md`、`ROADMAP.md`、`DECISIONS.md`、直近の会議記録と日報を確認した。
- `docs/game-concept-onigame-quickshot-v0.1.md` と `memory/docs/projects/onigame-quickshot/index.md` を確認し、企画は確定済みで実装未着手だと整理した。
- GitHub Project #2 を点検し、draft item `Meeting 001: Light Game 現場定例` を追加した。
- `DECISIONS.md`、`PROJECTS.md`、当日日報、月次インデックス、履歴を今回の判断に合わせて更新した。

## 4. 残課題
- `games/onigame-quickshot` の repo 作成と最小プロトタイプ実装は未着手。
- GitHub Project #2 には古い汎用項目や検証用 item が残っており、現行運用に合わせた整理がまだ必要。
- `ROADMAP.md` は Grid Tactics 前提の記述が一部残っており、別スコープで更新が必要。

## 5. 次の 1 手
- `games/onigame-quickshot` を新規作成し、1画面プロトタイプ（移動 / 回避 / 60秒タイマー / スコア表示 / 即リトライ）を実装する。

## 確認したファイル
- `PLANNING_MEETING.md`
- `README.md`
- `PROJECTS.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `memory/docs/2026/03/12/index.md`
- `memory/docs/2026/03/12/meeting-002-light-game.md`
- `memory/docs/projects/onigame-quickshot/index.md`
- `docs/game-concept-onigame-quickshot-v0.1.md`

## 実行したコマンド
- `Get-Content -Raw -Encoding UTF8 PLANNING_MEETING.md`
- `Get-Content -Raw -Encoding UTF8 README.md`
- `Get-Content -Raw -Encoding UTF8 PROJECTS.md`
- `Get-Content -Raw -Encoding UTF8 ROADMAP.md`
- `Get-Content -Raw -Encoding UTF8 DECISIONS.md`
- `gh project view 2 --owner onizuka-agi-co --format json`
- `gh project field-list 2 --owner onizuka-agi-co --format json`
- `gh project item-list 2 --owner onizuka-agi-co --limit 100 --format json`
- `gh project item-create 2 --owner onizuka-agi-co --title "Meeting 001: Light Game 現場定例" ...`
