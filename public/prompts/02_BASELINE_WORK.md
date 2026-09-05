# Stage 2 — Baseline alone WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**On/off filters:** binary no-line states; parked — ask David later.

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load | Freezes / admit seals |
| **Baseline** ← this stage | Checks (all of them) |
| POI map / Band find / sweep / Boost / Assemble / Stress / MC *(later)* | Take / KEEP decisions |
| | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |

**Hard rule:** Baseline **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 3 CHECK unlock. Do not shard the barrier wait itself or the CHECK.

---

### 0. Header
- **Stage # / name:** 2 — Baseline alone
- **Kind:** WORK
- **Goal (one sentence):** Run baseline-alone per fleet cell (hash-first, cost-applied) to stamp n+PF floors and strip paint — expect mediocre PF (~0.9 / breakeven); unlock Stage 3 CHECK.
- **Unlocks next:** Stage 3 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED (`close_back_inside`, `n_close_back_inside`, `wick_rejection_completed_bar`, `touch`, `close_confirm`, `pullback_to_level`) OR Continuation PLACEHOLDER (catalog minus `orb_*` — not operable OPEN; do not claim locked).

---

### 1. Goal
- **Done means:**
  - Per fleet cell: baseline-alone run complete with cost model applied; n trades + PF stamped; bar-cache hashes pinned; strips 100% green.
  - Book-level baseline manifest + one-cell smoke identity hash written.
  - Mediocre PF (~0.9 / breakeven) accepted as **normal** — juice comes later (POI / band / boost). Do not talk baseline up as edge.
- **Does NOT decide:**
  - Final champion take (talk-box only if multiple baseline champion **types** appear — real choice; else park for CHECK)
  - POI / band / boost / confluence / on-off / assemble
  - Locking 0.75/1.2 or Continuation set
  - Holdout take decisions (last ~20% untouched)

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- **Freeze/admit:** `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `CELL_ADMIT/{cell}.json`, `MANIFEST.json`
- **Prior WORK stamps:** Stage 1 only (no Stage 3 CHECK yet — that comes after this WORK)
- **Cache / hash pins available:** look for existing bar hashes per cell; never re-walk if pin matches code+roster
- **Entry-method set in force:** current STRATEGY INPUT checkbox value from Freeze seal (must match); strip orb_*; no doubles/pairs

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** baseline jobs = (cell × time shard) or (cell × bar-range shard) — pick one consistent shard key for the run
- **Shard key:** prefer time/bar-range shards per cell; expected item_count = large (bars) — order of magnitude: thousands+ bars per cell depending on history length
- **Smoke:** YES — one cell (prefer NQ 5m or ES 5m — pick one) full baseline path before fleet fan-out
- Do **not** include POI/boost arms — baseline **alone**

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass **opt-in high-n**
- **Target machines:** EPYC (up to 64) + Gaming when room rules allow — **max cores guidance for this MUST-SHARD stage**
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on a tiny smoke job
- Local steal OK on baseline executor if present on side copy; identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup existing bar / baseline result hash for (cell, entry_set_id, cost_model_id, session_lock_id, code_pin)
2. Hit → paint from cache, **do not re-walk bars**
3. Miss → run shard; write hash + artifact path
4. Prompt-only tweaks never invalidate bar cache
5. Identity: one-core hash == multi-core hash when claiming equivalence

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming if current room allows
- Do not assume two-machine split if blocked
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 1 freeze/admit stamps all present; STOP if cost model missing or ORB/doubles attestation absent.
2. Read STRATEGY INPUT checkbox vs Freeze ENTRY_SET — must match; **strip any orb_*; refuse doubles/pairs arms**.
3. One-cell smoke: baseline alone on one cell; verify n, PF (cost-applied), workers_used honesty, hash pin.
4. Identity check: smoke `n_workers=1` hash == `n_workers=k` hash on same tiny set.
5. Fan out fleet cells; per cell load bar cache by hash; enqueue baseline-alone only (no POI map, no band, no boost).
6. Apply early n+PF floors for sanity; **cost model before any PF talk**.
7. Expect mediocre PF (~0.9 / breakeven) — stamp as baseline reality; do not polish into “edge.”
8. **Compounding champion lens note:** if multiple baseline champion *types* appear, flag for Stage 3 talk-box — pick for **compounding / high-% bank risk fit**, not vanity PF alone. If only one type, no forced talk.
9. Holdout last ~20% untouched (take decisions later — not here).
10. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
11. Write per-cell baseline stamps + book-level manifest + smoke identity.
12. Barrier: wait all four cells 100% green → unlock Stage 3 CHECK (do not auto-pass CHECK).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 3 CHECK stays locked until every strip 100% green

---

### 6. Success stamps
- `baseline/CELL/{cell}.json` — n trades, PF (cost-applied), session lock id, entry_set_id, bar_hash, workers_used, mediocre_pf_note
- `baseline/MANIFEST.json` — fleet cells, entry_set_id, cost_model_id, workers_used honesty, hashes, no_ORB / no_doubles attestation
- `baseline/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `baseline/CHAMPION_TYPES_NOTE.json` — optional; list types if multiple; compounding-lens flag for CHECK talk-box (no forced take)
- Strip paint 100% × 4 cells
- What CHECK will read: cost-applied PF tables, smoke identity, entry set vs checkbox, mediocre-PF expectation, workers_used honesty

---

### 7. What NOT to do
- No ORB / no doubles
- No factory code edits from this room
- No sharding identity decisions / CHECK / barrier wait
- No inventing OPEN David locks (0.75/1.2, continuation set, take rule, on/off list, POI list)
- No advancing without fleet 100%
- No contaminating holdout (last ~20% reserved — take not sealed by this stage)
- No POI / band / boost / confluence in this stage
- No talking baseline PF up as proven edge
- No re-walking bars because a prompt word changed
- No unlocking CHECK until all strips green
- No inflated workers_used on tiny smoke

---

### 8. Heartbeat / stuck
- Heartbeat: under stack, show last shard progress + ETA
- Stuck: no chunk advance for agreed window OR worker pool dead OR identity mismatch
- Recovery: restart **Stage 2 only**; preserve bar caches + Freeze seals; do not reopen Freeze unless seal is wrong (then loop Stage 1)

---

### 9. Cheap loops KEEP (stage-relevant subset)
- One-cell smoke before fleet
- Cost model before PF
- n+PF floors early
- Hash-first / cache never re-walk
- RTH vs overnight sanity on sample
- ES+NQ overlap awareness (flag, do not “fix” by mixing folders)
- Multiplicity control if entry-set expansion smells
- Compounding lens note for champion types (not vanity PF)
- Holdout virgin

---

### 10. Handoff to CHECK
- Feed Stage 3 bullets in CHECK_ASSAULT_OUTLINE.md / `03_BASELINE_CHECK.md`
- Give agents: baseline CELL stamps ×4, MANIFEST, SMOKE_IDENTITY, Freeze COST_MODEL + ENTRY_SET + SESSION_LOCKS, CHAMPION_TYPES_NOTE if any, explicit “no ORB/no doubles” + “mediocre PF expected” attestation, workers_used honesty proof

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Baseline = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] EPYC+Gaming max cores guidance stated
- [x] Mediocre PF expected + compounding champion lens noted
- [x] OPEN David items named, not invented
- [x] Handoff points at Stage 3 CHECK assault
