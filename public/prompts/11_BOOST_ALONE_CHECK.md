# Stage 11 — CHECK assault pack (after Boost-alone) (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CHECK_ASSAULT_OUTLINE.md, CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Rule:** Multi-agent assault with the four shared roles + Stage 11 bullets. Fail → loop to **Stage 10 Boost-alone only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m).
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**Dual-lamp:** this CHECK gates confluence unlock; confluence must not re-open boost search.
**Continuation:** OPEN (catalog minus orb_*).
**Multi-agent:** every check (this one included).
**Compounding champion:** high-% bank risk fit, not vanity PF.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**.
**Cross-cell band confluence (David lock — Band-find labeling, NOT Stage 12):** If a POI×band (e.g. BEFORE) is strongly positive but thin n (~50) on one cell, look at the **SAME POI×SAME band** on the other fleet cells (ES/NQ × 5m/15m). If **≥3 of 4** show same-direction positive effect → BOOST candidate. If fewer than 3 agree → **do not boost from that thin cell alone**. Same idea for SKIP. This is **Band-find labeling confluence** — **SEPARATE** from later boost-count (2/3/4) confluence table. Aligns RESCORE-20 3-of-4 val cells same sign.

---

## Prior WORK context
Stage 10 boost-alone → **mark B×S table**. Each boost family run alone; best recipe per boost-count stamped; allowlist **candidates** provisional. This CHECK applies **cost shock + trade-count floor** before confluence unlock.

**Agents must know:**
- B×S table marked; cost shock applied; trade-count floor enforced.
- Take notes OPEN: B−S ≥ 2, B in 2..7; never B<2; never S≥3; lean 2B alone or 3B+1S; never 1B alone — confirm on table, do not invent lock.
- Research-grade boost recipe notes exist elsewhere; do not live-deploy language.
- Dual-lamp: boost-alone then confluence; confluence must not re-open boost search.
- Band-find cross-cell labeling confluence (3-of-4 same POI×band / same sign; thin-n gate) is SEPARATE from Stage 12 boost-count confluence — do not conflate; thin single-cell boosts that failed 3-of-4 should not appear as keep.
- Owner picks boost keep line 1.0 vs 1.2 before check read (RESCORE-20 owner_open_items) — still provisional / not locked.

---

## Stamped inputs agents must receive
If any missing → FAIL (mistake hunter); do not invent.
- Stage 1: `freeze_admit/BOOK_SEAL.json`, `COST_MODEL.json`, `SESSION_LOCKS.json`, `ENTRY_SET.json`, `PROVISIONAL_BAND_PF_NOTE.json`, `MANIFEST.json`
- Stages 2–9: baseline, Stage 3 GREEN, poi_map, Stage 5 GREEN, band_find SKIP_MAP+CANDIDATE_MAP, Stage 7 GREEN, band_sweep KEEP_RECIPES+SKIP_OMISSION_PROOF+TP_POLICY, Stage 9 GREEN
- Stage 10: `boost_alone/CELL/{ES_5m,ES_15m,NQ_5m,NQ_15m}.json`, `boost_alone/BXS_TABLE/{cell}.json`, `boost_alone/BXS_TABLE/BOOK.json`, `boost_alone/BEST_RECIPE_BY_B/{cell}.json`, `boost_alone/ALLOWLIST_CANDIDATES.json`, `boost_alone/MANIFEST.json`, `boost_alone/SMOKE_IDENTITY.json`, `boost_alone/PROVISIONAL_BOOST_LINES.json`, `boost_alone/TAKE_NOTES_OPEN.json`
- Strip paint evidence: all four cells 100% green before this CHECK was clickable
- Attestation required: confluence job count = 0 during Stage 10; `boost_search_open=false` after mark

---

## Shared multi-agent pack (EVERY check)

Spawn **four agents in parallel**. Each gets: (a) stamped inputs above, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- **Stage 11 add:** invented deadwood POI keep/cut list; confluence started before this CHECK green; cost shock skipped; thin n stamped as keep; skip-heavy squares enqueued for sweep/confluence; boost search still open after mark; B×S table missing or unmarked; orb_*/doubles in boost arms; CHECK clicked before all strips green; Stage 12 work done early.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip <0.75; revival at ~0.75; boost lines 1.0|1.2 (not locked — report both, do not invent a lock).
- Cost model present before any PF talk. Holdout last ~20% untouched for take decisions only.
- **Stage 11 add — cost shock:** recompute PF under Freeze COST_MODEL with an adverse cost bump (shock); any square that only clears keep lines under fantasy/zero cost → FAIL or demote from allowlist. Tables: claimed PF vs cost-shocked PF per cell × boost family.
- **Stage 11 add — trade-count floor:** enforce floor on n before allowlist; thin-n squares must not enter confluence allowlist. Tables: n vs floor per square; workers_used honesty; smoke identity match.
- **Take-table sanity (pro quant KEEP from handoff — if stamps in hand):** one-cell smoke done; count/PF floors early; cost before PF; RTH vs overnight sample; ES+NQ overlap note; multiplicity control; cache reuse; holdout virgin. Do not invent floors David did not stamp — report missing as FAIL/OPEN.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell; allowlist before/after shock+floor.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: do boost-alone keepers fit staking, not generic PF alone?
- **Stage 11 failure modes:**
  - Cost model too kind vs live fills
  - Trade-count floor too low for compounding size
  - Family bleed (naked/eth/v1 lumped day one)
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist,” “take rule locked,” “1.2 locked.”
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- **Stage 11 add:** refute confluence already filled; refute boost search still open; refute take rule locked from notes; refute 1B-alone or S≥3 promoted to allowlist without table grill; refute cost-shock skipped; refute thin-n keep; refute ORB/doubles revival; refute live-deploy language on research-grade boost notes.
- Output: REFUTED claims list + what must be re-run in **Stage 10 only** (or Stage 8 if KEEP recipes broken).

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section (Stage 10; Stage 8 if KEEP identity broken); do not advance; do **not** unlock confluence.
2. WARN from role 3 → talk box only if a real choice exists (e.g. boost keep line 1.0 vs 1.2; dual boost-family champion types under compounding lens); else stamp WARN and proceed only if David/overseer accepts.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David (take rule, 1.0|1.2 final) → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; **seal allowlist** (post shock+floor); unlock Stage 12 Confluence WORK; attest `boost_search_open=false` and confluence may start on allowlisted squares only.

---

## Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Stage 11 — cheap kills specific
- Confluence started before this CHECK green
- Cost shock skipped → PF fantasy
- Thin n stamped as keep
- Skip-heavy squares enqueued for sweep/confluence
- Boost search still open after mark
- Invented deadwood POI keep/cut list (cleaned set later only)
- Thin-n single-cell band promoted despite failed Band-find 3-of-4 cross-cell agreement
- Band-find labeling confluence conflated with Stage 12 boost-count 2/3/4 confluence

---

## Stage 11 — real-life failure modes
- Cost model too kind vs live fills
- Trade-count floor too low for compounding size
- Family bleed (naked/eth/v1 lumped day one)

---

## Take-table sanity (pro quant notes from handoff)
Apply if stamps present; otherwise flag OPEN — do not invent numbers:
- Cost model before PF talk (Freeze COST_MODEL + shock)
- Count / trade-count floors early
- Holdout last ~20% virgin for take only
- One-cell smoke before fleet (Stage 10 SMOKE_IDENTITY)
- Multiplicity control on boost-family / recipe explosion
- RTH vs overnight; ES+NQ overlap; null/ablate smell flags
- Cache bars/POIs/KEEP — never re-walk for prompt tweak
- Compounding / high-% bank risk lens on any champion talk

---

## Talk-before-check (only if real choice)
- **Boost keep line 1.0 vs 1.2** before check read — real fork; stamp owner pick; still provisional until David grill; do not forge “locked.”
- If multiple boost-family champion **types** appear → talk box: compounding / high-% bank risk lens (not max PF vanity). Fork = hooks only: checkpoint + bank unused champion for later resume.
- Do **not** invent take locks (B−S≥2 etc.), POI list, Continuation shortlist, or amalgamated multi-boost TP as locked path.

---

## Success stamp (CHECK green)
- `checks/stage_11_boost_alone/VERDICT.json` — roles 1–4 PASS/WARN/FAIL, evidence paths, cost-shock tables, trade-count floor tables, talk-box outcome if any
- `checks/stage_11_boost_alone/GREEN.stamp` — unlocks Stage 12 Confluence WORK
- `checks/stage_11_boost_alone/ALLOWLIST_SEALED.json` — post shock+floor allowlisted B×S squares only
- `checks/stage_11_boost_alone/DUAL_LAMP.json` — boost_search_open=false; confluence_unlock=true on allowlist only
- Attestations: no ORB, no doubles, fleet 4 cells, cost shock applied, trade-count floor enforced, confluence not started during Stage 10, provisional 1.0|1.2 disclosed, take notes still OPEN, holdout virgin, Continuation still OPEN

---

## Fail loop
- FAIL → return to **Stage 10** (`10_BOOST_ALONE_WORK.md`) only; if KEEP recipes / skip maps broken → Stage 8 or Stage 6 only; preserve earlier greens otherwise.
- Do not skip to Confluence. Do not re-open boost search as a “fix.” Do not invent take locks to force PASS.
