# Stage 7 — CHECK assault pack (after Band find) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 6→7 bullets. Fail → loop to **Stage 6 Band find only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**Continuation:** OPEN (catalog minus orb_*).
**Multi-agent:** every check (this one included).

---

## Prior WORK context
Stage 6 found bands where baseline helped vs hurt. Under ~0.75 → **SKIP** (no sweep). ≥~0.75 → sweep candidate / revival path. Band PF figures **PROVISIONAL** (not locked). DEC-063 zone-first banding notes may be referenced — bin count **not** invented-locked.

**Agents must know:**
- instant_skip_below = 0.75 provisional; revival at ~0.75; boost lines 1.0|1.2 both reported, owner picks before check read.
- Between 0.75 and chosen boost line = DEAD_ZONE (not in table) — provisional story.
- DEC-063 zone-first banding notes exist; do not invent bin count locks.
- Cost model before any PF talk.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `MANIFEST.json`
- Stage 2: `baseline/CELL/{cell}.json`, `baseline/MANIFEST.json`
- Stage 3: `checks/stage_03_baseline/GREEN.stamp`
- Stage 4: `poi_map/CELL/{cell}.json`, `poi_map/MANIFEST.json`, `poi_map/SILENT_ZERO_GATE.json`
- Stage 5: `checks/stage_05_poi_map/GREEN.stamp`
- Stage 6: `band_find/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `band_find/SKIP_MAP/{cell}.json`, `band_find/CANDIDATE_MAP/{cell}.json`, `band_find/MANIFEST.json`, `band_find/SMOKE_IDENTITY.json`, `band_find/PROVISIONAL_PF_DISCLOSURE.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 7 add:** sweeping or pre-enqueuing a <0.75 skip band; locking 0.75/1.2 as final without David grill; skip/KEEP labels swapped across cells; missing SKIP_MAP; Stage 8 work done early; CHECK clicked before all strips green; invented bin-count lock from DEC-063 notes.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades/bands, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip <0.75; revival at ~0.75; boost lines 1.0|1.2 (not locked — report both, do not invent a lock).
- Cost model present before any PF talk. Holdout last ~20% untouched for take decisions only.
- **Stage 7 add:** every SKIP_MAP id has PF <0.75 (cost-applied); every SWEEP_CANDIDATE has PF ≥~0.75; DEAD_ZONE notes consistent with provisional story; bar_hash/poi_map_hash match prior stamps; no inflated workers_used.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: do skip/candidate cuts serve staking later, or vanity-KEEP weak bands?
- **Stage 7 failure modes:**
  - Band edges that only work on one regime (thin open / news)
  - Correlation of ES+NQ bands double-counting one idea
  - Skip zones that still leak trades into later assemble
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist,” “0.75 locked,” “1.2 locked,” “DEC-063 bin count locked.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 7 add:** refute final lock of provisional lines; refute Continuation LOCKED; refute ORB/doubles; refute Stage 8 KEEP recipes already chosen; refute band vs ATR/tick smell ignored.
- Output: REFUTED claims list + what must be re-run in **Stage 6 only** (or earlier if identity broken).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 6; earlier only if prior identity broken); do not advance.
2. WARN from role 3 → talk box only if a real choice exists; else stamp WARN and proceed only if David/overseer accepts. Provisional 0.75/1.2 grill = OPEN — park, do not invent.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 8 Band sweep WORK.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 7 — cheap kills specific
- Sweeping a <0.75 skip band
- Locking 0.75/1.2 in stamps as final without David grill
- Band vs ATR/tick smell ignored
- Skip/KEEP labels swapped across cells

---

## Stage 7 — real-life failure modes
- Band edges that only work on one regime (thin open / news)
- Correlation of ES+NQ bands double-counting one idea
- Skip zones that still leak trades into later assemble

---

## Talk-before-check (only if real choice)
- Owner open item: pick boost line 1.0 vs 1.2 **before** later check reads if a real choice is presented — still provisional until David grill; do not forge “locked.”
- DEC-063 bin count / banding scheme — park if disputed; do not invent lock.
- Do **not** invent take locks, Continuation shortlist, or POI list.

---

## Success stamp (CHECK green)
- `checks/stage_07_band_find/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, talk-box outcome if any
- `checks/stage_07_band_find/GREEN.stamp` — unlocks Stage 8 Band sweep WORK
- Attestations: no ORB, no doubles, fleet 4 cells, skip map intact, provisional PF disclosed not locked, DEC-063 note without invented bin lock, holdout virgin, Continuation still OPEN

---

## Fail loop
- FAIL → return to **Stage 6** (`06_BAND_FIND_WORK.md`) only; preserve prior greens unless Role 1 proves earlier identity break.
- Do not skip to Band sweep. Do not start boost/confluence.

### Stage-specific — cross-cell band confluence
- Thin n (~50) on one cell must not alone mint BOOST; require ≥3/4 cells same-sign on that POI×band, else FAIL or INSUFFICIENT.
- Attack any boost stamped from a single thin cell without sibling agreement.

