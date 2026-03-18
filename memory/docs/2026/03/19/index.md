# 2026-03-19

## 実績: Repository Polish

- [x] repository polish を public-facing finish まで実施
- [x] `README.md` / `README.ja.md` を hero・導線・quick actions 付きで整理
- [x] `memory/docs` に brand mark / logo / hero image を反映
- [x] `LICENSE` を追加し、VitePress の `.temp` を ignore 対象へ追加
- [x] `npm run docs:build` で docs build と encoding check を確認
- [x] GitHub repository description / topics を更新

## 実績: Memory Brand Colormap Alignment

- [x] `memory/docs/.vitepress/public/memory-brand.svg` の `#13b3ce / #ffcc4f / #101926 / #0f1f3a / #ffffff` に docs color token を統一
- [x] `memory/docs/.vitepress/theme/custom.css` の brand / button / panel / dark mode colors を colormap 基準へ更新
- [x] `memory/docs/.vitepress/config.ts` の `theme-color` を `#101926` に統一
- [x] `npm run docs:build` で build を再確認

- [x] `docs/onizuka-game-agi-company-structure.ja.drawio` and companion PNG/SVG now use the header-logo 5-color map only (`#13b3ce / #ffcc4f / #101926 / #0f1f3a / #ffffff`)
## 実績: English Mission Copy Cleanup

- [x] `README.md` の `Mission` を英語に統一
- [x] `memory/docs/about/index.md` の mission copy を英語 surface に合わせて修正

## 実績: Game Showcase With Screenshots

- [x] `README.md` に `Developing Now` / `Shipped Games` の screenshot showcase を追加
- [x] `README.ja.md` に開発中 / 公開済みゲームの screenshot showcase を追加
- [x] `memory/docs/about/game-lineup.md` を追加し、docs 側の fuller catalog を作成
- [x] `memory/docs/.vitepress/theme/custom.css` に showcase card styling を追加
- [x] `memory/docs/about/assets/game-lineup/` に `onigame-dodge60` / `onigame-lane-flip-sprint` / `onigame-one-stroke-sweep` / `onigame-omikuji` の screenshot asset を追加
- [x] `Pocket Putt Panic` は repo / first playable 未到達のため text-only pipeline card として維持

## 次アクション

- [ ] primary: `onizuka-game-agi-co#12` を execution-forced で前進し、`onigame-pocket-putt-panic` の child repo hard-start artifact を出す
- [ ] secondary: `onigame-dodge60#25` の verified live-lane slice を進める

## 検証メモ

- Pages の `base`、deploy workflow の publish 先、既存公開 URL は変更していない
- `npm run docs:build` を通過
- Playwright screenshot capture で live / local playable の showcase asset を作成

## 検証リンク

- [meeting-001-repository-polish](./meeting-001-repository-polish.md) - repository polish の実施記録
- [meeting-002-game-showcase](./meeting-002-game-showcase.md) - README / docs screenshot lineup の実施記録

## Task: Diagram Overlap Fix

- [x] rerouted `docs/onizuka-game-agi-company-structure.ja.drawio` so the governance and loop arrows no longer cut through nearby cards or rounded section frames
- [x] regenerated the companion `docs/onizuka-game-agi-company-structure.ja.drawio.png` and `docs/onizuka-game-agi-company-structure.ja.drawio.svg` exports after the layout fix
- [x] strengthened `scripts/check-diagram-svg-overlaps.mjs` so the pre-fix JA SVG now reports the missed `edge-rect` and `edge-rect-border` issues while the current JA SVG passes

## Task: Diagram Readability And Terminal Spacing

- [x] widened `ceo-review` in `docs/onizuka-game-agi-company-structure.ja.drawio` so the dark card text has more horizontal breathing room
- [x] moved the `arrow-memory-review` terminal so the top-edge terminals on `ceo-review` are no longer visually crowded
- [x] extended `scripts/check-diagram-svg-overlaps.mjs` with `text-legibility` and `edge-terminal-spacing`, then regenerated the companion JA SVG/PNG and re-ran the checker to `OK`

## Task: Diagram Text Visibility On Dark Surfaces

- [x] judged the original `ceo-review` token colors as numerically high-contrast but visually weak as a compact dark card because the title and body shared one flat treatment
- [x] added `text-contrast` and `text-emphasis` heuristics to `scripts/check-diagram-svg-overlaps.mjs` so low-contrast text and dark-card title/body blending can be detected separately
- [x] refactored `ceo-review` into a dark surface with an amber title chip plus dedicated white body text, regenerated the companion JA SVG/PNG, and re-ran the checker to `OK`
