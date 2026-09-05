# Stage 7 — CHECK assault pack (after Band find) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 6→7 bullets. Fail → loop to **Stage 6 Band find only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF LOCKED (David grill 5 Sep):** PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line (unused fork-hook note only). Reason: compounding / fewer loser streaks. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
**Continuation:** PLACEHOLDER (catalog minus orb_* — not operable OPEN; wait David before lock).
**Multi-agent:** every check (this one included).

---

## Prior WORK context
Stage 6 found bands where baseline helped vs hurt under **LOCKED** ladder (David grill 5 Sep): PF < 0.75 → no sweep / SKIP; PF ≥ 0.75 → sweep (must not worsen); KEEP/BOOST label only if PF > 1.2; under 1.2 after sweep → SKIP for confluence/table; no 1.0 keep line. DEC-063 notes OK — bin count **not** invented-locked.

**Agents must know:**
- LOCKED ladder: PF < 0.75 → no sweep / SKIP; ≥ 0.75 → sweep (must not worsen); KEEP/BOOST only if PF > 1.2; under 1.2 after sweep → SKIP for confluence/table; no 1.0 keep line. Do **not** dual-label SWEEP_CANDIDATE + DEAD_ZONE.
- **Band-find cross-cell (3-of-4 same POI×band)** must be stamped (CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT) — SEPARATE from Stage-12 boost-count confluence.
- NEW BANDING / deadwood POI keep/cut list not invented.
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
- Stage 6: `band_find/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `band_find/SKIP_MAP/{cell}.json`, `band_find/REVIVAL_MAP/{cell}.json`, `band_find/FAILED_REVIVAL_OR_BELOW_KEEP/{cell}.json`, `band_find/CROSS_CELL_3OF4/{cell}.json`, `band_find/CROSS_CELL_3OF4/BOOK.json`, `band_find/MANIFEST.json`, `band_find/SMOKE_IDENTITY.json`, `band_find/PROVISIONAL_PF_DISCLOSURE.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 7 add:** sweeping a PF < 0.75 band; re-provisionalizing locked Band PF / keep lines; skip/KEEP labels swapped across cells; missing SKIP_MAP / REVIVAL_MAP / CROSS_CELL_3OF4; thin-n BOOST without 3-of-4; naked “BOOST candidate” label; dual-label SWEEP_CANDIDATE+DEAD_ZONE; invented deadwood POI keep/cut; Stage 8 work done early; CHECK clicked before all strips green; invented bin-count lock from DEC-063 notes.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades/bands, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF LOCKED (David grill 5 Sep): PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line.
- Cost model present before any PF talk. Holdout last ~20% reserved — take not sealed by this stage.
- **Stage 7 add:** every SKIP_MAP id has PF < 0.75 (cost-applied); every SWEEP_GATE/REVIVAL_MAP id has PF ≥ 0.75; post-sweep under 1.2 uses FAILED_REVIVAL/BELOW_KEEP / SKIP-for-table — not dual SWEEP_CANDIDATE+DEAD_ZONE; every CROSS_CELL_BOOST_CANDIDATE has ≥3/4 same-sign readable cells; INSUFFICIENT when <3; bar_hash/poi_map_hash match prior stamps; no inflated workers_used.
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
- **Stage 7 add:** refute re-provisionalizing Band PF locks; refute Continuation LOCKED; refute ORB/doubles; refute Stage 8 KEEP recipes already chosen; refute band vs ATR/tick smell ignored.
- Output: REFUTED claims list + what must be re-run in **Stage 6 only** (or earlier if identity broken).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 6; earlier only if prior identity broken); do not advance.
2. WARN from role 3 → talk box only if a real choice exists; else stamp WARN and proceed only if David/overseer accepts. Band PF locks already LOCKED — do not invent alternate lines. Q5 LOCKED; Q6 FOR NOW.
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
- Sweeping a PF < 0.75 band at all
- Re-provisionalizing locks; treating 1.0 as a keep line
- Band vs ATR/tick smell ignored
- Skip/KEEP labels swapped across cells
- Missing CROSS_CELL_3OF4 stamps / BOOK
- Thin-n single-cell mint of CROSS_CELL_BOOST_CANDIDATE without ≥3/4 same-sign
- Naked “BOOST candidate” label (must be CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT)
- Dual-label SWEEP_CANDIDATE + DEAD_ZONE on the same band
- Invented deadwood POI keep/cut list

---

## Stage 7 — real-life failure modes
- Band edges that only work on one regime (thin open / news)
- Correlation of ES+NQ bands double-counting one idea
- Skip zones that still leak trades into later assemble

---

## Talk-before-check (only if real choice)
- Boost keep line LOCKED at PF > 1.2 — 1.0 is unused fork-hook note only; do not present 1.0 vs 1.2 as equal pick.
- DEC-063 bin count / banding scheme — park if disputed; do not invent lock.
- Do **not** invent take locks, Continuation shortlist, or POI list.

---

## Success stamp (CHECK green)
- `checks/stage_07_band_find/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, talk-box outcome if any
- `checks/stage_07_band_find/GREEN.stamp` — unlocks Stage 8 Band sweep WORK
- Attestations: no ORB, no doubles, fleet 4 cells, SKIP/REVIVAL/FAILED_REVIVAL maps intact, CROSS_CELL_3OF4 stamped, BAND_PF_LOCKS disclosed as LOCKED, NEW BANDING / deadwood-not-invented, DEC-063 note without invented bin lock, walk-forward chunk held back while picking (Q5), Continuation still PLACEHOLDER

---

## Fail loop
- FAIL → return to **Stage 6** (`06_BAND_FIND_WORK.md`) only; preserve prior greens unless Role 1 proves earlier identity break.
- Do not skip to Band sweep. Do not start boost / Stage-12 boost-count confluence.

### Stage-specific — Band-find cross-cell (3-of-4 same POI×band)
- Thin n (~50) on one cell must not alone mint CROSS_CELL_BOOST_CANDIDATE; require ≥3/4 cells same-sign on that POI×band, else FAIL or stamp **INSUFFICIENT**.
- Attack any boost stamped from a single thin cell without sibling agreement.
- Attack missing CROSS_CELL_3OF4 WORK stamps (must be in Stage 6 body, not appendix-only).
- SEPARATE from Stage-12 boost-count confluence (2/3/4 B×S) — do not conflate.

