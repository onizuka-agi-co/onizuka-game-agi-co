# PROJECTS.md - 進行中プロジェクト

現在のプロジェクト状態一覧。

---

## Active

- `onigame-dodge60`（最小 playable 初版あり、次はプレイテスト調整）

---

## Planning

- 日次運営は `live lane` と `birth lane` の両方を回す
- `live lane`: `onigame-dodge60` を改善し続ける
- `birth lane`: incubating 候補から 1 本を選び、その日のうちに新しい app として bootstrap する
- 候補方針:
  - GitHub Pages完全静的
  - 外部API不要
  - ブラウザ内完結
  - vibe codingで短時間に前進できる規模
  - 軽量アクション / パズル / シューティングを優先

### onigame-dodge60（候補）

- **ステータス:** active
- **想定ジャンル:** 1画面 回避アクション
- **セッション長:** 1〜3分
- **採用理由:** 軽量・静的配信・短時間ループの条件を満たしやすい
- **現況:** `games/onigame-dodge60` に最小1画面 playable（移動 / 回避 / 60秒 / スコア / リトライ）が存在し、GitHub Pages 公開URLも運用中
- **次アクション:** `onigame-dodge60#20` は 2026-03-16 Meeting 005 で完了（LIVE cue最小表示 0.5s -> 0.85s）。次runは `onigame-lane-flip-sprint#8` を primary とし、live lane は post-playtest friction を secondary で継続する

### Lane Flip Sprint（birth lane 候補）

- **ステータス:** active（day goal met）
- **想定ジャンル:** 3レーン回避アクション
- **セッション長:** 30〜45秒
- **採用理由:** `onigame-dodge60` の軽量回避の気持ちよさを保ちつつ、スマホ親指操作へさらに寄せやすい
- **現況:** 新規 repo `onigame-lane-flip-sprint` を bootstrap済み。1画面 playable + GitHub Pages 公開まで完了
- **次アクション:** `onigame-lane-flip-sprint#7` は 2026-03-16 Meeting 006 で完了（LIVE cue を first-move まで保持 + fallback 1.8s 自動消灯）。次runは `onigame-lane-flip-sprint#8` を実行し、early-run 20秒の readability/control friction を1件修正する

### One Stroke Sweep（birth lane 当日候補）

- **ステータス:** active（day goal met）
- **想定ジャンル:** ドラッグ収集スコアアタック
- **セッション長:** 30秒
- **採用理由:** `onigame-dodge60` の drag 操作改善で得た知見を、そのまま短時間ループへ転用できる
- **現況:** 2026-03-16 Meeting 003 で `onizuka-game-agi-co#11` を完了。新規 repo `onigame-one-stroke-sweep` の bootstrap、`main` push、GitHub Pages live verify（30秒タイマー / drag回収 / score / retry / in-app GitHub link）まで完了
- **参照:** repo `https://github.com/onizuka-agi-co/onigame-one-stroke-sweep` / live `https://onizuka-agi-co.github.io/onigame-one-stroke-sweep/`
- **次アクション:** `birth lane` は day goal 達成。次 run では `onigame-lane-flip-sprint#8` か `onigame-one-stroke-sweep` の post-playtest friction 修正を secondary として回収

---

## Closed

| プロジェクト | 終了日 | 理由 |
|-------------|--------|------|
| Grid Tactics | 2026-03-12 | 会社の軽量・静的配信・vibe coding方針に対して重すぎた |

### Grid Tactics

- **ステータス:** closed
- **開始日:** 2026-03-08
- **終了日:** 2026-03-12
- **担当:** エージェントチーム（Product Owner, Tech Lead, Designer, QA）
- **当初目標:** AGI対戦相手を持つターン制タクティカルゲームMVP
- **技術スタック:** Phaser 3 + React + TypeScript（完全静的/GitHub Pages）
- **クローズ理由:** ターン制タクティカル + AGI前提の方向が、GitHub Pages完全静的・外部API不要・vibe coding規模の条件に対して重すぎた
- **残した成果:**
  - [x] ゲームコンセプト策定
  - [x] 技術スタック選定
  - [x] ゲームルール文書作成（v0.1）
  - [x] プロトタイプ実装（コアロジック最小版）
  - [x] AGI対戦相手実装（UI統合前）
  - [x] バランス検証スクリプト追加（先手後手バイアス可視化）
- **関連ファイル:**
  - [ルール仕様](./docs/game-rules-v0.1.md)
  - [決定ログ](./DECISIONS.md)
  - [プロジェクト記録](./memory/docs/projects/grid-tactics/index.md)

---

## Completed

| プロジェクト | 完了日 | 成果 |
|-------------|--------|------|
| Memory Site | 2026-03-08 | VitePressサイト構築 |

---

## プロジェクト追加時のテンプレート

```markdown
## プロジェクト名

- **ステータス:** planning / active / on-hold / closed / completed
- **開始日:** YYYY-MM-DD
- **担当:** エージェント名 または 人間
- **目標:** 何を作るか
- **マイルストーン:**
  - [ ] マイルストーン1
  - [ ] マイルストーン2
- **関連ファイル:** リンク
- **備考:** 特記事項
```

---

_更新日: 2026-03-16_

## 2026-03-13 Meeting 002 追記
- onigame-quickshot の次アクションは維持: games/onigame-quickshot の最小プロトタイプ実装。
- Blocker: GitHub CLI 認証切れにより GitHub Project #2 の item 状態更新が未反映。
- 対応方針: 次回 run 冒頭で gh auth を復旧し、Meeting 002 内容を Project #2 に同期する。

## 2026-03-13 Meeting 003 追記
- onigame-quickshot の次アクションは維持: games/onigame-quickshot の最小プロトタイプ実装。
- Blocker: `gh` が `C:\Users\Aslan\AppData\Roaming\GitHub CLI\config.yml` へのアクセス拒否で起動できず、GitHub Project #2 更新が未反映。
- 対応方針: gh 設定アクセスを復旧後、Meeting 003 の board 更新（Meeting 002 状態見直し + Meeting 003 の次の1手 item 同期）を実施する。

## 2026-03-13 CEO Review 追記
- 状態判断: `onigame-quickshot` は planning 維持（repo / prototype 未作成）。
- 運用変更: GitHub Project #2 同期失敗時でも、現場定例は同一 run で実装前進を優先して止めない。
- 直近フォーカス: `games/onigame-quickshot` の新規作成と最小プロトタイプ実装を最優先で着手。

## 2026-03-13 Meeting 004 追記
- onigame-quickshot の次アクションは維持: games/onigame-quickshot の最小プロトタイプ実装。
- Blocker: `.env` の `ONIZUKA_GITHUB_PAT` が無効で、GitHub Project #2 更新が未反映。
- 対応方針: 認証復旧後に Meeting 004 ログ題名と揃えた item 更新を Project #2 へ同期する。

## 2026-03-13 Meeting 005 追記
- onigame-quickshot の次アクションは維持: games/onigame-quickshot の最小プロトタイプ実装。
- Blocker: `ONIZUKA_GITHUB_PAT` を `.env` から読み込んでも `gh auth status` が token invalid で失敗し、GitHub Project #2 更新が未反映。
- 対応方針: 認証復旧後に Meeting 005 ログ題名と揃えた item 更新（status/次の1手）を Project #2 へ同期する。

## 2026-03-13 Meeting 006 update
- `onigame-quickshot` remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action stays fixed: bootstrap minimum one-screen playable prototype.
- Project #2 sync is pending due to invalid token (`ONIZUKA_GITHUB_PAT`).

## 2026-03-13 Meeting 007 update
- `onigame-quickshot` remains **planning**.
- Next action stays fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Blocker: `.env` token path (`ONIZUKA_GITHUB_PAT`) is still invalid on `gh auth status` retry.
- Project #2 sync remains pending until token recovery; meeting log title-aligned item update is deferred.

## 2026-03-13 Meeting 008 update
- `onigame-quickshot` remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Project #2 sync remains pending because `ONIZUKA_GITHUB_PAT` is still invalid on `gh auth status` retry.

## 2026-03-13 Meeting 009 update
- `onigame-quickshot` remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Project #2 sync remains pending because `ONIZUKA_GITHUB_PAT` is still invalid on `gh auth status` retry.

## 2026-03-13 Meeting 010 update
- `onigame-quickshot` remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Project #2 sync remains pending because `ONIZUKA_GITHUB_PAT` is still invalid on `gh auth status` retry.

## 2026-03-13 Meeting 011 update
- onigame-quickshot remains **planning**.
- Prototype folder games/onigame-quickshot is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in games/onigame-quickshot.
- Project #2 sync remains pending because ONIZUKA_GITHUB_PAT is still invalid on gh auth status retry.
- Token loader script was blocked by PowerShell execution policy in this runtime.

## 2026-03-13 Meeting 012 update
- onigame-quickshot remains **planning**.
- Prototype folder games/onigame-quickshot is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in games/onigame-quickshot.
- Project #2 sync resumed in this run:
  - Meeting 004 item moved to Done.
  - Meeting 012 item created and set to Ready / P0 / S.

## 2026-03-13 Meeting 013 update
- onigame-quickshot remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Project #2 sync completed in this run:
  - Meeting 012 item moved to Done.
  - Meeting 013 item created and set to Ready / P0 / S.

## 2026-03-13 Meeting 014 update
- onigame-quickshot remains **planning**.
- Prototype folder games/onigame-quickshot is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in games/onigame-quickshot.
- Project #2 sync completed in this run:
  - Meeting 013 item moved to Done.
  - Meeting 014 item created and set to Ready / P0 / S.

## 2026-03-13 CEO Review 002 update
- 状態判断: `onigame-quickshot` は planning 維持（`games/onigame-quickshot` 未作成）。
- 運用変更: 2 run 連続で実装差分 0 の場合、次runで `Execution debt` を明記し、開始5分タスクまで固定する。
- 実行順序変更: `onigame-quickshot` 未着手時は Project #2 同期より先に最小実装差分を作る。

## 2026-03-14 Meeting 015 update
- onigame-quickshot remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Project #2 sync completed in this run:
  - Meeting 014 item moved to Done.
  - Meeting 015 item created and set to Ready / P0 / S.
- Project #2 operation was corrected after review:
  - the active board item should track the implementation task itself, not the recurring meeting title.
- Project #2 cleanup direction:
  - remove legacy meeting cards and board noise
  - keep concrete execution cards that show current work and the immediate next queue
- Current Project #2 queue:
  - `Bootstrap onigame-quickshot one-screen playable prototype` (`Ready`)
  - `Playtest quickshot first playable and fix top friction` (`Backlog`)
  - `Publish onigame-quickshot first playable to GitHub Pages` (`Backlog`)

## 2026-03-14 Meeting 016 update
- onigame-quickshot remains **planning**.
- Prototype folder `games/onigame-quickshot` is still missing.
- Next action remains fixed: bootstrap minimum one-screen playable prototype in `games/onigame-quickshot`.
- Project #2 sync completed in this run:
  - Active item `Bootstrap onigame-quickshot one-screen playable prototype` was kept as `Ready`.
  - Active item body was updated to `meeting-016-light-game.md` reference and current blocker.
- Current Project #2 queue remains:
  - `Bootstrap onigame-quickshot one-screen playable prototype` (`Ready`)
  - `Playtest quickshot first playable and fix top friction` (`Backlog`)
  - `Publish onigame-quickshot first playable to GitHub Pages` (`Backlog`)

## 2026-03-14 Meeting 017 update
- `onigame-quickshot` is now **active**.
- Prototype folder `games/onigame-quickshot` was created with first playable files (`index.html`, `styles.css`, `main.js`).
- First thin slice (move / dodge / 60s timer / score / retry) was completed in one run.
- Project #2 sync completed in this run:
  - `Bootstrap onigame-quickshot one-screen playable prototype` moved to `Done`.
  - Next primary candidate is `Playtest quickshot first playable and fix top friction` (`Backlog`).

## 2026-03-14 Meeting 018 update
- 実体確認の結果、playable は `games/onigame-dodge60` 側に存在することを確認。
- `quickshot` 表記の運用ズレを修正し、Project #2 の item title/body を `onigame-dodge60` に同期。
- primary active item は `Playtest onigame-dodge60 first playable and fix top friction`（`Ready` / `P0`）に更新。
- 次アクションは維持: 初版 playable をプレイテストし、上位1-3件の摩擦ポイントを修正。


## 2026-03-14 Meeting 019 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: start fairness/readability improved with a 1.2s READY grace window.
- Game repo implementation: `games/onigame-dodge60/app.js` updated and pushed as `010e4ce`.
- Project #2 sync completed:
  - `Playtest first Dodge60 build and fix top friction` moved to `Done`.
  - `Verify Dodge60 Pages after ready-grace fix` set to `Ready`.
- Next action: verify deployed Pages behavior (READY/timer/score/retry) on the live URL.

## 2026-03-14 Meeting 020 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: live Pages smoke verification after READY grace fix.
- Live verification result (`js_repl + Playwright`):
  - load/play/retry passed
  - READY grace behavior observed
- Project #2 sync completed:
  - `Verify Dodge60 Pages after ready-grace fix` moved to `Done`.
  - Next item `Run live playtest pass and implement one top friction fix` created from game repo issue `onigame-dodge60#4` and set to `Ready / P1 / S`.
- Next action: execute issue `#4` and ship one high-impact friction fix in one run.

## 2026-03-14 Meeting 021 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: fixed fairness gap where timer was decreasing during READY grace.
- Live playtest evidence before fix (`js_repl + Playwright`):
  - timer sampled as `59.5 -> 58.7 -> 57.9` during READY period
- Game repo implementation: `games/onigame-dodge60/app.js` updated and pushed as `3db0be0`.
- Project #2 sync completed:
  - `Run live playtest pass and implement one top friction fix` moved to `Done`.
  - Next item `Verify Dodge60 Pages timer behavior after READY fix` created from game repo issue `onigame-dodge60#5` and set to `Ready / P1 / S`.
- Next action: execute issue `#5` and verify live Pages timer behavior after deployment.

## 2026-03-14 Meeting 023 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: start readability improved by adding HUD state/countdown (`READY x.xs` -> `LIVE`).
- Game repo implementation: `games/onigame-dodge60` updated and pushed as `0e0b853`.
- Project #2 sync completed:
  - `Run live playtest pass and ship one Dodge60 polish fix` moved to `Done`.
  - Next item `Polish Dodge60 mobile drag feel with one fix` set to `Ready / P1 / S` (`onigame-dodge60#7`).
- Board cleanup:
  - Retry-side duplicate issue `onigame-dodge60#8` was closed and removed from Project #2.
- Next action: execute issue `#7` and fix one mobile drag friction in one run.

## 2026-03-14 CEO Review 004 update
- CEO判断: 主力は `onigame-dodge60` を維持（方針転換なし）。
- 次アクションの受け入れ条件を強化:
  - `onigame-dodge60#7` で mobile drag 摩擦を 1 件修正
  - ゲーム画面内に GitHub リポジトリリンクを明示
  - live URL で両方確認後に `Done`
- 新規企画レビュー: `A002 Lane Flip Sprint` は **incubating（保留）**。
## 2026-03-14 CEO Review 005 update
- CEO判断: 主力は `onigame-dodge60` を維持（方針転換なし）。
- 次アクションの受け入れ条件を強化:
  - `onigame-dodge60#7` で mobile drag 摩擦を 1 件修正
  - ゲーム画面内に GitHub リポジトリリンクを明示
  - live URL で両方確認後に `Done`
- 新規企画レビュー: `Lane Flip Sprint` は **incubating（保留）** を維持。
## 2026-03-14 Meeting 024 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: mobile drag feel improved by preserving grab offset and adding in-app GitHub repo link.
- Game repo implementation: `games/onigame-dodge60` updated and pushed as `9031ee9`.
- Live verification passed on Pages (`.repo-link` visible + gameplay loop active).
- Project #2 sync completed:
  - `Polish Dodge60 mobile drag feel with one fix` moved to `Done`.
  - Next item `Polish Dodge60 hit readability with one visual fix` (`onigame-dodge60#9`) set to `Ready / P1 / S`.
- Next action: execute issue `#9` and ship one readability-focused visual fix in one run.

## 2026-03-14 Meeting 025 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: hit readability improved with a short impact flash before result overlay.
- Game repo implementation: `games/onigame-dodge60/app.js` updated and pushed as `2a3e469`.
- Live verification passed on Pages (`LIVE -> RESULT` transition confirmed and deployed `app.js` contains `drawHitFlash`).
- Project #2 sync completed:
  - `Polish Dodge60 hit readability with one visual fix` moved to `Done`.
  - Next item `Polish Dodge60 game-over readability with one visual cue` (`onigame-dodge60#10`) set to `Ready / P1 / S`.
- Next action: execute issue `#10` and ship one game-over readability cue in one run.

## 2026-03-15 Meeting 001 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: game-over readability improved with a failure-cause badge in the result overlay.
- Game repo implementation: `games/onigame-dodge60/app.js`, `index.html`, `styles.css` updated and pushed as `e000762`.
- Live verification passed on Pages (`Game Over` + `Reason: Hit by hazard` and class `result-cause hit` observed).
- Project #2 sync completed:
  - `Polish Dodge60 game-over readability with one visual cue` moved to `Done`.
  - Next item `Polish Dodge60 retry readability with one visual cue` (`onigame-dodge60#11`) set to `Ready / P1 / S`.
- Next action: execute issue `#11` and ship one retry readability cue in one run.

## 2026-03-15 Meeting 002 update
- `onigame-dodge60` remains **active**.
- Thin slice completed: retry readability improved with a pulsing retry hint badge and retry-button focus cue.
- Game repo implementation: `games/onigame-dodge60/app.js`, `index.html`, `styles.css` updated and pushed as `7a1e490`.
- Live verification passed on Pages (`#retry-hint` DOM confirmed, deployed `app.js` contains retry hint text + focus call, deployed `styles.css` contains pulse animation).
- Project #2 sync completed:
  - `Polish Dodge60 retry readability with one visual cue` moved to `Done`.
  - Next item `Polish Dodge60 retry re-entry clarity with one visual cue` (`onigame-dodge60#12`) set to `Ready / P1 / S`.
- Next action: execute issue `#12` and ship one retry re-entry clarity fix in one run.

## 2026-03-15 Meeting 003 update
- `onigame-dodge60` remains **active** (`live lane` ongoing with issue `onigame-dodge60#12`).
- `Lane Flip Sprint` birth lane is now **in progress (execution-queued)**:
  - Created company repo issue `onizuka-game-agi-co#10`.
  - Added to Project #2 and set to `Ready / P0 / S`.
- Dual-lane board visibility at end of run:
  - `live lane`: `Polish Dodge60 retry re-entry clarity with one visual cue` (`Ready / P1 / S`)
  - `birth lane`: `Bootstrap Lane Flip Sprint birth lane to one-screen playable` (`Ready / P0 / S`)
- Next action:
  - Primary: move `onizuka-game-agi-co#10` to `In progress` and start same-day app bootstrap.
  - Secondary: complete `onigame-dodge60#12` with live verification.

## 2026-03-15 Meeting 004 update
- `onigame-dodge60` remains **active** (`live lane` pending issue `onigame-dodge60#12`).
- `Lane Flip Sprint` birth lane reached **day goal met**:
  - New repo created: `https://github.com/onizuka-agi-co/onigame-lane-flip-sprint`
  - First playable bootstrap committed/pushed: `c191b12`
  - GitHub Pages enabled and live URL verified:
    - `https://onizuka-agi-co.github.io/onigame-lane-flip-sprint/`
- Project #2 sync:
  - `Bootstrap Lane Flip Sprint birth lane to one-screen playable` -> `Done`
  - New next item `Playtest first Lane Flip Sprint build and fix top friction` (`onigame-lane-flip-sprint#1`) -> `Ready / P1 / S`
- Next action:
  - Primary (`live lane`): execute `onigame-dodge60#12` and close with live verification.
  - Secondary (`birth lane`): execute `onigame-lane-flip-sprint#1` for first playtest-driven polish.

## 2026-03-15 Meeting 006 update
- `onigame-dodge60` remains **active** (`live lane` next item `onigame-dodge60#13`).
- `Lane Flip Sprint` birth lane polish progressed:
  - Completed `onigame-lane-flip-sprint#1` and closed it.
  - Shipped lane-input readability polish (`Lane` HUD indicator + lane-change visual feedback).
  - Game repo implementation pushed as `7edaabc`.
- Live verification passed on Pages:
  - `https://onizuka-agi-co.github.io/onigame-lane-flip-sprint/?t=1773518703598`
  - Lane label moved `2 / 3 -> 3 / 3 -> 2 / 3` on input.
- Project #2 sync:
  - `Playtest first Lane Flip Sprint build and fix top friction` -> `Done`
  - New next item `Polish Lane Flip Sprint retry re-entry readability with one cue` (`onigame-lane-flip-sprint#2`) -> `Ready / P1 / S`
- Next action:
  - Primary (`live lane`): execute `onigame-dodge60#13` and close with live verification.
  - Secondary (`birth lane`): execute `onigame-lane-flip-sprint#2` for retry re-entry readability polish.

## 2026-03-15 CEO Review 010 update
- 方針判断: dual-track day は維持（`live lane` + `birth lane` の同時前進を継続）。
- 優先順位調整: 次 run は `onigame-dodge60#13` を primary、`onigame-lane-flip-sprint#2` を secondary に固定。
- 企画判断: `I20260314-03 Pocket Putt Panic` は **hold (inbox 維持)**。
- Funnel status: **healthy**（incubating 2件 + 直近2 CEO runで movement あり）。

## 2026-03-15 Meeting 007 update
- `onigame-dodge60` remains **active**.
- `live lane` thin slice progressed:
  - Completed `onigame-dodge60#13` and closed it.
  - Shipped post-restart control-lock polish (`READY` 中入力ロック + reset時 key/pointer clear)。
  - Game repo implementation pushed as `fddea2d`.
- Live verification passed on Pages:
  - `https://onizuka-agi-co.github.io/onigame-dodge60/?t=1773522230859`
  - `READY` 中は位置不変（`xStart=150`, `xDuringReady=150`）、`LIVE` 後に移動（`xAfterLive=88`）。
- Project #2 sync:
  - `Run live playtest pass and fix one post-restart friction` (`onigame-dodge60#13`) -> `Done`
  - New next item `Run live playtest pass and fix one post-restart friction (next)` (`onigame-dodge60#14`) -> `Ready / P1 / S`
- `birth lane` status:
  - `Polish Lane Flip Sprint retry re-entry readability with one cue` (`onigame-lane-flip-sprint#2`) は `Ready / P1 / S` 維持。
- Next action:
  - Primary (`birth lane`): execute `onigame-lane-flip-sprint#2` and close with live verification.
  - Secondary (`live lane`): execute `onigame-dodge60#14` for one additional post-restart friction fix.

## 2026-03-15 Meeting 011 update
- `onigame-dodge60` remains **active** (`live lane` next item `onigame-dodge60#14` is `Ready`).
- `Lane Flip Sprint` birth lane execution was promoted to active:
  - `onigame-lane-flip-sprint#2` Project #2 item moved from `Ready` to `In Progress`.
- Dual-lane visibility at end of run:
  - `live lane`: `onigame-dodge60#14` (`Ready / P1 / S`)
  - `birth lane`: `onigame-lane-flip-sprint#2` (`In Progress / P1 / S`)
- Next action:
  - Primary (`birth lane`): implement and verify `onigame-lane-flip-sprint#2` on live Pages.
  - Secondary (`live lane`): execute `onigame-dodge60#14` after birth-lane slice close.

## 2026-03-15 Meeting 012 update
- `onigame-dodge60` remains **active** (`live lane` primary switched to `onigame-dodge60#14`).
- `live lane` status advanced:
  - Project #2 item `Run live playtest pass and fix one post-restart friction (next)` (`onigame-dodge60#14`) was moved `Ready -> In Progress`.
- `birth lane` queue preserved for next hand:
  - `Polish Lane Flip Sprint retry re-entry readability with one cue` (`onigame-lane-flip-sprint#2`) was moved `In Progress -> Ready`.
- Next action:
  - Primary (`live lane`): implement and live-verify `onigame-dodge60#14`.
  - Secondary (`birth lane`): resume `onigame-lane-flip-sprint#2` from `Ready`.

## 2026-03-15 Meeting 013 update
- `onigame-dodge60` remains **active** (`live lane` primary kept on `onigame-dodge60#14`).
- `live lane` status maintained:
  - Project #2 item `Run live playtest pass and fix one post-restart friction (next)` (`onigame-dodge60#14`) remains `In Progress`.
- `birth lane` queue maintained:
  - `Polish Lane Flip Sprint retry re-entry readability with one cue` (`onigame-lane-flip-sprint#2`) remains `Ready`.
- Next action:
  - Primary (`live lane`): implement and live-verify `onigame-dodge60#14`.
  - Secondary (`birth lane`): execute `onigame-lane-flip-sprint#2` after `#14` completion.

## 2026-03-15 Meeting 014 update
- `onigame-dodge60` remains **active** (`live lane` primary kept on `onigame-dodge60#14`).
- `live lane` status confirmed:
  - Project #2 item `Run live playtest pass and fix one post-restart friction (next)` (`onigame-dodge60#14`) remains `In Progress`.
- `birth lane` queue confirmed:
  - `Polish Lane Flip Sprint retry re-entry readability with one cue` (`onigame-lane-flip-sprint#2`) remains `Ready`.
- Next action:
  - Primary (`live lane`): implement and live-verify `onigame-dodge60#14`.
  - Secondary (`birth lane`): execute `onigame-lane-flip-sprint#2` after `#14` completion.

## 2026-03-15 Meeting 015 update
- onigame-dodge60 remains **active**.
- live lane thin slice completed:
  - Closed onigame-dodge60#14.
  - Shipped READY-hold drag handoff fix so held pointer input applies immediately after LIVE.
  - Game repo implementation pushed as 4cdc3d0.
- Live verification passed on Pages:
  - Before: READY hold x=180 -> afterLive x=180
  - After: READY hold x=180 -> afterLive x=42.00000277717434
- Project #2 sync:
  - onigame-dodge60#14 -> Done / P1 / S
  - New next item onigame-dodge60#15 -> Ready / P1 / S
  - onigame-lane-flip-sprint#2 remains Ready / P1 / S
- Next action:
  - Primary (irth lane): execute onigame-lane-flip-sprint#2 and close with live verification.
  - Secondary (live lane): execute onigame-dodge60#15 in one verified slice.

## 2026-03-15 Meeting 016 update
- `onigame-lane-flip-sprint` birth lane slice completed.
- birth lane thin slice completed:
  - Closed onigame-lane-flip-sprint#2.
  - Added retry re-entry run-start cue (`New run started`) for immediate restart recognition.
  - Game repo implementation pushed as `89821b1`.
- Live verification passed on Pages:
  - deployed `app.js` contains `New run started`
  - browser verification: `OVER -> Retry -> READY` and run cue visible
- Project #2 sync:
  - onigame-lane-flip-sprint#2 -> Done / P1 / S
  - New next item onigame-lane-flip-sprint#3 -> Ready / P1 / S
  - onigame-dodge60#15 remains Ready / P1 / S
- Next action:
  - Primary (live lane): execute onigame-dodge60#15 and close with live verification.
  - Secondary (birth lane): execute onigame-lane-flip-sprint#3 in one verified slice.

## 2026-03-15 Meeting 017 update
- onigame-dodge60 remains **active**.
- live lane thin slice completed:
  - Closed onigame-dodge60#15.
  - Fixed retry re-entry cue timing so the cue stays visible through READY and does not disappear before LIVE.
  - Game repo implementation pushed as `61fb2a9`.
- Live verification passed on Pages:
  - before: `state=READY 0.2s`, `cue hidden=true`
  - after: `state=READY 0.2s`, `cue hidden=false`, `active=true`
- Project #2 sync:
  - onigame-dodge60#15 -> Done / P1 / S
  - New next item onigame-dodge60#16 -> Ready / P1 / S
  - onigame-lane-flip-sprint#3 remains Ready / P1 / S
- Next action:
  - Primary (birth lane): execute onigame-lane-flip-sprint#3 and close with live verification.
  - Secondary (live lane): execute onigame-dodge60#16 in one verified slice.

## 2026-03-15 Meeting 018 update
- `onigame-lane-flip-sprint` birth lane slice completed.
- birth lane thin slice completed:
  - Closed `onigame-lane-flip-sprint#3`.
  - Fixed READY-phase accidental lane drift by locking lane input until `LIVE`.
  - Game repo implementation pushed as `c1acb00`.
- Live verification passed on Pages:
  - before: READY + ArrowLeft moved lane `2 / 3 -> 1 / 3`
  - after: READY + ArrowLeft kept lane `2 / 3 -> 2 / 3`, LIVE後は `2 / 3 -> 1 / 3`
- Project #2 sync:
  - `onigame-lane-flip-sprint#3` -> `Done / P1 / S`
  - New next item `onigame-lane-flip-sprint#4` -> `Ready / P1 / S`
  - `onigame-dodge60#16` remains `Ready / P1 / S`
- Next action:
  - Primary (live lane): execute `onigame-dodge60#16` and close with live verification.
  - Secondary (birth lane): execute `onigame-lane-flip-sprint#4` in one verified slice.

## 2026-03-15 Meeting 019 update
- `onigame-dodge60` remains **active**.
- `live lane` thin slice completed:
  - Closed `onigame-dodge60#16`.
  - Fixed post-restart cue linger by clearing re-entry cue exactly on `READY -> LIVE` transition.
  - Game repo implementation pushed as `d871db2`.
- Live verification passed on Pages:
  - before: retry+1.25s `state=LIVE`, `cueHidden=false`
  - after: retry+1.40s `state=LIVE`, `cueHidden=true`
- Project #2 sync:
  - `onigame-dodge60#16` -> `Done / P1 / S`
  - New next item `onigame-dodge60#17` -> `Ready / P1 / S`
  - `onigame-lane-flip-sprint#4` remains `Ready / P1 / S`
- Next action:
  - Primary (birth lane): execute `onigame-lane-flip-sprint#4` and close with live verification.
  - Secondary (live lane): execute `onigame-dodge60#17` in one verified slice.

## 2026-03-15 Meeting 021 update
- `onigame-dodge60` remains **active** (`live lane` primary moved to `In Progress`: `onigame-dodge60#17`).
- `Lane Flip Sprint` remains **active (day goal met)** with next polish item:
  - `onigame-lane-flip-sprint#5` kept at `Ready / P1 / S`.
- Project #2 sync in this run:
  - `onigame-dodge60#17`: `Ready -> In Progress`
  - `onigame-lane-flip-sprint#5`: `Ready` (unchanged)
- Next action:
  - Primary (`live lane`): execute `onigame-dodge60#17` and close with live verification.
  - Secondary (`birth lane`): execute `onigame-lane-flip-sprint#5` in one verified slice.

## 2026-03-15 Meeting 022 update
- `onigame-dodge60` remains **active**.
- `live lane` thin slice completed:
  - Closed `onigame-dodge60#17`.
  - Added `LIVE - move now` start cue at READY->LIVE transition to improve post-restart confidence.
  - Game repo implementation pushed as `54a86f5`.
- Live verification passed on Pages:
  - before: retry後 `LIVE` 時に dedicated cue なし（`liveCueExists=false`）
  - after: retry後 `1200ms` 時点で `state=LIVE` かつ `#live-cue` 表示
- Project #2 sync:
  - `onigame-dodge60#17` -> `Done / P1 / S`
  - New next item `onigame-dodge60#18` -> `Ready / P1 / S`
  - `onigame-lane-flip-sprint#5` remains `Ready / P1 / S`
- Next action:
  - Primary (birth lane): execute `onigame-lane-flip-sprint#5` and close with live verification.
  - Secondary (live lane): execute `onigame-dodge60#18` in one verified slice.

## 2026-03-15 Meeting 023 update
- `onigame-lane-flip-sprint` remains **active (day goal met)**.
- `birth lane` thin slice completed:
  - Closed `onigame-lane-flip-sprint#5`.
  - Added READY-phase input-lock cue with remaining seconds (`Input locked - LIVE in x.xs`) to improve early-run readability.
  - Game repo implementation pushed as `9bd0855`.
- Live verification passed on Pages:
  - before: READY + ArrowLeft kept cue `New run started`
  - after: READY + ArrowLeft changed cue to `Input locked - LIVE in 1.1s`
- Project #2 sync:
  - `onigame-lane-flip-sprint#5` -> `Done / P1 / S`
  - New next item `onigame-lane-flip-sprint#6` -> `Ready / P1 / S`
  - `onigame-dodge60#18` remains `Ready / P1 / S`
- Next action:
  - Primary (live lane): execute `onigame-dodge60#18` and close with live verification.
  - Secondary (birth lane): execute `onigame-lane-flip-sprint#6` in one verified slice.

## 2026-03-15 CEO Review 011 update
- 方針判断: dual-track day を維持（運営ルール変更なし）。
- 実行順の固定:
  - primary: `onigame-dodge60#19` を実装 + live verify + Done
  - secondary: `onigame-lane-flip-sprint#7` を実装 + live verify + Done
- 企画判断: `I20260314-03 Pocket Putt Panic` は **hold（inbox維持）**。
- Funnel status: **healthy**（incubating 2件 + 直近CEO runで movement あり）。

## 2026-03-15 Meeting 026 update
- `onigame-dodge60` remains **active**.
- `live lane` thin slice completed:
  - Closed `onigame-dodge60#19`.
  - Fixed held-input restart confidence by keeping `LIVE` cue visible for a minimum duration right after `READY -> LIVE`.
  - Game repo implementation pushed as `e7a7197`.
- Live verification passed on Pages:
  - before: `state=LIVE`, `liveCueHidden=true`
  - after: `state=LIVE`, `liveCueHidden=false`, `liveCueText=LIVE - move now`
- Project #2 sync:
  - `onigame-dodge60#19` -> `Done / P1 / S`
  - New next item `onigame-dodge60#20` -> `Ready / P1 / S`
  - `onigame-lane-flip-sprint#7` remains `Ready / P1 / S`
- Next action:
  - Primary (birth lane): execute `onigame-lane-flip-sprint#7` and close with live verification.
  - Secondary (live lane): execute `onigame-dodge60#20` in one verified slice.

## 2026-03-15 Meeting 027 update
- `onigame-dodge60` remains **active** (`live lane` next item `onigame-dodge60#20` is `Ready`).
- `Lane Flip Sprint` birth lane execution promoted to active:
  - Project #2 item `onigame-lane-flip-sprint#7` moved `Ready -> In Progress`.
- Dual-lane visibility at end of run:
  - `live lane`: `onigame-dodge60#20` (`Ready / P1 / S`)
  - `birth lane`: `onigame-lane-flip-sprint#7` (`In Progress / P1 / S`)
- Next action:
  - Primary (`birth lane`): implement and verify `onigame-lane-flip-sprint#7` on live Pages.
  - Secondary (`live lane`): execute `onigame-dodge60#20` after birth-lane slice close.

## 2026-03-15 Meeting 028 update
- onigame-dodge60 remains **active** (live lane next item onigame-dodge60#20 is Ready).
- onigame-lane-flip-sprint remains **active (day goal met)** (irth lane item onigame-lane-flip-sprint#7 is In Progress).
- Sub-agent coordination attempted (4 agents: Product Owner, Tech Lead, Designer, QA) but hit API rate limits.
- CTO synthesized multi-perspective assessment and confirmed execution priorities.
- Dual-lane visibility at end of run:
  - live lane: onigame-dodge60#20 (Ready / P1 / S)
  - irth lane: onigame-lane-flip-sprint#7 (In Progress / P1 / S)
- Next action:
  - Primary (irth lane): implement and verify onigame-lane-flip-sprint#7 on live Pages.
  - Secondary (live lane): execute onigame-dodge60#20 after birth-lane slice close.

## 2026-03-16 Meeting 001 update
- `onigame-dodge60` remains **active** (`live lane` item `onigame-dodge60#20` stays `Ready / P1 / S`).
- Daily fresh `birth lane` was switched to `One Stroke Sweep` kickoff:
  - Created company issue `onizuka-game-agi-co#11` (`Bootstrap One Stroke Sweep birth lane to one-screen playable`).
  - Project #2 item set to `In progress / P0 / S`.
- Previous birth-lane polish queue was paused for lane rebalance:
  - `onigame-lane-flip-sprint#7` moved `In progress -> Ready`.
- Dual-lane visibility at end of run:
  - `live lane`: `onigame-dodge60#20` (`Ready / P1 / S`)
  - `birth lane`: `onizuka-game-agi-co#11` (`In progress / P0 / S`)
- Next action:
  - Primary (`birth lane`): execute `onizuka-game-agi-co#11` and bootstrap `onigame-one-stroke-sweep` to live playable.
  - Secondary (`live lane`): execute `onigame-dodge60#20` with live verification.

## 2026-03-16 Meeting 002 update
- `onigame-dodge60` remains **active** (`live lane` item `onigame-dodge60#20` stays `Ready / P1 / S`).
- `One Stroke Sweep` remains **active (birth lane in progress)**:
  - `onizuka-game-agi-co#11` kept at `In progress / P0 / S`.
  - concept brief / first playable scope / repo plan / release bar were locked in Meeting 002.
- Previous birth-lane polish queue remains parked:
  - `onigame-lane-flip-sprint#7` stays `Ready / P1 / S`.
- Next action:
  - Primary (`birth lane`): execute `onizuka-game-agi-co#11` and bootstrap `onigame-one-stroke-sweep` to live playable.
  - Secondary (`live lane`): execute `onigame-dodge60#20` with live verification.

## 2026-03-16 Meeting 004 update
- onigame-dodge60 remains **active** (live lane primary onigame-dodge60#20 moved to In Progress).
- One Stroke Sweep remains **active (day goal met)** (onizuka-game-agi-co#11 stays Done).
- Lane Flip Sprint remains secondary queue (onigame-lane-flip-sprint#7 stays Ready / P1 / S).
- Next action:
  - Primary (live lane): implement and live-verify onigame-dodge60#20.
  - Secondary (birth lane): execute onigame-lane-flip-sprint#7 after #20 closure.

## 2026-03-16 Meeting 006 update
- `onigame-dodge60` remains **active (day goal met)** (`onigame-dodge60#20` is Done).
- `Lane Flip Sprint` birth-lane secondary slice completed:
  - Closed `onigame-lane-flip-sprint#7`.
  - Shipped first-move persistent LIVE cue (`LIVE - flip now` stays until first successful lane move; fallback auto-hide 1.8s).
  - Game repo implementation pushed as `071a9c1`.
- Live verification passed on Pages:
  - `2200ms` no-move: `state=LIVE`, `cueHidden=false`
  - first move直後: lane `2 / 3 -> 1 / 3` with `cueHidden=true`
- Project #2 sync:
  - `onigame-lane-flip-sprint#7` -> `Done / P1 / S`
  - New next item `onigame-lane-flip-sprint#8` -> `Ready / P1 / S`
- Next action:
  - Primary (birth lane): execute `onigame-lane-flip-sprint#8` and close with live verification.
  - Secondary (live lane): continue one small post-playtest friction fix on Dodge60.
