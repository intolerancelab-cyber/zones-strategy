# Stage 16 — Assemble + hold/flat WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md, CHECK_ASSAULT_OUTLINE.md (Stage 17 bullets), DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only (checkpoint + bank unused champion if dual talk).
**Band PF provisional:** skip <0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**Dual-lamp:** boost-alone sealed before confluence; do not reopen boost search.
**On/off filters:** binary no-line; may be PARKED — consume Stage 15 posture; do not invent filter list.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level → sweeps → REMOVE DEADWOOD POIs. Do not invent keep/cut list.
**Band-find cross-cell (3-of-4 same POI×band)** — NOT Stage-12 boost-count confluence: ≥3 of 4 same POI×band / same sign for thin-n; SEPARATE from Stage 12. Do not conflate.
**Take-table line:** consume Stage 12/13 take / don’t-take (best recipe by B; cheap combo shapes; amalgamation OPEN).

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load / prior stages *(prior)* | Freezes / admit seals |
| **Assemble** ← this stage (book build) | Checks (all of them) |
| Stress / MC *(later)* | **Hold / grade alone** *(MUST-NOT shard the hold decision)* |
| Micro hold-vs-flat **compute** evidence | Final hold/flat **choice** without micro evidence |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Inventing methods / take locks / filter list / deadwood POI list |
| | Re-opening boost search |

**Hard rule:** Assemble book build **is** MUST-SHARD. Hold/flat **decision** is MUST-NOT (identity) — gather micro hold-vs-flat evidence (cheap loop KEEP), then stamp choice without sharding the decision itself. Wait 100% across all fleet cells before Stage 17 CHECK unlock. Do not shard the barrier wait or the CHECK.

---

### 0. Header
- **Stage # / name:** 16 — Assemble + hold/flat
- **Kind:** WORK
- **Goal:** Assemble the research book from stamped recipes / take-line / on-off posture only; run micro hold-vs-flat evidence; stamp assembled book + hold/flat path; unlock Stage 17 CHECK. No last-minute method invention.
- **Unlocks next:** Stage 17 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED 6 vs Continuation PLACEHOLDER (catalog minus `orb_*` — not operable OPEN; do not claim locked). Assemble binds only stamped KEEP / take-line under that set.

---

### 1. Goal
- **Done means:**
  - Assembled book per fleet cell + book-level manifest: take-line squares only, best-recipe-by-B (amalgamation still OPEN), skip zones omitted, on/off posture applied or parked as Stage 15 sealed.
  - Micro hold-vs-flat evidence stamped (KEEP cheap loop) before stress/luck.
  - Hold vs flat path stamped with reasons; if dual champions → talk-box + checkpoint hook banks unused champion (hooks only).
  - Monday-runbook-shaped artifact (research-book sense): entry set, costs, size posture note, skip zones, filters posture — not live deploy.
  - Strips 100% green.
- **Does NOT decide:**
  - Stress / walk-forward / capacity / ugly / Monte Carlo (Stage 18).
  - Final assault / Done seal (Stages 20–21).
  - Take-rule lock if still OPEN with David.
  - Filter list invention; deadwood POI keep/cut; Continuation shortlist lock.
  - Live fold / deploy from this room.

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- Stage 1 Freeze/admit: BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–12: baseline → POI → band find/sweep → boost-alone → confluence TAKE_LINE + HOLY_GRAIL_CANDIDATE + BEST_RECIPE_BY_B + SKIP_OMISSION proofs
- Stage 13 GREEN + TAKE_LINE_REVIEWED + DUAL_LAMP (`boost_search_closed=true` after Stage 13)
- Stage 14/15: onoff MANIFEST + FILTER_POSTURE (PARKED|APPLIED); Stage 15 GREEN
- Cache pins: all prior hashes must match; mismatch → rebuild prior section
- Entry-method set = STRATEGY INPUT checkbox (match Freeze); **strip orb_*; refuse doubles/pairs**
- Checkpoint hooks from Stage 12 if dual champions banked

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** assemble jobs = (cell × take_square × recipe_bind) + micro hold-vs-flat evidence jobs = (cell × session_slice × hold|flat)
- Expected jobs: moderate (allowlisted take squares × 4 cells + micro slices)
- **Smoke:** YES — one cell full assemble bind + micro hold-vs-flat sample before fleet
- **Never** enqueue new entry methods / boost search / band sweeps
- **Never** enqueue skip-zone squares from Stage 6 SKIP_MAP
- Hold/flat **choice** after evidence lands is single-threaded (MUST-NOT shard the decision)

#### 3b. Cores
- Default `n_workers=1`; opt-in high-n on EPYC (up to 64) + Gaming if room allows for assemble bind / micro evidence only
- Honest stamp: `workers_used = min(requested_workers, item_count)`
- Identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup assemble hash for (cell, take_line_hash, best_recipe_by_b_hash, onoff_posture_hash, cost_model_id, bar_hash, poi_map_hash, code_pin)
2. Lookup holdflat micro hash for (cell, session_slice_id, assemble_hash, code_pin)
3. Hit → paint from cache; do not re-walk bars/POIs
4. Miss → run shard; write hash + artifact
5. Prompt-only tweaks never invalidate prior caches

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming only if room allows
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 15 GREEN + Stage 13 TAKE_LINE_REVIEWED + dual-lamp; STOP if boost_search_open≠false or take-line missing.
2. Read STRATEGY INPUT; strip orb_*; refuse doubles/pairs; Continuation stamped OPEN if selected.
3. Load TAKE_LINE + BEST_RECIPE_BY_B + SKIP_OMISSION + onoff FILTER_POSTURE; refuse any square not on take-line / allowlist chain.
4. One-cell smoke: assemble bind one cell; cost-applied; skip omission assert; micro hold-vs-flat sample; workers_used honesty; hash pin.
5. Identity check: n_workers=1 hash == n_workers=k on same tiny set.
6. Fan out fleet: assemble each cell from stamped recipes only; **no last-minute method invention**.
7. Assert skip-zone trades stay omitted; on/off PARKED|APPLIED posture stamped onto book cover.
8. Run **micro hold-vs-flat** evidence (KEEP cheap loop) per cell / session slice; stamp evidence tables.
9. Stamp hold vs flat path from evidence (MUST-NOT: do not shard the choice; talk-box only if real dual path under compounding lens); **checkpoint hook** banks unused champion if fork.
10. Write Monday-runbook-shaped research artifact (costs, size note, entry set, skips, filters) — paper only, no live deploy language.
11. Holdout last ~20% still virgin — holdout reserved; take not sealed by this stage (do not burn as assemble fuel).
12. Paint strips 10%…100%; heartbeat under stack.
13. Barrier: all four cells 100% green → unlock Stage 17 CHECK (do not auto-pass).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 17 CHECK locked until every strip 100% green
- Boost search UI stays sealed

---

### 6. Success stamps
- `assemble/CELL/{cell}.json` — bound recipes, take squares, n, PF (cost-applied), skip omission refs, onoff posture, workers_used, hashes
- `assemble/BOOK.json` — book-level assembled research book cover
- `assemble/HOLD_FLAT_MICRO.json` — micro evidence tables (hold vs flat)
- `assemble/HOLD_FLAT_PATH.json` — stamped path + reasons; decision_not_sharded=true
- `assemble/RUNBOOK_RESEARCH.json` — Monday-shaped research runbook (costs, size note, entry set, skips, filters); live_deploy=false
- `assemble/MANIFEST.json` — entry_set_id, lock_state, dual_lamp, onoff mode, no_ORB / no_doubles, workers_used, hashes, NEW_BANDING note, deadwood_poi_list=`NOT_INVENTED`, filter_list_invented=false, amalgamation_policy=`OPEN_LATER`
- `assemble/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `assemble/CHECKPOINT_HOOKS.json` — if dual hold/flat or champion fork: bank unused path (hooks only)
- Strip paint 100% × 4 cells
- What CHECK will read: stamped-recipes-only proof, skip omission, hold/flat micro evidence, runbook research (not live), dual-lamp, no ORB/no doubles, holdout virgin

---

### 7. What NOT to do
- Do not invent entry methods / recipes at assemble time
- Do not let skip zones leak into assembled book
- Do not choose hold/flat without micro evidence
- Do not shard the hold/flat **decision** itself
- Do not reopen boost search or re-sweep bands
- Do not invent filter list / deadwood POI keep/cut / take-rule lock
- Do not invent fork UX (hooks only)
- Do not use live/deploy language; paper research book only
- Do not sweep doubles/pairs (DEFUNCT) or include orb_* (ORB DEAD)
- Do not claim Continuation LOCKED
- Do not contaminate holdout
- Do not edit factory code from this room
- Do not unlock CHECK until all strips green
- Do not conflate Band-find 3-of-4 with boost-count confluence

---

### 8. Heartbeat / stuck
- Heartbeat: under stack — last assemble square × cell / holdflat micro slice + ETA
- Stuck: no chunk advance / worker death / identity mismatch / skip leak detected
- Recovery: restart Stage 16 only; preserve caches; if take-line wrong → Stage 12/13; if onoff posture wrong → Stage 14/15; never invent methods to unstick

---

### 9. Cheap loops KEEP
- One-cell smoke before fleet
- Cost model before PF
- Skip-omission proof vs Stage 6 SKIP_MAP
- Micro hold-vs-flat before stress/luck
- Stamped-recipes-only enqueue proof
- Cache never re-walk
- Compounding lens on hold/flat / champion fork + checkpoint bank unused
- Holdout virgin
- ES+NQ overlap / RTH vs overnight on assemble sample
- Dual-lamp intact; boost job count zero
- Filter list not invented; deadwood POI list not invented
- Runbook explainable as Monday research path (not live)

---

### 10. Handoff to CHECK
- Feed Stage 17 bullets in CHECK_ASSAULT_OUTLINE.md / `17_ASSEMBLE_HOLD_CHECK.md`
- Give agents: BOOK, CELL, HOLD_FLAT_MICRO, HOLD_FLAT_PATH, RUNBOOK_RESEARCH, SMOKE_IDENTITY, MANIFEST, CHECKPOINT_HOOKS, Stage 15 GREEN + FILTER_POSTURE, Stage 13 TAKE_LINE_REVIEWED, dual-lamp proof, skip omission, no ORB/no doubles, NEW BANDING / deadwood-not-invented attestation

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (assemble shard; hold decision not)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] OPEN David items named, not invented
- [x] Handoff points at matching CHECK assault bullets
- [x] Cross-cell ≠ boost-count confluence; NEW BANDING / deadwood; take-table line; fork hooks
