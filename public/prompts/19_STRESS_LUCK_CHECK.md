# Stage 19 — CHECK assault pack (after Stress + luck) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 19 bullets. Fail → loop to **Stage 18 Stress + luck only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green **and** both tracks complete.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**Dual-lamp:** boost search must stay sealed.
**Continuation:** PLACEHOLDER (catalog minus orb_* — not operable OPEN; wait David before lock).
**Multi-agent:** every check (this one included).
**Compounding champion:** high-% bank risk fit, not vanity PF.
**Same late area, two questions:** Stress = WF/capacity/ugly; Luck = Monte Carlo — both required.
**NEW BANDING / on/off / deadwood:** do not invent lists; do not conflate Band-find cross-cell (3-of-4) with Stage-12 boost-count confluence (2/3/4 B×S).

---

## Prior WORK context
Stage 18 Stress = walk-forward / capacity / ugly regimes; Luck = Monte Carlo. Same late area, two questions. Both MUST-SHARD tracks must be stamped.

**Agents must know:**
- Stress and luck both required; one does not replace the other.
- Holdout discipline; multiplicity control still on.
- Seeds must be pre-declared and stamped; ugly regimes must not be cherry-picked away.
- Capacity ignored while PF looks fine = FAIL/WARN.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: freeze_admit BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–17 greens including Stage 17 BOOK_SEAL_REVIEWED + assemble BOOK
- Stage 18: `stress_luck/STRESS/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `stress_luck/STRESS/BOOK.json`, `stress_luck/LUCK/CELL/{...}.json`, `stress_luck/LUCK/BOOK.json`, `stress_luck/LUCK/SEEDS.json`, `stress_luck/MANIFEST.json` (both_tracks=true), `stress_luck/SMOKE_IDENTITY.json`, `stress_luck/MULTIPLICITY_NOTE.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable; both tracks complete

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 19 add:** MC only with no walk-forward (or vice versa); capacity ignored; ugly regime cherry-picked away; seed not stamped / non-reproducible luck; seed shopping after results; silent assemble retune from stress/luck; boost search reopened; CHECK clicked before strips green or before both tracks complete; workers_used inflated.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip <0.75; revival at ~0.75; keep lean PF > 1.2 (grill at launch; report 1.0 as sensitivity / fork-hook only — do not invent a lock).
- Cost model present before any PF talk. Holdout last ~20% reserved — take not sealed by this stage.
- **Stage 19 add:** MANIFEST both_tracks=true; SEEDS.json hash pinned before LUCK CELL timestamps; WF fold counts reconcile; capacity scenario tables present; ugly regime list includes hurtful cases (anti-cherry-pick); MC distribution stats recompute from seed+assemble; left-tail under compounding stakes reported; smoke identity match; multiplicity caps respected.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell; stress vs luck coverage matrix.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: does left-tail under stress+luck still fit staking?
- **Stage 19 failure modes:**
  - Passes MC, dies on first FOMC week
  - Capacity fantasy (too many concurrent ES+NQ)
  - Luck distribution hides left-tail ruin under compounding stakes
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “stress passed,” “luck safe,” “capacity fine,” “ugly covered,” “reproducible.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 19 add:** refute MC-replaces-stress; refute unstamped seeds; refute cherry-picked ugly; refute capacity ignored; refute silent retune; refute ORB/doubles; refute live-deploy; refute invented filter/deadwood/take locks; refute Continuation LOCKED.
- Output: REFUTED claims list + what must be re-run in **Stage 18 only** (or Stage 16 if assemble identity broken).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop Stage 18 only; do not advance; do **not** drop a track.
2. WARN from role 3 → talk box only if real stake/capacity fork under compounding lens; else stamp WARN and proceed only if David/overseer accepts.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 20 Final multi-agent assault WORK.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 19 — cheap kills specific
- MC only, no walk-forward (or vice versa)
- Capacity ignored while PF looks fine
- Ugly regime cherry-picked away
- Seed not stamped / non-reproducible luck run
- Seed shopping after seeing results
- Silent assemble retune from stress/luck
- Both-tracks flag false while claiming complete

---

## Stage 19 — real-life failure modes
- Passes MC, dies on first FOMC week
- Capacity fantasy (too many concurrent ES+NQ)
- Luck distribution hides left-tail ruin under compounding stakes

---

## Talk-before-check (only if real choice)
- Stake scenario / capacity cap fork under compounding lens → talk; checkpoint hooks if dual path.
- Do **not** invent: drop Stress or Luck; filter list; deadwood POI keep/cut; take locks; live deploy.

---

## Success stamp (CHECK green)
- `checks/stage_19_stress_luck/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, both-tracks coverage, left-tail tables, talk-box if any
- `checks/stage_19_stress_luck/GREEN.stamp` — unlocks Stage 20 Final multi-agent assault WORK
- `checks/stage_19_stress_luck/BOTH_TRACKS.json` — stress_complete=true; luck_complete=true; seeds_pinned=true; cherry_pick=false; capacity_reviewed=true
- Attestations: no ORB, no doubles, fleet 4 cells, dual-lamp intact, holdout discipline, compounding lens, filter_list_invented=false, deadwood_poi_list not invented, Continuation still PLACEHOLDER

---

## Fail loop
- FAIL → return to **Stage 18** (`18_STRESS_LUCK_WORK.md`) only; if assemble book broken → Stage 16.
- Do not skip to Final assault. Do not drop a track or invent seeds post-hoc to force PASS.
