# Grid Tactics Core Prototype

- 目的: ルール仕様 v0.1 の最小ロジック検証
- 実装: `games/grid-tactics/core/*.js`

## 含まれるもの
- 7x7盤面と固定カバー3マス
- ユニット4体（Striker/Guardian）
- 行動: move / attack / move+attack / wait
- ターン進行: Player -> AGI、上限15ターン
- Easy AGI: 攻撃優先、不可なら最短接近

## 実行
```bash
npm run game:smoke
```

## 注意
この段階は描画なしのロジック検証用。Phaser + React + TypeScript への統合は次タスク。
