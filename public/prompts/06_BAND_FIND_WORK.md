# Stage 6 — Band find WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md.

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
| POI map *(prior)* | Checks (all of them) |
| Baseline *(prior)* | Take / KEEP decisions |
| **Band find** ← this stage | Hold / grade alone |
| Band sweep / Boost / Assemble / Stress / MC *(later)* | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Locking 0.75 / 1.2 as final (provisional only) |

**Hard rule:** Band find **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 7 CHECK unlock. Do not shard the barrier wait itself or the CHECK. Do **not** shard the skip/KEEP **label decision** — compute shards, then stamp labels from provisional rules without inventing David locks.

---

### 0. Header
- **Stage # / name:** 6 — Band find (under ~0.75 → SKIP; ≥~0.75 → sweep candidate)
- **Kind:** WORK
- **Goal (one sentence):** Per fleet cell, find bands where baseline helped vs hurt; stamp provisional skip (<0.75), revival (~0.75), and sweep candidates (≥~0.75); unlock Stage 7 CHECK.
- **Unlocks next:** Stage 7 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set for later sweep — Reversal LOCKED 6 vs Continuation OPEN (catalog minus `orb_*`; do not claim locked). Band find measures baseline-at-location; does not run full recipe sweep.

---

### 1. Goal
- **Done means:**
  - Per fleet cell: bands scored with cost-applied PF; labeled under provisional rules:
    - **<0.75** → SKIP (no sweep enqueue later)
    - **~0.75** → revival path / borderline (may get revival arms later; still provisional)
    - **≥~0.75** → sweep candidate
  - Between 0.75 and chosen boost line = **DEAD_ZONE** note (not in table) — provisional story; boost lines 1.0|1.2 both reported, **not locked**.
  - Strips 100% green; book-level band-find manifest + smoke identity written.
- **Does NOT decide:**
  - Final lock of 0.75 / 1.0 / 1.2 (OPEN with David — disclose provisional only)
  - Bin count locks (DEC-063 zone-first banding notes exist — **do not invent** bin-count locks)
  - KEEP recipes / wide→narrow sweep (Stage 8)
  - Boost / confluence / take / on-off / assemble
  - Continuation set final shortlist
  - Holdout take decisions (last ~20% untouched)

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- **Freeze/admit:** `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `MANIFEST.json`
- **Prior WORK:** Stage 2 baseline CELL+MANIFEST+SMOKE; Stage 4 `poi_map/CELL/{cell}.json`, `poi_map/MANIFEST.json`, `poi_map/SMOKE_IDENTITY.json`, `poi_map/SILENT_ZERO_GATE.json`
- **Prior CHECKs:** Stage 3 GREEN + Stage 5 `checks/stage_05_poi_map/GREEN.stamp` + VERDICT
- **Cache / hash pins available:** bar hashes + POI map hashes must match; if mismatch → rebuild prior map section, do not silent continue
- **Entry-method set in force:** from Freeze / checkbox (must match); strip orb_*; no doubles/pairs
- **DEC-063 note:** zone-first banding notes may exist in campaign files — treat as **notes only**; do not invent bin-count locks in stamps

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** band-find jobs = (cell × band_bin / zone shard) or (cell × POI-family × bin) — consistent key for the run
- **Shard key:** prefer zone/bin shards per cell (DEC-063 zone-first **note** if used — disclose `banding_scheme_id`, do not claim David-locked bin count)
- Expected item_count = moderate→large (bins × cells); order of magnitude: tens–hundreds of bins per cell depending on scheme
- **Smoke:** YES — one cell (prefer NQ 5m or ES 5m — pick one) full band-find path before fleet fan-out
- Do **not** enqueue full entry×TP sweep here — find/label only

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass **opt-in high-n**
- **Target machines:** EPYC (up to 64) + Gaming when room rules allow — **max cores guidance for this MUST-SHARD stage**
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on 4 bins
- Local steal OK on band-find executor if present on side copy; identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup existing band-find hash for (cell, poi_map_hash, bar_hash, banding_scheme_id, cost_model_id, entry_set_id, code_pin)
2. Hit → paint from cache, **do not re-walk bars/POIs**
3. Miss → run shard; write hash + artifact path
4. Prompt-only tweaks never invalidate bar/POI cache
5. Identity: one-core hash == multi-core hash when claiming equivalence

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming if current room allows
- Do not assume two-machine split if blocked
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 1–5 stamps: Freeze, Baseline, Stage 3 green, POI map, Stage 5 green; STOP if POI Silent Zero gate failed or hashes missing.
2. Confirm bar_hash + poi_map_hash pins still match; mismatch → loop Stage 4 rebuild, do not patch labels on stale map.
3. Read PROVISIONAL_BAND_PF_NOTE: instant_skip_below=0.75 provisional; revival ~0.75; boost lines 1.0|1.2 both reported — **do not lock**.
4. Bind banding scheme: if DEC-063 zone-first notes used, stamp `banding_scheme_id` + `dec063_note=true` + `bin_count_locked=false`; do not invent a locked bin count.
5. One-cell smoke: score bands with **cost model applied before PF**; verify skip/candidate labels, workers_used honesty, hash pin.
6. Identity check: smoke `n_workers=1` hash == `n_workers=k` hash on same tiny set.
7. Fan out fleet cells; per cell load bar+POI cache by hash; enqueue band-find shards only.
8. Label bands:
   - PF **<0.75** → SKIP (must not be swept in Stage 8)
   - PF **~0.75** → revival candidate note
   - PF **≥~0.75** → sweep candidate
   - DEAD_ZONE note between 0.75 and chosen boost line (provisional) — stamp both 1.0 and 1.2 lines; owner picks later
9. Hunt band vs ATR/tick smell; flag for CHECK — do not silently relabel.
10. **Strip orb_*; refuse doubles/pairs.** Do not claim Continuation LOCKED.
11. Holdout last ~20% untouched (take later — not here).
12. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
13. Write per-cell band-find stamps + skip/candidate maps + book-level manifest + smoke identity + provisional PF disclosure.
14. Barrier: wait all four cells 100% green → unlock Stage 7 CHECK (do not auto-pass CHECK).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 7 CHECK stays locked until every strip 100% green

---

### 6. Success stamps
- `band_find/CELL/{cell}.json` — bands with PF (cost-applied), n, label ∈ {SKIP, REVIVAL, SWEEP_CANDIDATE}, DEAD_ZONE notes, bar_hash, poi_map_hash, workers_used
- `band_find/SKIP_MAP/{cell}.json` — explicit <0.75 skip band ids (must stay omitted from later sweep enqueue)
- `band_find/CANDIDATE_MAP/{cell}.json` — ≥~0.75 sweep candidates + ~0.75 revival notes
- `band_find/MANIFEST.json` — fleet cells, banding_scheme_id, dec063_note flag, provisional lines 0.75|1.0|1.2 **not locked**, entry_set_id, hashes, workers_used honesty, no_ORB / no_doubles
- `band_find/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `band_find/PROVISIONAL_PF_DISCLOSURE.json` — skip <0.75; revival ~0.75; boost 1.0|1.2 both reported; David grill still OPEN
- Strip paint 100% × 4 cells
- What CHECK will read: skip vs candidate maps, cost-before-PF, provisional not locked, no sweep of skip bands, DEC-063 note without invented bin lock, label consistency across cells

---

### 7. What NOT to do
- No ORB / no doubles
- No factory code edits from this room
- No sharding CHECK / barrier wait / final take decisions
- No inventing OPEN David locks (0.75/1.2 final, continuation set, take rule, on/off list, POI list, bin-count lock)
- No advancing without fleet 100%
- No contaminating holdout (last ~20% for take only)
- No Stage 8 recipe sweep in this stage
- No sweeping or pre-enqueuing <0.75 skip bands
- No locking 0.75/1.2 in stone in stamps
- No claiming Continuation LOCKED
- No re-walking bars/POIs because a prompt word changed
- No unlocking CHECK until all strips green
- No swapping SKIP/KEEP labels across cells

---

### 8. Heartbeat / stuck
- Heartbeat: under stack, show last shard progress + ETA
- Stuck: no chunk advance for agreed window OR worker pool dead OR identity mismatch
- Recovery: restart **Stage 6 only**; preserve bar/POI caches + prior greens; if POI/baseline stamp wrong → loop that stage, not “patch labels in place”

---

### 9. Cheap loops KEEP (stage-relevant subset)
- One-cell smoke before fleet
- Cost model before PF
- n+PF floors early
- Hash-first / cache never re-walk
- Skip map explicit (fail if skip ids missing)
- Band vs ATR/tick smell flag
- RTH vs overnight sanity on sample
- ES+NQ overlap / correlation awareness (flag double-counting one idea)
- Multiplicity control if bin explosion smells
- Holdout virgin
- Compounding champion lens: band labels serve later staking fit — do not vanity-KEEP weak bands

---

### 10. Handoff to CHECK
- Feed Stage 7 bullets in CHECK_ASSAULT_OUTLINE.md / `07_BAND_FIND_CHECK.md` (outline Stage 6→7)
- Give agents: band_find CELL + SKIP_MAP + CANDIDATE_MAP ×4, MANIFEST, SMOKE_IDENTITY, PROVISIONAL_PF_DISCLOSURE, poi_map hashes, baseline stamps, Freeze COST_MODEL + PROVISIONAL_BAND_PF_NOTE, Stage 5 GREEN, explicit “no ORB/no doubles” + “provisional not locked” + DEC-063 note attestation, workers_used honesty proof

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Band find = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] Provisional PF <0.75 skip / ≥0.75 candidate stated
- [x] DEC-063 zone-first note without invented bin lock
- [x] OPEN David items named, not invented
- [x] Handoff points at Stage 7 CHECK assault


## Cross-cell band confluence (David 5 Sep — LOCK for Band find)
When a POI×band (e.g. BEFORE) looks strong on one cell but **n is thin** (example: ~50 trades):
- Look at the **same POI × same band position** on the other fleet cells (ES 5m, ES 15m, NQ 5m, NQ 15m).
- If **≥3 of 4** cells show the **same-direction positive effect**, treat that band as a **BOOST candidate** (sibling / cross-asset×TF confluence), even if one cell alone is under a local n floor.
- If fewer than 3 agree → do **not** boost from that thin cell alone; mark INSUFFICIENT / no boost (or SKIP path if negative rules apply).
- Same idea for negative/SKIP: multi-cell agreement before trusting a thin skip label.
- Aligns with RESCORE-20 `scopes.confluence`: 3 of 4 val cells readable + same sign (INSUFFICIENT_CONFLUENCE if &lt;3 readable).
- This is **Band-find / band-label** confluence — separate from later boost-count confluence table (2/3/4 boosts).

