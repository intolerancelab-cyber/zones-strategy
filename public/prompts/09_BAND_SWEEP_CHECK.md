# Stage 9 — CHECK assault pack (after Band sweep) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 9 bullets. Fail → loop to **Stage 8 Band sweep only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**. Pending other session for cleaned set.
**Band-find cross-cell (3-of-4 same POI×band)** ≠ **Stage-12 boost-count confluence (2/3/4 B×S)** — do not conflate.
**Band PF LOCKED (David grill 5 Sep):** PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line (unused fork-hook note only). Reason: compounding / fewer loser streaks. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
**Continuation:** PLACEHOLDER (catalog minus orb_* — not operable OPEN; wait David before lock).
**Multi-agent:** every check (this one included).

---

## Prior WORK context
Stage 8 band sweep — **wide→narrow KEEP**; tailored entry/TP per location; entry set from Reversal/Continuation checkbox. TP today = original + fractions + ATR 1.2–5.0 (**structural TP DEC-061 research-only** — not production swap-in). PF < 0.75 omitted from all sweeps; PF ≥ 0.75 swept (must not worsen); KEEP label only if PF > 1.2.

**Agents must know:**
- Wide→narrow KEEP path; one-cell smoke before fleet.
- Doubles/pairs DEFUNCT — must not appear in sweep arms.
- ORB entry methods stripped.
- Continuation is PLACEHOLDER — must **not** be claimed LOCKED or operable OPEN.
- Holdout last ~20% untouched during sweep.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `MANIFEST.json`
- Stage 2–7: baseline, Stage 3 GREEN, poi_map, Stage 5 GREEN, band_find SKIP_MAP+CANDIDATE_MAP, Stage 7 GREEN
- Stage 8: `band_sweep/KEEP_RECIPES/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `band_sweep/DEAD_ARMS/{cell}.json`, `band_sweep/MANIFEST.json`, `band_sweep/SMOKE_IDENTITY.json`, `band_sweep/SKIP_OMISSION_PROOF.json`, `band_sweep/PROVISIONAL_NOTE.json`, `band_sweep/TP_POLICY.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 9 add:** orb_* methods in recipe stamps; doubles/pairs arms present; narrow KEEP without wide evidence; holdout contaminated during sweep; Continuation set claimed LOCKED; skip bands enqueued; structural TP swapped in as deployable; CHECK clicked before all strips green; boost-alone started early.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF LOCKED (David grill 5 Sep): PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line.
- Cost model present before any PF talk. Holdout last ~20% reserved — take not sealed by this stage.
- **Stage 9 add:** SKIP_OMISSION_PROOF vs Stage 6 SKIP_MAP — every skip id absent from KEEP_RECIPES; entry_set_id matches checkbox/Freeze; TP_POLICY tags research-only vs ATR deployable correctly; smoke identity matches; no inflated workers_used on tiny job count.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: do KEEP recipes fit staking, not generic PF alone?
- **Stage 9 failure modes:**
  - Overfit entry/TP to one year; fails walk-forward later
  - Slippage kills ATR-tight recipes at open
  - Recipe explosion without multiplicity control
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist,” “Continuation LOCKED,” “structural TP production-ready.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 9 add:** refute ORB/doubles revival; refute re-provisionalizing Band PF locks / treating 1.0 as keep; refute boost/confluence already done; refute narrow-only KEEP with no wide trail; refute skip-zone leakage into KEEP_RECIPES.
- Output: REFUTED claims list + what must be re-run in **Stage 8 only** (or Stage 6 if skip maps wrong).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 8; Stage 6 if skip/candidate identity broken); do not advance.
2. WARN from role 3 → talk box + champion checkpoint/bank only if a real choice exists (e.g. multiple KEEP recipe champion **types** under compounding lens); else stamp WARN and proceed only if David/overseer accepts.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 10 Boost-alone WORK.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 9 — cheap kills specific
- orb_* methods in recipe stamps
- Doubles/pairs arms present
- Narrow KEEP without wide evidence
- Holdout contaminated during sweep
- Continuation set claimed LOCKED or operable OPEN (it is PLACEHOLDER)

---

## Stage 9 — real-life failure modes
- Overfit entry/TP to one year; fails walk-forward later
- Slippage kills ATR-tight recipes at open
- Recipe explosion without multiplicity control

---

## Talk-before-check (only if real choice)
- If multiple KEEP champion **types** appear → **talk box + champion checkpoint**: compounding / high-% bank risk lens (not max PF vanity). **Bank unused champion** via checkpoint hook for later resume. Fork = hooks only (no fork UX).
- Stamp `checks/stage_09_band_sweep/CHECKPOINT_HOOKS.json` when dual/multi KEEP types talked (fork stamp + banked unused champion id/path).
- If single type or none → no forced talk; proceed to verdict.
- Do **not** invent Q5/Q6 answers, POI list, or Continuation shortlist. Band PF + Q4 geometry are LOCKED.
- Structural TP remains research-only — not a talk to “promote” it to deployable without David.

---

## Success stamp (CHECK green)
- `checks/stage_09_band_sweep/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, talk-box / checkpoint outcome if any
- `checks/stage_09_band_sweep/CHECKPOINT_HOOKS.json` — if multi KEEP champion types: fork stamp + banked unused champion (hooks only)
- `checks/stage_09_band_sweep/GREEN.stamp` — unlocks Stage 10 Boost-alone WORK
- Attestations: no ORB, no doubles, fleet 4 cells, skip bands omitted, wide→narrow evidenced, cost-before-PF, BAND_PF_LOCKS stamped LOCKED, Continuation still PLACEHOLDER, structural TP research-only, holdout virgin

---

## Fail loop
- FAIL → return to **Stage 8** (`08_BAND_SWEEP_WORK.md`) only; if SKIP_MAP / candidate identity broken → Stage 6 only; preserve earlier greens otherwise.
- Do not skip to Boost-alone. Do not start confluence.
