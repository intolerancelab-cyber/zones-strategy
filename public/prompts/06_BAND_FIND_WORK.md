# Stage 6 — Band find WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**On/off filters:** binary no-line states; parked — ask David later.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**. Pending other session for cleaned set.
**Band-find cross-cell (3-of-4 same POI×band)** — SEPARATE from **Stage-12 boost-count confluence (2/3/4 B×S)**. Output: CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT — not naked “BOOST candidate”. Ban lone word “Confluence” in headers.

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
- **Stage # / name:** 6 — Band find (<0.75 SKIP no normal sweep; ~0.75 REVIVAL; keep lean >1.2)
- **Kind:** WORK
- **Goal (one sentence):** Per fleet cell, find bands where baseline helped vs hurt; stamp provisional SKIP (<0.75, no *normal* sweep), REVIVAL (~0.75), keep-lean posture (PF > 1.2), and Band-find cross-cell 3-of-4 labels (CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT); unlock Stage 7 CHECK.
- **Unlocks next:** Stage 7 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set for later sweep — Reversal LOCKED 6 vs Continuation PLACEHOLDER (catalog minus `orb_*` — not operable OPEN; do not claim locked). Band find measures baseline-at-location; does not run full recipe sweep.

---

### 1. Goal
- **Done means:**
  - Per fleet cell: bands scored with cost-applied PF; labeled under provisional David-voice ladder:
    - **<0.75** → SKIP (no *normal* sweep enqueue later)
    - **~0.75** → REVIVAL class (one tailored revival sweep allowed later; still provisional)
    - Keep/boost lean: PF **> 1.2** (grill at launch). Report 1.0 as sensitivity / fork-hook only — not an equal keep pick.
    - After failed revival still under keep lean → **FAILED_REVIVAL** or **BELOW_KEEP** (not table / not keep). Do **not** dual-label the same band both SWEEP_CANDIDATE and DEAD_ZONE.
  - **Band-find cross-cell (3-of-4 same POI×band):** for thin-n positive bands, stamp CROSS_CELL_BOOST_CANDIDATE (≥3/4 same-sign) or INSUFFICIENT (<3/4). Never naked “BOOST candidate”.
  - Strips 100% green; book-level band-find manifest + smoke identity written.
- **Does NOT decide:**
  - Final lock of 0.75 / 1.0 / 1.2 (OPEN with David — disclose provisional only)
  - Bin count locks (DEC-063 zone-first banding notes exist — **do not invent** bin-count locks)
  - KEEP recipes / wide→narrow sweep (Stage 8)
  - Boost / Stage-12 boost-count confluence / take / on-off / assemble
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
8. Label bands under the coherent ladder:
   - PF **<0.75** → SKIP (no *normal* Stage 8 sweep; must stay on SKIP_MAP)
   - PF **~0.75** → REVIVAL class (one tailored revival sweep allowed later; not a normal sweep)
   - Keep/boost lean: PF **> 1.2** (grill at launch). Report 1.0 as sensitivity / fork-hook only.
   - After failed revival still under keep lean → stamp **FAILED_REVIVAL** or **BELOW_KEEP** (not table / not keep). Do **not** dual-label SWEEP_CANDIDATE + DEAD_ZONE.
9. **Band-find cross-cell (3-of-4 same POI×band) — REQUIRED WORK step (not appendix):** For each thin-n positive (or negative/SKIP) POI×band on a cell, compare the **same POI × same band** across ES 5m / ES 15m / NQ 5m / NQ 15m. If ≥3 of 4 same-direction → stamp **CROSS_CELL_BOOST_CANDIDATE** (or cross-cell SKIP agreement). If <3 agree → stamp **INSUFFICIENT** — do **not** boost/skip-trust from that thin cell alone. Never use naked “BOOST candidate”. This is **not** Stage-12 boost-count confluence.
10. Hunt band vs ATR/tick smell; flag for CHECK — do not silently relabel.
11. **Strip orb_*; refuse doubles/pairs.** Do not claim Continuation LOCKED or operable OPEN (PLACEHOLDER).
12. Holdout last ~20% reserved — take not sealed by this stage.
13. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
14. Write per-cell band-find stamps + SKIP_MAP + REVIVAL_MAP + FAILED_REVIVAL/BELOW_KEEP notes + CROSS_CELL_3OF4 map + book-level manifest + smoke identity + provisional PF disclosure.
15. Barrier: wait all four cells 100% green → unlock Stage 7 CHECK (do not auto-pass CHECK).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 7 CHECK stays locked until every strip 100% green

---

### 6. Success stamps
- `band_find/CELL/{cell}.json` — bands with PF (cost-applied), n, label ∈ {SKIP, REVIVAL, KEEP_LEAN_GT_1_2, FAILED_REVIVAL, BELOW_KEEP}, bar_hash, poi_map_hash, workers_used
- `band_find/SKIP_MAP/{cell}.json` — explicit <0.75 skip band ids (no *normal* sweep; must stay omitted from normal Stage 8 enqueue)
- `band_find/REVIVAL_MAP/{cell}.json` — ~0.75 REVIVAL-class band ids (one tailored revival sweep allowed later)
- `band_find/FAILED_REVIVAL_OR_BELOW_KEEP/{cell}.json` — post-revival under keep lean (not table / not keep); never dual-label as SWEEP_CANDIDATE + DEAD_ZONE
- `band_find/CROSS_CELL_3OF4/{cell}.json` + `band_find/CROSS_CELL_3OF4/BOOK.json` — per POI×band: readable cell count, same-sign vote, label ∈ {CROSS_CELL_BOOST_CANDIDATE, INSUFFICIENT, CROSS_CELL_SKIP_AGREE}
- `band_find/MANIFEST.json` — fleet cells, banding_scheme_id, NEW_BANDING note, dec063_note flag, provisional ladder 0.75 / keep lean >1.2 (1.0 sensitivity only) **not locked**, entry_set_id, hashes, workers_used honesty, no_ORB / no_doubles, deadwood_poi_list=`NOT_INVENTED`
- `band_find/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `band_find/PROVISIONAL_PF_DISCLOSURE.json` — SKIP <0.75 (no normal sweep); REVIVAL ~0.75; keep lean PF > 1.2; 1.0 sensitivity / fork-hook only; David grill still OPEN
- Strip paint 100% × 4 cells
- What CHECK will read: SKIP/REVIVAL/FAILED_REVIVAL maps, CROSS_CELL_3OF4 stamps, cost-before-PF, provisional not locked, no *normal* sweep of <0.75, DEC-063 note without invented bin lock, label consistency, NEW BANDING / deadwood-not-invented

---

### 7. What NOT to do
- No ORB / no doubles
- No factory code edits from this room
- No sharding CHECK / barrier wait / final take decisions
- No inventing OPEN David locks (0.75/1.2 final, continuation set, take rule, on/off list, POI list, bin-count lock)
- No advancing without fleet 100%
- No contaminating holdout (last ~20% reserved — take not sealed by this stage)
- No Stage 8 recipe sweep in this stage
- No *normal* sweeping or pre-enqueuing <0.75 skip bands (revival arms only where REVIVAL_MAP marked)
- No locking 0.75/1.2 in stone in stamps
- No claiming Continuation LOCKED
- No re-walking bars/POIs because a prompt word changed
- No unlocking CHECK until all strips green
- No swapping SKIP/KEEP labels across cells
- Do not skip Band-find cross-cell 3-of-4 work or leave it appendix-only — it is a required step + stamp
- Do not mint naked “BOOST candidate”; use CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT only
- Do not dual-label a band both SWEEP_CANDIDATE and DEAD_ZONE; use FAILED_REVIVAL / BELOW_KEEP for under-keep post-revival
- Do not invent deadwood POI keep/cut list (NEW BANDING cleaned set pending other session)
- Do not conflate Band-find cross-cell (3-of-4) with Stage-12 boost-count confluence (2/3/4 B×S)
- Do not claim Continuation operable OPEN (PLACEHOLDER)

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
- Give agents: band_find CELL + SKIP_MAP + REVIVAL_MAP + FAILED_REVIVAL_OR_BELOW_KEEP + CROSS_CELL_3OF4 ×4 + BOOK, MANIFEST, SMOKE_IDENTITY, PROVISIONAL_PF_DISCLOSURE, poi_map hashes, baseline stamps, Freeze COST_MODEL + PROVISIONAL_BAND_PF_NOTE, Stage 5 GREEN, explicit “no ORB/no doubles” + “provisional not locked” + NEW BANDING / deadwood-not-invented + DEC-063 note attestation, workers_used honesty proof

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Band find = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] Coherent ladder: <0.75 SKIP (no normal sweep); ~0.75 REVIVAL; keep lean >1.2; FAILED_REVIVAL/BELOW_KEEP
- [x] Band-find cross-cell 3-of-4 in WORK steps + stamps + NOT-to-do (not bolt-on only)
- [x] NEW BANDING / deadwood-not-invented stated
- [x] DEC-063 zone-first note without invented bin lock
- [x] OPEN David items named, not invented
- [x] Handoff points at Stage 7 CHECK assault


## Reminder — Band-find cross-cell lives in WORK body
Steps 9 + stamps `CROSS_CELL_3OF4` + NOT-to-do already own the 3-of-4 rule. Do not treat this as optional appendix. SEPARATE from Stage-12 boost-count confluence (2/3/4 B×S).
