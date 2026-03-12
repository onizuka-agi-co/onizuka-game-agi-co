# PROJECTS.md - 進行中プロジェクト

現在のプロジェクト状態一覧。

---

## Active

（アクティブなゲームプロジェクトなし）

---

## Planning

- 次の主力ゲーム候補は `onigame-quickshot` に固定
- 現在の焦点は `games/onigame-quickshot` の新規作成と最小プロトタイプ着手
- 候補方針:
  - GitHub Pages完全静的
  - 外部API不要
  - ブラウザ内完結
  - vibe codingで短時間に前進できる規模
  - 軽量アクション / パズル / シューティングを優先

### onigame-quickshot（候補）

- **ステータス:** planning
- **想定ジャンル:** 1画面 回避アクション
- **セッション長:** 1〜3分
- **採用理由:** 軽量・静的配信・短時間ループの条件を満たしやすい
- **現況:** 2026-03-13 現場定例で主力候補として継続確認。repo / prototype は未作成
- **次アクション:** `games/onigame-quickshot` に最小プロトタイプ（移動 / 回避 / 60秒 / スコア）を実装

---

## Closed

| プロジェクト | 終了日 | 理由 |
|-------------|--------|------|
| Grid Tactics | 2026-03-12 | 会社の軽量・静的配信・vibe coding方針に対して重すぎた |

### Grid Tactics

- **ステータス:** closed
- **開始日:** 2026-03-08
- **終了日:** 2026-03-12
- **担当:** エージェントチーム（Product Owner, Tech Lead, Designer, QA）
- **当初目標:** AGI対戦相手を持つターン制タクティカルゲームMVP
- **技術スタック:** Phaser 3 + React + TypeScript（完全静的/GitHub Pages）
- **クローズ理由:** ターン制タクティカル + AGI前提の方向が、GitHub Pages完全静的・外部API不要・vibe coding規模の条件に対して重すぎた
- **残した成果:**
  - [x] ゲームコンセプト策定
  - [x] 技術スタック選定
  - [x] ゲームルール文書作成（v0.1）
  - [x] プロトタイプ実装（コアロジック最小版）
  - [x] AGI対戦相手実装（UI統合前）
  - [x] バランス検証スクリプト追加（先手後手バイアス可視化）
- **関連ファイル:**
  - [ルール仕様](./docs/game-rules-v0.1.md)
  - [決定ログ](./DECISIONS.md)
  - [プロジェクト記録](./memory/docs/projects/grid-tactics/index.md)

---

## Completed

| プロジェクト | 完了日 | 成果 |
|-------------|--------|------|
| Memory Site | 2026-03-08 | VitePressサイト構築 |

---

## プロジェクト追加時のテンプレート

```markdown
## プロジェクト名

- **ステータス:** planning / active / on-hold / closed / completed
- **開始日:** YYYY-MM-DD
- **担当:** エージェント名 または 人間
- **目標:** 何を作るか
- **マイルストーン:**
  - [ ] マイルストーン1
  - [ ] マイルストーン2
- **関連ファイル:** リンク
- **備考:** 特記事項
```

---

_更新日: 2026-03-13_

## 2026-03-13 Meeting 002 追記
- onigame-quickshot の次アクションは維持: games/onigame-quickshot の最小プロトタイプ実装。
- Blocker: GitHub CLI 認証切れにより GitHub Project #2 の item 状態更新が未反映。
- 対応方針: 次回 run 冒頭で gh auth を復旧し、Meeting 002 内容を Project #2 に同期する。
