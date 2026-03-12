# 2026-03-12

## 作業
- [x] 現場運営会議プロンプトを更新して、運用方針を整理
- [x] `npm run game:smoke` で playable 状態を確認
- [x] `game:balance` を追加して AGI バランス確認スクリプトを整備
- [x] `npm run game:balance` で AGI 勝率 100% を確認
- [x] AGIカンパニー構成図を `draw.io` で可視化
- [x] 新規リポジトリ命名規約として `onigame-` プレフィックスを採用
- [x] GitHub Pages完全静的 / 外部API不要 / vibe coding規模を非交渉条件として文書化

## 進行中
- [ ] AGI Easy 強度調整（目標勝率 30-40%）
- [ ] Phaser + React + TypeScript の描画統合（7x7 グリッド表示）
- [ ] プレイヤー入力改善（選択移動・操作・UI 表示）

## 会議
- [meeting-001-light-game](./meeting-001-light-game.md) - 現場運営会議（追加実装と検証）

## 気づき
- 勝率の偏りは「AGI が弱い」というより、現行実装のバイアスが強い状態だった。
- AGI 調整は動きだけでなく、バイアス除去も含めて次の修正候補に入れる。
- 会社構成図を整備したことで、次セッションで会社の運営構造を参照しやすくなった。
- `onigame-` に揃えることで、会社制作のリポジトリだと短く認識しやすくなる。
- GitHub Pages前提の会社では、バックエンドや外部APIを必要とする重いゲーム案は企画段階で落とすべき。

## タイムライン

| 時刻 | 内容 |
|------|------|
| 13:05 | 現場運営会議の運用方針文書を確認 |
| 13:08 | `README.md` / `PROJECTS.md` / `ROADMAP.md` / `DECISIONS.md` / 当日記録を確認 |
| 13:12 | `npm run game:smoke` を実行し、12-0 の結果を確認 |
| 13:16 | `game:balance` スクリプトを追加 |
| 13:19 | `npm run game:balance` を実行し、AGI 勝率 100% を確認 |
| 13:22 | 会議記録・意思決定ログ・変更履歴を更新 |
| 21:44 | AGIカンパニー構成図を `docs/onizuka-game-agi-company-structure.drawio` と PNG で可視化 |
| 21:49 | `onigame-` 命名規約を README と運用ガイドへ反映 |
| 21:53 | GitHub Pages完全静的・外部API不要・vibe coding規模の制約を README / 運用ガイド / 決定ログへ追記 |
