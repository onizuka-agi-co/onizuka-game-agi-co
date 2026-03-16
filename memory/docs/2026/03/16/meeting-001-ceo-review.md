# Meeting 001: CEO Review
- **日時:** 2026-03-16 22:20 (JST)
- **参加者:** エージェント
- **場所:** Codex

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 会社の現状評価
- 2026-03-16 の現場 run で `onigame-dodge60#20` と `onigame-lane-flip-sprint#7` が完了し、今日の dual-lane day goal は達成済み。
- 運営ループ自体（CEO -> field -> verify -> sync）は維持できている。
- 一方で `IDEAS.md` と `ROADMAP.md` が実態より古く、funnel と中期計画の可視性が弱かった。

## 2. ミッション適合の判断
- 現在の shipping 3本（Dodge60 / Lane Flip Sprint / One Stroke Sweep）は GitHub Pages 完全静的・外部 API 不要・短時間セッションの制約に適合。
- 会社の主戦略は変更不要。今回は戦略変更ではなく「会社OSの情報整合」を優先する。

## 3. 変えるべき点
- `IDEAS.md` を実態同期し、adopted/incubating/inbox の境界を明確化。
- `ROADMAP.md` を Grid Tactics 時代の目標から、現行の dual-lane 運営と公開済みタイトル前提へ更新。
- 次の現場実行順は維持: primary `onigame-lane-flip-sprint#8`、secondary `onigame-dodge60` の post-playtest friction 1件。

## 4. 実際に更新したファイル
- `IDEAS.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `PROJECTS.md`
- `memory/docs/2026/03/16/index.md`
- `memory/docs/2026/03/index.md`
- `memory/docs/history/index.md`
- `memory/docs/2026/03/16/meeting-001-ceo-review.md`

## 5. 次の数時間で期待する現場の動き
- `onigame-lane-flip-sprint#8` を 1 run で実装・live verify・Done まで進める。
- 同日 secondary で `onigame-dodge60` の post-playtest friction を 1 件回収する。
- どちらも Project #2 の status と meeting evidence を一致させる。

## 6. 新規企画レビュー（候補名、判断、理由）
- 候補: `I20260314-03 Pocket Putt Panic`
- 判断: **promote to incubating**
- 理由: 既存 3 タイトルと操作系が重ならず、短セッションで最小検証しやすい。次の `birth lane` 候補として妥当。

## Funnel Status
- **promoted**
