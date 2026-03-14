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

### カテゴリ: パズル

| ID | アイデア | 評価 | ステータス | 備考 |
|----|---------|------|------------|------|
| P001 | 3マス消しパズル | ⭐⭐ | inbox | シンプルだが差別化必要 |

### カテゴリ: アクション

| ID | アイデア | 評価 | ステータス | 備考 |
|----|---------|------|------------|------|
| A001 | ワンタップジャンプ | ⭐⭐⭐ | inbox | 作りやすく遊びやすい |

### カテゴリ: その他

| ID | アイデア | 評価 | ステータス | 備考 |
|----|---------|------|------------|------|
| - | - | - | - | - |

---

## 🌱 Incubating Candidates

| ID | Idea | Status | Why now | Next proof |
|----|------|--------|---------|------------|
| I20260314-01 | Lane Flip Sprint | incubating | Fast lane-snap movement keeps the same lightweight survival appeal while creating a cleaner mobile thumb fantasy. | One-screen prototype with three lanes, one-button lane shifts, and a 45-second run. |
| I20260314-02 | One Stroke Sweep | incubating | Dodge60 で確認できた drag 操作の手触りを、より短い 30 秒ループへ転用できるため。 | One-screen prototype with drag-to-collect loop, 30-second timer, and 1 fail state. |
---

## ✅ Adopted / Rejected History

今のところ未設定。採用や見送りが出たらここか `DECISIONS.md` で追跡する。

---

## 🎲 アイデア詳細

### P001: 3マス消しパズル
- **概要:** 3つ揃えて消すシンプルパズル
- **遊び方:** タップで移動、3つ揃うと消える
- **想定時間:** 1-3分/プレイ
- **ステータス:** inbox
- **強み:** ルールがシンプル
- **弱み:** 既存ゲーム多数、差別化必要
- **AI活用:** レベル自動生成？

### A001: ワンタップジャンプ
- **概要:** タップでジャンプ、障害物を避ける
- **遊び方:** 画面タップでジャンプ、長押しで高く
- **想定時間:** 30秒-2分/プレイ
- **ステータス:** inbox
- **強み:** 操作が簡単、リプレイ性高い
- **弱み:** ジャンルとして飽和気味
- **AI活用:** 障害物パターン生成

---

## アイデア追加テンプレート

```markdown
### ID: アイデア名
- **概要:** 簡単な説明
- **遊び方:** 操作方法
- **想定時間:** 1プレイ何分
- **ステータス:** inbox / incubating / adopted / rejected
- **強み:** このゲームの良さ
- **弱み:** 懸念点
- **AI活用:** どうAIを使うか
- **参考:** 類似ゲームやインスピレーション元
```

---

## 評価基準

- ⭐⭐⭐ すぐ作りたい
- ⭐⭐ 機が熟せば
- ⭐ アイデアとして保存
- ❌ 見送り

---

_更新日: 2026-03-08_

## Seeded Concept Backlog (2026-03-14)

| ID | Idea | Status | Why it exists | Next proof |
|----|------|--------|---------------|------------|
| I20260314-01 | Lane Flip Sprint | incubating | Keeps the instant-read survival feel of Dodge60 but makes thumb input even clearer with three fixed lanes. | Build a one-screen prototype with left/right lane snap and 45-second runs. |
| I20260314-02 | One Stroke Sweep | incubating | Mobile drag already matters in Dodge60; this turns that tactile motion into the core loop for a 30-second score chase. | Mock one drag-to-collect loop with one fail state and one combo reward. |
| I20260314-03 | Pocket Putt Panic | inbox | Short flick skill fits the mission and gives the studio a second control fantasy beyond dodge movement. | Prove a single-hole 15-second loop with one moving blocker. |
