# Stage 3 — CHECK assault pack (after Baseline alone) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 3 bullets. Fail → loop to **Stage 2 Baseline alone only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF LOCKED (David grill 5 Sep):** PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line (unused fork-hook note only). Reason: compounding / fewer loser streaks. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
**Continuation:** PLACEHOLDER (catalog minus orb_* — not operable OPEN; wait David before lock).
**Multi-agent:** every check (this one included).

---

## Prior WORK context
Stage 2 ran **baseline alone** per fleet cell. Expect **mediocre PF (~0.9 / breakeven)** — that is normal; juice comes later (POI / band / boost). Champion talk only if multiple baseline champion **types** appear.

**Agents must know:**
- Cost/session locks from Freeze (Stage 1) stamped; no ORB in intake.
- Entry-method set from STRATEGY INPUT checkbox (Reversal LOCKED 6; Continuation PLACEHOLDER minus orb_* (not operable OPEN)).
- Baseline is alone — no POI/boost yet.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `MANIFEST.json`
- Stage 2: `baseline/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `baseline/MANIFEST.json`, `baseline/SMOKE_IDENTITY.json`
- Optional: `baseline/CHAMPION_TYPES_NOTE.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 3 add:** baseline treated as if POI/boost already ran; Freeze seals skipped; CHECK clicked before all strips green.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF LOCKED (David grill 5 Sep): PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line. *Baseline itself is pre-band; confirm BAND_PF_LOCKS disclosed as LOCKED (not forged alternate).*
- Cost model present before any PF talk. Holdout last ~20% reserved — take not sealed by this stage.
- **Stage 3 add:** mediocre PF (~0.9 / breakeven) is expected — do not FAIL solely for “low” baseline PF if cost-applied and counts reconcile; FAIL if PF talked without cost or workers_used inflated.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs (N/A yet — flag if POI leaked in), capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: does any baseline champion **type** fit staking, not generic PF alone?
- **Stage 3 failure modes:**
  - Session filter wrong (RTH vs overnight mix)
  - Tick/ATR units wrong → baseline silent-zero or absurd trade count
  - Champion picked for vanity PF instead of compounding fit
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist”, “baseline edge.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 3 add:** refute any claim that baseline alone already proves edge; refute Continuation LOCKED; refute ORB/doubles revival; refute POI/band work done here.
- Output: REFUTED claims list + what must be re-run in **Stage 2 only** (or Stage 1 if Freeze identity wrong).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 2; Stage 1 only if freeze identity broken); do not advance.
2. WARN from role 3 → talk box + champion checkpoint/bank only if a real choice exists (e.g. multiple baseline champion types); else stamp WARN and proceed only if David/overseer accepts.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 4 POI map WORK.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 3 — cheap kills specific
- Baseline PF talked up as “edge” already
- Cost model missing before PF
- Wrong entry set vs checkbox
- One-cell smoke skipped before fleet
- workers_used inflated on tiny job count

---

## Stage 3 — real-life failure modes
- Session filter wrong (RTH vs overnight mix)
- Tick/ATR units wrong → baseline silent-zero or absurd trade count
- Champion picked for vanity PF instead of compounding fit

---

## Talk-before-check (only if real choice)
- If `CHAMPION_TYPES_NOTE` lists **multiple** baseline champion types → **talk box + champion checkpoint**: compounding / high-% bank risk lens (not max PF vanity). **Bank unused champion** via checkpoint hook for later resume. Fork = hooks only (no fork UX).
- Stamp `checks/stage_03_baseline/CHECKPOINT_HOOKS.json` when dual/multi types talked (fork stamp + banked unused champion id/path).
- If single type or none → no forced talk; proceed to verdict.
- Do **not** invent take locks, POI list, 0.75/1.2 final, or Continuation shortlist (Continuation = PLACEHOLDER).

---

## Success stamp (CHECK green)
- `checks/stage_03_baseline/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, talk-box / checkpoint outcome if any
- `checks/stage_03_baseline/GREEN.stamp` — unlocks Stage 4 POI map WORK
- `checks/stage_03_baseline/CHECKPOINT_HOOKS.json` — if multi champion types: fork stamp + banked unused champion (hooks only)
- Attestations: no ORB, no doubles, fleet 4 cells, cost-before-PF, mediocre-PF-expected acknowledged, walk-forward chunk held back while picking (Q5), Continuation still PLACEHOLDER

---

## Fail loop
- FAIL → return to **Stage 2** (`02_BASELINE_WORK.md`) only; preserve Freeze seals unless Role 1 proves Freeze identity break → then Stage 1 only.
- Do not skip to POI map. Do not start band/boost.
