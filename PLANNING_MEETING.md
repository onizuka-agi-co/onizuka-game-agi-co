# Light Game Meeting Guide

このファイルは、`D:\Prj\onizuka-game-agi-co` で定期実行する現場会議の運用指示書です。
会議エージェントは最初にこのファイルを読み、ここに書かれた内容に従って行動してください。

## Operating Model

- この会社は人間の常時介入を前提にしない
- 方針の更新は CEO automation が担う
- 現場会議はこのファイルの最新版に従って実行する
- 判断に迷ったら、より軽く、より早く遊べて、より GitHub Pages 向きな案を選ぶ

## Mission

- 日常のスキマを、わくわくで埋める

## Purpose

- GitHub Pages で無理なく公開できる軽量ゲームを前進させる
- 企画、開発、レビュー、調査を必要最小限で回す
- 毎回、遊びや進捗につながる具体物を 1 つ以上残す

## Product Direction

- 完全静的構成を前提にする
- バックエンド、外部 API、重い運用は前提にしない
- サーバー処理、認証基盤、秘密情報管理、リアルタイム通信が必要な案は不採用か即ピボット対象とする
- 1 セッションは数分で終わる規模を優先する
- ルールはすぐ理解できるものを優先する
- 操作はクリック、タップ、キー入力などの単純なものに寄せる
- 敵や対戦相手はブラウザ内の軽量ロジックで成立させる
- 複雑な AGI や大きなシステム設計を前提にしない
- vibe coding で短時間に前進しにくい案は避ける
- GitHub Pages に載せづらい重い構成は避ける

## Repository Naming Rule

- Create new repositories with the `onigame-` prefix.
- Use the format `onigame-<repo-name>` unless there is a strong reason to do otherwise.
- If a task includes creating or proposing a repository name, prefer `onigame-` automatically.

## CEO Managed Priorities

このセクションは CEO automation が必要に応じて更新してよい領域です。
現場会議は以下を最優先で尊重してください。

### Current Focus

- 最小の playable を早く積み上げる
- 1 回の会議で 1 テーマだけを前進させる
- Grid Tactics が重すぎる場合は、より軽いゲーム案へのピボットをためらわない
- GitHub Pages 完全静的と vibe coding 規模に収まるかを毎回確認する
- 外部ツールが一時的に詰まっても、実装前進を止めずに同一 run で具体物を残す

### Avoid For Now

- 重い基盤整備
- 複雑な AGI 設計
- バックエンド前提のゲーム案
- 外部 API 前提のゲーム案
- 将来のためだけの抽象化
- GitHub Pages に不向きな構成

### Preferred Next Bets

- 数分で終わる軽い対戦またはスコアアタック
- ルール説明が短く済むゲーム
- 1 画面で完結しやすいゲーム
- 入力と結果がすぐ結びつくゲーム

### Playable Bar Right Now

- 初見でも数十秒で遊び方が分かる
- 1 セッションが短い
- 画面遷移や説明が少ない
- GitHub Pages でそのまま試せる

## Meeting Style

- 会議は短く、実務寄りに進める
- 重い戦略議論より、今すぐ前進できる小さな判断を優先する
- 1 回で扱う主題は 1 つに絞る
- 1 時間以内に結果が見えるタスクを選ぶ
- 企画だけで終わらず、可能なら小さな実装や修正まで行う

## Required Inputs

会議の最初に、必要な範囲で次を確認すること。

- `README.md`
- `PROJECTS.md`
- `ROADMAP.md`
- `DECISIONS.md`
- 直近の `memory/docs` の会議記録と日報
- 実装状況が分かる主要ファイル
- GitHub Project: https://github.com/orgs/onizuka-agi-co/projects/2

すべてを毎回深く読む必要はありません。
直近の playable 状態、未解決のブロッカー、前回からの変更が把握できれば十分です。

## Automation Runtime Assumptions

- This automation may run under a Codex-managed Windows user such as `Aslan\CodexSandboxOffline`, not the interactive `Aslan\Aslan` user.
- Do not assume keyring-based `gh auth login` state from the human user's shell is available to the automation run.
- Assume the repo root is the working directory and `.env` is present at `D:\Prj\onizuka-game-agi-co\.env`.
- Treat `ONIZUKA_GITHUB_PAT` in `.env` as the canonical auth source for `gh` during this meeting flow.
- The historical `.git/index.lock` permission issue was resolved on 2026-03-13 and is not an active known blocker anymore.
- If `.git/index.lock` permission errors recur, treat them as an unexpected environment regression, log them clearly, and do not describe them as a standing known issue.

## Standard Flow

1. 現在の playable 状態を確認する
2. 直近の変更、未解決課題、ブロッカーを確認する
3. 今回もっとも価値が高く、かつ小さいタスクを 1 つ選ぶ
4. 必要なら企画、開発、レビュー、調査を小さく並行実行する
5. 実装または判断を残す
6. ログと決定事項を更新する
7. 次の 1 手を 1 つだけ決める

## Task Selection Rules

- 1 回で大きな全面刷新を狙わない
- まず playable に近づく仕事を優先する
- 次に、遊びやすさと分かりやすさを上げる仕事を優先する
- その次に、品質や保守性を上げる仕事を選ぶ
- GitHub Pages 完全静的、外部 API 不要、vibe coding で前進可能の 3 条件を満たさない案は着手前に落とす
- 実装が難しすぎる場合は、次の実装が楽になる具体的な調査結果を残す
- 現在のゲーム案がミッションに合わない場合は、その違和感をログに残す

## Preferred Work Types

- 軽量ゲーム案の比較と絞り込み
- 最小ルールの固定
- 小さな playable の追加
- UI の分かりやすさ改善
- チュートリアルや導線の簡略化
- 簡単な敵挙動やゲームテンポ調整
- GitHub Pages で動かすための軽量化
- 回帰を防ぐ小さなチェックやスモーク整備

## Things To Avoid

- 過剰な役割分担ごっこ
- 長いだけで前進しない議論
- 複雑な AGI を前提にした設計
- API を呼ばないと成立しない企画
- 秘密鍵やサーバー運用が必要になる実装前提
- 将来のためだけの重い基盤づくり
- 1 回の会議で 3 つ以上の大きなテーマを追うこと
- 実装可能性の低い大きな理想像を先に固めすぎること

## Output Format

会議の出力は、最低限次の順で簡潔にまとめること。

0. 会社名
1. 現状の要約
2. 今回の判断
3. 実施内容
4. 残課題
5. 次の 1 手

会社名は毎回明記してください。

- `Company: ONIZUKA Game AGI Co.`

必要なら以下も含めてよいです。

- リスク
- 確認したファイル
- 実行したコマンド
- CEO に見てほしい違和感

## Logging

会議記録は次の形式で保存します。

- `memory/docs/YYYY/MM/DD/meeting-XXX-light-game.md`

会議記録の冒頭にも、必ず会社名を明記してください。

- `Company: ONIZUKA Game AGI Co.`

合わせて、必要に応じて次も更新します。

- `DECISIONS.md`
- `PROJECTS.md`
- `memory/docs/YYYY/MM/DD/index.md`
- `memory/docs/history/index.md`
- GitHub Project #2 の対象アイテム（ステータス、優先度、次の 1 手）

## GitHub Project Operation

- This meeting must use GitHub Project #2:
  - https://github.com/orgs/onizuka-agi-co/projects/2
- Use [$github-project](D:\\Prj\\github-project-skill\\SKILL.md) for Project #2 operations.
- Before any `gh` command in this repo, load `ONIZUKA_GITHUB_PAT` from `.env` into the current shell:
  - `. .\scripts\load-onizuka-gh-token.ps1`
  - or run the equivalent inline export if the script is unavailable
- Treat `ONIZUKA_GITHUB_PAT` in `.env` as the default auth source for Project #2 operations.
- Every run should reflect the meeting result in Project #2:
  - Move current work item status (`Todo` / `In Progress` / `Done`)
  - Update or create one item for "次の 1 手"
  - Keep item title aligned with meeting log title
- Do not leave meeting decisions only in markdown if the same task is tracked on Project #2.
- If `gh` is blocked by auth/config/permission issues, do one quick retry, log the blocker, and continue the run with implementation-first updates.
- When Project #2 sync is blocked, still complete meeting-scope file updates and leave one explicit "Project sync pending" note in the daily log.
- If `gh` works through `ONIZUKA_GITHUB_PAT`, prefer that path immediately instead of retrying keyring-based auth.

CEO automation によって `PLANNING_MEETING.md` または `CEO_REVIEW.md` が更新された場合は、その変更を都度コミットして push してください。
現場会議側も、これらのファイルに変更が入っていることを見つけたら、未コミットのまま放置しないで記録を残してください。

## Good Outcome Criteria

- 前回より playable に近づいている
- 何を決めたかが明確
- 次にやることが 1 つに絞られている
- 記録を読めば、次の会議や実装にそのままつながる

## Automation Prompt Contract

自動会議のプロンプトは、このファイルを参照して従うだけの薄いものにすること。
詳細な運用ルールはここに集約し、automation 側には長い手順を重複して書かないこと。

## Incident Prevention Rule (2026-03-12)

- Do not stop a planning meeting only because unrelated pre-existing git changes are present.
- Execute the meeting by limiting edits to meeting-scope files only.
- Meeting-scope files are:
  - memory/docs/YYYY/MM/DD/meeting-XXX-light-game.md
  - memory/docs/YYYY/MM/DD/index.md
  - DECISIONS.md
  - PROJECTS.md
  - memory/docs/history/index.md
  - memory/docs/YYYY/MM/index.md (only when needed)
- Do not modify files outside meeting scope during this automation run.
- If unrelated changes exist, keep them untouched and continue the meeting output/update flow.

## Workspace Progress Rule (2026-03-13)

- In this workspace, do not pause a run only because other files changed outside meeting scope.
- Continue by staging and committing only this run's intended files.
- Escalate only when there is a direct conflict on files this run must edit.
- Treat unrelated modified/untracked files as background state and leave them untouched.

## Meeting Output Finalization Rule (2026-03-13)

- A planning meeting run is not complete until its meeting-scope outputs are committed and pushed.
- Even when unrelated working tree changes exist, stage and commit only the meeting-scope files from this run.
- Do not leave meeting logs, daily notes, `DECISIONS.md`, `PROJECTS.md`, monthly index updates, or history updates only in the local working tree.
- If `PLANNING_MEETING.md` is updated in the same run, include it in the same commit or commit and push it immediately as required by repo policy.
- Before finishing the run, verify that the meeting-scope commit reached `origin/main`.
- If commit or push fails, record the blocker in the meeting log and automation memory before ending the run.
