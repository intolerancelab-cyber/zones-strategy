# Stage 5 — CHECK assault pack (after POI map) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 5 bullets. Fail → loop to **Stage 4 POI map only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**Continuation:** OPEN (catalog minus orb_*).
**Multi-agent:** every check (this one included).

---

## Prior WORK context
Stage 4 built **POI map** per fleet cell. Value areas (D/W/M — daily/weekly/monthly) were calculated then treated as **POIs** — not a forever-separate VA stage. Per asset×TF. Hash-first; Silent Zero fail-closed.

**Agents must know:**
- Exact POI list may still be OPEN (David incoming) — do not invent missing names; confirm `poi_list_state`.
- Cache/hash-first: bars+POIs reused; never re-walk for prompt tweak.
- Weekly/monthly are value areas, not timeframes (fleet remains 5m+15m).
- No ORB levels; no doubles/pairs residue.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `MANIFEST.json`
- Stage 2: `baseline/CELL/{cell}.json`, `baseline/MANIFEST.json` (bar hashes)
- Stage 3: `checks/stage_03_baseline/GREEN.stamp`
- Stage 4: `poi_map/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `poi_map/MANIFEST.json`, `poi_map/SMOKE_IDENTITY.json`, `poi_map/SILENT_ZERO_GATE.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 5 add:** empty map stamped green; value areas double-counted as both “VA stage” and POI; ORB levels in map; map on wrong TF/asset folder; look-ahead placement; invented POI names while `poi_list_state=OPEN`; CHECK clicked before all strips green.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF (if any map-adjacent stats claimed), n levels/POIs, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip <0.75; revival at ~0.75; boost lines 1.0|1.2 (not locked — report both, do not invent a lock). *POI map is pre-band; confirm provisional note not forged as final and not used to skip/sweep here.*
- Cost model present from Freeze. Holdout last ~20% untouched for take decisions only.
- **Stage 5 add:** per-cell non-empty proof vs SILENT_ZERO_GATE; bar_hash ↔ poi_map_hash consistency; D/W/M value-area POI counts present; no inflated workers_used on tiny smoke.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, **look-ahead on POIs**, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: map quality must not invent edge; champion lens waits for later stages — flag if map claims are sold as edge.
- **Stage 5 failure modes:**
  - POI levels from wrong session calendar
  - Stale cache after roster change (hash not invalidated)
  - ES vs NQ POI mix-up
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist”, “complete POI universe,” “VA stage separate forever.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 5 add:** refute ORB/doubles revival via “levels”; refute invented David-locked POI list; refute band/sweep already done; refute empty-map green; refute weekly/monthly as fleet TFs.
- Output: REFUTED claims list + what must be re-run in **Stage 4 only** (or earlier if Freeze/Baseline identity wrong).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 4; earlier only if prior identity broken); do not advance.
2. WARN from role 3 → talk box only if a real choice exists; else stamp WARN and proceed only if David/overseer accepts. POI list OPEN is **not** a forced invent — park.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 6 Band find WORK.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 5 — cheap kills specific
- Look-ahead into future bars when placing POIs
- Value areas double-counted as both “VA stage” and POI
- ORB levels sneaking into map
- Map built on wrong TF or wrong asset folder
- Empty map stamped green

---

## Stage 5 — real-life failure modes
- POI levels from wrong session calendar
- Stale cache after roster change (hash not invalidated)
- ES vs NQ POI mix-up

---

## Talk-before-check (only if real choice)
- Exact POI list still OPEN → **park / ask David**; do not invent names in talk box to “finish” the map.
- No forced champion talk at this stage (pre-band).
- Do **not** invent take locks, 0.75/1.2 final, or Continuation shortlist.

---

## Success stamp (CHECK green)
- `checks/stage_05_poi_map/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths
- `checks/stage_05_poi_map/GREEN.stamp` — unlocks Stage 6 Band find WORK
- Attestations: no ORB, no doubles, fleet 4 cells, Silent Zero gate passed, VA=POIs D/W/M, poi_list_state disclosed, holdout virgin, Continuation still OPEN

---

## Fail loop
- FAIL → return to **Stage 4** (`04_POI_MAP_WORK.md`) only; preserve Freeze/Baseline/Stage 3 unless Role 1 proves earlier identity break.
- Do not skip to Band find. Do not start sweep/boost.
