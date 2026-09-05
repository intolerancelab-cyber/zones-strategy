# Stage 13 — CHECK assault pack (after Stage-12 boost-count confluence) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 13 bullets. Fail → loop to **Stage 12 Stage-12 boost-count confluence only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF LOCKED (David grill 5 Sep):** PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line (unused fork-hook note only). Reason: compounding / fewer loser streaks. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
**Dual-lamp:** boost-family search must stay paused; Stage 13 CHECK may seal `boost_search_closed` after grill; holy grail = final table grill — do not reopen boost. Draw-a-line take-table FOR NOW + **Q4 geometry LOCKED** (S≥B / B−S==1 hard no-take; B−S≥2 sweep+PF>1.2). **Q5 walk-forward LOCKED** (WF score stamp required; weak blocks seal). **Q6 FOR NOW** (borrow best single; score together PF>1.2; no joint TP-SL sweep; OPEN to revise).
**Continuation:** PLACEHOLDER (catalog minus orb_* — not operable OPEN; wait David before lock).
**Multi-agent:** every check (this one included).
**Q4 take-table geometry LOCKED (David grill 5 Sep — plain):**
- If **skips ≥ boosts** → no sweep, don’t take.
- If **boosts − skips == 1** (only one more boost, e.g. 2B1S, 3B2S) → don’t take (**hard**); don’t hunt that cell as a take.
- If **boosts − skips ≥ 2** (e.g. 3B1S, 4B2S) → sweep each run; draw take line where full-session PF > 1.2.
- Easy fat shapes (high B, 0S) still take without heavy sweep via best high-profit boost recipe.
**Q5 walk-forward LOCKED** + **Q6 alone-vs-together FOR NOW** — see `DAVID_GRILL_LOCKS_2026-09-05.md`. Do not invent permanent combo-sweep locks.
**Compounding champion:** high-% bank risk fit, not vanity PF.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**.
**Band-find cross-cell (3-of-4 same POI×band)** — NOT Stage-12 boost-count confluence: If a POI×band (e.g. BEFORE) is strongly positive but thin n (~50) on one cell, look at the **SAME POI×SAME band** on the other fleet cells (ES/NQ × 5m/15m). If **≥3 of 4** show same-direction positive effect → **CROSS_CELL_BOOST_CANDIDATE**. If fewer than 3 agree → stamp **INSUFFICIENT** — **do not boost from that thin cell alone**. Same idea for SKIP. This is **Band-find cross-cell (3-of-4 same POI×band)** — **SEPARATE** from **Stage-12 boost-count confluence (2/3/4 B×S)**. Aligns RESCORE-20 3-of-4 val cells same sign.

---

## Prior WORK context
Stage 12 **Stage-12 boost-count confluence (2/3/4 B×S)** on **allowlisted squares only**. **Draw-a-line take-table FOR NOW** — recalc every run; cut full-session PF > 1.2; **Q4 geometry LOCKED**; best single recipe borrowed for multi-B (**Q6 FOR NOW**); easy fat high-B 0S light-take; cheap combo / small bottom-end without joint TP-SL sweeps; **5B3S = PROBE_ONLY**. Holy grail = final table candidate. Dependence must be challenged. **Q5 walk-forward score required.** Q6 OPEN to revise.

**Agents must know:**
- Allowlist only; no re-open of boost-family search.
- Operating rule = draw-a-line take-table FOR NOW + Q4 + Q5 LOCKED + Q6 FOR NOW; grill dependence / never-1B WARN where Q4 doesn’t hard-block; require WF score stamp; weak WF → FAIL seal; together shapes use borrowed single recipe.
- **never-1B:** Stage 13 CHECK = **WARN not FAIL** until David locks.
- Champion for compounding / high-% bank risk, not max PF vanity.
- Checkpoint hooks bank unused champion if dual-champion talk occurred.
- NEW BANDING / deadwood path: do not invent POI keep/cut; cleaned set admitted later.
- Stage 12 = **Stage-12 boost-count confluence (2/3/4 B×S)** — SEPARATE from **Band-find cross-cell (3-of-4 same POI×band)**. Do not conflate or re-litigate 3-of-4 here.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: freeze_admit BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–11 greens including Stage 11 ALLOWLIST_SEALED + DUAL_LAMP
- Stage 10: BXS_TABLE, BEST_RECIPE_BY_B, TAKE_NOTES_OPEN, PROVISIONAL_BOOST_LINES
- Stage 12: `confluence/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `confluence/TAKE_LINE.json`, `confluence/WALK_FORWARD_SCORE.json`, `confluence/CHEAP_COMBO_PASS.json`, `confluence/HOLY_GRAIL_CANDIDATE.json`, `confluence/ALLOWLIST_USED.json`, `confluence/MANIFEST.json`, `confluence/SMOKE_IDENTITY.json`, `confluence/CHECKPOINT_HOOKS.json`, `confluence/DEPENDENCE_FLAGS.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 13 add:** non-allowlisted squares in holy-grail candidate; boost search reopened; new heavy sweeps during Stage 12; amalgamation claimed locked; Q4-blocked squares (S≥B or B−S==1) taken/hunted; never-1B treated as FAIL instead of WARN where Q4 doesn’t hard-block; 5B3S promoted beyond PROBE_ONLY; walk-forward chunk burned as fill fuel; take sealed without WALK_FORWARD_SCORE; weak WF ignored; invented deadwood POI keep/cut list; old wide-map banding claimed current against NEW BANDING stamps; CHECK clicked before all strips green; missing take-line or cheap-combo attestation; Q4 geometry ignored; joint multi-B TP-SL required as if Q6 permanent; Band PF / Q5 re-provisionalized.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF LOCKED (David grill 5 Sep): PF < 0.75 = do not sweep at all; PF ≥ 0.75 = sweep (revival/fix try; must not worsen vs pre-sweep); BOOST/KEEP label only if PF > 1.2; under 1.2 after sweep = SKIP for confluence/table. No 1.0 keep line.
- Cost model present before any PF talk. **Q5:** WALK_FORWARD_SCORE present; weak score → FAIL seal / move-forward (real bearing).
- **Stage 13 add:** ALLOWLIST_USED square ids ⊆ Stage 11 ALLOWLIST_SEALED; TAKE_LINE squares match confluence CELL results; best-recipe-by-B refs resolve to Stage 10 BEST_RECIPE_BY_B; CHEAP_COMBO_PASS shows no joint TP-SL sweeps; Q6 borrow-single refs resolve; together PF > 1.2 on take shapes; WALK_FORWARD_SCORE present; cost-applied PF on take vs don’t-take; smoke identity match; workers_used honesty on small allowlist job counts.
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
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist,” “take rule locked,” “joint multi-B TP-SL required,” “walk-forward optional.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 13 add:** refute holy-grail as locked take (candidate only until grill+David); refute take rule invented from notes without table confirmation; refute dependence ignored; refute boost reopened; refute non-allowlisted squares; refute requiring full joint multi-B TP-SL for now (Q6 FOR NOW = borrow single); refute take seal without WF stamp; refute invented deadwood POI keep/cut; refute ORB/doubles; refute Continuation LOCKED; refute checkpoint unused champion dropped without hook stamp when dual talk occurred.
- Output: REFUTED claims list + what must be re-run in **Stage 12 only** (or Stage 11 if allowlist seal broken; Stage 10 if boost recipes broken — without reopening boost “casually”).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 12; Stage 11 if allowlist identity broken); do not advance; do **not** reopen boost search as a shortcut.
2. WARN from role 3 → talk box only if a real choice exists (dual champions / take-line tighten fork under compounding lens); else stamp WARN and proceed only if David/overseer accepts. Use checkpoint hooks to bank unused champion.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David (permanent Q6 combo-sweep revise, deadwood POI list) → park, do not invent. Band PF + Q4 + Q5 LOCKED; Q6 FOR NOW.
4. All four PASS (or WARN accepted, including never-1B WARN where Q4 doesn’t hard-block) → stamp CHECK green; unlock Stage 14; attest dual-lamp; seal `boost_search_closed=true` only here; take-table + Q4 geometry + Q5 WF score reviewed; Q6 FOR NOW borrow-single attested; OPEN to revise noted.

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
- **1B alone on take-line → WARN (not FAIL) until David locks never-1B**
- S≥3 or B<2 taken as **locked** geometry without David (WARN/park; do not invent FAIL lock) — **5B3S must stay PROBE_ONLY**
- Dependence ignored (same underlying signal counted as 3 “boosts”)
- Walk-forward chunk burned during Stage-12 fill; take sealed without WALK_FORWARD_SCORE; weak WF ignored
- Requiring full joint multi-B TP-SL sweep before take (contradicts Q6 FOR NOW)
- Boost-family search reopened after Stage 12
- New heavy sweeps during Stage 12
- Invented deadwood POI keep/cut list
- Band-find cross-cell (3-of-4) conflated with Stage-12 boost-count confluence (2/3/4 B×S)
- Re-litigating thin-n 3-of-4 Band-find decisions inside Stage 12 stamps
- Q4 geometry ignored (hunting S≥B or B−S==1 as takes)

---

## Stage 13 — real-life failure modes
- Confluence collapses when one POI family fails live
- Overlapping ES+NQ signals → oversized risk
- Holy-grail table unstable under small cost bump

---

## Talk-before-check (only if real choice)
- Dual champions on take-line → talk box: compounding / high-% bank risk; **checkpoint + bank unused champion** (hooks only).
- Take-line tighten (e.g. only 4B1S) if weak — real fork; stamp choice; do not invent full take-rule lock.
- Do **not** invent: permanent Q6 combo-sweep lock, deadwood POI keep/cut, Continuation shortlist. Band PF + Q4 + Q5 LOCKED; Q6 FOR NOW.

---

## Success stamp (CHECK green)
- `checks/stage_13_confluence/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, dependence audit, talk-box / checkpoint outcome if any
- `checks/stage_13_confluence/GREEN.stamp` — unlocks Stage 14 On/off filters WORK
- `checks/stage_13_confluence/TAKE_LINE_REVIEWED.json` — draw-a-line FOR NOW + Q4 geometry verified; cut full-session PF > 1.2; never_1B_policy=`WARN_UNTIL_DAVID_LOCK`; q5=`WALK_FORWARD_LOCKED`; q6=`FOR_NOW_BORROW_SINGLE_OPEN_TO_REVISE`
- `checks/stage_13_confluence/WALK_FORWARD_REVIEWED.json` — WF score stamp verified; weak_blocks_seal=true
- `checks/stage_13_confluence/DUAL_LAMP.json` — boost_search_closed=true (sealed here); holy_grail=final_table_candidate_reviewed; table_ready_for_take=reviewed_not_live
- Attestations: no ORB, no doubles, fleet 4 cells, allowlist-only, no joint TP-SL sweeps, Q6 borrow-single + together PF, WALK_FORWARD_SCORE verified (weak blocks), 5B3S PROBE_ONLY if present, dependence challenged, Continuation still PLACEHOLDER, deadwood POI list not invented, NEW BANDING posture disclosed, compounding lens applied, never-1B WARN-not-FAIL until David, Q6 OPEN to revise noted

---

## Fail loop
- FAIL → return to **Stage 12** (`12_CONFLUENCE_WORK.md`) only; if allowlist seal broken → Stage 11; if boost-alone recipes broken → Stage 10 (re-mark — do not treat confluence as a boost-search reopen).
- Do not skip to On/off filters. Do not invent take locks or deadwood POI lists to force PASS.
