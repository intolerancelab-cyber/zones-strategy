# Stage 13 — CHECK assault pack (after Confluence table) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 13 bullets. Fail → loop to **Stage 12 Confluence only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**Dual-lamp:** boost search must stay sealed; holy grail = final table grill — do not reopen boost.
**Continuation:** OPEN (catalog minus orb_*).
**Multi-agent:** every check (this one included).
**Compounding champion:** high-% bank risk fit, not vanity PF.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**.
**Cross-cell band confluence (David lock — Band-find labeling, NOT Stage 12):** If a POI×band (e.g. BEFORE) is strongly positive but thin n (~50) on one cell, look at the **SAME POI×SAME band** on the other fleet cells (ES/NQ × 5m/15m). If **≥3 of 4** show same-direction positive effect → BOOST candidate. If fewer than 3 agree → **do not boost from that thin cell alone**. Same idea for SKIP. This is **Band-find labeling confluence** — **SEPARATE** from later boost-count (2/3/4) confluence table. Aligns RESCORE-20 3-of-4 val cells same sign.

---

## Prior WORK context
Stage 12 confluence 2/3/4 on **allowlisted squares only**. Take-table line drawn FOR NOW (take / don’t-take across B×S) using **best boost recipe for that boost count**; cheap combo shapes without new heavy sweeps. Holy grail = final table candidate. Dependence / correlation across boosts must be challenged. Amalgamated multi-boost TP vs best recipe = OPEN later.

**Agents must know:**
- Allowlist only; no re-open of boost search.
- Take rule still OPEN with David — grill table, do not invent.
- Champion for compounding / high-% bank risk, not max PF vanity.
- Checkpoint hooks bank unused champion if dual-champion talk occurred.
- NEW BANDING / deadwood path: do not invent POI keep/cut; cleaned set admitted later.
- Stage 12 = **boost-count** confluence 2/3/4 — SEPARATE from Band-find cross-cell labeling confluence (3-of-4 same POI×band / thin-n gate). Do not conflate or re-litigate 3-of-4 here.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: freeze_admit BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–11 greens including Stage 11 ALLOWLIST_SEALED + DUAL_LAMP
- Stage 10: BXS_TABLE, BEST_RECIPE_BY_B, TAKE_NOTES_OPEN, PROVISIONAL_BOOST_LINES
- Stage 12: `confluence/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `confluence/TAKE_LINE.json`, `confluence/CHEAP_COMBO_PASS.json`, `confluence/HOLY_GRAIL_CANDIDATE.json`, `confluence/ALLOWLIST_USED.json`, `confluence/MANIFEST.json`, `confluence/SMOKE_IDENTITY.json`, `confluence/CHECKPOINT_HOOKS.json`, `confluence/DEPENDENCE_FLAGS.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 13 add:** non-allowlisted squares in holy-grail candidate; boost search reopened; new heavy sweeps run during confluence; amalgamation claimed locked; 1B alone / S≥3 / B<2 taken as locked; holdout used during confluence fill; invented deadwood POI keep/cut list; old wide-map banding claimed current against NEW BANDING stamps; CHECK clicked before all strips green; missing take-line or cheap-combo attestation.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip <0.75; revival at ~0.75; boost lines 1.0|1.2 (not locked — report both, do not invent a lock).
- Cost model present before any PF talk. Holdout last ~20% untouched for take decisions only.
- **Stage 13 add:** ALLOWLIST_USED square ids ⊆ Stage 11 ALLOWLIST_SEALED; TAKE_LINE squares match confluence CELL results; best-recipe-by-B refs resolve to Stage 10 BEST_RECIPE_BY_B; CHEAP_COMBO_PASS shows no_new_heavy_sweeps; cost-applied PF on take vs don’t-take; smoke identity match; workers_used honesty on small allowlist job counts.
- **Dependence audit:** where DEPENDENCE_FLAGS or numbers suggest same underlying signal counted as multiple boosts, demand correlation / ablate evidence — do not accept “3 boosts” on one POI family without challenge.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell; allowlist set-diff; take-line vs scores.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: does the holy-grail **candidate** / take-line fit staking, not max PF vanity?
- **Stage 13 failure modes:**
  - Confluence collapses when one POI family fails live
  - Overlapping ES+NQ signals → oversized risk
  - Holy-grail table unstable under small cost bump
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist,” “take rule locked,” “amalgamation proven.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 13 add:** refute holy-grail as locked take (candidate only until grill+David); refute take rule invented from notes without table confirmation; refute dependence ignored; refute boost reopened; refute non-allowlisted squares; refute amalgamation as production path; refute invented deadwood POI keep/cut; refute ORB/doubles; refute Continuation LOCKED; refute checkpoint unused champion dropped without hook stamp when dual talk occurred.
- Output: REFUTED claims list + what must be re-run in **Stage 12 only** (or Stage 11 if allowlist seal broken; Stage 10 if boost recipes broken — without reopening boost “casually”).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 12; Stage 11 if allowlist identity broken); do not advance; do **not** reopen boost search as a shortcut.
2. WARN from role 3 → talk box only if a real choice exists (dual champions / take-line tighten fork under compounding lens); else stamp WARN and proceed only if David/overseer accepts. Use checkpoint hooks to bank unused champion.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David (take rule, amalgamation, deadwood POI list, 0.75/1.2 final) → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock Stage 14 On/off filters WORK; attest dual-lamp intact; take rule still OPEN unless David explicitly locked (do not forge).

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 13 — cheap kills specific
- Non-allowlisted squares in holy-grail
- 1B alone taken
- S≥3 or B<2 taken
- Dependence ignored (same underlying signal counted as 3 “boosts”)
- Holdout used during confluence fill
- Boost search reopened after confluence
- New heavy sweeps during confluence
- Invented deadwood POI keep/cut list
- Band-find labeling confluence (3-of-4) conflated with boost-count 2/3/4 confluence
- Re-litigating thin-n 3-of-4 Band-find decisions inside Stage 12 stamps

---

## Stage 13 — real-life failure modes
- Confluence collapses when one POI family fails live
- Overlapping ES+NQ signals → oversized risk
- Holy-grail table unstable under small cost bump

---

## Talk-before-check (only if real choice)
- Dual champions on take-line → talk box: compounding / high-% bank risk; **checkpoint + bank unused champion** (hooks only).
- Take-line tighten (e.g. only 4B1S) if weak — real fork; stamp choice; do not invent full take-rule lock.
- Do **not** invent: take rule final, amalgamation vs best-recipe lock, deadwood POI keep/cut, Continuation shortlist, 0.75/1.2 final.

---

## Success stamp (CHECK green)
- `checks/stage_13_confluence/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, dependence audit, talk-box / checkpoint outcome if any
- `checks/stage_13_confluence/GREEN.stamp` — unlocks Stage 14 On/off filters WORK
- `checks/stage_13_confluence/TAKE_LINE_REVIEWED.json` — take / don’t-take accepted or WARN-parked; take_rule_locked=false unless David explicit
- `checks/stage_13_confluence/DUAL_LAMP.json` — boost_search_open=false; holy_grail=final_table_candidate_reviewed
- Attestations: no ORB, no doubles, fleet 4 cells, allowlist-only, no new heavy sweeps, best-recipe-by-B (amalgamation OPEN), dependence challenged, holdout virgin, Continuation still OPEN, deadwood POI list not invented, NEW BANDING posture disclosed, compounding lens applied

---

## Fail loop
- FAIL → return to **Stage 12** (`12_CONFLUENCE_WORK.md`) only; if allowlist seal broken → Stage 11; if boost-alone recipes broken → Stage 10 (re-mark — do not treat confluence as a boost-search reopen).
- Do not skip to On/off filters. Do not invent take locks or deadwood POI lists to force PASS.
