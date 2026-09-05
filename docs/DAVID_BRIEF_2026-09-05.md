# David prompt-dash brief — 5 Sep 2026
Source: David voice notes to DASHBOARD OVERSEER. Build page + prompts only. No factory/POI code work (new POI section being built elsewhere; token-stopped elsewhere).

## Mechanics locks
- If a check fails and it is fixable: fix it (loop back to that same section only). Nos never join across sections.
- Talk before a check ONLY when there is something to discuss (e.g. different champion types).
- Stamp / seal each phase as we go.
- Stay linear. Do not skip steps.
- Baseline alone is often mediocre (~0.9 PF or breakeven). That is expected. Juice comes later from POI boost/skip.
- Parallel fleet: **ES + NQ, 5m + 15m only** (no 1m). Wait 100% across them before next unlock (hard on identity stages).
- Every stage: look ahead for already-saved data; fastest method; shard/max EPYC+Gaming cores on heavy compute; stress/check before next stage.

## UI lock (David HAPPY 5 Sep)
- Vertical scroll page.
- STRATEGY INPUT at top + checkbox Reversal vs Continuation/break-retest.
- Each WORK: green WORK bar, then stacked blue RESULTS strips — one strip per fleet cell (asset×TF).
- Each strip = 10 chunks (10%…100%) with time under each chunk.
- Heartbeat / stuck under the stack.
- Orange CHECK unlocks only when EVERY stacked strip is 100% green.
- Fork style: DECIDE LATER — page hooks only.

## How the strategy actually builds (David)
1. Get best baseline you can (often not great alone).
2. Layer POIs per asset × TF.
3. Value areas (daily / weekly / monthly) are POIs in that list — calculate them, then treat as POIs. Not a separate “value area stage” forever.
4. Find bands: where baseline is helped vs hurt.
5. **LOCKED (David grill 5 Sep):** PF < 0.75 in a band → do **not** sweep at all → SKIP. At end, trades in skip zones are omitted.
6. PF ≥ 0.75 → sweep (revival/fix try; must not worsen vs pre-sweep). BOOST/KEEP label **only if** PF > 1.2; under 1.2 after sweep → SKIP for confluence/table. No 1.0 keep line. Reason: compounding / fewer loser streaks. Wide→narrow KEEP.
7. Boost model: sweep **each boost alone** → mark table → scan confluences (2/3/4) across book. Holy grail = final table.
8. Take path FOR NOW: draw-a-line take-table; **recalc every run**; cut where full-session PF > 1.2; soft/bottom = small sweep to draw line; easy fat 5B0S/6B0S take without heavy sweep (best highest-profit recipe). **Q4 geometry LOCKED:** S≥B → no sweep/don’t take; B−S==1 (2B1S, 3B2S) → don’t take hard / don’t hunt; B−S≥2 (3B1S, 4B2S) → sweep each run, take line at PF > 1.2. never-1B WARN where Q4 doesn’t hard-block. **Q5 walk-forward LOCKED:** hold back unseen while picking recipe; score never-seen before take seal / move-forward; weak score blocks. Prefer **walk-forward** (holdout=same idea). **Q6 alone-vs-together FOR NOW:** single-boost recipe sweeps; multi-B borrows best single recipe + score together PF > 1.2; no full joint TP-SL sweep for now; OPEN to revise if later combo-sweep wins.
9. On/off filters (no bands): ranging/trending, bad calendar days, half-days, low volume, later gamma etc. Prefer sweep near the end.
10. Assemble + hold vs flat.
11. Stress + luck — same late area, two questions: Stress = walk-forward / capacity / ugly regimes; Luck = Monte Carlo.
12. Final assault: many agents — what fails in real world, what to test next.

## Entry-method sets
### Reversal — LOCKED (David confirmed, TABLE_SWEEP_SHARD_PLAN)
`close_back_inside`, `n_close_back_inside`, `wick_rejection_completed_bar`, `touch`, `close_confirm`, `pullback_to_level`.  
Chronicle: reversal touch champion historically.

### Continuation — OPEN (waiting David)
Catalog minus ORB: `touch`, `close_confirm`, `break_and_retest`, `n_close_beyond`, `bars_accepted_beyond_then_go`, `pullback_to_level`, `volume_confirmed_ohlcv_safe`.  
Strip `orb_breakout_close_confirm`, `orb_break_and_retest` (ORB DEAD).  
Chronicle: continuation close_confirm > break_and_retest.  
**OPEN:** full catalog minus ORB vs shorter locked list — do not invent.

### Sweep path notes
- Wide→narrow KEEP (Stage 2 Halton→narrow, AGENTS deep/wide first, progressive zone triage).
- Structural TP DEC-061 research-only; TABLE_SWEEP TP today = original + fractions + ATR 1.2–5.0.

## Champion / fork (LOCKED 5 Sep)
- Different champion types may appear; talk box to choose / restart with another champion.
- Weak-book / A/B fork style: **decide later**. Page leaves hooks only — no fork UX locked yet.

## Layout preference
- Prefer MORE stages after band sweep rather than lumping.
- Sequence baked as stages 1–21 (WORK/CHECK pairs; boost/confluence dual-lamp) in CURRENT_STAGE_MAP / HANDOFF.
- Final stage = full multi-agent assault.

## Out of scope for this room now
- Building POI chunk code / band adjust code (happening elsewhere).
- Running vote-grade or confluence tests.
- Live engine / sharding fold.
- Deleting factory ORB code elsewhere (prompt-dash docs/UI only).

## Decisions 5 Sep continued
- Fork style: DECIDE LATER — leave page hooks only.
- Band PF / keep / sweep gate: **LOCKED** 5 Sep grill — see `DAVID_GRILL_LOCKS_2026-09-05.md`.
- Q4 take-table geometry: **LOCKED** — see `DAVID_GRILL_LOCKS_2026-09-05.md`.
- Q5 walk-forward: **LOCKED** — see `DAVID_GRILL_LOCKS_2026-09-05.md`.
- Q6 alone-vs-together: **FOR NOW** (borrow best single for multi-B; score together PF > 1.2; no joint TP-SL sweep) — OPEN to revise. See `DAVID_GRILL_LOCKS_2026-09-05.md`.
- Highest-boost + vote-grading: notes only (tested elsewhere).
- David will bring POI list + new strategy later; bake in then.

## Locks 5 Sep evening (David)
- **DOUBLES / pairs sweep: DEFUNCT.** Do not plan or run.
- **ORB: DEAD** for this product. Remove from prompt-dash plans/docs. Do not delete factory code here unless proven safe elsewhere; this room builds page+prompts only.
- Boost model: each boost alone → table → confluence scan → holy grail table.
- Top UI checkbox selects entry-method set (Reversal locked; Continuation open).
- Pro quant cheap loops KEEP (smoke, walk-forward score stamp before take seal, etc.).
## Check / work prompt locks (5 Sep)
- Every CHECK = multi-agent (mistake / legit / real-life / wrong). Final = whole book.
- Every WORK = detailed handbook incl. full sharding guide.
- On/off filters = binary no-line states; ask David later / other session.


## 5 Sep evening — check/work depth + compounding
- Champion pick for **compounding / high % bank risk** system.
- Multi-agent on **every** check; final assault = whole result.
- Work prompts = step-by-step overseer handbook with sharding baked in.
- On/off filters: ask later; other session knows more.

## Talk boxes + take-table line (5 Sep)
- Talk only on real forks; checkpoint + bank other champion (hooks now).
- Strategy canonical at Freeze top; look-ahead fit per strategy; no ORB.
- Take: draw line on B×S table (recalc every run; cut full-session PF > 1.2); Q4 geometry locked; Q5 walk-forward score stamp required before take seal (weak blocks); best highest-profit boost recipe (Q6: multi-B borrows single); cheap combo / small bottom-end sweep; easy fat 5B0S/6B0S light-take.
- See `DAVID_GRILL_LOCKS_2026-09-05.md`, `DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md`

## New banding (5 Sep)
- Tighter near-level bands; sweeps; remove deadwood POIs. Source: THE STRATEGY branch `codex/rty-replay-parity-20260702`.
