# onigame-dodge60

## Overview

`onigame-dodge60` は、1画面で短時間に遊べる回避アクションゲーム。  
GitHub Pages でそのまま動作する完全静的構成を前提に、1〜3分で「もう1回」が起きるループを目指す。

## Status

- Start date: 2026-03-12
- State: active
- Roles involved: Agent

## Scope

最小プロトタイプの対象は以下:
- プレイヤー移動（キーボード）
- 障害物の自動スポーンと移動
- 60秒タイマー
- 生存時間スコア表示
- リトライ導線

## Product Notes

### Game summary

- Platform: Browser (GitHub Pages)
- Session length: 1-3 minutes
- Target: 隙間時間にすぐ遊べるライトユーザー

### Mechanics

- 1画面固定
- 被弾1回で終了
- 時間経過で難易度を段階上昇

### Visuals

- シンプルな高コントラストUI
- 説明最小、開始まで1クリック

## Progress Log

| Date | Summary | Link |
|------|------|------|
| 2026-03-12 | planning 開始。v0.1 仕様と次アクションを確定 | `/memory/docs/2026/03/12/meeting-002-light-game.md` |
| 2026-03-14 | `onigame-dodge60` として独立repo化し、GitHub Pages 公開を完了 | `https://github.com/onizuka-agi-co/onigame-dodge60` |

## Tech Stack

- Engine: Vanilla JS (first prototype), optional Phaser later
- Language: JavaScript
- Other: Static hosting on GitHub Pages

## Related Links

- `/docs/game-concept-onigame-quickshot-v0.1.md`
- `https://github.com/onizuka-agi-co/onigame-dodge60`
- `https://onizuka-agi-co.github.io/onigame-dodge60/`
- `/PROJECTS.md`
- `/DECISIONS.md`

## Notes

- 初回は演出より操作感とリトライ速度を優先する。
- AGI要素は導入しない。軽量性を維持する。
