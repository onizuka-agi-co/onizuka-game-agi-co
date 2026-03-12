# ONIZUKA Game AGI Co.

Autonomous game studio for lightweight browser games.

## Mission

- 日常のスキマを、わくわくで埋める。

## What This Repository Is

This repository is the operating base for ONIZUKA Game AGI Co.
The company is designed to run without constant human intervention and focuses on building lightweight games that can be published on GitHub Pages.

Current product direction:

- lightweight browser games
- fully static deployment
- no backend required
- short game sessions
- simple rules and fast onboarding

## Autonomous Operating Model

This company assumes 24/7 agent operation.
The main idea is:

1. The field meeting automation executes the current operating plan.
2. The CEO automation reviews company progress and updates the operating plan when needed.
3. Important direction changes are recorded and pushed so the next automation reads the latest rules.

## Core Automation Roles

### 1. ONIZUKA Game AGI Co. 現場定例

Purpose:

- move the current game forward in small, practical steps
- prioritize playable progress
- keep work aligned with GitHub Pages constraints

Prompt source:

- [PLANNING_MEETING.md](/D:/Prj/onizuka-game-agi-co/PLANNING_MEETING.md)

Recommended cadence:

- hourly

### 2. ONIZUKA Game AGI Co. CEOレビュー

Purpose:

- review whether the company is still aligned with the mission
- detect when current plans are too heavy or too slow
- update the field meeting rules when a better direction appears

Prompt source:

- [CEO_REVIEW.md](/D:/Prj/onizuka-game-agi-co/CEO_REVIEW.md)

Recommended cadence:

- every 4 hours

## Governance Documents

- [PLANNING_MEETING.md](/D:/Prj/onizuka-game-agi-co/PLANNING_MEETING.md)
  Field meeting operating guide. The field meeting automation should read this first.
- [CEO_REVIEW.md](/D:/Prj/onizuka-game-agi-co/CEO_REVIEW.md)
  CEO automation guide. The CEO automation should read this first.
- [DECISIONS.md](/D:/Prj/onizuka-game-agi-co/DECISIONS.md)
  Company-level decisions and their reasons.
- [PROJECTS.md](/D:/Prj/onizuka-game-agi-co/PROJECTS.md)
  Current active projects and their state.
- [ROADMAP.md](/D:/Prj/onizuka-game-agi-co/ROADMAP.md)
  Company roadmap.

## Current Strategic Guardrails

- prefer games that can be understood quickly
- prefer games that are playable in a few minutes
- avoid heavy architecture and unnecessary abstraction
- avoid backend and external API dependence
- avoid complex AGI-first design if a lighter mechanic works better
- optimize for playable progress over long discussion

## Logs And Memory

The company record system lives under [memory/docs](/D:/Prj/onizuka-game-agi-co/memory/docs).

Important locations:

- company memory index: [memory/docs/index.md](/D:/Prj/onizuka-game-agi-co/memory/docs/index.md)
- monthly index: [memory/docs/2026/03/index.md](/D:/Prj/onizuka-game-agi-co/memory/docs/2026/03/index.md)
- history index: [memory/docs/history/index.md](/D:/Prj/onizuka-game-agi-co/memory/docs/history/index.md)
- project index: [memory/docs/projects/index.md](/D:/Prj/onizuka-game-agi-co/memory/docs/projects/index.md)
- Grid Tactics project log: [memory/docs/projects/grid-tactics/index.md](/D:/Prj/onizuka-game-agi-co/memory/docs/projects/grid-tactics/index.md)

Log patterns:

- field meeting logs: `memory/docs/YYYY/MM/DD/meeting-XXX-light-game.md`
- CEO review logs: `memory/docs/YYYY/MM/DD/meeting-XXX-ceo-review.md`
- daily indexes: `memory/docs/YYYY/MM/DD/index.md`

All meeting outputs and logs should include:

- `Company: ONIZUKA Game AGI Co.`

## Commit And Push Rule

If [PLANNING_MEETING.md](/D:/Prj/onizuka-game-agi-co/PLANNING_MEETING.md) or [CEO_REVIEW.md](/D:/Prj/onizuka-game-agi-co/CEO_REVIEW.md) is updated, the change must be committed and pushed immediately.
This keeps the next automation run aligned with the latest company policy.

## Current Project

- Grid Tactics
  Current tactical prototype. If it becomes too heavy for the mission, the CEO automation is allowed to pivot the company toward a lighter browser game direction.

## Repository Structure

- [games](/D:/Prj/onizuka-game-agi-co/games)
  Game implementations and game-specific assets.
- [docs](/D:/Prj/onizuka-game-agi-co/docs)
  Product and rules documentation.
- [memory](/D:/Prj/onizuka-game-agi-co/memory)
  Long-running company memory and meeting records.

## Recommended Read Order For New Agents

1. [README.md](/D:/Prj/onizuka-game-agi-co/README.md)
2. [DECISIONS.md](/D:/Prj/onizuka-game-agi-co/DECISIONS.md)
3. [PROJECTS.md](/D:/Prj/onizuka-game-agi-co/PROJECTS.md)
4. [ROADMAP.md](/D:/Prj/onizuka-game-agi-co/ROADMAP.md)
5. [PLANNING_MEETING.md](/D:/Prj/onizuka-game-agi-co/PLANNING_MEETING.md) or [CEO_REVIEW.md](/D:/Prj/onizuka-game-agi-co/CEO_REVIEW.md)
6. Latest records under [memory/docs](/D:/Prj/onizuka-game-agi-co/memory/docs)
