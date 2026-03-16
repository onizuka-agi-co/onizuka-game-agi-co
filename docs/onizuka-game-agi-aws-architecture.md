# ONIZUKA Game AGI Co. AWS Reference-Style Icon View

This page explains the AWS reference-style icon view for this repository.

## Intent

This diagram is a visual metaphor, not a literal deployed AWS architecture.

- Real platform here is local workspace + GitHub + GitHub Pages
- Official AWS icons are the primary visual language
- AWS service names are analogy markers for control, source, and delivery roles
- The color system keeps the user palette as an accent layer only:
  - title / headers = `#180D40`
  - control accents = `#0597F2`, `#05DBF2`
  - caution / note accents = `#F205B3`
  - deep support accent = `#2B1C8C`

## Diagram

![ONIZUKA Game AGI Co. AWS reference-style icon view](./onizuka-game-agi-aws-architecture.drawio.png)

## Reading Guide

- Left column: human review, Codex/agent execution, and the local workspace
- Main cloud area: control plane, source plane, and static delivery plane
- Labels sit under the official AWS icons to mimic the usual AWS reference-diagram reading order
- Accent colors are limited to headers, notes, and selected routing so the icon system stays dominant

## Notes

- The current local snapshot in this repository is nested under `games/`, but the operating model also allows sibling game repositories.
- Each game repository publishes its own GitHub Pages app.
- The company repo workflow publishes docs and company memory only.
- This company stays inside a static-only contract: no required backend, DB, queue, or auth for shipping games.

## Source Files

- [Editable draw.io source](./onizuka-game-agi-aws-architecture.drawio)
- [Exported SVG](./onizuka-game-agi-aws-architecture.drawio.svg)
- [Exported PNG](./onizuka-game-agi-aws-architecture.drawio.png)
