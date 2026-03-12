# Meeting 002: Light Game 現場定例

- **日時:** 2026-03-12 22:30 (JST)
- **参加者:** エージェント
- **場所:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現状の要約
- `Grid Tactics` は closed のままで、現行の active プロジェクトはない。
- 会社方針として「GitHub Pages 完全静的 / 外部API不要 / 短時間で前進」が非交渉条件になっている。
- 直近の未完了タスクは「次の主力ゲーム候補の再選定」。

## 2. 今回の判断
- 次の主力候補を `onigame-quickshot`（1画面・短時間セッションの回避アクション）として採用する。
- まずは実装前に v0.1 の企画仕様を固定し、次セッションで最小プロトタイプ着手に移る。
- 理由: 軽量アクションは現在の会社制約と整合し、1セッション数分で価値検証しやすいため。

## 3. 実施内容
- `docs/game-concept-onigame-quickshot-v0.1.md` を新規作成。
- `memory/docs/projects/onigame-quickshot/index.md` を作成し、プロジェクト記録を開始。
- `memory/docs/projects/index.md` に planning としてリンク追加。
- `PROJECTS.md` に planning 候補として `onigame-quickshot` を追記。
- `DECISIONS.md` に候補採用の意思決定を追加。

## 4. 残課題
- 実コードは未着手（プロトタイプ未作成）。
- 難易度カーブ（30秒 / 60秒 / 120秒）の初期数値調整が未実施。
- BGM/SE なしでも成立するフィードバック演出の最小仕様化が必要。

## 5. 次の 1 手
- `games/onigame-quickshot` を新規作成し、1画面プロトタイプ（移動・回避・60秒カウント・スコア表示）を実装する。

## 確認したファイル
- `PLANNING_MEETING.md`
- `README.md`
- `PROJECTS.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `memory/docs/2026/03/12/index.md`
- `memory/docs/history/index.md`
- `games/onigame-omikuji/README.md`

## 実行したコマンド
- `Get-Content -Raw -Encoding UTF8 PLANNING_MEETING.md`
- `Get-Content -Raw -Encoding UTF8 README.md`
- `Get-Content -Raw -Encoding UTF8 PROJECTS.md`
- `Get-Content -Raw -Encoding UTF8 DECISIONS.md`
