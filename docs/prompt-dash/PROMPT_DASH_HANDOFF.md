# Prompt-driven Factory Dash — Handoff (5 Sep 2026)
Owner: DASHBOARD OVERSEER. Audience: whoever assembles the page + prompts.
Scope: webpage + clickable prompts + sequence. NOT live engine. NOT POI chunk code (built elsewhere). NOT Proof A.

## Prompt packs (paper)
- Multi-agent CHECK outline (shared roles + per-stage 3/5/7/9/11/13/15/17/19/21 + final assault): [`CHECK_ASSAULT_OUTLINE.md`](CHECK_ASSAULT_OUTLINE.md)
- WORK overseer handbook template + Band-sweep filled example (sharding depth): [`WORK_HANDBOOK_TEMPLATE.md`](WORK_HANDBOOK_TEMPLATE.md)

## CHANGELOG — 2026-09-05
- **NEW BANDING (David confirmed):** branch `codex/rty-replay-parity-20260702` — fewer/tighter bands near the level (not old wide map) → sweeps → REMOVE DEADWOOD POIs (heavy lifters only). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later; do not invent keep/cut list.
- **Stages 10–13 prompts written:** boost-alone → cost-shock/trade-count CHECK → confluence take-table line (best recipe by B; cheap combo shapes; amalgamation OPEN) → holy-grail/dependence CHECK. Dual-lamp locked.
- **UI lock (David happy):** vertical scroll; STRATEGY INPUT top; each WORK stage = green WORK bar + stacked blue RESULTS strips (one strip per fleet cell: asset×TF); each strip = 10 chunks (10%…100%) with time under chunks; heartbeat/stuck under stack; orange CHECK unlocks only when every strip is 100% green; failed check loops to that section only; stamp each phase; linear (no skip); talk-before-check only for real choices; fork = page hooks only.
- **ORB DEAD / doubles DEFUNCT:** stripped from active plan/UI copy (historical DEAD/DEFUNCT markers only). Do not delete factory code elsewhere.
- **Stage map baked:** Freeze → Baseline → POI map → Band find → Band sweep → Boost-alone → Confluence → On/off filters → Assemble+hold → Stress+luck → Final assault (WORK/CHECK pairs 1–21; boost/confluence dual-lamp).
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
| 12 | Confluence table (2/3/4 on allowlisted squares) | WORK |
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
3. **Band find:** where baseline helped vs hurt. Under ~0.75 → **SKIP** zone (no sweep). ≥~0.75 → tailored sweep. **OPEN with David:** confirm 0.75 = band PF.
4. **Band sweep:** tailored entry/TP recipes per location; keep recipes; wide→narrow KEEP.
5. **Boost path (dual-lamp):** boost-alone → mark table → CHECK unlock → confluence (2/3/4) on allowlisted squares only; confluence does not re-open boost search; **holy grail** = final table.
6. **Take rule notes (OPEN with David — confirm on table):** B−S ≥ 2, B in 2..7; never B<2; never S≥3; leaning 2B alone or 3B+1S; confirm never 1B alone.
7. **On/off filters** late (trend/range, calendar, half-days…).
8. **Assemble + hold/flat.**
9. **Stress + luck** — same late area, two questions: Stress = walk-forward / capacity / ugly regimes; Luck = Monte Carlo.
10. **Final multi-agent assault.**

## Pro quant KEEP loops
- One-cell smoke before fleet.
- Count/PF floors early.
- Holdout last ~20% for take decision only.
- Ablate one POI/skip family.
- Cost model before PF talk.
- RTH vs overnight; ES+NQ overlap; null tests; multiplicity control.
- Cache bars/POIs; never re-walk for a prompt tweak.

## Talk boxes / champion checkpoint (5 Sep)
- Chat only on real forks: different baseline champions; post band-sweep dual recipes; 1.0 vs 1.2 boost line.
- Hooks: checkpoint + bank unused champion → resume later with the other. Full build later if cheap; else hooks only.
- Detail: `DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md`

## Take-table line (FOR NOW — David)
- After boost-alone + confluence table: draw take/don’t-take line across B×S squares; use best boost recipe for that square’s boost count.
- Cheap combo pass over shapes (2B0S, 3B0S/1S, 4B…, 5B×skips…) without new heavy sweeps; tighten if weak.
- Amalgamated multi-boost TP vs best recipe = OPEN test later.
- Detail: `DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md`

## Fork (LOCKED 5 Sep — David answered)
- Decide fork style later. Page leaves hooks only (bank champions; optional later A/B). No fork UX locked yet.




## Cross-cell band confluence (David 5 Sep — LOCK for Band find)
When a POI×band (e.g. BEFORE) looks strong on one cell but **n is thin** (example: ~50 trades):
- Look at the **same POI × same band position** on the other fleet cells (ES 5m, ES 15m, NQ 5m, NQ 15m).
- If **≥3 of 4** cells show the **same-direction positive effect**, treat that band as a **BOOST candidate** (sibling / cross-asset×TF confluence), even if one cell alone is under a local n floor.
- If fewer than 3 agree → do **not** boost from that thin cell alone; mark INSUFFICIENT / no boost (or SKIP path if negative rules apply).
- Same idea for negative/SKIP: multi-cell agreement before trusting a thin skip label.
- Aligns with RESCORE-20 `scopes.confluence`: 3 of 4 val cells readable + same sign (INSUFFICIENT_CONFLUENCE if &lt;3 readable).
- This is **Band-find / band-label** confluence — separate from later boost-count confluence table (2/3/4 boosts).

## New banding + deadwood (David 5 Sep — branch `codex/rty-replay-parity-20260702`)
- Source checkout: Halls_Laptop `C:\Users\David\THE STRATEGY` on `codex/rty-replay-parity-20260702` (active; includes RESCORE-20 / DEC-063 work).
- **Fewer / tighter bands** near the level (not the old wide many-slice map).
- Then **sweeps** on survivors.
- Then **remove deadwood**: many POIs in the set; only some do heavy lifting — declutter the rest (not delete history; pull from main table).
- Prompt-dash: admit expects a **cleaned POI set** when ready; do not invent keep/cut list here.
- Aligns with Sep-3 poi lessons + RESCORE-20 zone-first (effects mostly within ~0.5 ATR of touch).

## Band / PF figures — PROVISIONAL (from laptop files, NOT locked)
Source (Halls_Laptop, read 5 Sep): `C:\Users\David\THE STRATEGY\_orderflow_poi_campaign\rescore20\PREREGISTRATION.json` (RESCORE-20, updated 5 Sep) + checkpoint in `_poi_lab_from_gaming_pc_20260822\CHECKPOINT_20260828.md`.

Working draft from Stage-2 thresholds (do **not** set in stone until that campaign finishes; grill David before launch):
- **instant_skip_below = 0.75** PF (profit factor) — below this after/without revival → skip zone.
- **~0.75 SKIP bands get a revival sweep** (new TP/entry arms); if still under the chosen boost line → stay skip.
- **Boost keep lines both reported: 1.0 and 1.2** — owner picks 1.0 vs 1.2 in LEDGERS **before** the check read (`owner_open_items`). David voice today leans keep-if-over-1.2.
- Between 0.75 and chosen boost line = DEAD_ZONE (not in table).
- Example story matches: baseline ~0.8, at a POI drops to 0.74 → skip; at 0.75 → try revive; end must clear chosen line (lean 1.2).

Also noted for prompt-dash champions: aim is **compounding / high % of bank risk** — champion pick (baseline + band sweep) should be whatever fits that staking system, not generic PF alone. Money sim in prereg currently stakes 0.5%/1%/2% with mini caps — confirm later.

Related: DEC-063 zone-first banding (28 bins); confluence_primary in same file currently `boost_votes >= 2 AND skip_votes == 0` (may differ from 3B1S lean — grill later).

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
- **Band skip 0.75:** still provisional from RESCORE-20 until campaign done.
- **Boost keep line:** David lean **PF > 1.2** for now (still grill at launch). Report 1.0 as sensitivity only.
- **Continuation entry-method set:** dig found LTF-4 KEEP list (see above); checkbox still PLACEHOLDER — ask David at final assemble if unresolved.
- Take rule confirmation on table (never 1B alone; 2B alone vs 3B+1S lean).
- Highest-boost recipe + vote grading (tested elsewhere — notes only).
