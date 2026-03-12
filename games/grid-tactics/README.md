# Grid Tactics Core Prototype

- 目的: ルール仕様 v0.1 の最小ロジックを検証する
- 対象: `games/grid-tactics/core/*.js`

## 含まれるもの
- 7x7 盤面と固定カバー 3 マス
- 4 ユニット（Striker / Guardian）
- 行動: `move` / `attack` / `move+attack` / `wait`
- ターン進行: Player -> AGI、最大 15 ターン
- Easy AGI: 攻撃優先、届かない場合は最短接近

## 実行

```bash
npm run game:smoke
```

## 補足

この段階は描画なしのロジック検証用です。Phaser + React + TypeScript への統合は次のタスクとして進めます。
