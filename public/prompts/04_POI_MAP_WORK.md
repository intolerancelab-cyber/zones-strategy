# Stage 4 — POI map WORK handbook (5 Sep 2026)

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
| **POI map** ← this stage | Checks (all of them) |
| Baseline *(prior)* / Band find / sweep / Boost / Assemble / Stress / MC *(later)* | Take / KEEP decisions |
| | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Exact POI list invention (OPEN with David) |

**Hard rule:** POI map **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 5 CHECK unlock. Do not shard the barrier wait itself or the CHECK. **Silent Zero = fail-closed** (empty map / zero levels stamped green → FAIL this section).

---

### 0. Header
- **Stage # / name:** 4 — POI map (value areas = POIs: D/W/M)
- **Kind:** WORK
- **Goal (one sentence):** Build per-cell POI maps with value areas (daily / weekly / monthly) calculated then treated as POIs — hash-first, no ORB, Silent Zero fail-closed — and unlock Stage 5 CHECK.
- **Unlocks next:** Stage 5 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox still binds entry set for later stages — Reversal LOCKED 6 vs Continuation OPEN (catalog minus `orb_*`; do not claim locked). POI map itself does not sweep entries.

---

### 1. Goal
- **Done means:**
  - Per fleet cell: POI map built from the in-force POI list + **value areas treated as POIs** (D/W/M — daily/weekly/monthly are **value areas**, not timeframes).
  - Bar + POI hashes pinned; map non-empty; strips 100% green.
  - Book-level POI map manifest + smoke identity written; no ORB levels; no doubles/pairs residue.
- **Does NOT decide:**
  - Exact POI name list if still OPEN with David — use stamped/incoming list only; **do not invent missing names**.
  - Band skip / sweep / KEEP recipes (Stages 6–9)
  - Boost / confluence / take / on-off / assemble
  - Locking 0.75/1.2 or Continuation set
  - Holdout take decisions (last ~20% untouched)

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- **Freeze/admit:** `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `CELL_ADMIT/{cell}.json`, `MANIFEST.json`
- **Prior WORK stamps:** Stage 2 `baseline/CELL/{cell}.json`, `baseline/MANIFEST.json`, `baseline/SMOKE_IDENTITY.json`
- **Prior CHECK:** Stage 3 `checks/stage_03_baseline/GREEN.stamp` + `VERDICT.json` must be green
- **Cache / hash pins available:** bar hashes from Baseline (and any prior bar-load pins); look for existing POI map hashes per cell before any re-walk
- **Entry-method set in force:** from Freeze seal / checkbox (must still match) — map stage does not expand entries; strip orb_*; no doubles/pairs
- **POI list pin:** if David-incoming list stamp exists, use it; if OPEN → stamp `poi_list_state=OPEN` and build only what is explicitly available (value areas D/W/M always included as POIs); **never invent** names to fill gaps

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** POI-map jobs = (cell × time/bar-range shard) and/or (cell × POI-family shard) — pick one consistent shard key for the run
- **Shard key:** prefer per-cell time shards for bar walk + POI placement; expected item_count = large (bars × POI families) — order of magnitude: thousands+ events per cell depending on history
- **Smoke:** YES — one cell (prefer NQ 5m or ES 5m — pick one) full POI-map path before fleet fan-out
- **Value areas:** compute D/W/M value areas **then treat as POIs** — not a forever-separate “VA stage”; do not double-count as both a separate VA stage and POI
- Weekly/monthly are **value areas**, not fleet timeframes (fleet remains 5m+15m only)

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass **opt-in high-n**
- **Target machines:** EPYC (up to 64) + Gaming when room rules allow — **max cores guidance for this MUST-SHARD stage**
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on a tiny smoke job
- Local steal OK on POI-map executor if present on side copy; identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup existing POI map hash for (cell, poi_list_id, session_lock_id, bar_hash, code_pin)
2. Hit → paint from cache, **do not re-walk bars/POIs**
3. Miss → run shard; write hash + artifact path
4. Prompt-only tweaks never invalidate bar/POI cache
5. Identity: one-core hash == multi-core hash when claiming equivalence
6. Roster/session change → hash must invalidate; stale cache after roster change = fail path (rebuild map section)

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming if current room allows
- Do not assume two-machine split if blocked
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 1 freeze/admit + Stage 2 baseline stamps + Stage 3 CHECK green; STOP if any missing or ORB/doubles attestation absent.
2. Confirm fleet roster still ES+NQ × 5m+15m only; reject 1m; confirm STRATEGY INPUT / ENTRY_SET still match Freeze.
3. Resolve POI list pin: D/W/M value areas **always** as POIs; other names only if stamped/incoming — **do not invent**. Stamp `poi_list_state=OPEN|PINNED`.
4. One-cell smoke: build POI map on one cell; verify non-empty map, no look-ahead, bar_hash + poi_map_hash pins, workers_used honesty.
5. **Silent Zero fail-closed:** if smoke (or any cell) yields empty map / zero levels / percent paint with no jobs → **FAIL this section**; do not stamp green; do not advance.
6. Identity check: smoke `n_workers=1` hash == `n_workers=k` hash on same tiny set.
7. Fan out fleet cells; per cell load bar cache by hash; enqueue POI-map shards only (no band find, no sweep, no boost).
8. Enforce no look-ahead: POI placement uses only information available at bar time under session locks; hunt wrong-session calendar.
9. **Strip any orb_* levels / ORB residue**; refuse doubles/pairs arms or pair-levels in the map.
10. Do not double-count value areas as a separate forever-VA stage — they are POIs (D/W/M).
11. Holdout last ~20% untouched for take later — do not use holdout to “tune” POI placement rules here.
12. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
13. Write per-cell POI map stamps + book-level manifest + smoke identity + Silent-Zero attestation (non-empty per cell).
14. Barrier: wait all four cells 100% green → unlock Stage 5 CHECK (do not auto-pass CHECK).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → **fail-closed** this section
- Orange Stage 5 CHECK stays locked until every strip 100% green

---

### 6. Success stamps
- `poi_map/CELL/{cell}.json` — poi counts by family, value_area_pois D/W/M present, bar_hash, poi_map_hash, workers_used, non_empty=true, session_lock_id, no look-ahead attestation
- `poi_map/MANIFEST.json` — fleet cells, poi_list_id, poi_list_state (OPEN|PINNED), hashes, workers_used honesty, no_ORB / no_doubles attestation, value_areas_as_pois=true
- `poi_map/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `poi_map/SILENT_ZERO_GATE.json` — per-cell non-empty proof; fail-closed policy stamped
- Strip paint 100% × 4 cells
- What CHECK will read: map hashes vs bars, non-empty proof, no look-ahead, VA=POI (not double-counted), no ORB, correct asset×TF folders, OPEN POI list not invented

---

### 7. What NOT to do
- No ORB / no doubles (no orb_* levels in map)
- No factory code edits from this room
- No sharding identity decisions / CHECK / barrier wait
- No inventing OPEN David locks (exact POI list names, 0.75/1.2 final, continuation set, take rule, on/off list)
- No advancing without fleet 100%
- No contaminating holdout (last ~20% for take only)
- No band find / sweep / boost / confluence in this stage
- No treating weekly/monthly as fleet timeframes
- No double-counting value areas as a separate forever-VA stage **and** POIs
- No re-walking bars/POIs because a prompt word changed
- No unlocking CHECK until all strips green
- No stamping green on empty map (Silent Zero fail-closed)
- No look-ahead into future bars when placing POIs
- No ES↔NQ folder mix-up

---

### 8. Heartbeat / stuck
- Heartbeat: under stack, show last shard progress + ETA
- Stuck: no chunk advance for agreed window OR worker pool dead OR identity mismatch OR Silent Zero detected mid-run
- Recovery: restart **Stage 4 only**; preserve bar caches + Freeze/Baseline seals + Stage 3 green; if bar hash mismatch after roster change → rebuild map section, do not silent continue; do not reopen Baseline unless baseline stamp is wrong (then loop Stage 2)

---

### 9. Cheap loops KEEP (stage-relevant subset)
- One-cell smoke before fleet
- Hash-first / cache never re-walk
- Silent Zero fail-closed (non-empty gate)
- No look-ahead hunt on sample
- RTH vs overnight / session calendar sanity on sample
- ES+NQ overlap awareness (flag mix-up; do not merge folders)
- Ablate one POI family if smell appears — **flag for CHECK**, do not silently drop
- Cost model already from Freeze (no PF talk required here beyond noting map is pre-band)
- Holdout virgin

---

### 10. Handoff to CHECK
- Feed Stage 5 bullets in CHECK_ASSAULT_OUTLINE.md / `05_POI_MAP_CHECK.md`
- Give agents: poi_map CELL stamps ×4, MANIFEST, SMOKE_IDENTITY, SILENT_ZERO_GATE, baseline bar hashes, Freeze SESSION_LOCKS + COST_MODEL, Stage 3 GREEN, explicit “no ORB/no doubles” + “VA=POIs D/W/M” + “poi_list_state” attestation, workers_used honesty proof

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (POI map = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] Silent Zero fail-closed stated
- [x] Value areas = POIs (D/W/M) stated; not separate forever stage
- [x] OPEN David POI list named, not invented
- [x] Handoff points at Stage 5 CHECK assault
