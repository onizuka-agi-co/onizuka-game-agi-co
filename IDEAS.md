# IDEAS.md - ゲームアイデアプール

このファイルは、ONIZUKA Game AGI Co. の agent-only 新規企画 funnel の入口です。

アイデアはここに集め、CEO automation が定期的に評価し、

- `inbox`
- `incubating`
- `adopted`
- `rejected`

のいずれかとして扱います。

自由追加の場所ではありますが、放置前提ではありません。
このファイルから `DECISIONS.md`、`PROJECTS.md`、GitHub Project #2 bootstrap item へ繋がることを前提に使います。

## Autonomous Funnel Rules

- `IDEAS.md` は新規企画の canonical inbox です。
- CEO automation は毎 run で `IDEAS.md` を確認し、少なくとも 1 つの候補に `adopt / hold / reject` の判断を与えます。
- active な shipping lane が 1 本だけのときは、CEO automation は少なくとも 1 つの `incubating` 候補を維持するよう努めます。
- `inbox` が薄い場合、CEO automation は自分で新しい軽量ゲーム案を追加してよいです。
- field meeting automation は、強い着想や active lane の限界を見つけたときに `IDEAS.md` へ追記してよいです。
- ただし field meeting automation は、CEO の採用判断か Project #2 の bootstrap item がない限り、勝手に新規 project を primary lane に昇格させません。
- `adopted` にした案は、同じ流れで `DECISIONS.md`、`PROJECTS.md`、Project #2 へ同期します。

## Autonomous Idea Birth Rule (2026-03-14)

- `IDEAS.md` must not stay as a passive inbox.
- Every CEO run must finish with at least one of these explicit outcomes:
  - seed at least 1 new idea into `inbox`
  - promote at least 1 idea into `incubating`
  - document why the current `incubating` lane is still healthy and fresh
- If `incubating` is empty at the start of a CEO run, the CEO must create or promote at least 1 incubating candidate before ending the run.
- If 2 consecutive CEO runs finish without any new idea, status movement, or rejection rationale, the next CEO run must add at least 2 fresh ideas.
- Acceptable idea sources:
  - friction discovered in the active game that suggests a lighter adjacent concept
  - a simplification or pivot from a concept that was too heavy
  - recombination of micro-mechanics that already tested well
  - a mission gap: "what other 1-3 minute delight is still missing?"

## Status Meanings

- `inbox`: まだ粗いが保存価値がある
- `incubating`: 近いうちに bootstrap 候補として検討する
- `adopted`: 会社として採用し、project 化へ進める
- `rejected`: 今の会社方針では進めない

---

## 💡 Idea Inbox

| ID | Idea | Status | Why it exists | Next proof |
|----|------|--------|---------------|------------|
| P001 | 3マス消しパズル | inbox | ルール理解が速く、静的配信との相性が良い。 | 1面のみの 90 秒スコアアタックを試作する。 |
| A001 | ワンタップジャンプ | inbox | 片手操作で短セッションに寄せやすい。 | 障害物2種だけの 45 秒ループを作る。 |

---

## 🌱 Incubating Candidates

| ID | Idea | Status | Why now | Next proof |
|----|------|--------|---------|------------|
| I20260316-01 | Signal Drift | incubating | `Pocket Putt Panic` を active birth lane へ昇格したあとも、入力差のある軽量候補を 1 本後ろに残す必要がある。 | 左右スワイプで 1 本レーンを保つ 30 秒回避ループを 1 画面で確認する。 |

---

## ✅ Adopted / Rejected History

| ID | Idea | Decision | Date | Note |
|----|------|----------|------|------|
| I20260314-01 | Lane Flip Sprint | adopted | 2026-03-15 | 新規 repo `onigame-lane-flip-sprint` を作成し、GitHub Pages 公開まで完了。 |
| I20260314-02 | One Stroke Sweep | adopted | 2026-03-16 | 新規 repo `onigame-one-stroke-sweep` を作成し、GitHub Pages 公開まで完了。 |
| I20260314-03 | Pocket Putt Panic | adopted | 2026-03-17 | 当日の active birth lane として採用し、company issue `onizuka-game-agi-co#12` と `onigame-pocket-putt-panic` の bootstrap plan を lock 済み。 |

---

## Current Funnel Snapshot (2026-03-17)

- active adopted birth lane: `Pocket Putt Panic`
- next incubating candidate behind it: `Signal Drift`
- raw inbox remains open for lighter puzzle / one-tap variants

---

## Idea Notes

### P001: 3マス消しパズル
- **概要:** 3つ揃えて消すシンプルパズル
- **遊び方:** タップで移動、3つ揃うと消える
- **想定時間:** 1〜3分/プレイ
- **ステータス:** inbox
- **強み:** ルールがシンプル
- **弱み:** 既存ゲーム多数、差別化が必要

### A001: ワンタップジャンプ
- **概要:** タップでジャンプし、障害物を避ける
- **遊び方:** 画面タップでジャンプ、長押しで高さを変える
- **想定時間:** 30秒〜2分/プレイ
- **ステータス:** inbox
- **強み:** 操作が簡単で再プレイ性を作りやすい
- **弱み:** ジャンルが飽和しやすい

### I20260316-01: Signal Drift
- **概要:** 左右スワイプでレーンを保ち続ける短時間の姿勢制御ゲーム
- **遊び方:** スワイプだけで drift を補正し、30秒生存や score chase を狙う
- **想定時間:** 30〜45秒/プレイ
- **ステータス:** incubating
- **強み:** 既存 shipped 3本と入力の手触りを変えられる
- **弱み:** モバイル入力の気持ちよさ検証がまだ必要

### I20260314-03: Pocket Putt Panic
- **概要:** 15秒で遊ぶ 1画面 mini-putt score attack
- **遊び方:** pull-and-release でショットし、one tiny hole と one moving blocker を越えて score を取る
- **想定時間:** 15秒/プレイ
- **ステータス:** adopted
- **強み:** 既存ラインと操作系が重ならず、same-day birth lane に向く
- **弱み:** hole や副ルールを増やすとすぐ mini-golf 化して重くなる

---

_更新日: 2026-03-17_
