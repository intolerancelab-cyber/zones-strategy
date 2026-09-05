# Stage 8 — Band sweep WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md (filled Band-sweep example).

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**On/off filters:** binary no-line states; parked — ask David later.

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load | Freezes / admit seals |
| POI map / Baseline / Band find *(prior)* | Checks (all of them) |
| **Band sweep** ← this stage | Take / KEEP decisions *(final take — OPEN)* |
| Boost / confluence / Assemble / Stress / MC *(later)* | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Locking 0.75/1.2 or Continuation set |

**Hard rule:** Band sweep **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 9 CHECK unlock. Do not shard the barrier wait itself or the CHECK. Recipe KEEP stamps are stage outputs — final champion take stays later / OPEN.

---

### 0. Header
- **Stage # / name:** 8 — Band sweep
- **Kind:** WORK
- **Goal:** Wide→narrow KEEP sweep of tailored entry/TP recipes on sweep-candidate bands only (≥~0.75 provisional); stamp keepers per fleet cell; unlock Stage 9 CHECK.
- **Unlocks next:** Stage 9 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED (`close_back_inside`, `n_close_back_inside`, `wick_rejection_completed_bar`, `touch`, `close_confirm`, `pullback_to_level`) OR Continuation OPEN (catalog minus `orb_*`; do not claim locked).

---

### 1. Goal
- For each fleet cell: take Band-find KEEP/sweep-candidate bands; run wide→narrow entry×TP recipes; stamp KEEP recipes + drop dead arms; paint strips to 100%.
- Does **not** decide final champion take, confluence, or lock 0.75/1.2 — those stay provisional / later CHECK / David OPEN.
- **Compounding champion lens:** when multiple KEEP recipe families appear, flag types for Stage 9 talk only if a real choice exists — prefer staking / high-% bank risk fit over vanity PF.

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- Stage 1 Freeze/admit (cost/session; no ORB): BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stage 2 Baseline alone stamps (per cell) + MANIFEST + SMOKE_IDENTITY
- Stage 3 CHECK green
- Stage 4 POI map hashes (value areas as POIs) + SILENT_ZERO_GATE
- Stage 5 CHECK green
- Stage 6 Band find: skip (<0.75), revival (~0.75), sweep candidates; DEAD_ZONE notes if present; SKIP_MAP + CANDIDATE_MAP
- Stage 7 CHECK green
- Cache pins: bars + POI map hashes must match; if mismatch → rebuild map section, do not silent continue
- Entry-method set = current STRATEGY INPUT checkbox value (must match Freeze ENTRY_SET)

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** sweep jobs = (cell × band_id × entry_method × TP_arm) with progressive wide→narrow triage
- Wide first (Halton / deep-wide style per AGENTS notes) → narrow KEEP on survivors
- **Smoke:** one cell (prefer NQ 5m or ES 5m — pick one) full path before fleet fan-out
- Expected jobs: large (hundreds–thousands); shard by band_id then recipe batch
- **Never enqueue <0.75 skip bands** (revival arms only where Band-find marked revival)

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass opt-in high-n on EPYC (up to 64) + Gaming if room rules allow
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on 4 bands
- Local steal OK on sweep executor if present on side copy; identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup existing sweep result hash for (cell, band_id, entry_set_id, tp_grid_id, code_pin, poi_map_hash, bar_hash)
2. Hit → paint from cache, do not re-walk bars/POIs
3. Miss → run shard; write hash + artifact path
4. Prompt-only tweaks never invalidate bar/POI cache
5. Identity: one-core hash == multi-core hash when claiming equivalence

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree only
- Gaming: only if current room allows; do not assume two-machine split if blocked
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify all stamped inputs; STOP if Stage 7 not green or band-find skip/candidate map missing.
2. Read STRATEGY INPUT checkbox → bind entry-method list; **strip any orb_*; refuse doubles/pairs arms**. If Continuation selected, stamp set as **OPEN**, never LOCKED.
3. Load SKIP_MAP — assert zero skip band ids enter the sweep queue; revival arms only where Band-find marked revival.
4. One-cell smoke: wide→narrow on one candidate band; verify n, PF (cost-applied), workers_used honesty, hash pin.
5. Identity check: smoke n_workers=1 hash == n_workers=k hash on same tiny set.
6. Fan out fleet cells; per cell load bar+POI cache by hash; enqueue only ≥~0.75 candidates (provisional); **never enqueue <0.75 skip bands**.
7. Wide pass → triage → narrow KEEP; TP arms = original + fractions + ATR 1.2–5.0 (**DEC-061 structural TP = research-only**, do not swap in as production/deployable TP).
8. Apply early n+PF floors; cost model already from Freeze — no PF talk without cost.
9. Multiplicity control on recipe explosion; flag overfit smell for CHECK.
10. Holdout last ~20% untouched (take decisions later — not here).
11. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
12. Write KEEP recipe stamps per cell; mark dead arms; write book-level sweep manifest; stamp provisional PF note still not locked.
13. Barrier: wait all four cells 100% green → unlock Stage 9 CHECK (do not auto-pass CHECK).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 9 CHECK stays locked until every strip 100% green

---

### 6. Success stamps
- `band_sweep/KEEP_RECIPES/{cell}.json` — recipes, n, PF, cost-applied flag, entry methods used, TP arms (ATR deployable vs structural research-only tagged)
- `band_sweep/DEAD_ARMS/{cell}.json` — dropped arms with reason codes
- `band_sweep/MANIFEST.json` — entry_set_id, entry_set_lock_state (LOCKED|OPEN), tp_grid_id, workers_used, hashes, skip bands omitted, no_ORB / no_doubles attestation
- `band_sweep/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `band_sweep/SKIP_OMISSION_PROOF.json` — list of omitted skip band ids from Stage 6 SKIP_MAP
- `band_sweep/PROVISIONAL_NOTE.json` — band PF lines 0.75 | 1.0 | 1.2 **not locked**
- `band_sweep/TP_POLICY.json` — ATR 1.2–5.0 + fractions = deployable grid; DEC-061 structural TP = research-only
- Strip paint 100% × 4 cells
- What CHECK will read: KEEP manifests, smoke identity, entry_set vs checkbox proof, cost-applied proof, omitted skip bands, no ORB/no doubles, wide→narrow evidence, holdout virgin, Continuation not claimed LOCKED

---

### 7. What NOT to do
- Do not sweep doubles/pairs (DEFUNCT)
- Do not include orb_* methods (ORB DEAD)
- Do not lock 0.75/1.2 in stone
- Do not claim Continuation set locked
- Do not shard the CHECK or final take decision itself
- Do not edit factory code from this room
- Do not start confluence / boost-alone early
- Do not re-walk bars because a prompt word changed
- Do not unlock CHECK until all strips green
- Do not enqueue <0.75 skip bands
- Do not swap structural TP (DEC-061) in as production TP
- Do not contaminate holdout
- Do not narrow KEEP without wide evidence

---

### 8. Heartbeat / stuck
- Heartbeat: under stack, show last shard progress + ETA
- Stuck: no chunk advance for agreed window OR worker pool dead OR identity mismatch
- Recovery: restart Stage 8 only; preserve caches; do not reopen Stage 6 bands unless Band-find stamp is wrong (then loop Stage 6, not “patch in place”)

---

### 9. Cheap loops KEEP
- One-cell smoke before fleet
- Cost model before PF
- n+PF floors early
- Multiplicity control on recipe explosion
- RTH vs overnight sanity on sample
- Cache never re-walk
- Ablate one POI/skip family if smell appears (flag for CHECK — do not silently drop)
- Skip-omission proof before paint complete
- Compounding lens note if multiple KEEP families (not vanity PF)
- Holdout virgin
- ES+NQ overlap awareness

---

### 10. Handoff to CHECK
- Feed Stage 9 bullets in CHECK_ASSAULT_OUTLINE.md / `09_BAND_SWEEP_CHECK.md`
- Give agents: KEEP manifests, DEAD_ARMS, SMOKE_IDENTITY, SKIP_OMISSION_PROOF, TP_POLICY, entry_set vs checkbox proof, cost-applied proof, list of omitted skip bands, explicit “no ORB/no doubles” attestation, provisional note, Stage 7 GREEN

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Band sweep = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] Wide→narrow + entry set from checkbox stated
- [x] Structural TP research-only / ATR deployable stated
- [x] OPEN David items named, not invented
- [x] Handoff points at Stage 9 CHECK assault
