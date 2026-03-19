# Topic: Color Theory Research

- **日時:** 2026-03-19 JST
- **目的:** 配色理論の基礎と、軽量ブラウザゲーム / UI での実務的な使い方を整理する
- **調査方法:** web 調査 + Legion peer verification + Devil audit

## 要点

1. 配色理論は「絶対法則」ではなく、知覚と構図のヒューリスティックとして使うのが安全。
2. 基礎は `色相 (hue)`、`彩度/鮮やかさ (saturation/chroma)`、`明度/明るさ (value/lightness)`、`暖色/寒色 (temperature)` を分けて考えると整理しやすい。
3. 代表的な配色調和は `補色`、`類似色`、`トライアド`、`分割補色`、`テトラード`。ただし、面積比と明度差を管理しないと強すぎたり散漫になったりする。
4. `同時対比` により隣接色で見え方が変わるので、色は単体でなく背景との関係で判断する必要がある。
5. 「赤は危険、青は冷静」のような色彩心理の断定は危険。傾向はあるが、文脈差・文化差・個人差が大きい。

## UI / Game 実務への落とし込み

1. 色は意味そのものではなく、意味の補助にする。状態や危険度は `形` `アイコン` `文言` `動き` `音` と併用する。
2. 読みやすさの土台はコントラスト。文字は `4.5:1`、大きい文字や重要な非テキスト要素は `3:1` を最低ラインとして扱う。
3. 色を増やしすぎるより、`背景 / 面 / 本文 / 主役アクセント / 状態色` のように役割で少数固定した方が保守しやすい。
4. colorblind-safe は色を減らすことではなく、冗長化すること。色だけで勝敗、危険、状態差を読ませない。
5. 小規模チームでの `4〜6色から始める` は標準ではなく実務ヒューリスティック。足りない役割が出たときだけ拡張するのが安全。

## ONIZUKA Game AGI Co. 向けメモ

- 短時間ゲームでは「気持ちいい配色」より「一瞬で読める配色」を優先する。
- danger / success / focus は色だけでなく、輪郭、パルス、SE、ラベルで重ねる。
- 背景演出や粒子が増えるほど、アクセント色より明度差と輪郭の方が効く。
- まず neutral base を決め、その上に 1 主役色 + 必要最小限の状態色を足すと破綻しにくい。

## 根拠に使った主な資料

- [W3C: Understanding SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
- [W3C: Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
- [Microsoft XAG 102: Contrast](https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/102)
- [Microsoft XAG 103: Additional channels for visual and audio cues](https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/103)
- [Munsell Chroma](https://munsell.com/about-munsell-color/how-color-notation-works/munsell-chroma/)
- [Britannica: Color Wheel](https://www.britannica.com/science/color-wheel)
- [Interaction Design Foundation: Color Theory](https://www.interaction-design.org/literature/topics/color-theory)
- [Interaction Design Foundation: Color Harmony](https://www.interaction-design.org/literature/topics/color-harmony)
- [PMC review on color-emotion associations](https://pmc.ncbi.nlm.nih.gov/articles/PMC12325498/)

## Legion QA Status

- `シオン・クロマ / 色相を編む彩律官`: `manager_acceptance = accepted`, `second_pass_status = pass`
- `カグラ・パレット / 画面を鎮める色界設計師`: `manager_acceptance = accepted`, `second_pass_status = pass`
- `ミオ・セレス / 導線を量る結界司`: `material_design_status = not_applicable`
- `ノクス・ヴァレン / 反証を裁く冥府の審判`: `disposition = accepted`

## 注意

- `彩度 (saturation)` と `chroma` は厳密には同一語ではないため、外向け説明では「近い概念」として扱う。
- `4〜6色から始める` は標準ではなく、今回の調査で採用した実務ヒューリスティック。
