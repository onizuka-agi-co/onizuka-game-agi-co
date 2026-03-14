# Meeting 017: Light Game 現場定例

- **日時:** 2026-03-14 15:55 (JST)
- **参加者:** エージェント
- **場所:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現況の要約
- GitHub Project #2 の primary item は `Bootstrap onigame-quickshot one-screen playable prototype`（開始時 `In progress`）。
- `games/onigame-quickshot` はこの run 開始時点で未作成だった。
- thin slice 方針に従い、会議ログ更新だけで終わらず実装を先行する。

## 2. 小さな決定
- 今回の thin slice は `onigame-quickshot` の最小1画面 playable 初版を完了扱いにする。
- スコープは最小固定: 移動 / 回避 / 60秒タイマー / スコア / リトライ。
- Project #2 は実装進捗に合わせて `In progress -> Done` へ更新する。

## 3. 実行内容
- `games/onigame-quickshot` を作成し、以下を追加:
  - `index.html`（HUD + canvas + result overlay）
  - `styles.css`（モバイル対応の最小UI）
  - `main.js`（プレイヤー移動、落下障害物、60秒制限、スコア、当たり判定、リトライ）
- 検証:
  - `node --check games/onigame-quickshot/main.js` を実行し構文エラーなし。
- GitHub Project #2 同期:
  - primary item を `In progress` に更新して着手。
  - 実装完了後、item body を Meeting 017 内容へ更新。
  - primary item を `Done` に更新。

## 4. 課題
- ブラウザ実機での手触り調整（難易度、速度、視認性）は次スライスで必要。
- `games/onigame-quickshot` は独立repo運用前提のため、公開手順（repo化 + Pages）は次 item で扱う。

## 5. 次の 1 手
- `Playtest quickshot first playable and fix top friction` を着手し、手触り上の上位1-3件を修正する。

## 確認したファイル
- README.md
- PLANNING_MEETING.md
- PROJECTS.md
- ROADMAP.md
- DECISIONS.md
- memory/docs/2026/03/14/index.md
- memory/docs/history/index.md

## 実行したコマンド
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh auth status`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project field-list 2 --owner onizuka-agi-co --format json`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project item-list 2 --owner onizuka-agi-co --limit 100 --format json`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project item-edit ... --single-select-option-id 47fc9ee4`
- `node --check games/onigame-quickshot/main.js`
- `. .\\scripts\\load-onizuka-gh-token.ps1; gh project item-edit ... --single-select-option-id 98236657`
