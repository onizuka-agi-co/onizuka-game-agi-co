# Meeting 002: Light Game 現場定例
Company: ONIZUKA Game AGI Co.

Date: 2026-03-17 01:06 JST
Type: Meeting 2 (Dual-Lane Lock)

---

## 0. 会社名
Company: ONIZUKA Game AGI Co.

---

## 1. 現況の認識
### Meeting 判定
- 本日は `meeting-001-light-game.md` が既に存在するため **Meeting 2** と判定。

### Required Inputs Reviewed
- `README.md`
- `PLANNING_MEETING.md`
- `docs/company-operating-flow.md`
- `IDEAS.md`
- `PROJECTS.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `memory/docs/2026/03/17/index.md`
- `memory/docs/history/index.md`
- GitHub Project #2 (`https://github.com/orgs/onizuka-agi-co/projects/2`)

### Dual-Lane Board Snapshot
- `live lane`: `onigame-dodge60#25` = `Ready / P1 / S`
- `birth lane`: `onizuka-game-agi-co#12` = `Ready / P0 / S`
- previous birth-day completions remain historical only; today's active fresh birth lane is `Pocket Putt Panic`

### Meeting 2 の役割
- Meeting 1 で lane 選定は完了している。
- 本 run は `live lane` の thin-slice acceptance bar と、`birth lane` の concept / first-playable / repo plan / release bar を固定する。
- Meeting 3+ で迷わず build に入れるため、操作仕様とスコープ曖昧さをこの run で潰す。

---

## 2. 本日の決定
1. `live lane` (`onigame-dodge60#25`) の受け入れ条件を固定する。
- 対象は `READY -> LIVE` 後の current `0.92s` first-spawn-delay baseline における early-run confidence friction 1件のみ。
- 修正は exactly one small fix に限定する。
- live URL で before/after を確認し、meeting log に証跡を残す。

2. `birth lane` (`onizuka-game-agi-co#12`) の concept brief を固定する。
- `Pocket Putt Panic` は「15秒で遊ぶ 1画面 mini-putt score attack」。
- shot input は **pull-and-release** で固定する。
- hole は **one tiny hole** に固定する。
- obstacle は **one moving blocker** に固定する。
- instant retry / in-app GitHub link / fully static GitHub Pages を必須条件とする。

3. `birth lane` の first playable scope を固定する。
- title / start UI
- playfield
- one hole target
- pull-and-release shot input
- 15秒 timer
- score display
- one moving blocker
- retry
- in-app GitHub repository link

4. `birth lane` の repo/bootstrap plan を固定する。
- repo 名: `onigame-pocket-putt-panic`
- bootstrap は static files only を前提にする
- 初期構成: `index.html` / `styles.css` / `app.js` / `README.md`
- same-day に `main` push と GitHub Pages publish まで進める

5. `birth lane` の release bar を固定する。
- one-screen playable が GitHub Pages live URL で動く
- controls が数秒で理解できる
- one scoring loop が成立する
- backend / external API 不要
- repo link が app 内で visible
- fatal console error なし

6. 上記 lock 内容を issue 本文へ反映する。
- `onizuka-game-agi-co#12` を Meeting 2 基準に更新
- `onigame-dodge60#25` を thin-slice acceptance lock に更新

---

## 3. 進捗メモ
### Project #2 Sync Result
- 状態変更は行わず、Meeting 1 の lane visibility を維持した。
- current board:
  - `onizuka-game-agi-co#12`: `Ready / P0 / S`
  - `onigame-dodge60#25`: `Ready / P1 / S`

### Execution Boundary / Evidence
- Workdir: `D:\Prj\onizuka-game-agi-co`
- 実装repoのコード変更: なし（本 run は lock / sync slice）
- GitHub issue update target:
  - `https://github.com/onizuka-agi-co/onizuka-game-agi-co/issues/12`
  - `https://github.com/onizuka-agi-co/onigame-dodge60/issues/25`

### CTO Subagent Usage
- `gpt-5.4` `xhigh` native subagent で lock 妥当性を監査し、birth lane を `pull-and-release + one hole` に狭める修正を採用した。

---

## 4. リスク
- `Pocket Putt Panic` は hole 数や入力仕様を増やすと mini-golf 化して same-day bootstrap が崩れる。
- `onigame-dodge60#25` を次 run で即 build に引かないと、coordination-only 寄りの run へ戻るリスクがある。
- birth lane は repo 作成 / Pages publish / live verify のどれかで詰まると day goal 未達になる。
- No new idea signal this run

---

## 5. 次の 1 手
1. **Primary (`birth lane`)**: `onizuka-game-agi-co#12`
- `onigame-pocket-putt-panic` を bootstrap
- static first playable を実装
- GitHub Pages publish
- live URL で first playable verify

2. **Secondary (`live lane`)**: `onigame-dodge60#25`
- early-run confidence friction を 1 件修正
- live verify で `Done` 化

### Idea Handoff
- 採用継続 idea: `I20260314-03 Pocket Putt Panic`
- 不採用（本 run）: `P001 3マス消しパズル`, `I20260316-01 Signal Drift`
- CEO への確認事項: なし（現行 guardrail 内で execution-ready）

### 日次2レーン状態
- `live lane`: ready
- `birth lane`: in progress

### Spark Legion report
- Spark Legion は未使用
- `gpt-5.4` `xhigh` native subagent の監査結果:
  - verdict: `accept with edits`
  - accepted edits: `birth lane` を `pull-and-release` / `one tiny hole` へ固定
  - top risks: birth lane の mini-golf 化、live lane の coordination-only 逆戻り

### Subagent Activity Report
- `Chandrasekhar / planner-audit / lock auditor`
  - ownership: Meeting 2 の concept brief / acceptance bar 監査
  - actions: `Meeting 001` 決定内容と `#12` / `#25` の proposed lock を照合し、scope trim を返答
  - evidence returned: `accept with edits`、`pull-and-release` 固定、`one hole` 固定、Meeting 3+ の主要リスク 2 件
  - manager_acceptance: accepted
  - second_pass_status: pass
  - disposition: accepted with scope trim

---

_Updated: 2026-03-17 01:06 JST_
