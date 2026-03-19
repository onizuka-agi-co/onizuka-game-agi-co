# ONIZUKA Game AGI Co. AWS Reference-Style Icon View

This page explains the AWS reference-style icon view for this repository.

## Intent

This diagram is a visual metaphor, not a literal deployed AWS architecture.

- Real platform here is local workspace + GitHub + GitHub Pages
- No AWS service is actually deployed for this project
- Official AWS icons are used only as visual references
- Diagram labels describe the real repo, review, and publishing roles
- The color system follows the full Aurora palette while keeping the accent layer restrained:
  - dark structure surfaces = `#060E12`, `#0C1E24`, `#1A3038`
  - cool section surfaces and execution accents = `#EBF9FC`, `#DCF0F5`, `#13B3CE`, `#0B8FA8`, `#084D62`
  - warm note and publish accents = `#FFF8EC`, `#FAEACB`, `#FDD984`, `#FFCC4F`, `#925F00`
  - neutral connectors and support text = `#8AAFBA`, `#567E8A`, `#2E525C`

## Diagram

![ONIZUKA Game AGI Co. AWS reference-style icon view](./onizuka-game-agi-aws-architecture.drawio.png)

## Reading Guide

- Left column: human review, Codex/agent execution, and the local workspace
- Main cloud area: control/review, repo/source, and static publish areas
- Labels sit under the official AWS icons to mimic the usual AWS reference-diagram reading order
- The labels are role names, not deployed AWS product names
- Accent colors are limited to headers, notes, and selected routing so the icon system stays dominant
- Lighter ramp steps are used for section grouping so the AWS icons stay readable without a flat white canvas

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
