# Stage 12 — Confluence table WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md, DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**Dual-lamp:** boost-alone sealed (Stage 10+11); this stage fills confluence on **allowlisted squares only**. Confluence does **not** re-open boost search.
**On/off filters:** binary no-line states; parked — ask David later.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**.
**Cross-cell band confluence (David lock — Band-find labeling, NOT Stage 12):** If a POI×band (e.g. BEFORE) is strongly positive but thin n (~50) on one cell, look at the **SAME POI×SAME band** on the other fleet cells (ES/NQ × 5m/15m). If **≥3 of 4** show same-direction positive effect → BOOST candidate. If fewer than 3 agree → **do not boost from that thin cell alone**. Same idea for SKIP. This is **Band-find labeling confluence** — **SEPARATE** from later boost-count (2/3/4) confluence table. Aligns RESCORE-20 3-of-4 val cells same sign.

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load | Freezes / admit seals |
| Prior maps / sweeps / boost-alone *(prior)* | Checks (all of them) |
| **Confluence fill** ← this stage | Take / KEEP final decisions *(OPEN — draw line, do not lock)* |
| Assemble / Stress / MC *(later)* | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Re-opening boost search / inventing take locks |
| | Inventing deadwood POI keep/cut list |
| | Re-litigating Band-find 3-of-4 labeling confluence |

**Hard rule:** Confluence fill **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 13 CHECK unlock. Do not shard the barrier wait, the CHECK, or the final take/holy-grail decision. Allowlist only — no boost re-search.

---

### 0. Header
- **Stage # / name:** 12 — Confluence table (2/3/4 on allowlisted squares)
- **Kind:** WORK
- **Goal:** On Stage 11–sealed allowlisted B×S squares only, fill **boost-count** confluence 2/3/4 (SEPARATE from Band-find cross-cell labeling confluence / 3-of-4); **FOR NOW** draw David take-table line (take / don’t-take across B×S) using **best boost recipe for that square’s boost count**; cheap combo pass over shapes (2B0S, 3B0S/1S, 4B…, 5B×skips) **without new heavy sweeps**; unlock Stage 13 CHECK.
- **Unlocks next:** Stage 13 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED 6 vs Continuation OPEN (catalog minus `orb_*`; do not claim locked). Confluence consumes stamped allowlist + best recipes under that set.

---

### 1. Goal
- **Done means:**
  - Confluence 2/3/4 filled **only** on `ALLOWLIST_SEALED` squares from Stage 11.
  - **Take-table line (FOR NOW — David):** draw take / don’t-take across B×S; use **best boost recipe** for that square’s boost count (from Stage 10 `BEST_RECIPE_BY_B`) — **not** an amalgamation of all boost TPs unless later proven.
  - **Cheap combo pass** over allowlisted shapes without new heavy sweeps, e.g.:
    - 2B 0S
    - 3B 0S / 3B 1S
    - 4B 0S / 4B 1S
    - 5B 0S / 5B 1S / 5B 2S / 5B 3S
    - (and neighbours already on allowlist)
  - If overall weak → knock off / tighten (e.g. only 4B1S) **without** new heavy sweeps.
  - Dual-champion talk-box if real fork; **checkpoint hook** banks unused champion for later resume.
  - Strips 100% green; holy-grail **candidate** table stamped for Stage 13 (dependence / take-rule grill) — not a locked take.
- **Does NOT decide:**
  - Final take rule lock (OPEN with David — grill on table at Stage 13).
  - Amalgamated multi-boost TP vs best single boost recipe = **OPEN later** (park; test-the-water with table line first).
  - Re-open boost search / new boost families.
  - Deadwood POI keep/cut list (admit cleaned set later — do not invent).
  - On/off filters, assemble, stress/luck.
  - Lock of 0.75 / 1.0 / 1.2.
  - Holdout take using last ~20% as research fuel (holdout stays virgin for take seal).

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- Stage 1 Freeze/admit: BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–9 greens + band_sweep KEEP_RECIPES + SKIP_OMISSION_PROOF + TP_POLICY
- Stage 10: BXS_TABLE, BEST_RECIPE_BY_B, CELL alone scores, MANIFEST (`boost_search_open=false`), PROVISIONAL_BOOST_LINES, TAKE_NOTES_OPEN
- Stage 11 GREEN + `checks/stage_11_boost_alone/ALLOWLIST_SEALED.json` + `DUAL_LAMP.json` (confluence_unlock=true; boost_search_open=false)
- Cache pins: bars + POI + KEEP + boost-alone hashes must match; mismatch → rebuild prior section
- Entry-method set = STRATEGY INPUT checkbox (match Freeze); **strip orb_*; refuse doubles/pairs**
- **Banding / POI posture:** NEW BANDING (tighter near-level) expected upstream; deadwood POI removal is a later admit of cleaned set — **do not invent keep/cut list** in this stage

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** confluence jobs = (cell × allowlisted_square × confluence_k∈{2,3,4} × combo_shape) — **allowlist only**
- Cheap combo shapes preferred; **no new heavy band/boost sweeps**
- Expected jobs: moderate (allowlisted squares × k × shapes) — far smaller than Stage 8/10 if allowlist tight
- **Smoke:** YES — one cell, one allowlisted square, confluence 2 path + take-line sample before fleet
- **Never** enqueue non-allowlisted squares
- **Never** enqueue new boost-alone search jobs (dual-lamp)

#### 3b. Cores
- Default `n_workers=1`; opt-in high-n on EPYC (up to 64) + Gaming if room allows
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on a handful of squares
- Identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup confluence hash for (cell, allowlist_seal_hash, square_id, k, combo_shape_id, best_recipe_by_b_hash, cost_model_id, bar_hash, poi_map_hash, code_pin)
2. Hit → paint from cache; do not re-walk bars/POIs/boost-alone
3. Miss → run shard; write hash + artifact
4. Prompt-only tweaks never invalidate prior caches
5. One-core hash == multi-core hash when claiming equivalence

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming only if room allows
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 11 GREEN + ALLOWLIST_SEALED + DUAL_LAMP; STOP if boost_search_open≠false or allowlist missing.
2. Read STRATEGY INPUT; strip orb_*; refuse doubles/pairs; Continuation stamped OPEN if selected.
3. Load BEST_RECIPE_BY_B — confluence take-line uses **best recipe for that boost count**, not amalgamation (amalgamation = OPEN later).
4. One-cell smoke: confluence k=2 on one allowlisted square; cost-applied PF; workers_used honesty; hash pin.
5. Identity check: n_workers=1 hash == n_workers=k on same tiny set.
6. Fan out fleet; enqueue **only** allowlisted squares × confluence 2/3/4 × cheap combo shapes (2B0S, 3B0S/1S, 4B0S/1S, 5B×skips neighbours on allowlist).
7. **Draw take / don’t-take line** across B×S from results (FOR NOW David path); stamp line + reasons; if weak → tighten (e.g. drop to 4B1S only) **without** new heavy sweeps.
8. Flag dependence / correlation smells across boosts for Stage 13 (do not silently merge same underlying signal as 3 “boosts”).
9. **Talk-box** only if dual champions (real fork under compounding lens); **checkpoint hook:** stamp fork + bank unused champion for later resume (hooks only — no fork UX).
10. Holdout last ~20% untouched for take seal (not fuel for confluence fill).
11. Paint strips 10%…100%; heartbeat under stack.
12. Write confluence table + take-line + cheap-combo results + dual-lamp integrity + checkpoint hooks; barrier → unlock Stage 13 CHECK (do not auto-pass; do not claim holy-grail locked).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 13 CHECK locked until every strip 100% green
- Boost-alone search UI stays sealed (dual-lamp — do not reopen)

---

### 6. Success stamps
- `confluence/CELL/{cell}.json` — confluence 2/3/4 results on allowlisted squares; n, PF (cost-applied), recipe refs (best-by-B), workers_used, hashes
- `confluence/TAKE_LINE.json` — take / don’t-take across B×S (FOR NOW); shapes kept/knocked; best-recipe-by-B policy stamped; amalgamation_policy=`OPEN_LATER`
- `confluence/CHEAP_COMBO_PASS.json` — shapes tried (2B0S, 3B0S/1S, 4B…, 5B×skips…); no_new_heavy_sweeps=true
- `confluence/HOLY_GRAIL_CANDIDATE.json` — final-table **candidate** for Stage 13 grill (not locked take)
- `confluence/ALLOWLIST_USED.json` — exact Stage 11 seal hash + square ids used (prove no extras)
- `confluence/MANIFEST.json` — entry_set_id, lock_state, dual_lamp integrity, no_ORB / no_doubles, workers_used, hashes, NEW_BANDING note + deadwood_poi_list=`NOT_INVENTED`
- `confluence/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `confluence/CHECKPOINT_HOOKS.json` — if dual champions: fork stamp + banked unused champion id/path (hooks only)
- `confluence/DEPENDENCE_FLAGS.json` — smells for Stage 13 (overlapping signals / ES+NQ double-count)
- Strip paint 100% × 4 cells
- What CHECK will read: allowlist-only proof, take-line, cheap-combo without heavy sweeps, best-recipe-not-amalgamation, dual-lamp sealed, dependence flags, checkpoint hooks, no ORB/no doubles, holdout virgin, take rule still OPEN

---

### 7. What NOT to do
- Do not re-open boost search (dual-lamp)
- Do not fill non-allowlisted squares
- Do not run new heavy band/boost sweeps for confluence
- Do not lock take rule / holy-grail / 1.0|1.2
- Do not invent amalgamated multi-boost TP as production path (OPEN later)
- Do not invent deadwood POI keep/cut list
- Do not conflate this boost-count 2/3/4 confluence with Band-find cross-cell labeling confluence (3-of-4 same POI×band)
- Do not re-litigate Band-find thin-n 3-of-4 decisions inside Stage 12 — consume sealed allowlist
- Do not sweep doubles/pairs (DEFUNCT)
- Do not include orb_* (ORB DEAD)
- Do not claim Continuation LOCKED
- Do not shard CHECK / barrier / final take decision
- Do not edit factory code from this room
- Do not contaminate holdout
- Do not unlock CHECK until all strips green
- Do not take 1B alone / S≥3 / B<2 as locked (notes only until Stage 13 grill)

---

### 8. Heartbeat / stuck
- Heartbeat: under stack — last square × k × shape + ETA
- Stuck: no chunk advance / worker death / identity mismatch / allowlist miss enqueue
- Recovery: restart Stage 12 only; preserve caches; if allowlist wrong → loop Stage 11 (not patch squares in place); if boost recipes wrong → Stage 10 — **never** reopen boost search from confluence “to fix”

---

### 9. Cheap loops KEEP
- One-cell smoke before fleet
- Cost model before PF
- Allowlist-only enqueue proof
- Cheap combo tighten if weak (no new heavy sweeps)
- Best-recipe-by-B (not amalgamation) policy check
- Multiplicity control on combo explosion
- RTH vs overnight sample; ES+NQ overlap
- Cache never re-walk
- Dependence smell flags (not silent merge)
- Compounding lens on dual champions + checkpoint bank unused
- Holdout virgin
- Dual-lamp: boost job count must stay zero this stage
- Deadwood POI list not invented
- Name collision guard: stamps say boost-count confluence ≠ Band-find labeling confluence

---

### 10. Handoff to CHECK
- Feed Stage 13 bullets in CHECK_ASSAULT_OUTLINE.md / `13_CONFLUENCE_CHECK.md`
- Give agents: TAKE_LINE, HOLY_GRAIL_CANDIDATE, CHEAP_COMBO_PASS, ALLOWLIST_USED, CELL results, DEPENDENCE_FLAGS, CHECKPOINT_HOOKS, SMOKE_IDENTITY, MANIFEST, Stage 11 GREEN + ALLOWLIST_SEALED, dual-lamp proof, best-recipe policy + amalgamation OPEN, no ORB/no doubles, NEW BANDING / deadwood-not-invented attestation

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Confluence fill = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] Dual-lamp: allowlist only; boost search sealed
- [x] David take-table line FOR NOW + cheap combo shapes + best recipe by B
- [x] Amalgamation OPEN later; talk-box + checkpoint hooks
- [x] NEW BANDING / deadwood POI note; do not invent keep/cut
- [x] OPEN David items named, not invented
- [x] Handoff points at Stage 13 CHECK assault
