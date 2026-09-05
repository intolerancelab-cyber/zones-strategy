# ATTACK_BRIEF — Prompt Dash web (for attackers / reviewers)

**Product:** Prompt Dash visual demo (Next.js) — stacked WORK/CHECK factory flow for David.
**Repo target:** github.com/intolerancelab-cyber/zones-strategy (parent pushes; do not invent POI/banding numbers).
**Date:** 5 Sep 2026 (London).

## What to review

### App paths
| Path | Role |
|------|------|
| `src/components/PromptDash.tsx` | Main UI: STRATEGY INPUT, stages 1-21, inline prompt fetch, CHECK assault, champion hooks, overseer |
| `src/lib/stages.ts` | Stage map 1-21 (WORK / CHECK / DONE) + prompt filenames |
| `src/lib/store.ts` | localStorage state, fleet strips, assault verdicts, banked champions |
| `src/app/page.tsx` | Entry |
| `src/app/layout.tsx` / `globals.css` | Shell + tokens |
| `public/prompts/*.md` | Full work/check markdown served at `/prompts/{file}` |
| `docs/*.md` | Briefs, stage map, CHECK assault outline, handoff |
| `ATTACK_BRIEF.md` | This file |

### Locks (do not break)
- Fleet: ES + NQ x 5m + 15m only (no 1m).
- Orange CHECK unlocks only when every strip is 100 percent green.
- Fail to same WORK section only; linear; no skip.
- ORB = DEAD, doubles/pairs = DEFUNCT.
- Reversal LOCKED 6; Continuation OPEN (wait David).
- KEEP label only if PF > 1.2 (LOCKED; no 1.0 keep line). Reason: compounding / fewer loser streaks.
- Sweep gate LOCKED: PF < 0.75 = no sweep; ≥ 0.75 = sweep (must not worsen vs pre-sweep).
- **Q4 take-table geometry LOCKED:** S≥B → no sweep/don’t take; B−S==1 → don’t take hard / don’t hunt; B−S≥2 → sweep each run, take line at full-session PF > 1.2; easy fat high-B 0S light-take.
- Band-find cross-cell (3-of-4) ≠ Stage-12 boost-count confluence (2/3/4 B×S).
- Continuation = PLACEHOLDER (not operable OPEN).
- Take path = draw-a-line FOR NOW (recalc every run; cut PF > 1.2); never-1B WARN where Q4 doesn’t hard-block.
- **Q5 walk-forward LOCKED** (hold back unseen; score never-seen before take seal; weak blocks).
- **Q6 alone-vs-together FOR NOW** (single-boost recipes; multi-B borrows best single; score together PF>1.2; no joint TP-SL sweep; OPEN to revise).
- Do not invent POI keep/cut lists, banding bin counts, or final table numbers.
- STRATEGY INPUT placeholders pending; core chord stays.
- Champion fork = hooks only.


### CHECK assault (every CHECK stage)
Four agents (demo pass/fail toggles):
1. Mistake hunter
2. Number auditor
3. Real-life lens
4. Claim refuter

Pass CHECK disabled until fleet strips unlocked. See docs/CHECK_ASSAULT_OUTLINE.md.

### Inline prompts
WORK/CHECK/DONE open inline panel that fetches /prompts/{file} markdown.

### Demo controls
Simulate / Pause / Stall / Need power / Reset. localStorage key prompt-dash-web-v2.

### Build
npm run build must succeed before push.

### Out of scope
- Inventing POI lists or banding numbers
- Pushing to GitHub (parent pushes)
- Live factory/engine code changes
- Deleting ORB code elsewhere

### Honesty / demo labels (5 Sep honesty pass)
- Splash + fixed bar: **DEMO ONLY / DEMO — NOT LIVE** (non-dismissible).
- Button **Simulate (demo)** = local setInterval strips — not factory stamps / overnight HB.
- Placeholders: banding **PARKED**, POI **OPEN — DANGEROUSLY SILENT**, tables **OPEN**.
- Paper seal ≠ live_permission. See docs/MONDAY_OPERATOR_RUNBOOK.md and docs/REAL_LIFE_ATTACK_FOLDOUT_2026-09-05.md.
