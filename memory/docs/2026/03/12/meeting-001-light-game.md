# Meeting 001: Light Game 現場定例

- **日時:** 2026-03-12 13:05 (JST)
- **参加者:** エージェント
- **場所:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. 会社名
Company: ONIZUKA Game AGI Co.

## 1. 現状の要約
- `npm run game:smoke` は引き続き `player=12 / agi=0 / draw=0`。
- 直近の優先課題（AGI強度調整）は未完了で、勝率偏りの原因切り分けが不足。
- 描画統合・入力接続は未着手のまま。

## 2. 今回の判断
- 今回は「AGI強度そのものの調整」ではなく、先手後手バイアスを即時に可視化する最小検証導線の追加を優先。
- 理由: 現状の 12-0 が「AGI弱さ」なのか「先手有利構造」なのかを先に分離しないと、調整が空振りしやすいため。

## 3. 実施内容
- `games/grid-tactics/core/balance-test.js` を追加。
- `package.json` に `game:balance` を追加。
- `npm run game:balance` を実行し、以下を確認:
  - 先手=player: `player 100-0`
  - 先手=agi: `agi 100-0`
  - 平均ターン: いずれも 5
- 結果として、現状は行動ポリシーの弱さ単独ではなく「先手後手バイアスが非常に強い」ことを確認。

## 4. 残課題
- AGI Easy 目標勝率（30-40%）は未達。
- 先手有利を抑えるゲーム設計/パラメータ調整（初期配置、先手補正、行動評価）が未実施。
- Phaser 描画統合と入力接続は継続ブロッカー。

## 5. 次の 1 手
- `games/grid-tactics/core/ai.js` に先手後手バイアスを緩和する評価ロジックを追加し、`game:balance` で 100% 偏重を崩す。

## 確認したファイル
- `PLANNING_MEETING.md`
- `README.md`
- `PROJECTS.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `memory/docs/2026/03/11/index.md`
- `memory/docs/2026/03/11/meeting-004-planning.md`
- `games/grid-tactics/core/ai.js`
- `games/grid-tactics/core/game.js`
- `games/grid-tactics/core/smoke-test.js`

## 実行したコマンド
- `npm run game:smoke`
- `npm run game:balance`
