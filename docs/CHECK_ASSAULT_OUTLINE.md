# CHECK assault outline — shared pack + per-stage (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, GATE_PLAN_V1.md.

**Rule:** Every CHECK = multi-agent assault with the four questions below + stage-specific context of what was just WORK'd. Fail → loop to **that same section only**. Orange CHECK unlocks only when all fleet strips (ES+NQ × 5m+15m) are 100% green.

**Product dead (never revive in prompts):** Doubles/pairs = DEFUNCT. ORB = DEAD.

---

## Shared multi-agent pack (EVERY check)

Spawn four agents in parallel. Each gets: (a) stamped inputs from prior WORK, (b) fleet cell results (ES 5m, ES 15m, NQ 5m, NQ 15m), (c) this stage's cheap-kill list, (d) the four questions.

### Role 1 — Mistake hunter
**Question:** Was a mistake made?
- Hunt: Silent Zero, fake ticks, percent paint without work, wrong folder/roster, smell gaps, leftover polish, roster defaults, ORB/doubles copy leaking into UI or stamps.
- Hunt: skipped stamp, wrong entry-method set vs STRATEGY INPUT checkbox, 1m accidentally in fleet, re-walk of cached bars/POIs, identity stage that was sharded when it must not be.
- Output: PASS / FAIL with concrete file/stamp/path evidence. No vibes.

### Role 2 — Number auditor
**Question:** Are these numbers legit?
- Reconcile counts, PF, n trades, workers_used honesty (`min(requested, item_count)`), hash pins vs one-core where claimed.
- Band PF provisional: skip &lt;0.75; revival at ~0.75; keep lean PF > 1.2 (grill at launch; report 1.0 as sensitivity / fork-hook only — do not invent a lock).
- Cost model present before any PF talk. Holdout last ~20% reserved — take not sealed by this stage.
- Output: PASS / FAIL with tables: claimed vs recomputed, per cell.

### Role 3 — Real-life trader lens
**Question:** Would it work in real life?
- Slippage/thin open, RTH vs overnight, ES+NQ overlap correlation, session/calendar, look-ahead on POIs, capacity if size were live, never-tag failure mode.
- Compounding / high-% bank risk: does the champion fit staking, not generic PF alone?
- Output: PASS / WARN / FAIL with “what breaks on Monday morning” list.

### Role 4 — Claim refuter
**Question:** What have we done wrong?
- Attack every stamp claim: “KEEP”, “champion”, “holy grail”, “boost unlock”, “skip zone”, “confluence allowlist”.
- Demand disconfirming evidence; null shuffle / multiplicity where relevant.
- Output: REFUTED claims list + what must be re-run in **this section only**.

### Shared verdict protocol
1. Any FAIL from roles 1–2 → CHECK fail → loop same WORK section; do not advance.
2. WARN from role 3 → talk box only if a real choice exists (e.g. champion types); else stamp WARN and proceed only if David/overseer accepts.
3. Role 4 REFUTED items that are fixable → same-section loop; if OPEN with David → park, do not invent.
4. All four PASS (or WARN accepted) → stamp CHECK green; unlock next WORK.

### Shared cheap kills (all stages)
- Silent Zero / fake tick / percent paint
- Wrong folder or wrong roster defaults
- ORB or doubles copy in UI/stamps
- Fleet missing a cell or including 1m
- CHECK clicked before all strips 100% green
- Hash/reuse skipped when prior stamp exists

---

## Per-stage CHECK bullets

### Stage 3 — Check (after Baseline alone WORK)
**Prior WORK context:** Stage 2 ran baseline alone per fleet cell. Expect mediocre PF (~0.9 / breakeven) — that is normal; juice comes later. Champion talk only if multiple baseline champion types appear.

**Agents must know:**
- Cost/session locks from Freeze (stage 1) stamped; no ORB in intake.
- Entry-method set from STRATEGY INPUT checkbox (Reversal LOCKED 6; Continuation PLACEHOLDER minus orb_* (not operable OPEN)).
- Baseline is alone — no POI/boost yet.

**Cheap kills specific:**
- Baseline PF talked up as “edge” already
- Cost model missing before PF
- Wrong entry set vs checkbox
- One-cell smoke skipped before fleet
- workers_used inflated on tiny job count

**Real-life failure modes:**
- Session filter wrong (RTH vs overnight mix)
- Tick/ATR units wrong → baseline silent-zero or absurd trade count
- Champion picked for vanity PF instead of compounding fit

---

### Stage 5 — Check (after POI map WORK)
**Prior WORK context:** Stage 4 built POI map; value areas (D/W/M) calculated then treated as POIs — not a forever-separate stage. Per asset×TF.

**Agents must know:**
- Exact POI list may still be OPEN (David incoming) — do not invent missing names.
- Cache/hash-first: bars+POIs reused; never re-walk for prompt tweak.
- Weekly/monthly are value areas, not timeframes.

**Cheap kills specific:**
- Look-ahead into future bars when placing POIs
- Value areas double-counted as both “VA stage” and POI
- ORB levels sneaking into map
- Map built on wrong TF or wrong asset folder
- Empty map stamped green

**Real-life failure modes:**
- POI levels from wrong session calendar
- Stale cache after roster change (hash not invalidated)
- ES vs NQ POI mix-up

---

### Stage 6→7 — Check (after Band find WORK)
**Prior WORK context:** Stage 6 found bands where baseline helped vs hurt under the coherent ladder: <0.75 → SKIP (no *normal* sweep); ~0.75 → REVIVAL; keep lean PF > 1.2; post-failed-revival → FAILED_REVIVAL / BELOW_KEEP. **Band-find cross-cell (3-of-4)** stamps CROSS_CELL_BOOST_CANDIDATE / INSUFFICIENT required. NEW BANDING / deadwood-not-invented. Band PF figures PROVISIONAL (not locked).

**Agents must know:**
- instant_skip_below = 0.75 provisional; revival at ~0.75; keep lean PF > 1.2 (grill at launch); 1.0 = sensitivity / fork-hook only — owner fork hook before check read if a real choice exists.
- Between 0.75 and keep lean (PF > 1.2) after failed revival = FAILED_REVIVAL or BELOW_KEEP (not table / not keep) — provisional story. Do **not** dual-label SWEEP_CANDIDATE + DEAD_ZONE.
- DEC-063 zone-first banding notes exist; do not invent bin count locks.

**Cheap kills specific:**
- *Normal* sweeping a <0.75 skip band (revival exception only at ~0.75)
- Locking 0.75/1.2 as final; treating 1.0 as equal keep pick vs lean >1.2
- Missing CROSS_CELL_3OF4 / thin-n BOOST without 3-of-4 / naked “BOOST candidate”
- Dual-label SWEEP_CANDIDATE + DEAD_ZONE
- Band vs ATR/tick smell ignored
- Skip/KEEP labels swapped across cells

**Real-life failure modes:**
- Band edges that only work on one regime (thin open / news)
- Correlation of ES+NQ bands double-counting one idea
- Skip zones that still leak trades into later assemble

---

### Stage 9 — Check (after Band sweep WORK)
**Prior WORK context:** Stage 8 band sweep — wide→narrow KEEP; tailored entry/TP per location; entry set from Reversal/Continuation checkbox. TP today = original + fractions + ATR 1.2–5.0 (structural TP DEC-061 research-only).

**Agents must know:**
- Wide→narrow KEEP path; one-cell smoke before fleet.
- Doubles/pairs DEFUNCT — must not appear in sweep arms.
- ORB entry methods stripped.

**Cheap kills specific:**
- orb_* methods in recipe stamps
- Doubles/pairs arms present
- Narrow KEEP without wide evidence
- Holdout contaminated during sweep
- Continuation set claimed LOCKED or operable OPEN (it is PLACEHOLDER)

**Real-life failure modes:**
- Overfit entry/TP to one year; fails walk-forward later
- Slippage kills ATR-tight recipes at open
- Recipe explosion without multiplicity control

---

### Stage 11 — Check (after Boost-alone WORK) — cost shock + trade-count floor
**Prior WORK context:** Stage 10 boost-alone → mark B×S table. This CHECK unlocks confluence. Dual-lamp: boost-alone then confluence; confluence must not re-open boost search.

**Agents must know:**
- B×S table marked; cost shock applied; trade-count floor enforced.
- Take notes OPEN: B−S ≥ 2, B in 2..7; never B&lt;2; never S≥3; lean 2B alone or 3B+1S; never 1B alone — confirm on table, do not invent lock.
- Research-grade boost recipe notes exist elsewhere; do not live-deploy language.

**Cheap kills specific:**
- Confluence started before this CHECK green
- Cost shock skipped → PF fantasy
- Thin n stamped as keep
- Skip-heavy squares enqueued for sweep
- Boost search still open after mark

**Real-life failure modes:**
- Cost model too kind vs live fills
- Trade-count floor too low for compounding size
- Family bleed (naked/eth/v1 lumped day one)

---

### Stage 13 — Check (after Stage-12 boost-count confluence WORK) — draw-a-line take-table FOR NOW / holy-grail + dependence
**Prior WORK context:** Stage 12 Stage-12 boost-count confluence (2/3/4 B×S) on allowlisted squares only. **Operating take path = draw-a-line take-table FOR NOW** (best recipe by B) — not old B−S take-notes as the locked rule. 5B3S = PROBE_ONLY. Holy grail = final table candidate. Dependence / correlation across boosts must be challenged. never-1B = WARN not FAIL until David locks.

**Agents must know:**
- Allowlist only; no re-open of boost search.
- Take rule still OPEN with David — grill table, do not invent.
- Champion for compounding / high % bank risk, not max PF vanity.

**Cheap kills specific:**
- Non-allowlisted squares in holy-grail
- 1B alone on take-line → WARN (not FAIL) until David locks never-1B
- S≥3 or B&lt;2 taken
- Dependence ignored (same underlying signal counted as 3 “boosts”)
- Holdout used during confluence fill

**Real-life failure modes:**
- Confluence collapses when one POI family fails live
- Overlapping ES+NQ signals → oversized risk
- Holy-grail table unstable under small cost bump

---

### Stage 15 — Check (after On/off filters WORK)
**Prior WORK context:** Stage 14 on/off filters — binary no-line states (trend/range day, gamma env, calendar, half-days, etc.) affecting the **whole table**, not a single band. Detail parked — ask David / other session; do not invent filter list.

**Agents must know:**
- Filters are binary parked states; no fake continuous lines.
- Purpose = table-wide effect, not band surgery.

**Cheap kills specific:**
- Invented filter list stamped as David-locked
- Band-style sweep applied to on/off
- Filters that silently re-enable skip-zone trades
- ORB/session junk reintroduced as “calendar filter”

**Real-life failure modes:**
- Filter that only works in-sample (regime label leakage)
- Half-day / holiday mis-tagged → silent zero or blow-up day
- Gamma/env proxy unavailable live → strategy undefined

---

### Stage 17 — Check (after Assemble + hold/flat WORK)
**Prior WORK context:** Stage 16 assembled book + hold vs flat decision path. Micro hold-vs-flat before stress/luck is a KEEP cheap loop.

**Agents must know:**
- Skip-zone trades must stay omitted.
- Assemble uses stamped recipes only; no last-minute method invention.
- Fork = hooks only (no fork UX).

**Cheap kills specific:**
- Skip zones leaking into assembled book
- Hold/flat chosen without micro evidence
- Wrong champion banked vs talk-box choice
- Doubles/ORB residue in assemble stamps

**Real-life failure modes:**
- Flat when should hold overnight → opportunity cost; hold through ugly → gap risk
- Size assumes fills the assemble never tested
- Book cannot be explained as a Monday runbook

---

### Stage 19 — Check (after Stress + luck WORK)
**Prior WORK context:** Stage 18 Stress = walk-forward / capacity / ugly regimes; Luck = Monte Carlo. Same late area, two questions.

**Agents must know:**
- Stress and luck both required; one does not replace the other.
- Holdout discipline; multiplicity control still on.

**Cheap kills specific:**
- MC only, no walk-forward (or vice versa)
- Capacity ignored while PF looks fine
- Ugly regime cherry-picked away
- Seed not stamped / non-reproducible luck run

**Real-life failure modes:**
- Passes MC, dies on first FOMC week
- Capacity fantasy (too many concurrent ES+NQ)
- Luck distribution hides left-tail ruin under compounding stakes

---

### Stage 21 — Done (seal after Final assault)
**Prior WORK context:** Stage 20 Final multi-agent assault completed on the whole finished book. Stage 21 is DONE seal — not a new research stage.

**Agents must know:**
- Final assault verdict stamped; all prior CHECK greens intact; fleet strips complete.
- Paper only — no live fold from this room.

**Cheap kills specific:**
- DONE stamped while any prior CHECK amber/fail
- Live/deploy language in Done stamp
- Missing final-assault artifact path

**Real-life failure modes:**
- “Done” means research book finished — not permission to trade live without separate live gate
- Handoff missing Monday runbook / cost / size

---

## Final multi-agent assault (Stage 20 WORK → feeds Stage 21)

**Separate from per-stage CHECKs.** Same four roles; scope = **WHOLE finished book**.

### Extra brief for all four roles
- Can it trade? (research-book sense: coherent runbook, costs, size, skip zones omitted, entry set clear)
- Is the final result legit? (hashes, stamps, holdout reserved — take not sealed, no ORB/doubles, provisional PF lines disclosed)
- Compounding / high-% bank risk fit of the banked champion
- Dual-lamp integrity: boost_search_closed after Stage 13; Stage-12 allowlist-only; holy grail = final table only; draw-a-line take-table FOR NOW

### Final assault cheap kills
- Any stage stamp missing or forged percent paint
- Boost search reopened after confluence
- SKIP <0.75 zones still trading (no normal sweep; revival exception only at ~0.75)
- Continuation set silently locked
- Fork UX invented (hooks only)
- Factory code edited from this room

### Final verdict
- FAIL → loop to the **specific section** that broke (not a full restart unless identity freeze is wrong).
- PASS → stamp Stage 20 assault green → Stage 21 Done seal.

---

## Reminder for prompt authors
- Every CHECK prompt pastes: Shared pack + that stage's bullets + stamped input paths.
- Fail loops same section only.
- Talk-before-check only for real choices (champions, OPEN David items).


## Band-find cross-cell (3-of-4 same POI×band) (David 5 Sep)
Thin one-cell band (~50 n) → **CROSS_CELL_BOOST_CANDIDATE** only if ≥3/4 cells same-sign on that POI×band; else **INSUFFICIENT**. Separate from **Stage-12 boost-count confluence (2/3/4 B×S)**.
Must appear in Stage 6 WORK steps + required stamps + NOT-to-do, and Stage 7 cheap kills — not appendix-only.
