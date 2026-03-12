# Company Rules

Use this reference when starting a new ONIZUKA Game AGI Co. game repo.

## Non-negotiable constraints

- 1 game = 1 Git repository = 1 GitHub Pages app
- keep each game under `games/onigame-<slug>/` in the local workspace
- each game repo should be independent, not a submodule by default
- every first release must work as a fully static GitHub Pages deployment
- reject ideas that need backend services, secret management, or external APIs
- prefer lightweight concepts that can move forward in hours, not weeks

## Product expectations

- short sessions
- simple controls
- quick onboarding
- browser-local logic
- vibe-coding-scale implementation scope

## GitHub expectations

- create repos under the `onizuka-agi-co` organization
- prefer public repos for Pages-ready launches
- use the `onigame-` prefix
- set the homepage to the expected Pages URL when the repo is ready
- make the repo page feel intentional: strong README, coherent metadata, and a small reusable visual asset

## Workspace expectations

- keep the company repo focused on planning and logs
- do not accidentally commit child repo contents into the company repo
- keep `games/README.md` as the tracked overview file when needed
