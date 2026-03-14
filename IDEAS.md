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

今のところ未設定。CEO automation が次回以降ここを維持する。

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
