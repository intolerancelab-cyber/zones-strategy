# Stage 18 — Stress + luck WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md, CHECK_ASSAULT_OUTLINE.md (Stage 19 bullets), DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF LOCKED (David grill 5 Sep):** PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line (unused fork-hook note only). Reason: compounding / fewer loser streaks. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
**Dual-lamp:** boost search stays sealed.
**On/off filters:** PARKED or APPLIED per Stage 15 — do not invent list.
**NEW BANDING:** do not invent deadwood POI keep/cut list.
**Band-find cross-cell (3-of-4) ≠ Stage-12 boost-count confluence (2/3/4 B×S)** — do not conflate.
**Same late area, two questions:**
- **Stress** = walk-forward / capacity / ugly regimes
- **Luck** = Monte Carlo
Both required; one does not replace the other. **MUST-SHARD** both compute paths.

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load / prior stages *(prior)* | Freezes / admit seals |
| **Stress (WF / capacity / ugly)** ← this stage | Checks (all of them) |
| **Luck (Monte Carlo)** ← this stage | Take / KEEP final decisions |
| | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Cherry-picking ugly regimes away |
| | Inventing filter / deadwood / take locks |
| | Replacing Stress with Luck (or vice versa) |

**Hard rule:** Stress **and** Luck **are both MUST-SHARD**. Wait 100% across all fleet cells **and** both question tracks complete before Stage 19 CHECK unlock. Do not shard the barrier wait, the CHECK, or the pass/fail identity of stress/luck gates. Do not run only MC or only WF.

---

### 0. Header
- **Stage # / name:** 18 — Stress + luck (WF/capacity/ugly + Monte Carlo)
- **Kind:** WORK
- **Goal:** On the assembled book, answer two late-area questions: (1) Stress — walk-forward, capacity, ugly regimes; (2) Luck — Monte Carlo with stamped seeds. Stamp both; unlock Stage 19 CHECK.
- **Unlocks next:** Stage 19 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED 6 vs Continuation PLACEHOLDER (catalog minus `orb_*` — not operable OPEN; do not claim locked). Stress/luck consume assembled book under that set.

---

### 1. Goal
- **Done means:**
  - **Stress track complete:** walk-forward folds stamped; capacity / concurrent ES+NQ sizing stress stamped; ugly regimes (news/FOMC-like / thin open / gap) scored without cherry-pick omission.
  - **Luck track complete:** Monte Carlo runs with **stamped seeds**; distribution + left-tail under compounding stakes reported; reproducible.
  - Both tracks present per fleet cell + book-level; neither replaces the other.
  - Strips 100% green; holdout discipline maintained; multiplicity control on.
- **Does NOT decide:**
  - Final whole-book assault (Stage 20) or Done seal (Stage 21).
  - Re-opening assemble recipes / boost search / take-rule lock.
  - Inventing filter list or deadwood POI keep/cut.
  - Live deploy permission.

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- Stage 1 Freeze/admit: BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–16: full chain through assemble BOOK + HOLD_FLAT_PATH + RUNBOOK_RESEARCH
- Stage 17 GREEN: `checks/stage_17_assemble_hold/GREEN.stamp` + BOOK_SEAL_REVIEWED
- Cache pins: assemble hash + bar/POI/recipe hashes must match
- Entry-method set = STRATEGY INPUT checkbox (match Freeze); **strip orb_*; refuse doubles/pairs**
- Skip omission + dual-lamp + onoff posture still intact

---

### 3. Full sharding handbook
#### 3a. Split
- **Stress unit:** (cell × wf_fold × capacity_scenario × ugly_regime_id)
- **Luck unit:** (cell × mc_seed_batch × stake_scenario) — seeds pre-declared and stamped
- Expected jobs: large (folds × regimes × cells + MC batches × cells) — **MUST-SHARD**
- **Smoke:** YES — one cell, one WF fold + small MC seed batch before fleet fan-out
- **Never** omit ugly regimes that hurt (cherry-pick = fail)
- **Never** run MC-only or WF-only as “complete”
- **Never** leave MC seeds unstamped

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass opt-in high-n on EPYC (up to 64) + Gaming if room allows
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on 4 folds
- Identity: one-core hash == multi-core hash on smoke set

#### 3c. Hash-first reuse
1. Lookup stress hash for (cell, assemble_hash, wf_fold_id, capacity_id, ugly_id, cost_model_id, bar_hash, code_pin)
2. Lookup luck hash for (cell, assemble_hash, seed_list_hash, stake_scenario_id, cost_model_id, code_pin)
3. Hit → paint from cache; do not re-walk bars/POIs/assemble
4. Miss → run shard; write hash + artifact
5. Prompt-only tweaks never invalidate prior caches
6. Seed list hash must be pinned **before** MC runs (no post-hoc seed shopping)

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming only if room allows
- **This room:** paper prompts + dash only — no live engine, no fold (live), no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 17 GREEN + assemble BOOK + HOLD_FLAT_PATH; STOP if missing or live_deploy claimed true.
2. Read STRATEGY INPUT; strip orb_*; refuse doubles/pairs; Continuation stamped OPEN if selected.
3. Declare and stamp **MC seed list** + stake scenarios (compounding / high-% bank risk lens) **before** any luck run.
4. One-cell smoke: one WF fold + capacity spot-check + one ugly regime + small MC batch; cost-applied; workers_used honesty; hash pin.
5. Identity check: n_workers=1 hash == n_workers=k on same tiny set (stress and luck separately).
6. Fan out **Stress:** walk-forward folds across cells; capacity (concurrent ES+NQ / size); ugly regimes — **include** hurtful regimes; stamp failures honestly.
7. Fan out **Luck:** Monte Carlo per cell with pre-stamped seeds; report full distribution + left-tail ruin under compounding stakes.
8. Cross-check: assert Stress and Luck both present in MANIFEST; neither marked `skipped_as_redundant`.
9. Holdout last ~20% discipline: do not retune assemble from stress/luck results inside this stage (flag only; retune = loop prior section via CHECK fail, not silent patch).
10. Multiplicity control: do not explode stake×seed×fold without caps; stamp multiplicity note.
11. Paint strips 10%…100% with both tracks visible in chunk labels where possible (`stress_*` / `luck_*`); heartbeat under stack.
12. Write stress + luck stamps + book MANIFEST; barrier → unlock Stage 19 CHECK (do not auto-pass).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Prefer chunk labels that show stress vs luck progress (honest split of work)
- Heartbeat every N seconds; stuck if no chunk advance or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 19 CHECK locked until every strip 100% green **and** both tracks complete

---

### 6. Success stamps
- `stress_luck/STRESS/CELL/{cell}.json` — WF folds, capacity scenarios, ugly regimes; n, PF (cost-applied), failures included, workers_used, hashes
- `stress_luck/STRESS/BOOK.json` — book-level stress summary; cherry_pick=false
- `stress_luck/LUCK/CELL/{cell}.json` — MC distributions, left-tail, stake scenarios, seed refs, workers_used, hashes
- `stress_luck/LUCK/BOOK.json` — book-level luck summary
- `stress_luck/LUCK/SEEDS.json` — pre-declared seed list + seed_list_hash (pinned before runs)
- `stress_luck/MANIFEST.json` — both_tracks=true, stress_complete=true, luck_complete=true, entry_set_id, lock_state, dual_lamp, no_ORB / no_doubles, workers_used, hashes, compounding_lens=true, NEW_BANDING note, filter_list_invented=false, deadwood_poi_list=`NOT_INVENTED`
- `stress_luck/SMOKE_IDENTITY.json` — one-core vs multi-core for stress and luck smokes
- `stress_luck/MULTIPLICITY_NOTE.json` — caps / controls used
- Strip paint 100% × 4 cells
- What CHECK will read: both tracks present, seeds stamped, ugly not cherry-picked, capacity not ignored, holdout discipline, no ORB/no doubles, compounding left-tail

---

### 7. What NOT to do
- Do not run MC only or WF only
- Do not leave seeds unstamped / shop seeds after seeing results
- Do not cherry-pick away ugly regimes
- Do not ignore capacity while PF looks fine
- Do not silently retune assemble from stress/luck inside this stage
- Do not reopen boost search / invent methods
- Do not invent filter list / deadwood POI keep/cut / take locks
- Do not sweep doubles/pairs or include orb_*
- Do not claim Continuation LOCKED
- Do not shard CHECK / barrier / pass-fail identity
- Do not edit factory code from this room
- Do not contaminate holdout as free retune fuel
- Do not unlock CHECK until all strips green **and** both tracks stamped
- Do not use live-deploy language

---

### 8. Heartbeat / stuck
- Heartbeat: under stack — last stress fold/regime or luck seed-batch × cell + ETA
- Stuck: no chunk advance / worker death / identity mismatch / missing track
- Recovery: restart Stage 18 only; preserve caches; if assemble book wrong → loop Stage 16; never drop a track to “finish faster”

---

### 9. Cheap loops KEEP
- One-cell smoke before fleet (both tracks)
- Cost model before PF
- Pre-declare MC seeds
- Ugly regimes included (anti-cherry-pick)
- Capacity stress alongside WF
- Multiplicity control
- Cache never re-walk
- Compounding / left-tail under high-% bank risk
- Holdout virgin (flag-only; no silent retune)
- ES+NQ overlap capacity honesty
- Dual-lamp intact; filter/deadwood not invented
- Both tracks in MANIFEST

---

### 10. Handoff to CHECK
- Feed Stage 19 bullets in CHECK_ASSAULT_OUTLINE.md / `19_STRESS_LUCK_CHECK.md`
- Give agents: STRESS CELL+BOOK, LUCK CELL+BOOK+SEEDS, MANIFEST (both_tracks), SMOKE_IDENTITY, MULTIPLICITY_NOTE, Stage 17 GREEN + assemble BOOK, cost-applied proof, no ORB/no doubles, compounding left-tail tables

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Stress + Luck both MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse + pre-declared seeds stated
- [x] OPEN David items named, not invented
- [x] Handoff points at matching CHECK assault bullets
- [x] Two questions same late area explicit
