# ONIZUKA Game AGI Co. AWS Reference-Style Icon View

This page explains the AWS reference-style icon view for this repository.

## Intent

This diagram is a visual metaphor, not a literal deployed AWS architecture.

- Real platform here is local workspace + GitHub + GitHub Pages
- No AWS service is actually deployed for this project
- Official AWS icons are used only as visual references
- Diagram labels describe the real repo, review, and publishing roles
- The color system keeps the user palette as an accent layer only:
  - title / headers = `#180D40`
  - control accents = `#0597F2`, `#05DBF2`
  - caution / note accents = `#F205B3`
  - deep support accent = `#2B1C8C`

## Diagram

![ONIZUKA Game AGI Co. AWS reference-style icon view](./onizuka-game-agi-aws-architecture.drawio.png)

## Reading Guide

- Left column: human review, Codex/agent execution, and the local workspace
- Main cloud area: control/review, repo/source, and static publish areas
- Labels sit under the official AWS icons to mimic the usual AWS reference-diagram reading order
- The labels are role names, not deployed AWS product names
- Accent colors are limited to headers, notes, and selected routing so the icon system stays dominant

## Notes

- The current local snapshot in this repository is nested under `games/`, but the operating model also allows sibling game repositories.
- Each game repository publishes its own GitHub Pages app.
- The company repo workflow publishes docs and company memory only.
- AWS icons are there for atmosphere and recognizability, not infrastructure accuracy.
- This company stays inside a static-only contract: no required backend, DB, queue, or auth for shipping games.

## Source Files

- [Editable draw.io source](./onizuka-game-agi-aws-architecture.drawio)
- [Exported SVG](./onizuka-game-agi-aws-architecture.drawio.svg)
- [Exported PNG](./onizuka-game-agi-aws-architecture.drawio.png)
