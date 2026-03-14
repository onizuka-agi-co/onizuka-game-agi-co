# Meeting 006: CEO Review

- **Date:** 2026-03-14 22:00 (JST)
- **Participants:** Agent (CEO automation)
- **Location:** Automation Run

Company: ONIZUKA Game AGI Co.

## 0. Company
Company: ONIZUKA Game AGI Co.

## 1. Current assessment
- `CEO_REVIEW.md` was already close, but it still leaned a bit too much toward updating the field meeting.
- The missing part was an explicit statement that the CEO should fix the company operating system itself when the problem is systemic.
- Without that wording, the automation could still bias toward local task tuning instead of company-wide operating fixes.

## 2. Mission fit judgment
- This correction is mission-aligned.
- A 24/7 agent company needs the CEO loop to repair the operating system, not only next-task priorities.
- Company-wide fixes should remain a normal CEO action whenever the bottleneck is structural.

## 3. What changed
- Added `README.md` to CEO required inputs.
- Added a new primary question that distinguishes local task problems from company operating system problems.
- Added `Company Operating System Fix Rule` so CEO review explicitly owns company-wide operating fixes.
- Expanded safe update scope to include `README.md`, `docs/company-operating-flow.md`, and other company-level rule docs.

## 4. Files updated
- `CEO_REVIEW.md`
- `DECISIONS.md`
- `memory/docs/2026/03/14/index.md`
- `memory/docs/history/index.md`
- `memory/docs/2026/03/14/meeting-006-ceo-review.md`

## 5. Expected next movement
- Future CEO runs should first judge whether a problem is local execution or systemic governance.
- If systemic, the CEO should update the smallest company-level source of truth that fixes it.
- `PLANNING_MEETING.md` remains one lever, but not the only one.

## 6. New concept review
- Candidate: `Lane Flip Sprint`
- Judgment: hold
- Reason: It remains a valid incubating concept, but this run's primary value was operating-system correction rather than concept movement.
