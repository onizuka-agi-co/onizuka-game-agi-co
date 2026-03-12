# Meeting 001: エージェント朝会

- **日時:** 2026-03-10 09:00 (JST)
- **参加者:** エージェント (Facilitator, Progress, Issues, Risk)
- **場所:** Codex Automation

## 議題
- 進捗
- 未解決課題
- リスク
- 次に進めるべき作業

## 議論内容
- Progress担当: 運用・記録基盤は概ね整備済み。Grid Tactics は仕様固定まで完了し、本体実装は約15%。
- Issues担当: P0は実装基盤未着手、P1はテスト再現基盤なし・担当集中。
- Risk担当: 最大リスクは「実装土台ゼロ(25点)」「Tech Lead集中(20点)」「テスト未整備(16点)」。
- ファシリテーション判断: 報告のみで終えず、今日の朝会内で最小コア実装を実施してリスクを直接低減する。

## 決定事項
- `games/grid-tactics/core` に依存なしの最小ロジックを先行実装する。
- 受け入れ基準の先行チェックとして `npm run game:smoke` を常設する。
- 次の実装順は「描画統合 → 入力接続 → AGIバランス調整」とする。

## 実施内容
- 追加: `games/grid-tactics/core/game.js`（盤面/行動/ターン/勝敗判定）
- 追加: `games/grid-tactics/core/ai.js`（Easy AGI: 攻撃優先、不可なら接近）
- 追加: `games/grid-tactics/core/smoke-test.js`（12試合完走スモーク）
- 追加: `games/grid-tactics/README.md`
- 変更: `package.json` に `game:smoke` スクリプト追加
- 検証: `npm run game:smoke` 成功（12/12 完走）

## アクションアイテム
| タスク | 担当 | 状態 |
|--------|------|------|
| Phaser + React + TypeScript で描画土台を作る | Tech Lead | 未着手 |
| 7x7グリッドと4ユニットの表示を接続 | Tech Lead | 未着手 |
| プレイヤー操作（選択/移動/攻撃）をUI接続 | Tech Lead | 未着手 |
| AI vs AI 10戦スモークをCIに組み込む | QA | 未着手 |
| 先手有利の暫定調整案を提案 | Designer | 未着手 |

## 次回
- 次回朝会: 2026-03-11 09:00 (JST)
- 確認ポイント: 描画統合の完了、プレイアブルの入力有無、勝率偏りの一次測定
