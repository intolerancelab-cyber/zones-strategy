# Prompt-driven Factory Dash — Handoff (5 Sep 2026)
Owner: DASHBOARD OVERSEER. Audience: whoever assembles the page + prompts.
Scope: webpage + clickable prompts + sequence. NOT live engine. NOT POI chunk code (built elsewhere). NOT Proof A.

## Prompt packs (paper)
- Multi-agent CHECK outline (shared roles + per-stage 3/5/7/9/11/13/15/17/19/21 + final assault): [`CHECK_ASSAULT_OUTLINE.md`](CHECK_ASSAULT_OUTLINE.md)
- WORK overseer handbook template + Band-sweep filled example (sharding depth): [`WORK_HANDBOOK_TEMPLATE.md`](WORK_HANDBOOK_TEMPLATE.md)

## CHANGELOG — 2026-09-05
- **David grill locks baked:** PF < 0.75 = no sweep; ≥0.75 = sweep (must not worsen); BOOST/KEEP label only if PF > 1.2; no 1.0 keep line; take-table recalc every run cut at full-session PF > 1.2; easy fat 5B0S/6B0S light-take; **Q4 geometry LOCKED** (S≥B / B−S==1 / B−S≥2); **Q5 walk-forward LOCKED** (hold back unseen while picking recipe; score never-seen before take seal / move-forward; weak score blocks); **Q6 alone-vs-together FOR NOW** (single-boost recipe sweeps; multi-B borrows best single recipe; score together PF>1.2; no full joint TP-SL sweep for now; OPEN to revise). See `DAVID_GRILL_LOCKS_2026-09-05.md`.
- **NEW BANDING (David confirmed):** branch `codex/rty-replay-parity-20260702` — fewer/tighter bands near the level (not old wide map) → sweeps → REMOVE DEADWOOD POIs (heavy lifters only). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later; do not invent keep/cut list.
- **Stages 10–13 prompts written:** boost-alone → cost-shock/trade-count CHECK → confluence take-table line (best recipe by B; cheap combo shapes; amalgamation OPEN) → holy-grail/dependence CHECK. Dual-lamp locked.
- **UI lock (David happy):** vertical scroll; STRATEGY INPUT top; each WORK stage = green WORK bar + stacked blue RESULTS strips (one strip per fleet cell: asset×TF); each strip = 10 chunks (10%…100%) with time under chunks; heartbeat/stuck under stack; orange CHECK unlocks only when every strip is 100% green; failed check loops to that section only; stamp each phase; linear (no skip); talk-before-check only for real choices; fork = page hooks only.
- **ORB DEAD / doubles DEFUNCT:** stripped from active plan/UI copy (historical DEAD/DEFUNCT markers only). Do not delete factory code elsewhere.
- **Stage map baked:** Freeze → Baseline → POI map → Band find → Band sweep → Boost-alone → Stage-12 boost-count confluence → On/off filters → Assemble+hold → Stress+luck → Final assault (WORK/CHECK pairs 1–21; boost/confluence dual-lamp).
- **CHECK = multi-agent every stage:** mistake hunt, numbers legit?, real-life?, what went wrong? Final assault = whole book same questions.
- **WORK prompts = detailed handbook:** each clickable work prompt carries full sharding / reuse / machines / step-by-step overseer guide (even when code exists).
- **On/off filters:** binary no-line POIs (trend/range day, gamma env, …) that affect the whole table — detail later from David / other session; ask when ready.
- **Entry methods:** Reversal set LOCKED (6); Continuation set OPEN (catalog minus orb_*); wide→narrow KEEP.

---

## UI LOCK — stacked fleet cells (David happy 5 Sep)
- Vertical scroll page.
- **STRATEGY INPUT** at top + checkbox: **Reversal vs Continuation/break-retest** → selects which entry-method set to sweep.
- Each **WORK** stage: green WORK bar, then stacked blue **RESULTS** strips — **ONE strip per fleet cell** (asset×timeframe), e.g. NQ 5m, ES 5m, NQ 15m, ES 15m…
- Each strip = **10 chunks** (10%…100%) with **time under each chunk**.
- Heartbeat / stuck under the stack.
- Orange **CHECK** for that stage unlocks **ONLY** when EVERY stacked strip is 100% green.
- Failed check → loop back to **THAT same section only**.
- Stamp each phase; stay linear (no skip).
- Talk before check only when there's a real choice (e.g. champions).
- Fork style: **decide later** — page hooks only.

## Fleet
- **ES + NQ, 5m + 15m only** for now (no 1m).

## Dead / removed from this product plan
- **Doubles / pairs sweep — DEFUNCT.** Strip from plans/UI copy.
- **ORB — DEAD** for this product. Strip from prompt-dash plans/UI copy. Do **not** delete factory code elsewhere from this room.

## Entry-method sets (top checkbox)
### Reversal — LOCKED (David confirmed, TABLE_SWEEP_SHARD_PLAN)
1. `close_back_inside`
2. `n_close_back_inside`
3. `wick_rejection_completed_bar`
4. `touch`
5. `close_confirm`
6. `pullback_to_level`

Chronicle note: reversal **touch** has been a champion historically.

### Continuation / break-retest — OPEN (waiting David)
Catalog candidates (prompt-dash must **exclude** `orb_*`):
- `touch`, `close_confirm`, `break_and_retest`, `n_close_beyond`, `bars_accepted_beyond_then_go`, `pullback_to_level`
- ~~`orb_breakout_close_confirm`~~ / ~~`orb_break_and_retest`~~ — strip (ORB DEAD)
- `volume_confirmed_ohlcv_safe`

Chronicle: continuation **close_confirm > break_and_retest**.  
**OPEN:** full catalog minus ORB vs a shorter locked list — wait for David. Do not claim locked.

### Sweep path
- **Wide→narrow KEEP** (still present): Stage 2 Halton→narrow; AGENTS deep/wide first; progressive zone triage.
- Structural TP DEC-061 = research-only; TABLE_SWEEP TP today = original + fractions + ATR 1.2–5.0.

## Proposed sequence (WORK / CHECK pairs)
Stay linear. Stamp each phase.

| # | Stage | Role |
|---|--------|------|
| 1 | Freeze / admit (+ cost/session locks; strategy canonical handoff; **no ORB anywhere**) | WORK |
| 2 | Baseline alone | WORK |
| 3 | Check (+ champion talk if needed) | CHECK |
| 4 | POI map (value areas = POIs: daily/weekly/monthly) | WORK |
| 5 | Check | CHECK |
| 6 | Band find | WORK |
| 7 | Check | CHECK |
| 8 | Band sweep | WORK |
| 9 | Check | CHECK |
| 10 | Boost-alone → mark B×S table (unlocks confluence) | WORK |
| 11 | Check (cost shock + trade-count floor) | CHECK |
| 12 | Stage-12 boost-count confluence (2/3/4 B×S on allowlisted squares) | WORK |
| 13 | Check (take rule / holy-grail + dependence) | CHECK |
| 14 | On/off filters | WORK |
| 15 | Check | CHECK |
| 16 | Assemble + hold/flat | WORK |
| 17 | Check | CHECK |
| 18 | Stress + luck | WORK |
| 19 | Check | CHECK |
| 20 | Final multi-agent assault | WORK |
| 21 | Done | DONE |


## Check design (LOCKED 5 Sep)
- **Every CHECK** (not only the final one) runs a **multi-agent assault**:
  - Was a mistake made?
  - Are these numbers legit?
  - Would it work in real life?
  - What have we done wrong?
- Agents must have enough context on **what was just done** in that stage.
- **Final multi-agent assault** = same questions on the **whole finished book** (can it trade? is the final result legit?).
- Fail → loop back to **that same section only**.

## Work-prompt design (LOCKED 5 Sep)
- Each WORK prompt is a **detailed handbook / overseer guide**, not a one-liner.
- Must include: goal, inputs already stamped, **full sharding plan** (split, cores, EPYC+Gaming, reuse/hash-first), machines, step-by-step, success stamps, what NOT to do, heartbeat/stuck rules.
- Code may already exist — the prompt still teaches the path like a guide so the run cannot skip or invent.

## How edge is built (product locks)
1. **Baseline alone** (often ~0.9 / breakeven) — best you can.
2. **POI map** from list; **value areas = POIs** (daily/weekly/monthly) per asset×TF.
3. **Band find:** where baseline helped vs hurt. **LOCKED (David grill 5 Sep):** PF < 0.75 → do **not** sweep at all (SKIP); PF ≥ 0.75 → sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label **only if** PF > 1.2; under 1.2 after sweep → SKIP for confluence/table. No 1.0 keep line. Reason: compounding / fewer loser streaks. **Band-find cross-cell (3-of-4)** → CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
4. **Band sweep:** tailored entry/TP recipes per location; keep recipes; wide→narrow KEEP.
5. **Boost path (dual-lamp):** boost-alone → mark *candidate* B×S occupancy → CHECK unlock → **Stage-12 boost-count confluence (2/3/4 B×S)** on allowlisted squares only; does not re-open boost-family search; `boost_search_closed` at Stage 13; **holy grail** = final table.
6. **Take path FOR NOW:** draw-a-line take-table; **recalculated every run**; find B×S cut where **full-session PF > 1.2**; soft/bottom end = small sweep to draw the line; easy fat shapes (5B0S/6B0S) take without heavy sweep using best highest-profit boost recipe. **Q4 geometry LOCKED:** S≥B → no sweep/don’t take; B−S==1 (2B1S, 3B2S) → don’t take hard / don’t hunt; B−S≥2 (3B1S, 4B2S) → sweep each run, take line at PF > 1.2. Stage 13 never-1B = WARN where Q4 doesn’t hard-block. **Q5 walk-forward LOCKED:** hold back unseen while picking recipe; score on never-seen chunk before take seal / move-forward; weak score blocks seal / move-forward (real bearing). Prefer label **walk-forward** (holdout = same idea). **Q6 alone-vs-together FOR NOW:** sweep recipes on single boosts only; when 2/3/4 fire together reuse best-performing single’s recipe and score together profitability (full-session PF > 1.2); do **not** require full joint/combo TP-SL sweep for now; OPEN to revise if David’s later combo-sweep test wins.
7. **On/off filters** late (trend/range, calendar, half-days…).
8. **Assemble + hold/flat.**
9. **Stress + luck** — same late area, two questions: Stress = walk-forward / capacity / ugly regimes; Luck = Monte Carlo.
10. **Final multi-agent assault.**

## Pro quant KEEP loops
- One-cell smoke before fleet.
- Count/PF floors early.
- **Walk-forward** (holdout = same idea): hold back unseen chunk while picking recipe; require **walk-forward score stamp** before take seal / move-forward; **weak score blocks** (not cosmetic).
- Ablate one POI/skip family.
- Cost model before PF talk.
- RTH vs overnight; ES+NQ overlap; null tests; multiplicity control.
- Cache bars/POIs; never re-walk for a prompt tweak.

## Talk boxes / champion checkpoint (5 Sep)
- Chat only on real forks: different baseline champions; post band-sweep dual recipes. Boost keep line is **LOCKED PF > 1.2** (1.0 unused fork-hook note only — not a real pick).
- Hooks: checkpoint + bank unused champion → resume later with the other. Full build later if cheap; else hooks only.
- Detail: `DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md`

## Take-table line (FOR NOW — David grill locks 5 Sep)
- **Recalculated every run.** Find B×S cut where **full-session PF > 1.2**.
- Soft/bottom end of table = **small sweep** to draw the line (not new heavy family search).
- Easy fat shapes (high B, 0S — e.g. **5B0S / 6B0S**) = take **without heavy sweep**; use **best highest-profit boost recipe**.
- **Q4 take-table geometry LOCKED:**
  - **S ≥ B** → no sweep, don’t take.
  - **B−S == 1** (e.g. 2B1S, 3B2S) → don’t take (**hard**); don’t hunt that cell as a take.
  - **B−S ≥ 2** (e.g. 3B1S, 4B2S) → sweep each run; draw take line where full-session PF > 1.2.
- Cheap combo pass over shapes without new heavy sweeps; **5B3S = PROBE_ONLY**; tighten if weak.
- **Q6 FOR NOW:** multi-B together uses borrowed best single recipe (score together PF > 1.2); full joint/combo TP-SL amalgamation = OPEN later / revise if combo-sweep wins.
- **Q5 walk-forward LOCKED:** hold back unseen while picking recipe; score never-seen before take seal / move-forward; weak score blocks. Prefer **walk-forward** label (holdout = same idea once).
- **Q6 alone-vs-together FOR NOW:** single-boost recipe sweeps; multi-B borrows best single recipe; score together PF > 1.2; no full joint TP-SL sweep required for now; OPEN to revise if later combo-sweep wins.
- Detail: `DAVID_GRILL_LOCKS_2026-09-05.md`, `DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md`

## Fork (LOCKED 5 Sep — David answered)
- Decide fork style later. Page leaves hooks only (bank champions; optional later A/B). No fork UX locked yet.




## Band-find cross-cell (3-of-4 same POI×band) (David 5 Sep — LOCK for Band find)
When a POI×band (e.g. BEFORE) looks strong on one cell but **n is thin** (example: ~50 trades):
- Look at the **same POI × same band position** on the other fleet cells (ES 5m, ES 15m, NQ 5m, NQ 15m).
- If **≥3 of 4** cells show the **same-direction positive effect**, stamp that band **CROSS_CELL_BOOST_CANDIDATE** (Band-find cross-cell 3-of-4; not naked “BOOST candidate”), even if one cell alone is under a local n floor.
- If fewer than 3 agree → do **not** boost from that thin cell alone; stamp **INSUFFICIENT** / no boost (or SKIP path if negative rules apply). Never use naked “BOOST candidate”.
- Same idea for negative/SKIP: multi-cell agreement before trusting a thin skip label.
- Aligns with RESCORE-20 `scopes.confluence`: 3 of 4 val cells readable + same sign (INSUFFICIENT_CONFLUENCE if &lt;3 readable).
- This is **Band-find cross-cell (3-of-4 same POI×band)** — separate from **Stage-12 boost-count confluence (2/3/4 B×S)**. Output labels: CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT — not naked “BOOST candidate”.

## New banding + deadwood (David 5 Sep — branch `codex/rty-replay-parity-20260702`)
- Source checkout: Halls_Laptop `C:\Users\David\THE STRATEGY` on `codex/rty-replay-parity-20260702` (active; includes RESCORE-20 / DEC-063 work).
- **Fewer / tighter bands** near the level (not the old wide many-slice map).
- Then **sweeps** on survivors.
- Then **remove deadwood**: many POIs in the set; only some do heavy lifting — declutter the rest (not delete history; pull from main table).
- Prompt-dash: admit expects a **cleaned POI set** when ready; do not invent keep/cut list here.
- Aligns with Sep-3 poi lessons + RESCORE-20 zone-first (effects mostly within ~0.5 ATR of touch).

## Band / PF figures — LOCKED (David grill 5 Sep)
Source trail (Halls_Laptop, read 5 Sep): RESCORE-20 PREREGISTRATION + CHECKPOINT_20260828 — thresholds grilled and **locked** into prompt-dash. See `DAVID_GRILL_LOCKS_2026-09-05.md`.

**LOCKED ladder:**
- **PF < 0.75** → do **not** sweep at all → SKIP.
- **PF ≥ 0.75** → sweep (revival/fix try); post-sweep **must not come out worse than pre-sweep**.
- **BOOST/KEEP label only if PF > 1.2.** Under 1.2 after sweep → **SKIP** label for confluence/table.
- **No 1.0 keep line.** 1.0 may remain as unused fork-hook note only (historical `owner_open_items`) — not an equal pick.
- **Reason:** compounding / fewer loser streaks.
- Do **not** dual-label SWEEP_CANDIDATE + DEAD_ZONE.
- Example: baseline ~0.8, at a POI drops to 0.74 → no sweep / SKIP; at ≥0.75 → sweep; end must clear PF > 1.2 to keep/boost label.

Champion lens: **compounding / high % of bank risk** — not vanity PF. Money sim stakes 0.5%/1%/2% with mini caps — confirm later.

Related: DEC-063 zone-first banding (28 bins); confluence_primary notes elsewhere may differ from take-table examples — take-table cut is full-session PF > 1.2 (draw-a-line FOR NOW). **Q4 + Q5 LOCKED; Q6 FOR NOW (OPEN to revise).**

## On/off filters (parked — ask David later)
- Binary / no physical line: e.g. trending vs ranging day, positive/negative gamma, similar state flags.
- Purpose: see how they affect the **whole table**, not a single band.
- Other LLM session owns detail; do not invent list. Ask David when sequence reaches that stage.


## Continuation entries — dig status (5 Sep)
- **Reversal:** LOCKED 6 (unchanged).
- **Stress-tested shortlist found (LTF prune 2026-05-24):** `factory_v5/_design_decisions/step2_entry_method_prune_analysis_20260524.md`
  KEEP: `ltf_sweep_reclaim_atr_acceptance`, `ltf_break_and_retest_confirmed`, `ltf_sweep_reclaim_2bar`, `ltf_sweep_reclaim_1bar` (PARK: `ltf_break_and_retest_touch`).
  This is the **lower-TF entry** prune from a ~20-method grid — NOT proven identical to STRATEGY INPUT Continuation checkbox catalog.
- **Main continuation catalog** (`continuation_entry_methods`): still OPEN / placeholder for checkbox until David confirms whether to use catalog-minus-ORB, the LTF-4, or another list.
- **Ask David at final assemble** for the entry methods needed if still unresolved.

## Open for David (do not invent answers)
- Exact POI list (incoming).
- New strategy text (incoming).
- **Band PF / keep / sweep gate:** LOCKED 5 Sep grill — see `DAVID_GRILL_LOCKS_2026-09-05.md` (do not re-provisionalize).
- **Q4 take-table geometry:** LOCKED — see `DAVID_GRILL_LOCKS_2026-09-05.md`.
- **Q5 walk-forward:** LOCKED — see `DAVID_GRILL_LOCKS_2026-09-05.md`.
- **Q6 alone-vs-together:** FOR NOW (borrow best single recipe for multi-B; score together PF > 1.2; no joint TP-SL sweep) — OPEN to revise if David’s later combo-sweep wins. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
- **Continuation entry-method set:** dig found LTF-4 KEEP list (see above); checkbox still **PLACEHOLDER (not operable OPEN)** — **ask David before locking** (Done seal must ask).
- Take path = draw-a-line FOR NOW (recalc every run; cut full-session PF > 1.2); B−S notes OPEN; never-1B WARN at Stage 13 until further lock.
- Highest-boost recipe + vote grading (tested elsewhere — notes only).
