# Meeting 002: Game Showcase With Screenshots
Company: ONIZUKA Game AGI Co.

- **日時:** 2026-03-19 03:40 JST
- **参加者:** 人間, エージェント
- **場所:** Codex

## 議題

- README と Memory docs に開発中 / 公開済みゲームの可視ラインナップを追加する
- playable artifact があるゲームだけを screenshot 付きで掲載する
- Pages 設定や公開 URL は変えずに public-facing 情報量を増やす

## 議論内容

- `onigame-dodge60` は current live lane なので `Developing Now` の先頭カードとして扱う
- `onigame-lane-flip-sprint`, `onigame-one-stroke-sweep`, `onigame-omikuji` は playable なので `Shipped Games` に screenshot 付きで並べる
- `Pocket Putt Panic` は repo / first playable 未到達のため text-only pipeline 扱いを維持する
- Memory docs 側は `memory/docs/about/game-lineup.md` に fuller catalog を作り、README は teaser としてまとめる
- docs theme には showcase card 専用スタイルを追加し、`memory-brand.svg` の colormap と整合させる

## 決定事項

- playable artifact があるゲームのみ screenshot 付き掲載
- `Developing Now` は 1 本だけを強く見せる featured card 構成
- `Shipped Games` は gallery card 構成
- `Pocket Putt Panic` は planning / pipeline の text-only 表示を維持

## アクションアイテム
| タスク | 担当 | 状態 |
|--------|------|------|
| README 英日へ screenshot showcase を追加 | エージェント | 完了 |
| Memory docs に `Game Lineup` ページを追加 | エージェント | 完了 |
| showcase screenshots を asset 化 | エージェント | 完了 |
| VitePress build で検証 | エージェント | 完了 |

## 次回

- `Pocket Putt Panic` に playable repo ができたら screenshot card を追加する
