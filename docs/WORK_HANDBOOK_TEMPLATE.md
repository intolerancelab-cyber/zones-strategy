# WORK handbook template — every WORK prompt (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Every WORK clickable prompt must be a **detailed overseer handbook**, not a one-liner — even when code already exists.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip &lt;0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**On/off filters:** binary no-line states; parked — ask David later.

---

## MUST-SHARD vs MUST-NOT (reminder — paste into every WORK)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load | Freezes / admit seals |
| POI map | Checks (all of them) |
| Baseline | Take / KEEP decisions |
| Band find / band sweep | Hold / grade alone |
| Boost-alone / Stage-12 boost-count confluence fill | All-cell barrier wait (100% fleet) |
| Assemble | Speedy lamp / emit-covered report steps |
| Stress / Monte Carlo | Champion talk-box choice |

**Hard rule:** Wait 100% across all fleet cells before CHECK unlock. Do not shard the barrier wait itself.

---

## Template sections (fill every WORK prompt)

Copy this skeleton into each stage WORK prompt and fill every field.

### 0. Header
- **Stage # / name:**
- **Kind:** WORK
- **Goal (one sentence):**
- **Unlocks next:** (CHECK stage #)
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Reversal (LOCKED 6) vs Continuation (OPEN, catalog minus orb_*)

### 1. Goal
- What “done” means for this WORK (artifacts + stamps + strip paint).
- What this stage intentionally does **not** decide (leave for CHECK / David OPEN items).

### 2. Stamped inputs (must exist before start)
List prior-stage stamp paths / hashes. If missing → STOP, do not invent.
- Freeze/admit:
- Prior WORK stamps:
- Cache / hash pins available:
- Entry-method set in force:

### 3. Full sharding handbook
#### 3a. Split
- What unit splits? (time shards / POI shards / recipe jobs / band bins / MC seeds)
- Shard key and expected item_count order of magnitude
- One-cell smoke first? (YES for heavy stages)

#### 3b. Cores
- Default `n_workers=1`; extra cores opt-in
- Target machines: EPYC (64) + Gaming when allowed; honest `workers_used = min(requested, item_count)`
- Do not stamp 64 when only 4 jobs

#### 3c. Hash-first reuse
- Look for existing bar/POI/recipe hashes before any re-walk
- Never re-walk bars/POIs for a prompt tweak
- Identity: one-core hash == multi-core hash when claiming equivalence

#### 3d. Machines
- Which machine runs which cell / shard class
- What is blocked (live, fold, VPS, paper machine misuse — per current room rules)
- Side-copy vs live: this room is **paper / prompts only**

### 4. Step-by-step (overseer path)
Numbered. No skips. Include smoke → fleet → stamp.
1. …
2. …
3. …

### 5. Progress / UI paint
- Per cell strip: 10 chunks (10%…100%) + time under each chunk
- Heartbeat / stuck under stack
- Paint rules: no fake ticks; Silent Zero = fail
- Orange CHECK stays locked until every strip 100% green

### 6. Success stamps
- Exact stamp names / fields
- Per-cell vs book-level stamps
- workers_used, hash, n, PF (and provisional band lines if relevant)
- What CHECK will read

### 7. What NOT to do
- No ORB / no doubles
- No factory code edits from this room
- No sharding identity decisions
- No inventing OPEN David locks (0.75/1.2, continuation set, take rule, on/off list, POI list)
- No advancing without fleet 100%
- No contaminating holdout (last ~20% reserved — take not sealed by this stage)

### 8. Heartbeat / stuck
- Heartbeat cadence
- Stuck definition (no chunk advance / no stamp / worker death)
- Recovery: restart **this section only**; do not jump stages

### 9. Cheap loops KEEP (stage-relevant subset)
Pick from: one-cell smoke; n+PF floors; cost model early; RTH vs overnight; ES+NQ overlap; null tests; multiplicity; cache never re-walk; ablate one POI/skip; hold-vs-flat micro; etc.

### 10. Handoff to CHECK
- Point to CHECK_ASSAULT_OUTLINE.md stage bullets
- List artifacts the four agents must receive

---

## EXAMPLE (filled) — Stage 8 Band sweep (heavy)

Depth David wants: sharding handbook style. Use as the bar for other heavy WORKs (Boost-alone similar).

### 0. Header
- **Stage # / name:** 8 — Band sweep
- **Kind:** WORK
- **Goal:** Wide→narrow KEEP sweep of tailored entry/TP recipes on sweep-candidate bands only (≥~0.75 provisional); stamp keepers per fleet cell; unlock Stage 9 CHECK.
- **Unlocks next:** Stage 9 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED (`close_back_inside`, `n_close_back_inside`, `wick_rejection_completed_bar`, `touch`, `close_confirm`, `pullback_to_level`) OR Continuation PLACEHOLDER (catalog minus `orb_*` — not operable OPEN; do not claim locked).

### 1. Goal
- For each fleet cell: take Band-find KEEP/sweep-candidate bands; run wide→narrow entry×TP recipes; stamp KEEP recipes + drop dead arms; paint strips to 100%.
- Does **not** decide final champion take, confluence, or lock 0.75/1.2 — those stay provisional / later CHECK / David OPEN.

### 2. Stamped inputs
- Stage 1 Freeze/admit (cost/session; no ORB)
- Stage 2 Baseline alone stamps (per cell)
- Stage 3 CHECK green
- Stage 4 POI map hashes (value areas as POIs)
- Stage 5 CHECK green
- Stage 6 Band find: SKIP (<0.75), REVIVAL (~0.75), keep lean >1.2, FAILED_REVIVAL/BELOW_KEEP; CROSS_CELL_3OF4
- Stage 7 CHECK green
- Cache pins: bars + POI map hashes must match; if mismatch → rebuild map section, do not silent continue
- Entry-method set = current STRATEGY INPUT checkbox value

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** sweep jobs = (cell × band_id × entry_method × TP_arm) with progressive wide→narrow triage
- Wide first (Halton / deep-wide style per AGENTS notes) → narrow KEEP on survivors
- **Smoke:** one cell (prefer NQ 5m or ES 5m — pick one) full path before fleet fan-out
- Expected jobs: large (hundreds–thousands); shard by band_id then recipe batch

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass opt-in high-n on EPYC (up to 64) + Gaming if room rules allow
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on 4 bands
- Local steal OK on sweep executor if present on side copy; identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup existing sweep result hash for (cell, band_id, entry_set_id, tp_grid_id, code_pin)
2. Hit → paint from cache, do not re-walk bars/POIs
3. Miss → run shard; write hash + artifact path
4. Prompt-only tweaks never invalidate bar/POI cache

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree only
- Gaming: only if current room allows; do not assume two-machine split if blocked
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

### 4. Step-by-step
1. Verify all stamped inputs; STOP if Stage 7 not green or band-find skip/candidate map missing.
2. Read STRATEGY INPUT checkbox → bind entry-method list; **strip any orb_*; refuse doubles/pairs arms**.
3. One-cell smoke: wide→narrow on one candidate band; verify n, PF, workers_used honesty, hash pin.
4. Identity check: smoke n_workers=1 hash == n_workers=k hash on same tiny set.
5. Fan out fleet cells; per cell load bar+POI cache by hash; enqueue only ≥~0.75 candidates (provisional); **never enqueue &lt;0.75 skip bands** (revival arms only where Band-find marked revival).
6. Wide pass → triage → narrow KEEP; TP arms = original + fractions + ATR 1.2–5.0 (DEC-061 structural TP = research-only, do not swap in as production TP).
7. Apply early n+PF floors; cost model already from Freeze — no PF talk without cost.
8. Holdout last ~20% untouched (take decisions later — not here).
9. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
10. Write KEEP recipe stamps per cell; mark dead arms; write book-level sweep manifest.
11. Barrier: wait all four cells 100% green → unlock Stage 9 CHECK (do not auto-pass CHECK).

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section

### 6. Success stamps
- `band_sweep/KEEP_RECIPES/{cell}.json` — recipes, n, PF, cost-applied flag
- `band_sweep/MANIFEST.json` — entry_set_id, tp_grid_id, workers_used, hashes, skip bands omitted
- `band_sweep/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- Provisional note stamped: band PF lines 0.75 | 1.0 | 1.2 **not locked**
- Strip paint 100% × 4 cells

### 7. What NOT to do
- Do not sweep doubles/pairs (DEFUNCT)
- Do not include orb_* methods (ORB DEAD)
- Do not lock 0.75/1.2 in stone
- Do not claim Continuation set locked
- Do not shard the CHECK or KEEP decision itself
- Do not edit factory code from this room
- Do not start confluence / boost-alone early
- Do not re-walk bars because a prompt word changed
- Do not unlock CHECK until all strips green

### 8. Heartbeat / stuck
- Heartbeat: under stack, show last shard progress + ETA
- Stuck: no chunk advance for agreed window OR worker pool dead OR identity mismatch
- Recovery: restart Stage 8 only; preserve caches; do not reopen Stage 6 bands unless Band-find stamp is wrong (then loop Stage 6, not “patch in place”)

### 9. Cheap loops KEEP
- One-cell smoke before fleet
- Cost model before PF
- n+PF floors early
- Multiplicity control on recipe explosion
- RTH vs overnight sanity on sample
- Cache never re-walk
- Ablate one POI/skip family if smell appears (flag for CHECK — do not silently drop)

### 10. Handoff to CHECK
- Feed Stage 9 bullets in CHECK_ASSAULT_OUTLINE.md
- Give agents: KEEP manifests, smoke identity, entry_set vs checkbox proof, cost-applied proof, list of omitted skip bands, explicit “no ORB/no doubles” attestation

---

## EXAMPLE stub — Stage 10 Boost-alone (same depth required)

When authoring Stage 10, fill the same template with:
- **Split:** boost family × cell jobs; mark B×S table; do **not** run confluence here
- **Dual-lamp:** boost-alone completes → Stage 11 CHECK (cost shock + trade-count floor) → only then Stage 12 confluence on allowlisted squares
- **MUST-NOT:** take rule finalization (OPEN), holy-grail claim, re-open after mark
- **Provisional:** boost keep lines 1.0|1.2 both reported; owner picks before check read
- **NOT:** doubles, ORB, inventing take locks (B−S≥2, etc. = notes only until table grill)

---

## Author checklist (before publishing a WORK prompt)
- [ ] All 10 template sections filled
- [ ] MUST-SHARD vs MUST-NOT respected
- [ ] ORB DEAD + doubles DEFUNCT stated
- [ ] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [ ] Hash-first reuse stated
- [ ] OPEN David items named, not invented
- [ ] Handoff points at matching CHECK assault bullets
