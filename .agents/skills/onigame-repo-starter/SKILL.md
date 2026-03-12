---
name: onigame-repo-starter
description: Create and publish a new ONIZUKA Game AGI Co. game repository using the company rule of 1 game = 1 repo = 1 GitHub Pages app. Use when Codex needs to start a fresh game under `games/onigame-*`, scaffold a lightweight static app, create the GitHub repository under `onizuka-agi-co`, push it, and leave the company workspace ready for the next game.
---

# Onigame Repo Starter

Create a new ONIZUKA Game AGI Co. game repository from the company workspace and carry it through local scaffold, Git setup, GitHub creation, Pages-ready configuration, and handoff.

Use this skill when the user wants a new game repo, a starter kit, a sample app published from `games/`, or a repeatable company-standard way to launch the next small browser game.

## Workflow

### 1. Confirm the company fit first

Before creating anything, keep the company rules intact:

- ship static browser games that can live on GitHub Pages
- reject backend-, secret-, or external-API-dependent ideas
- prefer simple controls, short sessions, and vibe-coding-scale scope
- keep each game independent: 1 game = 1 repo = 1 Pages site

Read [references/company-rules.md](./references/company-rules.md) when you need the exact house rules.

### 2. Create the repo in the right local place

Use this local layout:

```text
<company-repo>/
  games/
    onigame-<slug>/
```

Rules:

- use the `onigame-` prefix
- create a normal independent Git repository inside `games/`
- do not use a submodule by default
- keep the company repository from tracking the child repo contents directly

If needed, update the company repo `.gitignore` so `games/onigame-*` stays untracked while `games/README.md` remains tracked.

### 3. Start from a lightweight static scaffold

Default to a minimal static app:

- `index.html`
- `styles.css`
- `app.js`
- `README.md`
- `.gitignore`

Reuse [assets/static-pages-template](./assets/static-pages-template) unless the user already gave a more specific starter direction.

Prefer plain static files unless there is a clear reason to introduce a build tool. The first version should be Pages-friendly without extra deployment machinery.

### 4. Initialize Git and make the first commit

Inside the child repo:

1. `git init -b main`
2. add the scaffold
3. make a small English commit with emoji title and three body bullets

Keep the repo self-contained and ready to push before creating the remote.

### 5. Create the GitHub repository under the org

Use `gh` from inside the child repo when auth is available.

Preferred pattern:

```powershell
gh repo create onizuka-agi-co/onigame-<slug> --public --source . --remote origin --push --description "<short description>"
```

After creation:

- verify `origin` is set correctly
- set the homepage to the expected Pages URL when appropriate
- prefer the public repo path because GitHub Pages is part of the intended finish line

### 6. Make the Pages finish line real

For simple static repos, the natural finish line is:

- repo exists under `onizuka-agi-co`
- `main` is pushed
- homepage is set to `https://onizuka-agi-co.github.io/onigame-<slug>/`
- Pages is enabled from the repo root or workflow, depending on the repo setup

If a Pages API call returns `404` immediately after repo creation, treat it as a likely timing or visibility issue:

1. confirm the repo exists with `gh repo view`
2. retry after a short wait
3. if still blocked, report the exact response and leave the repo otherwise ready

### 7. Update the company workspace only as needed

When the company repo should reflect the new child repo:

- update `games/README.md` if the local repo list changed
- update company logs or decisions only when the task is part of company operations
- do not move child repo source into the company repo history

### 8. Verify the result

Before finishing, check:

- the child repo has a clean working tree
- the child repo has `origin`
- the remote repo URL is correct
- the app is still static and self-contained
- the README explains Pages usage
- the company repo did not accidentally absorb child repo contents

Use [references/start-checklist.md](./references/start-checklist.md) as the closeout checklist.

## Defaults

- choose static files over frameworks
- choose public repos over private repos for Pages-first game launches
- choose simple app ideas over heavy systems
- choose direct `gh` remote creation over manual web setup when auth is available

## Resources

### references/

- [references/company-rules.md](./references/company-rules.md): company-specific repo and product constraints
- [references/start-checklist.md](./references/start-checklist.md): repeatable launch and verification checklist

### assets/

- [assets/static-pages-template](./assets/static-pages-template): minimal static starter kit for new game repos
