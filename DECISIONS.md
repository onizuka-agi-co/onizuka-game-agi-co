# DECISIONS.md - 決定ログ

重要な決定を記録する。理由も含めて。

---

## 2026-03

### 2026-03-13: CEOレビューで「2 run 連続停滞時の実装ゲート」を追加
- **決定:** `PLANNING_MEETING.md` に `Implementation Gate (CEO 2026-03-13)` を追加し、`onigame-quickshot` 未着手時は Project #2 同期より先に最小実装差分を必須化した。
- **理由:** Meeting 012-014 で Project #2 同期は回復した一方、`games/onigame-quickshot` は未作成のまま連続停滞していたため。
- **決定者:** エージェント（CEOレビュー）
- **影響:** 現場定例は「会議更新だけで終了」を許容せず、最小ファイル追加または最小挙動追加を先に行う。

### 2026-03-13: Meeting 005で次タスク維持、Project #2 同期をPAT無効ブロッカーとして継続記録
- **決定:** `onigame-quickshot` の次タスクは変更せず、`games/onigame-quickshot` の最小プロトタイプ実装を継続する。
- **理由:** 企画の再検討より実装着手点の固定を優先したほうが、playable に最短で近づけるため。
- **副作用:** `.env` の `ONIZUKA_GITHUB_PAT` を使った `gh auth status` が再試行でも失敗し、GitHub Project #2 更新は未反映。
- **決定者:** エージェント（現場定例）
- **影響先:** 認証復旧後、Meeting 005 の会議題名に揃えて Project #2 の status と次の1手 item を同期する。

### 2026-03-13: CEOレビューで「Project同期失敗時も実装前進を止めない」運用に変更
- **決定:** `PLANNING_MEETING.md` に、`gh` 認証/設定エラー時は 1 回再試行後にブロッカー記録へ切り替え、run 内の実装前進を優先するルールを追加した。
- **理由:** 2026-03-13 の現場定例が 3 run 連続で `onigame-quickshot` 実装未着手のまま繰り返され、Project #2 連携障害が前進停止要因になっていたため。
- **決定者:** エージェント（CEOレビュー）
- **影響:** 現場定例は Project 同期失敗時でも meeting-scope 更新と具体的な実装成果を残す運用へ移行する。

### 2026-03-13: Meeting 003で次タスク維持、Project #2 連携を環境ブロッカーとして記録
- **決定:** `onigame-quickshot` の次作業は変更せず、`games/onigame-quickshot` の最小プロトタイプ着手を最優先に維持する。
- **理由:** playable へ最短で進む判断としては引き続き妥当で、企画再検討より実装着手点の固定が有効なため。
- **副作用:** `gh` が `C:\Users\Aslan\AppData\Roaming\GitHub CLI\config.yml` へのアクセス拒否で起動できず、GitHub Project #2 更新は未反映。
- **決定者:** エージェント（現場定例）
- **影響:** Meeting 003 の board 反映は復旧後に同期。会議ログと履歴で未反映状態を明示して追跡する。

### 2026-03-13: `onigame-quickshot` の次作業を最小プロトタイプ着手に固定
- **決定:** `onigame-quickshot` を次の主力候補として維持し、次セッションの作業を `games/onigame-quickshot` の新規作成と 1 画面プロトタイプ実装に固定する。repo / prototype 未着手のためステータスは `planning` のまま据え置く
- **理由:** 候補の再検討を続けるより、実装着手点を 1 つに固定したほうが現在の会社方針に沿って早く playable に近づけるため
- **決定者:** エージェント（現場定例）
- **影響:** `PROJECTS.md` と GitHub Project #2 は `onigame-quickshot` prototype bootstrap を次の 1 手として扱う

### 2026-03-12: 次の主力候補を `onigame-quickshot` に決定
- **決定:** 次に着手する主力候補を `onigame-quickshot`（1画面・短時間回避アクション）とし、v0.1 仕様を基準にプロトタイプへ進む
- **理由:** 「GitHub Pages完全静的」「外部API不要」「vibe codingで短時間に前進」という現方針と最も整合し、セッション時間も 1〜3 分で設計しやすいため
- **決定者:** エージェント（現場定例）
- **影響:** `PROJECTS.md` は planning 候補を `onigame-quickshot` 中心に更新。次セッションの実装対象は `games/onigame-quickshot` の最小プロトタイプになる

### 2026-03-12: `games/onigame-*` を独立Gitリポジトリ置き場として使う
- **決定:** 会社 repo 配下の `games/` は、各ゲームの独立Gitリポジトリをローカルに並べる作業場所として扱う。各ゲームは 1 repo / 1 GitHub Pages を前提にする
- **理由:** 1ゲームごとに Pages デプロイ、Issue、README、公開管理を分けたほうが運用しやすく、会社 repo も運営記録に集中できるため
- **決定者:** 人間 + エージェント反映
- **影響:** 親 repo は `games/onigame-*` を直接追跡しない。サンプルとして `games/onigame-omikuji` を作成し、この構成で今後のゲームを増やせる状態にした

### 2026-03-12: Grid Tactics をクローズ
- **決定:** `Grid Tactics` は active から closed に変更し、今後の主力候補から外す
- **理由:** ターン制タクティカル + AGI前提の方向は、この会社の「GitHub Pages完全静的」「外部API不要」「vibe codingで短時間に前進できる規模」という条件に対して重すぎたため
- **決定者:** 人間
- **影響:** `PROJECTS.md` と `README.md` から現行主力プロジェクト扱いを外し、次のゲーム候補は軽量アクション / パズル / シューティング寄りで再選定する

### 2026-03-12: GitHub Pages完全静的と vibe coding 規模を非交渉条件として明文化
- **決定:** 今後のゲーム案は「GitHub Pagesにそのまま載る完全静的構成」「バックエンド不要」「外部API不要」「vibe codingで短時間に前進できる規模」を必須条件とする。重いAGIやAPI前提の案は不採用、または即ピボット対象とする
- **理由:** 会社のミッションと運用前提は軽量ブラウザゲームなのに、企画判断が重いタクティカル / AGI前提へ寄ると実装負荷と運用負荷が一気に増え、GitHub Pages制約とも衝突するため
- **決定者:** 人間 + エージェント反映
- **影響:** `README.md`、`PLANNING_MEETING.md`、`CEO_REVIEW.md`、`PROJECTS.md` で静的配信制約とピボット条件を明文化。今後の企画審査では Pages適性と実装軽さを先に判定する

### 2026-03-12: 新規リポジトリのプレフィックスを `onigame-` に統一
- **決定:** 今後 ONIZUKA Game AGI Co. が作成する新規リポジトリは `onigame-` プレフィックスを使う。
- **理由:** 会社制作のリポジトリだと短く分かりやすく伝わり、公開時の見た目も揃うため。
- **決定者:** エージェント
- **影響:** 今後の新規 repo 提案・作成時は `onigame-<repo-name>` を標準にする。

### 2026-03-12: 勝率偏りの一次要因を「先手後手バイアス」と判定
- **決定:** AGI強度調整の前段として、`game:balance`（100試合 x 先手player/agi）を標準診断に追加し、偏り原因を先に分離する
- **理由:** `game:smoke` の player 12-0 だけでは原因が不明確だったため。`game:balance` で先手側100%勝利を確認し、先手後手バイアスが支配的と判明
- **決定者:** エージェント（現場定例）
- **影響:** 次の実装優先は「AGI強化単体」から「先手後手バイアス緩和 + AGI評価改善」の順に変更

### 2026-03-11: AGI Easy 強度調整を最優先に変更
- **決定:** 優先順位を「1) AGI Easy強度調整 → 2) 描画統合 → 3) 入力接続」に変更
- **理由:** 12-0のプレイヤー勝率はMVPの核心価値（AGI体験）を破壊しており、UIが完成しても「弱すぎるAI」という印象が残る
- **決定者:** エージェント合意（週次プランニング会議・午後）
- **影響:** 描画統合は2番目に後ろ倒し、AGI Easyの目標勝率は新規プレイヤー30-40%

### 2026-03-11: 週次プランニング - 今週の優先順位確定
- **決定:** 今週の優先順位を「1) 描画統合 → 2) 入力接続 → 3) 勝率偏り修正」に確定
- **理由:** プレイアブル化がMVP完了の必須条件であり、勝率偏りはテスト有効性に影響するため
- **決定者:** エージェント合意（週次プランニング会議）
- **影響:** 演出・拡張機能はWeek 2以降へ後ろ倒し

### 2026-03-11: スモーク不変条件チェックを標準化
- **決定:** games/grid-tactics/core/smoke-test.js に状態不変条件チェック（HP整合、盤外防止、座標重複防止、phase整合）を追加し、日次スモークの標準とする
- **理由:** 完走判定だけではロジック破綻の早期検知が弱く、回帰を見逃すため
- **決定者:** エージェント合意（朝会）
- **影響:** 小さな実装変更でも状態破損を即時検出しやすくなる

### 2026-03-11: 本日の優先順を固定
- **決定:** 実装優先順を「描画統合着手 -> 入力接続 -> 勝率偏り測定の拡張」に固定
- **理由:** プレイアブル化のボトルネック解消を最優先しつつ、品質課題を並行で前進させるため
- **決定者:** エージェント合意（朝会）
- **影響:** 仕様追加より先にUI土台と検証導線の着手を行う

### 2026-03-10: コアロジック先行実装
- **決定:** `games/grid-tactics/core` に依存なし最小ロジック（盤面/行動/ターン/勝敗/Easy AGI）を先行実装
- **理由:** 実装基盤未着手リスク（P×I最大）を即時に下げるため
- **決定者:** エージェント合意（朝会）
- **影響:** 描画統合前でもルール検証と自動完走チェックが可能

### 2026-03-10: スモークテストを日次基準に採用
- **決定:** `npm run game:smoke` を最小受け入れチェックとして運用
- **理由:** ターン不整合・終局不能を早期検知するため
- **決定者:** エージェント合意（朝会）
- **影響:** 実装追加ごとに完走性を継続確認できる

### 2026-03-09: ルール仕様 v0.1 の採用
- **決定:** `docs/game-rules-v0.1.md` を実装開始の基準仕様として採用
- **理由:** ルール未定義が最優先ブロッカーだったため
- **決定者:** エージェント合意（朝会）
- **影響:** 仕様ブレを抑え、初期実装タスクに着手可能

### 2026-03-09: Grid Tactics を active に移行
- **決定:** プロジェクトステータスを planning から active へ変更
- **理由:** 企画判断が揃い、実装準備フェーズへ入ったため
- **決定者:** エージェント合意（朝会）
- **影響:** 日次進捗はプロジェクト記録で追跡する

### 2026-03-09: 今週の実装完了条件を再確認
- **決定:** 今週の完了条件を「1試合完走可能な最小プロトタイプ」とする
- **理由:** スコープ肥大を防ぎ、週内の到達可能性を高めるため
- **決定者:** エージェント合意（朝会）
- **影響:** 演出強化や拡張機能はWeek 2へ後ろ倒し

### 2026-03-08: デプロイ要件
- **決定:** ゲームはGitHub Pagesで動作する規模にする（**完全静的構成**）
- **理由:** インフラコスト0、デプロイ簡単化、会社サイトと統一
- **影響:** 
  - バックエンド不要
  - AGIロジックもブラウザ内で完結
  - データ保存はLocalStorage
  - 外部API呼び出しなし
- **決定者:** 人間

### 2026-03-08: ミッション決定
- **決定:** ミッションを「日常のスキマを、わくわくで埋める。」にする
- **理由:** 隙間時間ゲーム会社として明確で、ポジティブな響き
- **決定者:** 人間 + エージェント合意

### 2026-03-08: Memory構造の採用
- **決定:** onizuka-agi-co/memory と同じVitePress構造を採用
- **理由:** AIが読み書きしやすく、人間も見やすい
- **決定者:** エージェント提案 → 人間承認

### 2026-03-08: リポジトリをパブリックに
- **決定:** onizuka-game-agi-co をパブリックリポジトリにする
- **理由:** GitHub Pages を使うため
- **決定者:** 人間

### 2026-03-08: 週次プランニング - 今週の焦点
- **決定:** 今週の焦点は「動くプロトタイプを作る」
- **理由:** 企画フェーズは終了、次は実装フェーズ
- **決定者:** エージェント合意（Product Owner, Tech Lead, Designer, QA）

### 2026-03-08: 品質基準（MVP）
- **決定:** クリティカルバグ0、ターン進行不整合0、マッチ完了率95%以上
- **理由:** 最小限の品質基準を定義し、ユーザー体験を保証
- **決定者:** QA提案 → チーム合意

### 2026-03-08: ゲームタイプ決定
- **決定:** ターン制タクティカルスカーミッシュ（Grid Tactics）を採用
- **理由:** 7x7グリッドでAGIの判断が見えやすく、5-10分プレイで隙間時間に最適
- **決定者:** Designer提案 → チーム合意

### 2026-03-08: 技術スタック決定
- **決定:** Phaser 3 + React + TypeScript（GitHub Pagesで完全静的ホスティング）
- **理由:** Phaserは2Dグリッドゲームに最適、インフラコスト0、デプロイ簡単
- **影響:** AGIロジックもブラウザ内完結、データ保存はLocalStorage、外部APIなし
- **決定者:** Tech Lead提案 → 人間承認

### 2026-03-08: アーキテクチャ決定
- **決定:** MVPはレイヤード構成、後にヘキサゴナルへ移行
- **理由:** MVP期間は速度優先、事後的にリファクタリング可能
- **決定者:** Tech Lead提案 → チーム合意

### 2026-03-08: MVPスコープ確定
- **決定:** 7x7グリッド、2ユニット（Striker + Guardian）、10-15ターン、カバーシステム
- **理由:** 小さく始めて早く検証するため
- **決定者:** Product Owner提案 → チーム合意

### 2026-03-08: 今週の実装優先順位（Meeting 004）
- **決定:** ゲームルール文書を最初の2時間で作成、その後プロトタイプ実装開始
- **理由:** ルールなしでは実装不可、ブロッカーを最優先で解消
- **決定者:** チーム合意（Product Owner, Tech Lead, Designer, QA）

### 2026-03-08: オンボーディング戦略
- **決定:** 初戦はガイド付き（別チュートリアル画面ではなくゲーム内案内）、AGIは最初「イージー」モード
- **理由:** 新規プレイヤーの挫折防止、5-10分で「気持ちいい」体験提供
- **決定者:** Designer提案 → チーム合意

### 2026-03-08: テスタビリティ向上策
- **決定:** 開発コンソール（チートコード）、決定論的RNG + アクションログ、モックAGIモードを実装
- **理由:** バグ再現可能性とテスト効率向上
- **決定者:** QA提案 → チーム合意

---

## 決定記録テンプレート

```markdown
### YYYY-MM-DD: タイトル
- **決定:** 何を決めたか
- **理由:** なぜその決定か
- **代替案:** 他に検討した案（あれば）
- **決定者:** 人間 / エージェント / 合意
- **影響:** この決定による影響範囲
```

---

_更新日: 2026-03-13_

### 2026-03-13: Meeting 012で次タスクを維持し、Project #2 同期を再開
- **決定:** 次の1手は変更せず、`games/onigame-quickshot` の最小プロトタイプ着手を維持する。
- **理由:** playable 未着手のため、企画再検討より実装着手の固定継続が最短で価値を生むため。
- **副作用:** Project #2 は今回復旧し、`Meeting 004` を Done、`Meeting 012` を Ready/P0/S で反映。
- **決定者:** エージェント（現場定例）
- **影響先:** 次runは Project 更新より先に `games/onigame-quickshot` の最小プロトタイプ実装を開始する。

### 2026-03-13: Meeting 007で次タスクを維持し、Project #2 を認証ブロッカーとして継続
- **決定:** 次の1手は変更せず、`games/onigame-quickshot` の最小プロトタイプ着手を維持する。
- **理由:** 企画の再検討より実装着手点の固定を優先するほうが、playable への最短経路を維持できるため。
- **副作用:** `.env` の `ONIZUKA_GITHUB_PAT` で `gh auth status` を2回試行しても token invalid が継続し、GitHub Project #2 更新は未反映。
- **決定者:** エージェント（現場定例）
- **影響先:** 認証復旧後に Meeting 007 の題名に揃えた item 更新（status + 次の1手）を Project #2 へ同期する。

### 2026-03-13: Meeting 004で次タスク維持、Project #2 同期をPAT無効ブロッカーとして継続記録
- **決定:** `onigame-quickshot` の次タスクは変更せず、`games/onigame-quickshot` の最小プロトタイプ実装を継続する。
- **理由:** 企画再検討より実装着手を優先するほうが、現行方針に沿って playable へ最短で近づけるため。
- **副作用:** `.env` の `ONIZUKA_GITHUB_PAT` を使った `gh auth status` を 2 回試行してもトークン無効で、GitHub Project #2 更新は未反映。
- **決定者:** エージェント（現場定例）
- **影響先:** 次回 run で認証復旧後に、Meeting 004 の項目を Project #2 へ同期する。

### 2026-03-13: Meeting 002で次の1タスクを維持し、Project #2 認証障害をブロッカー化
- **決定:** onigame-quickshot の次タスクは変更せず、games/onigame-quickshot の最小プロトタイプ実装を継続する。
- **理由:** 会社方針（軽量・短セッション・GitHub Pages完全静的）と整合し、最短で playable に近づくため。
- **副作用:** GitHub Project #2 の item 更新は gh auth 無効で未反映。運用ログで追跡が一時的にMarkdown側へ偏る。
- **決定者:** エージェント（現場定例）
- **影響先:** 次回 run で認証復旧後に Project #2 へ同内容を同期する。

### 2026-03-13: Meeting 006 kept next step fixed and logged Project #2 auth blocker
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: create minimum prototype in `games/onigame-quickshot`.
- **Reason:** Current mission priority is playable progress with smallest scope. Re-planning without prototype progress would not improve delivery speed.
- **Blocker:** `gh auth status` failed again with invalid token from `.env` (`ONIZUKA_GITHUB_PAT`), so GitHub Project #2 sync could not be executed in this run.
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Continue implementation-first flow in meeting logs and keep explicit `Project sync pending` notes until token recovery.

### 2026-03-13: Meeting 008 kept next step fixed and logged Project #2 auth blocker
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: create a one-screen playable prototype in `games/onigame-quickshot`.
- **Reason:** Current company priority is smallest-scope playable progress; re-planning without prototype creation would add delay.
- **Blocker:** `gh auth status` failed twice with `The token in GH_TOKEN is invalid.` after loading `ONIZUKA_GITHUB_PAT` from `.env`; GitHub Project #2 sync could not be completed.
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Keep implementation-first flow and carry forward explicit `Project sync pending` note until token recovery.

### 2026-03-13: Meeting 009 kept next step fixed and logged Project #2 auth blocker
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in `games/onigame-quickshot`.
- **Reason:** The team still has no playable artifact for the next game; smallest-scope implementation remains the fastest route.
- **Blocker:** `gh auth status` failed with `The token in GH_TOKEN is invalid.` after loading `ONIZUKA_GITHUB_PAT` from `.env`; Project #2 sync was not executable in this run.
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Keep implementation-first flow and carry forward explicit `Project sync pending` note until token recovery.

### 2026-03-13: Meeting 010 kept the single next task and logged Project #2 auth blocker
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in `games/onigame-quickshot`.
- **Reason:** The team still lacks a playable artifact; smallest-scope implementation remains the fastest route.
- **Blocker:** `gh auth status` failed twice with `The token in GH_TOKEN is invalid.` after loading `ONIZUKA_GITHUB_PAT` from `.env`; Project #2 sync could not be executed.
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Continue implementation-first flow and carry forward explicit `Project sync pending` note until token recovery.

### 2026-03-13: Meeting 011 kept next step fixed and logged Project #2 auth blocker
- **Decision:** Keep onigame-quickshot as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in games/onigame-quickshot.
- **Reason:** No playable artifact exists yet; smallest-scope implementation remains the fastest route.
- **Blocker:** scripts/load-onizuka-gh-token.ps1 was blocked by PowerShell execution policy, and inline .env token retry still failed with The token in GH_TOKEN is invalid.. Project #2 sync could not be executed.
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Continue implementation-first flow and carry forward explicit Project sync pending note until token recovery.

### 2026-03-13: Add a daily automation runtime check for gh and PowerShell
- **Decision:** Add `scripts/check-automation-runtime.ps1` and schedule it for a daily 09:00 JST health check.
- **Reason:** Recent runs showed repeated blockers around `gh` auth and PowerShell execution policy. A lightweight scheduled check gives fast visibility into whether automation can actually execute the required commands.
- **Scope:** Verify `powershell` execution, `gh --version`, and `gh auth status`, then append the result to `memory/docs/history/automation-runtime-check.log`.
- **Decision Owner:** Agent
- **Impact:** Future automation debugging becomes faster because command-runtime failures are separated from game/project work.

### 2026-03-13: Meeting 013 kept next step fixed and synced Project #2
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in `games/onigame-quickshot`.
- **Reason:** No playable exists yet; smallest-scope implementation remains the fastest path under current company constraints.
- **Project Sync:** Updated GitHub Project #2 in this run (`Meeting 012` -> `Done`, created `Meeting 013` with `Ready` / `P0` / `S`).
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Next run should execute prototype bootstrap directly instead of additional planning loops.

### 2026-03-13: Meeting 014 kept next step fixed and synced Project #2
- **Decision:** Keep onigame-quickshot as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in games/onigame-quickshot.
- **Reason:** No playable exists yet; smallest-scope implementation remains the fastest path under current company constraints.
- **Project Sync:** Updated GitHub Project #2 in this run (Meeting 013 -> Done, created Meeting 014 with Ready / P0 / S).
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Next run should execute prototype bootstrap directly instead of additional planning loops.

### 2026-03-14: Meeting 015 kept next step fixed and synced Project #2
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in `games/onigame-quickshot`.
- **Reason:** No playable exists yet; smallest-scope implementation remains the fastest path under current company constraints.
- **Project Sync:** Updated GitHub Project #2 in this run (`Meeting 014` -> `Done`, created `Meeting 015` with `Ready` / `P0` / `S`).
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Next run should execute prototype bootstrap directly instead of additional planning loops.

### 2026-03-14: GitHub Project #2 should track execution tasks, not meeting instances
- **Decision:** Planning meeting automation must update a real implementation task in GitHub Project #2 instead of creating recurring `Meeting XXX: Light Game 現場定例` items.
- **Reason:** Meeting-titled items make the board report "Done" for the ceremony itself instead of real product progress, which hides execution debt and confuses the active queue.
- **Migration:** The active `Meeting 015` Project item will be converted into an execution task titled `Bootstrap onigame-quickshot one-screen playable prototype`.
- **Decision Owner:** Agent
- **Impact:** Future field meeting runs should keep the meeting log in markdown and keep Project #2 focused on the actual next work item.

### 2026-03-14: Project #2 should stay as a human-facing kanban for current work
- **Decision:** Remove stale meeting items, test items, and generic setup items from GitHub Project #2, then keep only concrete execution cards that show current work and the immediate follow-ups.
- **Reason:** The board is meant to help humans see what the agent team is doing now and what is moving next. Legacy noise weakens that visibility.
- **Board Shape:** Keep one primary active item plus a small, concrete follow-up queue. Prefer titles that describe build, verify, polish, or deploy work.
- **Decision Owner:** Agent
- **Impact:** Humans can read Project #2 as the current delivery kanban, while meeting markdown remains the audit trail.

### 2026-03-14: One planning meeting should usually finish one thin slice
- **Decision:** Default the field meeting to a short plan-then-build flow where one thin slice is taken from kickoff through implementation and verification in the same run.
- **Reason:** Repeated planning-only runs slow the team down and make progress harder for humans to see. Small end-to-end completions create clearer momentum for both the board and the repo history.
- **Exception Rule:** Research-only or planning-only runs are allowed only when a real blocker exists or the output clearly makes the next implementation run faster and safer.
- **Decision Owner:** Agent
- **Impact:** Future meetings should bias toward shipping one small completed slice rather than stopping after analysis.

### 2026-03-14: Meeting 016 synced Project #2 active item context and kept next step fixed
- **Decision:** Keep `onigame-quickshot` as the single next work item and keep the next implementation step unchanged: bootstrap a one-screen playable prototype in `games/onigame-quickshot`.
- **Reason:** No playable artifact exists yet; smallest-scope implementation remains the fastest path under current company constraints.
- **Project Sync:** Updated the primary active draft item body on GitHub Project #2 to reference `meeting-016-light-game.md` and explicit current blocker, while keeping status as `Ready`.
- **Decision Owner:** Agent (Field Meeting)
- **Impact:** Next run should execute prototype bootstrap directly and move the active item from `Ready` to `In progress`.
