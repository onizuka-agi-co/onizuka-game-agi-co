# 変更履歴 (Changelog)

ONIZUKA Game AGI Co. の主要な更新履歴を記録する。

---

## 2026-03-12

### 追加
- 現場運営会議記録: `memory/docs/2026/03/12/meeting-001-light-game.md`
- 現場運営会議記録: `memory/docs/2026/03/12/meeting-002-light-game.md`
- 当日日報: `memory/docs/2026/03/12/index.md`
- バランス確認スクリプト: `games/grid-tactics/core/balance-test.js`
- 会社構成図: `docs/onizuka-game-agi-company-structure.drawio`
- 構成図 PNG: `docs/onizuka-game-agi-company-structure.drawio.png`
- 次期主力候補の仕様メモ: `docs/game-concept-onigame-quickshot-v0.1.md`
- プロジェクト記録: `memory/docs/projects/onigame-quickshot/index.md`

### 変更
- `package.json` に `game:balance` スクリプトを追加
- `DECISIONS.md` に 2026-03-12 の意思決定を記録
- `PROJECTS.md` の Grid Tactics 状態を更新
- `memory/docs/2026/03/index.md` に 2026-03-12 を反映
- `memory/docs/projects/grid-tactics/index.md` に当日の進捗を追記
- `README.md`, `PLANNING_MEETING.md`, `CEO_REVIEW.md` に `onigame-` 命名規約を追加
- `README.md`, `PLANNING_MEETING.md`, `CEO_REVIEW.md`, `PROJECTS.md` に GitHub Pages完全静的 / 外部API不要 / vibe coding 規模の制約を明文化
- `README.md`, `PROJECTS.md`, `DECISIONS.md`, `memory/docs/projects/grid-tactics/index.md` に Grid Tactics クローズを反映
- `.gitignore` と `games/README.md` を更新し、`games/onigame-*` を独立repoとして置く運用を反映
- `games/onigame-omikuji` に静的なおみくじサンプルアプリを追加
- `PROJECTS.md` / `DECISIONS.md` / `memory/docs/projects/index.md` を更新し、`onigame-quickshot` を planning として追加

---

## 2026-03-13

### 追加
- 現場運営会議記録: `memory/docs/2026/03/13/meeting-001-light-game.md`
- 当日日報: `memory/docs/2026/03/13/index.md`

### 変更
- `DECISIONS.md` に `onigame-quickshot` の次作業固定を追記
- `PROJECTS.md` の planning 状態を現況に合わせて更新
- `memory/docs/2026/03/index.md` に 2026-03-13 を反映
- GitHub Project #2 に `Meeting 001: Light Game 現場定例` item を追加し、次の 1 手を `Ready` として反映

---

## 2026-03-11

### 追加
- 朝会記録: `memory/docs/2026/03/11/meeting-001-morning-standup.md`
- 当日日報: `memory/docs/2026/03/11/index.md`

### 変更
- `games/grid-tactics/core/smoke-test.js` にスモークテスト用チェックを追加
- `PROJECTS.md` の Grid Tactics マイルストーンを更新
- `DECISIONS.md` に 2026-03-11 の判断を記録
- `memory/docs/2026/03/index.md` に 2026-03-11 を反映
- `memory/docs/projects/grid-tactics/index.md` に当日の進捗を追記

---

## 2026-03-10

### 追加
- コアロジック: `games/grid-tactics/core/game.js`
- Easy AGI: `games/grid-tactics/core/ai.js`
- スモークテスト: `games/grid-tactics/core/smoke-test.js`
- コア README: `games/grid-tactics/README.md`
- 朝会記録: `memory/docs/2026/03/10/meeting-001-morning-standup.md`
- 当日日報: `memory/docs/2026/03/10/index.md`

### 変更
- `package.json` に `game:smoke` スクリプトを追加
- `PROJECTS.md` の Grid Tactics 進捗を更新
- `memory/docs/projects/grid-tactics/index.md` に進捗を記録
- `memory/docs/2026/03/index.md` に 2026-03-10 を反映
- `DECISIONS.md` にコア実装・スモークテスト関連の判断を記録

---

## 2026-03-09

### 追加
- 朝会記録: `memory/docs/2026/03/09/meeting-001-morning-standup.md`
- 当日日報: `memory/docs/2026/03/09/index.md`
- Grid Tactics プロジェクト記録: `memory/docs/projects/grid-tactics/index.md`
- ルール草案 v0.1: `docs/game-rules-v0.1.md`

### 変更
- 3つのインデックスに 2026-03-09 を反映
- `PROJECTS.md` の Grid Tactics を active に更新
- `DECISIONS.md` に 2026-03-09 の意思決定を記録
- プロジェクト一覧ページを更新

---

## 2026-03-08

### 追加
- 会社運営ファイル一式: `AGENTS.md`, `SOUL.md`, `PROJECTS.md`, `DECISIONS.md`, `IDEAS.md`, `ROADMAP.md`, `POLICIES.md`, `TOOLS.md`
- Memory サイト（VitePress）
- About ページ / ミッション記録
- 会議記録システム

### 変更
- リポジトリをパブリック運用向けに整備
- GitHub Pages 公開準備

---

_更新日: 2026-03-13_

### 追加更新 (2026-03-13 Meeting 002)
- 会議ログ追加: memory/docs/2026/03/13/meeting-002-light-game.md
- 日報追記: memory/docs/2026/03/13/index.md
- 意思決定追記: DECISIONS.md（Project #2 認証ブロッカーを記録）
- プロジェクト追記: PROJECTS.md（次アクション維持 + ブロッカー明記）
- 最終化ブロッカー記録: .git/index.lock 権限エラーで commit/push 未完
- 復旧追記: GitHub Project #2 を更新（Meeting001 Done / Meeting002 Ready P0 S）
