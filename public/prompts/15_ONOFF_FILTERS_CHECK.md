# Stage 15 — CHECK assault pack (after On/off filters) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 15 bullets. Fail → loop to **Stage 14 On/off filters only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**Dual-lamp:** boost search must stay sealed.
**Continuation:** PLACEHOLDER (catalog minus orb_* — not operable OPEN; wait David before lock).
**Multi-agent:** every check (this one included).
**Compounding champion:** high-% bank risk fit, not vanity PF.
**On/off filters:** binary no-line states; PARKED detail — ask David later; **do not invent filter list**.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level → sweeps → REMOVE DEADWOOD POIs. Do not invent keep/cut list.
**Band-find cross-cell (3-of-4 same POI×band)** — NOT Stage-12 boost-count confluence: ≥3 of 4 same POI×band / same sign for thin-n; SEPARATE from Stage 12 boost-count 2/3/4. Do not conflate.

---

## Prior WORK context
Stage 14 on/off filters — binary no-line states (trend/range day, gamma env, calendar, half-days, etc.) affecting the **whole table**, not a single band. Detail parked — ask David / other session; do not invent filter list. WORK may be **PARKED** (scaffold only) or **APPLIED** (David-supplied list).

**Agents must know:**
- Filters are binary parked states; no fake continuous lines.
- Purpose = table-wide effect, not band surgery.
- Invented filter list stamped as David-locked = FAIL.
- Band-style sweep applied to on/off = FAIL.
- Dual-lamp / take-line from Stage 13 must remain intact.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: freeze_admit BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–13 greens including Stage 13 TAKE_LINE_REVIEWED + DUAL_LAMP
- Stage 14: `onoff/MANIFEST.json` (mode PARKED|APPLIED), and either `onoff/PARKED.json` **or** `onoff/FILTER_LIST.json` + `onoff/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json` + `onoff/TABLE_WIDE_EFFECT.json` + `onoff/SKIP_OMISSION_UNDER_FILTERS.json` + `onoff/SMOKE_IDENTITY.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable
- Attestation required: `filter_list_invented=false`; table-wide scope (not band surgery)

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 15 add:** invented filter list stamped as David-locked; PARKED mode showing `filter_applied` chunks / fake ON-OFF deltas; band-style sweep of on/off; filters silently re-enabling skip-zone trades; ORB/session junk reintroduced as “calendar filter”; continuous filter “lines” instead of binary; boost search reopened; CHECK clicked before all strips green; workers_used inflated on park (0 filters).
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip <0.75; revival at ~0.75; keep lean PF > 1.2 (grill at launch; report 1.0 as sensitivity / fork-hook only — do not invent a lock).
- Cost model present before any PF talk. Holdout last ~20% reserved — take not sealed by this stage.
- **Stage 15 add:**
  - PARKED: MANIFEST.mode=PARKED; PARKED.json ask_David_later=true; no FILTER_LIST claiming David lock; workers_used honest for park; no fake table deltas.
  - APPLIED: FILTER_LIST source_session + list_hash present; CELL ON vs OFF deltas reconcile to TABLE_WIDE_EFFECT; cost-applied; SKIP_OMISSION_UNDER_FILTERS proves Stage 6 SKIP_MAP still omitted; smoke identity match.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell; park-vs-apply honesty.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: do filter ON/OFF states leave a tradeable Monday book?
- **Stage 15 failure modes:**
  - Filter that only works in-sample (regime label leakage)
  - Half-day / holiday mis-tagged → silent zero or blow-up day
  - Gamma/env proxy unavailable live → strategy undefined
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list. PARKED mode → WARN/park OK if honesty holds (not FAIL for absence of list).

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “filter locked,” “skip zone,” “calendar complete.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 15 add:** refute invented filter list as David-locked; refute band surgery disguised as on/off; refute skip-zone re-enable; refute ORB revival via calendar; refute continuous filter lines; refute boost reopened; refute park painted as apply; refute deadwood POI keep/cut invented here.
- Output: REFUTED claims list + what must be re-run in **Stage 14 only**.

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop Stage 14 only; do not advance; do **not** invent filters to force PASS.
2. WARN from role 3 → talk box only if a real choice exists (e.g. David arrives mid-stage with a list fork); else stamp WARN (esp. PARKED / live-proxy undefined) and proceed only if David/overseer accepts.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David (filter list) → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 16 Assemble + hold/flat WORK; attest filter_list_invented=false; dual-lamp intact.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 15 — cheap kills specific
- Invented filter list stamped as David-locked
- Band-style sweep applied to on/off
- Filters that silently re-enable skip-zone trades
- ORB/session junk reintroduced as “calendar filter”
- PARKED mode with fake applied deltas / inflated workers_used
- Continuous filter lines instead of binary states
- Boost search reopened during on/off

---

## Stage 15 — real-life failure modes
- Filter that only works in-sample (regime label leakage)
- Half-day / holiday mis-tagged → silent zero or blow-up day
- Gamma/env proxy unavailable live → strategy undefined

---

## Talk-before-check (only if real choice)
- David supplies filter list mid-sequence → real fork: PARK vs APPLY; stamp choice; do not invent extras.
- Do **not** invent: filter list, take rule final, deadwood POI keep/cut, Continuation shortlist, 0.75/1.2 final.

---

## Success stamp (CHECK green)
- `checks/stage_15_onoff/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, park-vs-apply honesty, talk-box if any
- `checks/stage_15_onoff/GREEN.stamp` — unlocks Stage 16 Assemble + hold/flat WORK
- `checks/stage_15_onoff/FILTER_POSTURE.json` — mode=PARKED|APPLIED; filter_list_invented=false; table_wide=true; band_surgery=false
- Attestations: no ORB, no doubles, fleet 4 cells, skip omission under filters (or park), dual-lamp intact, holdout virgin, Continuation still PLACEHOLDER, deadwood POI list not invented, NEW BANDING posture disclosed

---

## Fail loop
- FAIL → return to **Stage 14** (`14_ONOFF_FILTERS_WORK.md`) only; preserve earlier greens.
- Do not skip to Assemble. Do not invent filter lists or take locks to force PASS.
