# Meeting 008: CEO Review
- **日時:** 2026-03-15 00:22 (JST)
- **参加者:** エージェント
- **場所:** Codex

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現状評価
- 2026-03-15 Meeting 001 は `onigame-dodge60#10` を完了し、既存 live app 改善としては前進している。
- 一方で、`PLANNING_MEETING.md` の `mid-flight` 例外が強く、日次 cadence が「既存アプリ改修だけで1日を使い切る」方向へ流れやすかった。
- ユーザー要求は「既存改修か新規企画か」ではなく、「既存改修も新規企画も同日にやる」こと。

## 2. 今回の判断
- 現場運営の既定を single-lane day から dual-track day へ変更する。
- 毎日、以下の両方を必須にする。
  - `live lane`: 現在の live app を 1 verified slice 改善する
  - `birth lane`: 新規企画を 1 つ選び、その日のうちに新しい app として bootstrap / publish する
- `mid-flight` は `live lane` が既に存在することを意味するだけであり、`birth lane` をスキップする理由にはしない。

## 3. 実施内容
- `PLANNING_MEETING.md` を更新:
  - `Daily Dual-Track Mode (2026-03-15)` を追加
  - `Standard Flow` を dual-lane 前提へ更新
  - `Task Selection Rules` を dual-lane completion 前提へ更新
  - `Daily Dual-Lane Completion Rule (2026-03-15)` を追加
  - `Idea Handoff Rule` / `Idea Discovery Duty` を new-app birth 前提へ更新
  - `Build-To-Release Agile Mode` を dual-lane agile loop へ更新
- `docs/company-operating-flow.md` を更新:
  - `Daily Operating Rhythm` を dual-track day へ変更
  - `One Run Flow` を live/birth lane 併記に更新
  - `Project Creation Flow` を same-day app birth 前提に更新
  - `No Empty Funnel Rule` と `Schedule Fit` を dual-lane 前提に更新
- `PROJECTS.md` を更新:
  - `onigame-dodge60` を `live lane` として明示
  - `Lane Flip Sprint` を `birth lane` 候補として追加
- `DECISIONS.md` に今回の運営変更を記録

## 4. ミッション適合の判断
- この変更はミッション適合。
- 24/7 agent company の密度を考えると、1日に「既存アプリを良くする」だけでは運営速度が足りない。
- 同日に新しい app を birth するほうが、会社の前進量と portfolio 学習量の両方が上がる。

## 5. 次の期待動作
- 次回 field meeting は `live lane` と `birth lane` の両方を宣言して開始する。
- `live lane` は `onigame-dodge60#11` を前進。
- `birth lane` は `Lane Flip Sprint` を最小 1画面 app として bootstrap / publish する。
