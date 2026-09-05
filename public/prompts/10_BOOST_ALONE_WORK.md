# Stage 10 — Boost-alone WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md (Boost-alone stub), DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; keep lean PF > 1.2 (grill at launch; 1.0 = sensitivity / fork-hook only; not locked).
**Dual-lamp:** boost-alone completes → Stage 11 CHECK → only then **Stage-12 boost-count confluence (2/3/4 B×S)** on allowlisted squares. Stage 12 must **not** re-open boost-family search. Soft seal only: do **not** stamp `boost_search_closed` or “table ready for take” until after Stage 12 / Stage 13 CHECK.
**On/off filters:** binary no-line states; parked — ask David later.
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level (not old wide map) → sweeps → **REMOVE DEADWOOD POIs** (only heavy lifters keep). Align DEC-063 / RESCORE-20. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**.
**Band-find cross-cell (3-of-4 same POI×band)** — NOT Stage-12 boost-count confluence: If a POI×band (e.g. BEFORE) is strongly positive but thin n (~50) on one cell, look at the **SAME POI×SAME band** on the other fleet cells (ES/NQ × 5m/15m). If **≥3 of 4** show same-direction positive effect → **CROSS_CELL_BOOST_CANDIDATE**. If fewer than 3 agree → stamp **INSUFFICIENT** — **do not boost from that thin cell alone**. Same idea for SKIP. This is **Band-find cross-cell (3-of-4 same POI×band)** — **SEPARATE** from **Stage-12 boost-count confluence (2/3/4 B×S)**. Aligns RESCORE-20 3-of-4 val cells same sign.

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load | Freezes / admit seals |
| POI map / Baseline / Band find / Band sweep *(prior)* | Checks (all of them) |
| **Boost-alone** ← this stage | Take / KEEP decisions *(final take — OPEN)* |
| Confluence fill / Assemble / Stress / MC *(later)* | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | Locking take rule (B−S≥2, etc.) or 0.75/1.2 |
| | Re-opening boost search after B×S mark |

**Hard rule:** Boost-alone **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 11 CHECK unlock. Do not shard the barrier wait itself or the CHECK. Mark B×S table from compute; do **not** run confluence here; do **not** finalize take rule.

---

### 0. Header
- **Stage # / name:** 10 — Boost-alone → mark *candidate* B×S occupancy (unlocks Stage-12 path after Stage 11)
- **Kind:** WORK
- **Goal:** Per fleet cell, run each boost family **alone**; score cost-applied results; mark *per-boost* evidence and *candidate* B×S occupancy only (not multi-B joints; not table-ready-for-take); stamp allowlist candidates for later Stage-12 boost-count confluence; unlock Stage 11 CHECK (cost shock + trade-count floor). Does **not** fill Stage 12; does **not** seal `boost_search_closed`.
- **Unlocks next:** Stage 11 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED (`close_back_inside`, `n_close_back_inside`, `wick_rejection_completed_bar`, `touch`, `close_confirm`, `pullback_to_level`) OR Continuation PLACEHOLDER (catalog minus `orb_*` — not operable OPEN; do not claim locked). Boost-alone uses stamped KEEP recipes from Stage 8 under that set.

---

### 1. Goal
- **Done means:**
  - Each boost family evaluated **alone** (no multi-B Stage-12 boost-count confluence fill in this stage).
  - *Candidate* B×S occupancy marked from **per-boost alone-path evidence only** — do **not** imply B≥2 proven from alone-path; multi-B joints are Stage 12.
  - Squares labeled keep-candidate / thin / skip-heavy / dead as provisional report under keep lean **PF > 1.2** (1.0 = sensitivity / fork-hook only — still not locked).
  - Best boost recipe per boost-count family stamped for later take-table use (Stage 12 uses best recipe for that square’s boost count — not amalgamation here).
  - Strips 100% green; book-level boost-alone manifest + smoke identity + dual-lamp **soft** note written (`boost_search_closed=false` until Stage 13).
- **Does NOT decide:**
  - Confluence 2/3/4 fill (Stage 12 — only after Stage 11 green).
  - Final take rule / holy-grail (OPEN with David — grill on table later).
  - Lock of boost keep line 1.0 vs 1.2 (report both; owner_open_items).
  - Amalgamated multi-boost TP vs best single boost recipe (OPEN — park).
  - On/off filters, assemble, stress/luck.
  - Continuation set final shortlist.
  - Holdout take decisions (last ~20% untouched).
  - Re-litigating Band-find cross-cell labeling confluence (3-of-4) — that was Stage 6/7; this stage consumes stamped band/boost posture and must not confuse it with boost-count confluence.

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- Stage 1 Freeze/admit (cost/session; no ORB): BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stage 2 Baseline alone stamps (per cell) + MANIFEST + SMOKE_IDENTITY
- Stage 3 CHECK green
- Stage 4 POI map hashes (value areas as POIs) + SILENT_ZERO_GATE
- Stage 5 CHECK green
- Stage 6 Band find: SKIP_MAP + REVIVAL_MAP + FAILED_REVIVAL_OR_BELOW_KEEP + CROSS_CELL_3OF4
- Stage 7 CHECK green
- Stage 8 Band sweep: KEEP_RECIPES/{cell}, DEAD_ARMS, MANIFEST, SMOKE_IDENTITY, SKIP_OMISSION_PROOF, PROVISIONAL_NOTE, TP_POLICY
- Stage 9 CHECK green (`checks/stage_09_band_sweep/GREEN.stamp`)
- Cache pins: bars + POI map + KEEP recipe hashes must match; if mismatch → rebuild prior section, do not silent continue
- **Banding / POI posture:** expect tighter near-level bands (NEW BANDING) and eventual deadwood-POI removal upstream; this stage consumes stamped KEEP/POI hashes as-is — do not invent a keep/cut POI list here
- Entry-method set = current STRATEGY INPUT checkbox value (must match Freeze ENTRY_SET); **strip orb_*; refuse doubles/pairs**

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit:** boost-alone jobs = (cell × boost_family × recipe_arm) — **one boost at a time**; no confluence combo jobs here
- **Shard key:** prefer (cell, boost_family_id) then recipe batch; mark into B×S table after scores land
- Expected jobs: large (families × cells × arms); order of magnitude: hundreds–thousands depending on KEEP recipe set
- **Smoke:** YES — one cell (prefer NQ 5m or ES 5m — pick one) full boost-alone path + B×S mark sample before fleet fan-out
- **Never** enqueue confluence 2/3/4 fills in this stage
- **Never** enqueue <0.75 skip-band leakage from Stage 6 SKIP_MAP

#### 3b. Cores
- Default `n_workers=1`; for fleet heavy pass opt-in high-n on EPYC (up to 64) + Gaming if room rules allow
- Honest stamp: `workers_used = min(requested_workers, item_count)` — never pretend 64 on 4 families
- Local steal OK on boost executor if present on side copy; identity hash must match one-core smoke

#### 3c. Hash-first reuse
1. Lookup existing boost-alone hash for (cell, boost_family_id, keep_recipe_hash, entry_set_id, tp_grid_id, cost_model_id, poi_map_hash, bar_hash, code_pin)
2. Hit → paint from cache, do not re-walk bars/POIs
3. Miss → run shard; write hash + artifact path
4. Prompt-only tweaks never invalidate bar/POI / KEEP recipe cache
5. Identity: one-core hash == multi-core hash when claiming equivalence

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree only
- Gaming: only if current room allows; do not assume two-machine split if blocked
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify all stamped inputs; STOP if Stage 9 not green or KEEP_RECIPES / SKIP_OMISSION_PROOF missing.
2. Read STRATEGY INPUT checkbox → bind entry-method list; **strip any orb_*; refuse doubles/pairs arms**. If Continuation selected, stamp set as **OPEN**, never LOCKED.
3. Confirm dual-lamp state: confluence Stage 12 **locked** until Stage 11 green; do not enqueue confluence jobs.
4. Load KEEP recipes from Stage 8; load SKIP_MAP — assert skip-zone trades stay omitted.
5. One-cell smoke: run each boost family **alone** on one cell; apply cost model before PF; mark sample B×S rows; verify n, PF, workers_used honesty, hash pin.
6. Identity check: smoke n_workers=1 hash == n_workers=k hash on same tiny set.
7. Fan out fleet cells; per cell load bar+POI+KEEP caches by hash; enqueue boost-alone shards only (boost_family × cell).
8. Score each boost alone with **cost applied**; report under both provisional boost keep lines **1.0 and 1.2** (do not lock; stamp both).
9. Mark *candidate* B×S occupancy: for each (B, S) square, record **per-boost alone-path evidence only**, n, PF (cost-applied), thin-n flags, skip-heavy flags. Do **not** claim multi-B joints proven. Do **not** stamp “table ready for take”. Notes only (not locks; Stage 12 draws take-table line FOR NOW): B−S ≥ 2 lean, B in 2..7; never B<2; never S≥3; lean 2B alone or 3B+1S; never 1B alone — **grill later; Stage 13 = WARN not FAIL on never-1B until David locks**.
10. Stamp **best boost recipe** per boost-count family for later Stage 12 take-table line (best recipe for that boost count — not amalgamation).
11. Apply early n floors / thin-n flags for Stage 11 trade-count floor; do not silently promote thin squares to allowlist.
12. Holdout last ~20% untouched (take decisions later — not here).
13. Paint each cell strip 10%…100% with real chunk times; heartbeat under stack.
14. Write boost-alone stamps + *candidate* B×S occupancy + allowlist **candidates** (provisional — Stage 11 gates cost shock + trade-count floor before Stage-12 unlock) + book-level manifest + dual-lamp **soft** note (`boost_search_closed=false` until after Stage 12 / Stage 13 CHECK; Stage-12 UI still locked until Stage 11 GREEN).
15. Barrier: wait all four cells 100% green → unlock Stage 11 CHECK (do not auto-pass CHECK; do not unlock Stage 12 yet).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance within threshold or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- Orange Stage 11 CHECK stays locked until every strip 100% green
- Stage 12 confluence UI stays locked until Stage 11 GREEN (dual-lamp)

---

### 6. Success stamps
- `boost_alone/CELL/{cell}.json` — per boost family alone scores: n, PF (cost-applied), recipe ids, boost keep line reports at 1.0 and 1.2, bar_hash, poi_map_hash, keep_recipe_hash, workers_used
- `boost_alone/BXS_TABLE/{cell}.json` — *candidate* B×S occupancy from alone-path evidence; labels, n, PF, thin flags, skip-heavy flags; `multi_B_proven=false`
- `boost_alone/BXS_TABLE/BOOK.json` — book-level candidate occupancy + notes (`table_ready_for_take=false`)
- `boost_alone/BEST_RECIPE_BY_B/{cell}.json` — best boost recipe per boost-count (for Stage 12 take-table line)
- `boost_alone/ALLOWLIST_CANDIDATES.json` — provisional squares for confluence after Stage 11 gates (not yet unlocked)
- `boost_alone/MANIFEST.json` — entry_set_id, entry_set_lock_state (LOCKED|PLACEHOLDER), workers_used, hashes, no_ORB / no_doubles attestation, dual_lamp=`boost_marked_stage12_locked`, `boost_search_closed=false` (soft — seal only after Stage 13), `table_ready_for_take=false`
- `boost_alone/SMOKE_IDENTITY.json` — one-core vs multi-core hash
- `boost_alone/PROVISIONAL_BOOST_LINES.json` — 1.0|1.2 both reported; owner picks before check read; **not locked**
- `boost_alone/TAKE_NOTES_OPEN.json` — B−S≥2 / B in 2..7 / never B<2 / never S≥3 / lean 2B or 3B+1S / never 1B alone — **notes only, OPEN with David**
- Strip paint 100% × 4 cells
- What CHECK will read: candidate B×S occupancy, cost-applied alone scores, thin-n / trade-count floor readiness, keep lean >1.2 (1.0 sensitivity), no Stage-12 fill started, boost_search_closed still false, table_ready_for_take=false, no ORB/no doubles, holdout reserved — take not sealed by this stage

---

### 7. What NOT to do
- Do not run confluence 2/3/4 fills in this stage
- Do not re-open boost-family search casually; also do **not** stamp boost_search_closed or table-ready-for-take yet (seal after Stage 12 / 13)
- Do not sweep doubles/pairs (DEFUNCT)
- Do not include orb_* methods (ORB DEAD)
- Do not lock take rule or 1.0/1.2 in stone
- Do not claim Continuation set locked
- Do not shard the CHECK or final take decision itself
- Do not edit factory code from this room
- Do not re-walk bars because a prompt word changed
- Do not unlock Stage 11 CHECK until all strips green
- Do not unlock Stage 12 from this WORK (Stage 11 must green first)
- Do not enqueue skip-zone leakage
- Do not contaminate holdout
- Do not promote thin-n squares to allowlist without Stage 11 floor
- Do not invent amalgamated multi-boost TP as the production path
- Do not invent deadwood POI keep/cut list (cleaned set admitted later; NEW BANDING path only)
- Do not conflate Band-find cross-cell labeling confluence (3-of-4 same POI×band) with Stage 12 boost-count 2/3/4 confluence
- Do not promote a thin-n single-cell band boost that failed 3-of-4 cross-cell agreement upstream

---

### 8. Heartbeat / stuck
- Heartbeat: under stack, show last shard progress + ETA (boost_family × cell)
- Stuck: no chunk advance for agreed window OR worker pool dead OR identity mismatch
- Recovery: restart Stage 10 only; preserve caches; do not reopen Stage 8 KEEP recipes unless KEEP stamp is wrong (then loop Stage 8, not “patch in place”); do not jump to confluence

---

### 9. Cheap loops KEEP
- One-cell smoke before fleet
- Cost model before PF
- n floors / thin-n flags early (feeds Stage 11 trade-count floor)
- Multiplicity control on boost-family explosion
- RTH vs overnight sanity on sample
- Cache never re-walk
- Ablate one boost family if smell appears (flag for CHECK — do not silently drop)
- Skip-omission proof vs Stage 6 SKIP_MAP
- Compounding lens note if multiple boost-family champions (not vanity PF)
- Holdout virgin
- ES+NQ overlap awareness
- Dual-lamp integrity: confluence jobs count must be zero this stage
- Respect upstream Band-find 3-of-4 cross-cell labeling (thin-n alone ≠ boost); do not re-boost from one thin cell

---

### 10. Handoff to CHECK
- Feed Stage 11 bullets in CHECK_ASSAULT_OUTLINE.md / `11_BOOST_ALONE_CHECK.md`
- Give agents: BXS_TABLE (candidate occupancy), CELL alone scores, BEST_RECIPE_BY_B, ALLOWLIST_CANDIDATES, SMOKE_IDENTITY, PROVISIONAL_BOOST_LINES, TAKE_NOTES_OPEN, MANIFEST (dual-lamp soft; boost_search_closed=false; table_ready_for_take=false), cost-applied proof, no ORB/no doubles attestation, Stage 9 GREEN, explicit “Stage-12 boost-count confluence not started; multi-B not proven from alone-path” attestation

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (Boost-alone = MUST-SHARD)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] Dual-lamp: boost marks table; confluence locked until Stage 11
- [x] B×S mark + no confluence fill stated
- [x] OPEN David items named, not invented (take rule, 1.0|1.2)
- [x] Handoff points at Stage 11 CHECK assault
