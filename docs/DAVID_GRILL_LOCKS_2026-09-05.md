# DAVID_GRILL_LOCKS — 5 Sep 2026 (London)

David grill locks baked into Prompt Dash paper + UI copy.
Paths: `/workspace/prompt-dash/` + `/workspace/prompt-dash-web/`.
**Q4 take-table geometry LOCKED** + **Q5 walk-forward LOCKED** + **Q6 alone-vs-together FOR NOW** (below).
Q6 is **temporary** — OPEN to revise if David’s later combo-sweep test wins. Do not invent further locks.
GitHub push left to parent.

---

## LOCKED (bake everywhere)

### 1) Boost / keep LABEL — PF > 1.2 only
- Stamp **BOOST / KEEP** label **only if** cost-applied PF **> 1.2**.
- After sweep, if PF still **≤ 1.2** → **SKIP** label for confluence / take-table (not keep, not table-keep).
- **No 1.0 keep line.** Do not treat PF ≥ 1.0 as keep/boost. 1.0 may remain only as an **unused fork-hook note** (historical RESCORE-20 owner_open_items) — not an equal pick, not a keep threshold.
- **Reason (notes):** compounding / fewer loser streaks — high-% bank-risk fit prefers fewer weak keeps over vanity PF.

### 2) Sweep gate — PF < 0.75 vs ≥ 0.75
- **PF < 0.75** → **do not sweep at all** (no normal sweep, no revival arm, no “try anyway”).
- **PF ≥ 0.75** → **sweep** (revival / fix try). Post-sweep result **should not come out worse than pre-sweep**; if it does → fail / demote that arm, do not promote worse.
- Align HANDOFF, GATE_PLAN, prompts **06–13**, CURRENT_STAGE_MAP, Freeze PF note, UI notes.
- After a ≥0.75 sweep: apply lock (1) — only label KEEP/BOOST if PF > 1.2; else SKIP for confluence/table.

### 3) Take table — redraw every run; cut at full-session PF > 1.2
- Take table is **recalculated every run**.
- Find the B×S cut where **full-session PF > 1.2**.
- **Soft / bottom end** of the table = **small sweep** only — just enough to draw the line (not a new heavy family search).
- **Easy fat shapes** (high B, 0S — e.g. **5B0S / 6B0S**) = **take without heavy sweep**; use **best highest-profit boost recipe** for that boost count.
- **Draw-a-line FOR NOW** stays (operating take path). never-1B stays WARN at Stage 13 until further David lock (superseded where Q4 geometry applies).

### 4) Take-table geometry — Q4 LOCKED (plain)
- If **skips ≥ boosts** → **no sweep, don’t take** (e.g. 1B3S, 2B2S, 3B3S).
- If **boosts − skips == 1** (only one more boost — e.g. **2B1S, 3B2S**) → **don’t take (hard)**; do **not** hunt that cell as a take.
- If **boosts − skips ≥ 2** (e.g. **3B1S, 4B2S**) → **sweep each run**; draw take line where **full-session PF > 1.2**.
- Easy fat shapes (high B, 0S) still take without heavy sweep via best high-profit boost recipe (see lock 3).

### 5) Walk-forward score before take seal — Q5 LOCKED (plain)
- Prefer UI/paper label **walk-forward** (David’s past name). Note once: **holdout = same idea**.
- **Hold back** unseen data while picking recipe (do not use the walk-forward / never-seen chunk as research fuel).
- **Score** the recipe on that never-seen chunk **before** take seals / before move-forward.
- **Weak walk-forward score blocks** seal / move-forward — **real bearing**, not cosmetic.
- Require a **walk-forward score stamp** before take seal.
- Remove soft “holdout reserved — take not sealed” hedging where it contradicted this lock.

### 6) Alone-vs-together recipes — Q6 FOR NOW (temporary)
- Sweep recipes on **single boosts only** (Stage alone path / Stage 10).
- When **2/3/4 boosts fire together:** reuse the **best-performing single’s recipe** for that take; **score** whether the together shape is still profitable (**full-session PF > 1.2**).
- Do **NOT** require a full joint/combo TP-SL sweep of every multi-B combination **for now**.
- Dual-lamp stays: confluence still **checks together profitability** with the **borrowed single recipe** — no inventing that multi-B joints need their own heavy sweep before take.
- **OPEN to revise** if David’s later combo-sweep test wins (elsewhere). Mark FOR NOW / temporary clearly everywhere.

---

## STAYS OPEN (do not invent)

| Item | Status |
|------|--------|
| **Q6 alone-vs-together (permanent / combo-sweep win)** | OPEN to revise — FOR NOW path above until David’s later combo test |
| never-1B / never-S≥3 / B−S geometry as **locks** | OPEN (WARN/notes only) |
| Continuation entry-method set | PLACEHOLDER — ask David before lock |
| Deadwood POI keep/cut cleaned set | Pending other session / NEW BANDING admit |
| Full joint multi-B TP-SL amalgamation | OPEN later (superseded FOR NOW by Q6 borrow-single) |
| On/off filter list | Parked — ask David later |
| Exact POI list / new strategy text | Incoming David |

---

## Coherent ladder (LOCKED wording)

| Band / post-sweep PF | Action / label |
|----------------------|----------------|
| **< 0.75** | Do **not** sweep at all → SKIP |
| **≥ 0.75** | Sweep (revival/fix try); must not worsen vs pre-sweep |
| After sweep **≤ 1.2** | SKIP label for confluence / table |
| After sweep **> 1.2** | BOOST / KEEP label allowed |
| **1.0** | Not a keep line (unused fork-hook note only, or omit) |
| **Q4: S ≥ B** | No sweep, don’t take |
| **Q4: B−S == 1** | Don’t take (hard); don’t hunt |
| **Q4: B−S ≥ 2** | Sweep each run; take line at full-session PF > 1.2 |
| **Q4: high-B 0S** | Take without heavy sweep (best high-profit recipe) |
| **Q5: walk-forward** | Hold back unseen while picking recipe; score on never-seen before take seal / move-forward; **weak score blocks** seal / move-forward |
| **Q6 FOR NOW** | Single-boost recipe sweeps only; multi-B together borrows best single recipe; score together PF > 1.2; **no** full joint TP-SL sweep required for now; OPEN to revise |

---

## Touched surfaces (this fold)
HANDOFF, GATE_PLAN, CURRENT_STAGE_MAP, DAVID_BRIEF, DAVID_NOTES, QUANT foldout, CHECK_ASSAULT, WORK template, prompts Stage 10–13 + Done, stages.ts, PromptDash.tsx, store talk-box label, ATTACK_BRIEF; sync → `prompt-dash-web/public/prompts` + `docs` + `zones-strategy-push` (no git push).
