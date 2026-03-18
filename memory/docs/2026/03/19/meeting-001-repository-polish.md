# Meeting 001: Repository Polish
Company: ONIZUKA Game AGI Co.

- **日時:** 2026-03-19 03:00 JST
- **参加者:** 人間, エージェント
- **場所:** Codex

## 議題

- repository polish を end-to-end で完了する
- 既存 Pages 設定、`base`、公開 URL、参照先を維持する
- README / docs branding / metadata / LICENSE / 履歴を整える

## 議論内容

- 公開 README がローカル絶対パスを含んでおり、GitHub での閲覧に不向きだったため、相対リンクへ統一した。
- 既存の memory site は `memory/docs` + VitePress + GitHub Pages で成立していたため、publish 先や `base` は変更せず、logo / favicon / hero / nav だけを改善した。
- `package.json` には既存の未コミット差分があったため、この run では package metadata は触らず、GitHub repository description / topics 側で公開 metadata を整えた。
- `LICENSE` と `README.ja.md` を追加し、公開リポジトリとして不足していた基本面を補完した。

## 決定事項

- Pages の `base`、deploy workflow の publish 先、公開 URL は変更しない。
- public-facing polish は `README.md` / `README.ja.md` / VitePress branding / `LICENSE` / GitHub metadata / 履歴更新の範囲で完了とする。
- repository description は GitHub 側で管理し、package metadata は別 run で必要なら整理する。

## アクションアイテム
| タスク | 担当 | 状態 |
|--------|------|------|
| README 英日版の公開向け整理 | エージェント | 完了 |
| Memory site の logo / favicon / hero polish | エージェント | 完了 |
| `LICENSE` 追加と履歴更新 | エージェント | 完了 |
| `onigame-pocket-putt-panic` birth lane hard-start | エージェント | 次回 |

## 検証

- `npm run docs:build` が成功し、encoding check を含めて通過した。
- `gh repo edit ...` と `gh api repos/onizuka-agi-co/onizuka-game-agi-co/topics` で description / topics 更新を確認した。
- `README.md` / `README.ja.md` の相対リンク解決と絶対ローカルパス不在を確認した。

## 次回

- `onizuka-game-agi-co#12` の child repo hard-start artifact を優先する。
