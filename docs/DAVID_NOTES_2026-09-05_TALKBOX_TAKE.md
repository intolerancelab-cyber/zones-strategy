# David notes — talk boxes, strategy handoff, take-table line (5 Sep ~04:40 London)

## Talk boxes (David: take Overseer advice)
Worth a chat only where there is a **definite fork** and info worth saving:
1. **Baseline champions** that are very different (e.g. high R:R / low WR vs opposite) — you often cannot know which wins until the end.
2. **After band sweep** if two recipes both clear and look different.
3. **Boost keep line** — **LOCKED PF > 1.2** (David grill 5 Sep). 1.0 is **not** a keep line (unused fork-hook note only). Do not present 1.0 vs 1.2 as an equal pick.

Elsewhere: stamp and move; no chat for tiny stops.

### Save / resume other champion (hooks now, full build later)
- If not overly complicated: **checkpoint stamp** at the fork + **bank unused champion**.
- Later: resume from that stage with the other champion and walk forward again.
- If build cost explodes: leave hooks only (already locked). David prefers hooks + solid later over a fragile mega-feature now.
- Aligns with fork = page hooks; this clarifies what hooks must support.

## Freeze / admit — no ORB
- ORB must **not** appear in Freeze/admit or any prompt-dash stage.
- Strategy admitted via **canonical strategy handoff** at top (drag/drop / paste). David may supply.
- Overseer must **look ahead** through all stages and ensure the admitted strategy has everything needed (each strategy may differ).

## Entry sets / wide→narrow (status from dig — do not invent “code is perfect”)
- Reversal LOCKED 6 from TABLE_SWEEP.
- Continuation PLACEHOLDER (catalog minus orb_* — not operable OPEN); David still chooses full vs short list.
- Wide→narrow is **design-alive** (Stage 2 / AGENTS / David brief). Structural TP (VA opposite / swings) = RESEARCH_ONLY (DEC-061); ATR/rr = deployable lane.
- Prompt-dash room does **not** claim live code health on laptop without a fresh verify — note as VERIFY LATER, not “all good.”

## Take table — “draw a line” (David grill locks 5 Sep — FOR NOW)
Not: re-sweep TP amalgamations for every confluence.
Yes (LOCKED process; draw-a-line FOR NOW stays):
- Table **recalculated every run** from boost-alone + confluence path.
- Find B×S cut where **full-session PF > 1.2**.
- Soft/bottom end of table = **small sweep** to draw the line (not new heavy family search).
- Easy fat shapes (high B, 0S — e.g. **5B0S / 6B0S**) = take **without heavy sweep**; use **best highest-profit boost recipe**.
- **Q4 take-table geometry LOCKED:**
  - **S ≥ B** → no sweep, don’t take (e.g. 1B3S).
  - **B−S == 1** (e.g. 2B1S, 3B2S) → don’t take (**hard**); don’t hunt that cell as a take.
  - **B−S ≥ 2** (e.g. 3B1S, 4B2S) → sweep each run; draw take line where full-session PF > 1.2.
- **Cheap end / bottom-end** pass of allowlisted shapes that clear Q4 (B−S≥2 or easy fat 0S), e.g.:
  - 2B 0S (B−S=2)
  - 3B 0S / 3B 1S
  - 4B 0S / 4B 1S / 4B 2S
  - 5B 0S / 5B 1S / 5B 2S (5B3S = PROBE_ONLY; may also fail Q4 if S≥B)
  (and neighbours) — because cell sweeps already exist. Do **not** hunt B−S==1 or S≥B as takes.
- If overall weak → knock off / tighten (e.g. only 4B1S) without new heavy sweeps.
- **Q6 alone-vs-together FOR NOW:** sweep recipes on single boosts only; when 2/3/4 fire together reuse best-performing single’s recipe and score together profitability (full-session PF > 1.2); do **not** require full joint/combo TP-SL sweep for now; OPEN to revise if David’s later combo-sweep test wins.
- **Q5 walk-forward LOCKED:** hold back unseen while picking recipe; score on never-seen chunk before take seal / move-forward; **weak score blocks** seal / move-forward (real bearing). Prefer label **walk-forward** (holdout = same idea once).
- See `DAVID_GRILL_LOCKS_2026-09-05.md`.

## Strategy-per-strategy
- Take mins / exact B−S shapes may vary by strategy; confirm on that strategy’s holy-grail table (aligns with earlier OPEN).

## New banding + deadwood (same THE STRATEGY branch)
- Branch `codex/rty-replay-parity-20260702` carries the new banding work.
- Tighter to level, fewer bands → sweeps → remove deadwood POIs (only heavy lifters keep).
- Do not lock keep/cut list until that campaign finishes.

## Band-find cross-cell (3-of-4 same POI×band)
- Thin positive on one cell (e.g. before-band, n≈50) → check same POI×band on other asset×TFs.
- ≥3 of 4 same-sign positive → **CROSS_CELL_BOOST_CANDIDATE**; else stamp **INSUFFICIENT** — do not boost from thin alone.
- Same for SKIP agreement. Separate from later B×S confluence table.

## NEW BANDING / deadwood POIs (David confirmed 5 Sep)
- Branch: `codex/rty-replay-parity-20260702` on THE STRATEGY carries **NEW BANDING** — fewer/tighter bands near the level (not the old wide map), then sweeps, then **REMOVE DEADWOOD POIs** (only heavy lifters keep).
- Align with DEC-063 / RESCORE-20.
- Prompt-dash **admits cleaned POI set later**; do **not** invent a keep/cut list in boost/confluence prompts.
