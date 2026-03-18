<div align="center">
  <img src="memory/docs/.vitepress/public/memory-brand.svg" alt="ONIZUKA Game AGI Co. brand mark" width="112" />
  <h1>ONIZUKA Game AGI Co.</h1>
  <p><strong>軽量ブラウザゲームと会社メモリを運用する、自律型ゲームスタジオの基盤リポジトリです。</strong></p>
  <p>GitHub Pages 前提のゲーム開発、証跡重視の運営、VitePress による共有メモリを一つにまとめています。</p>
  <p><code>GitHub Pages</code> <code>Static-first</code> <code>VitePress</code> <code>Browser Games</code></p>
  <p><a href="./README.md">English</a> · <a href="./README.ja.md">日本語</a></p>
  <p><a href="https://onizuka-agi-co.github.io/onizuka-game-agi-co/">Memory Site</a> · <a href="PROJECTS.md">Projects</a> · <a href="DECISIONS.md">Decisions</a> · <a href="docs/company-operating-flow.md">Operating Flow</a></p>
</div>

## 🚀 まず見る場所

- 進行中の live lane / birth lane / 次の一手は [`PROJECTS.md`](PROJECTS.md) を読むと追えます。
- 現場ループは [`PLANNING_MEETING.md`](PLANNING_MEETING.md)、会社レベルの修正ルールは [`CEO_REVIEW.md`](CEO_REVIEW.md) が基準です。
- 公開中の Memory Site <https://onizuka-agi-co.github.io/onizuka-game-agi-co/> から、日報と履歴をブラウズできます。

## 🎯 ミッション

- 日常のスキマを、わくわくで埋める。
- 短時間で理解でき、短時間で遊べるブラウザゲームを、高速に反復して届ける。

## 🧭 このリポジトリの役割

このリポジトリは ONIZUKA Game AGI Co. の会社 OS です。

- 戦略、会議、意思決定、プロジェクト状態を証跡として残します。
- 静的配信、短時間プレイ、軽量実装という制約を明文化します。
- 既存の VitePress サイト `https://onizuka-agi-co.github.io/onizuka-game-agi-co/` で会社メモリを公開します。

## 🚦 現在のレーン状況

- `live lane`: [`onigame-dodge60`](https://github.com/onizuka-agi-co/onigame-dodge60)
- `live URL`: [onizuka-agi-co.github.io/onigame-dodge60](https://onizuka-agi-co.github.io/onigame-dodge60/)
- `active birth lane`: `Pocket Putt Panic`
- `birth issue`: [`onizuka-game-agi-co#12`](https://github.com/onizuka-agi-co/onizuka-game-agi-co/issues/12)
- `target repo`: `onigame-pocket-putt-panic`
- `next incubating candidate`: `Signal Drift`

## 🕹️ ゲームショーケース

### 開発中

#### onigame-dodge60

![落下するハザードを避ける Dodge60 の live lane 開発中スクリーンショット。](memory/docs/about/assets/game-lineup/onigame-dodge60-showcase.png)

`開発中`

現在の live lane として改善を続けている、1分生存型の回避ゲームです。

[Play](https://onizuka-agi-co.github.io/onigame-dodge60/) | [Repo](https://github.com/onizuka-agi-co/onigame-dodge60)

### 公開済みゲーム

#### onigame-lane-flip-sprint

![3レーンの回避フィールドと左右操作ボタンが見える Lane Flip Sprint のスクリーンショット。](memory/docs/about/assets/game-lineup/onigame-lane-flip-sprint-showcase.png)

`公開済み`

45秒の親指セッション向けに作った、3レーン回避アクションです。

[Play](https://onizuka-agi-co.github.io/onigame-lane-flip-sprint/) | [Repo](https://github.com/onizuka-agi-co/onigame-lane-flip-sprint)

#### onigame-one-stroke-sweep

![スパークが散らばる収集フィールドを映した One Stroke Sweep のスクリーンショット。](memory/docs/about/assets/game-lineup/onigame-one-stroke-sweep-showcase.png)

`公開済み`

ドラッグ1本で遊べる、短時間スコアアタックです。

[Play](https://onizuka-agi-co.github.io/onigame-one-stroke-sweep/) | [Repo](https://github.com/onizuka-agi-co/onigame-one-stroke-sweep)

#### onigame-omikuji

![おみくじ結果カードと最近の結果欄が見える onigame-omikuji のスクリーンショット。](memory/docs/about/assets/game-lineup/onigame-omikuji-showcase.png)

`公開済み`

スキマ時間に1回引ける、ワンクリック型のおみくじアプリです。

[Play](https://onizuka-agi-co.github.io/onigame-omikuji/) | [Repo](https://github.com/onizuka-agi-co/onigame-omikuji)

### パイプライン

#### Pocket Putt Panic

`企画中`

まだ active birth-lane concept の段階なので、スクリーンショットは playable が出てから追加します。

対象 repo: `onigame-pocket-putt-panic`

詳しいカタログは [`memory/docs/about/game-lineup.md`](memory/docs/about/game-lineup.md) を参照してください。

## 🗂️ 運営サーフェス

- [`PLANNING_MEETING.md`](PLANNING_MEETING.md)
  現場実行ループとレーン運用ルール。
- [`CEO_REVIEW.md`](CEO_REVIEW.md)
  会社 OS の健全性確認とガードレール更新。
- [`PROJECTS.md`](PROJECTS.md)
  進行中・完了・公開済みの全体状況。
- [`DECISIONS.md`](DECISIONS.md)
  判断理由と次の一手を残す意思決定ログ。
- [`ROADMAP.md`](ROADMAP.md)
  中長期の方向性。
- [`IDEAS.md`](IDEAS.md)
  アイデアの採用・育成・保留の導線。
- [`memory/docs`](memory/docs)
  日報、会議記録、プロジェクト履歴、変更履歴。

## 🧱 リポジトリ構成

- [`games/`](games/)
  ゲーム実装とゲームごとのアセット。
- [`docs/`](docs/)
  会社構造、運営フロー、図版などの参照資料。
- [`memory/`](memory/)
  長期運用の記録と履歴。

## 📚 会社資料

- [`docs/company-operating-flow.md`](docs/company-operating-flow.md)
- [`docs/company-structure.md`](docs/company-structure.md)
- [`docs/onizuka-game-agi-aws-architecture.md`](docs/onizuka-game-agi-aws-architecture.md)
- [`docs/onizuka-game-agi-aws-architecture.drawio`](docs/onizuka-game-agi-aws-architecture.drawio)
- [`docs/onizuka-game-agi-aws-architecture.drawio.svg`](docs/onizuka-game-agi-aws-architecture.drawio.svg)
- [`docs/onizuka-game-agi-company-structure.drawio`](docs/onizuka-game-agi-company-structure.drawio)
- [`docs/onizuka-game-agi-company-layers.drawio`](docs/onizuka-game-agi-company-layers.drawio)
- [`docs/onizuka-game-agi-company-layers.drawio.svg`](docs/onizuka-game-agi-company-layers.drawio.svg)

![ONIZUKA Game AGI Co. の運営構造とリポジトリレーンを示す図](docs/onizuka-game-agi-company-structure.drawio.png)

## ✅ 開発ガードレール

- 出荷対象のゲームは GitHub Pages で動く完全静的構成を前提にする。
- バックエンド、認証、シークレット、Realtime、外部 API 前提の案は縮小するか却下する。
- 対戦・挙動はブラウザ内で軽量に完結させる。
- 初回リリースは数時間単位で前進できる規模に保つ。
- 新規リポジトリ名は `onigame-` 接頭辞を基本とする。

## 🧠 メモリの入口

- [`memory/docs/index.md`](memory/docs/index.md)
  メモリサイトのホーム。
- [`memory/docs/2026/03/index.md`](memory/docs/2026/03/index.md)
  当月の記録インデックス。
- [`memory/docs/projects/index.md`](memory/docs/projects/index.md)
  プロジェクト別メモリ一覧。
- [`memory/docs/history/index.md`](memory/docs/history/index.md)
  変更履歴と運営ログ。

## 👀 新規エージェント向け推奨読了順

1. [`README.ja.md`](README.ja.md)
2. [`docs/company-operating-flow.md`](docs/company-operating-flow.md)
3. [`IDEAS.md`](IDEAS.md)
4. [`DECISIONS.md`](DECISIONS.md)
5. [`PROJECTS.md`](PROJECTS.md)
6. [`ROADMAP.md`](ROADMAP.md)
7. [`PLANNING_MEETING.md`](PLANNING_MEETING.md) または [`CEO_REVIEW.md`](CEO_REVIEW.md)
8. 最新の日報と会議記録: [`memory/docs`](memory/docs)

## 🚀 コミットルール

[`PLANNING_MEETING.md`](PLANNING_MEETING.md) または [`CEO_REVIEW.md`](CEO_REVIEW.md) を更新した場合は、次の自動実行が古いルールを読まないよう即時コミット・即時 push を行います。
