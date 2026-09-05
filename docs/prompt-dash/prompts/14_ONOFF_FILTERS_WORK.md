# Stage 14 — On/off filters WORK handbook (5 Sep 2026)

Owner: DASHBOARD OVERSEER. Paper only. No factory code edits.
Source locks: CURRENT_STAGE_MAP.md, PROMPT_DASH_HANDOFF.md, WORK_HANDBOOK_TEMPLATE.md, CHECK_ASSAULT_OUTLINE.md (Stage 15 bullets), DAVID_NOTES_2026-09-05_TALKBOX_TAKE.md.

**Product dead (never revive):** Doubles/pairs = DEFUNCT. ORB = DEAD.
**Fleet:** ES + NQ × 5m + 15m only (no 1m). 10% progress strips per cell; orange CHECK only when all green.
**Fork:** hooks only.
**Band PF provisional:** skip <0.75; revival ~0.75; boost lines 1.0|1.2 (not locked).
**Dual-lamp:** boost-alone sealed before confluence; holy grail = final table (already grilled at Stage 13) — do not reopen boost search.
**On/off filters:** binary no-line states (trend/range, gamma env, calendar, half-days, …) that affect the **WHOLE table**, not a single band. **PARKED detail — ask David later / other session. DO NOT invent the filter list.**
**NEW BANDING (David confirmed, branch `codex/rty-replay-parity-20260702`):** fewer/tighter bands near the level → sweeps → **REMOVE DEADWOOD POIs**. Prompt-dash admits cleaned POI set later — **do not invent keep/cut list**.
**Cross-cell band confluence (David lock — Band-find labeling, NOT boost-count confluence):** ≥3 of 4 same POI×band / same sign for thin-n; SEPARATE from Stage 12 boost-count 2/3/4. Do not conflate.

---

## MUST-SHARD vs MUST-NOT (reminder)

| MUST-SHARD (heavy compute) | MUST-NOT (identity / decision) |
|----------------------------|--------------------------------|
| Bar load / prior maps / sweeps / boost / confluence *(prior)* | Freezes / admit seals |
| **On/off filter application / table-wide re-score** ← this stage *(when list is supplied)* | Checks (all of them) |
| Assemble / Stress / MC *(later)* | Take / KEEP final decisions *(OPEN)* |
| | Hold / grade alone |
| | All-cell barrier wait (100% fleet) |
| | Speedy lamp / emit-covered report steps |
| | Champion talk-box choice |
| | **Inventing the on/off filter list** |
| | Inventing deadwood POI keep/cut list |
| | Band-style sweep of on/off filters |
| | Re-opening boost search |

**Hard rule:** When a David-supplied filter list exists, applying filters / table-wide re-score **is** MUST-SHARD. Wait 100% across all fleet cells before Stage 15 CHECK unlock. Do not shard the barrier wait, the CHECK, or invent filters. **If list not yet supplied → scaffold + PARK stamp only; ask David; do not invent.**

---

### 0. Header
- **Stage # / name:** 14 — On/off filters
- **Kind:** WORK
- **Goal:** Scaffold handbook for binary no-line on/off filter states that affect the **whole table**; apply only a **David-supplied** (or other-session) filter list when present; stamp PARKED if list absent; unlock Stage 15 CHECK. Does **not** invent filters or run band surgery.
- **Unlocks next:** Stage 15 CHECK
- **Fleet cells:** ES 5m, ES 15m, NQ 5m, NQ 15m
- **STRATEGY INPUT:** Checkbox selects entry set — Reversal LOCKED 6 vs Continuation OPEN (catalog minus `orb_*`; do not claim locked). On/off consumes stamped take-line / holy-grail candidate under that set.

---

### 1. Goal
- **Done means:**
  - Handbook scaffold stamped: purpose = **table-wide** effect of binary on/off states (no physical line on the chart).
  - Explicit `FILTER_LIST_SOURCE` stamp: either (a) David / other-session supplied list path + hash, or (b) `PARKED — ask David later; list_not_invented=true`.
  - If list supplied: apply each filter as binary gate to the **whole assembled take-table posture** (not per-band surgery); re-score table-wide under cost model; stamp on vs off deltas per fleet cell; strips 100% green.
  - If list parked: write empty/park scaffold stamps; paint strips via park path (honest park chunks — no fake “applied” work); unlock CHECK for park integrity assault.
- **Does NOT decide:**
  - The filter list itself (OPEN — ask David / other session).
  - Band find / sweep re-litigation; boost re-search; take-rule lock.
  - Deadwood POI keep/cut list.
  - Assemble / hold-flat / stress / luck (later stages).
  - Continuous “filter strength” lines (binary only).
  - Holdout take using last ~20% as research fuel.

---

### 2. Stamped inputs (must exist before start)
If missing → STOP, do not invent.
- Stage 1 Freeze/admit: BOOK_SEAL, COST_MODEL, SESSION_LOCKS, ENTRY_SET, PROVISIONAL_BAND_PF_NOTE, MANIFEST
- Stages 2–12 greens + confluence TAKE_LINE + HOLY_GRAIL_CANDIDATE + ALLOWLIST_USED + dual-lamp intact
- Stage 13 GREEN: `checks/stage_13_confluence/GREEN.stamp`, TAKE_LINE_REVIEWED, DUAL_LAMP (`boost_search_open=false`)
- Cache pins: bars + POI + KEEP + boost + confluence hashes must match; mismatch → rebuild prior section
- Entry-method set = STRATEGY INPUT checkbox (match Freeze); **strip orb_*; refuse doubles/pairs**
- **Filter list:** only if David/other-session artifact present — else PARK; **DO NOT invent list**
- **Banding / POI posture:** NEW BANDING expected upstream; deadwood POI list not invented

---

### 3. Full sharding handbook
#### 3a. Split
- **Unit (when list supplied):** on/off jobs = (cell × filter_id × state∈{ON,OFF} × table_slice) — **table-wide**, not band×recipe surgery
- Example filter *families* (illustrative only — **not a locked list**): trend vs range day; positive/negative gamma env; calendar / half-day / holiday flags; similar binary state flags David may supply later
- Expected jobs: moderate (filters × 2 states × 4 cells) when list exists; near-zero when PARKED
- **Smoke:** YES when list supplied — one cell, one filter ON vs OFF table delta before fleet
- **Never** invent filter_ids to fill job queue
- **Never** apply band-style wide→narrow sweep to on/off
- **Never** re-enable <0.75 skip-zone trades via a “filter”

#### 3b. Cores
- Default `n_workers=1`; opt-in high-n on EPYC (up to 64) + Gaming if room allows **only when real filter jobs exist**
- Honest stamp: `workers_used = min(requested_workers, item_count)` — if PARKED with 0 filters, workers_used must be 0 or 1 on park smoke, never pretend 64
- Identity hash must match one-core smoke when compute ran

#### 3c. Hash-first reuse
1. Lookup on/off hash for (cell, filter_list_hash, filter_id, state, take_line_hash, cost_model_id, bar_hash, poi_map_hash, code_pin)
2. Hit → paint from cache; do not re-walk bars/POIs/confluence
3. Miss → run shard; write hash + artifact
4. Prompt-only tweaks never invalidate prior caches
5. Park path: hash the PARKED stamp + prior take-line hash only — no fake filter hashes

#### 3d. Machines
- Heavy shards: EPYC side copy / approved dest tree; Gaming only if room allows
- **This room:** paper prompts + dash only — no live engine, no fold, no VPS, no deleting factory ORB code elsewhere

---

### 4. Step-by-step (overseer path)
1. Verify Stage 13 GREEN + dual-lamp `boost_search_open=false` + TAKE_LINE_REVIEWED; STOP if missing.
2. Read STRATEGY INPUT; strip orb_*; refuse doubles/pairs; Continuation stamped OPEN if selected.
3. **Filter list gate:** look for David / other-session supplied list artifact.
   - **Absent → PARK path:** stamp `onoff/PARKED.json` with `ask_David_later=true`, `list_not_invented=true`, illustrative families noted as **non-authoritative examples only**; skip invent; go to step 10 park paint.
   - **Present → APPLY path:** load list + hash; refuse any orb_*/doubles disguised as “calendar”; continue.
4. One-cell smoke (APPLY only): one filter ON vs OFF; cost-applied table-wide delta; workers_used honesty; hash pin.
5. Identity check (APPLY only): n_workers=1 hash == n_workers=k on same tiny set.
6. Fan out fleet (APPLY only): enqueue cell × filter × {ON,OFF}; score **whole-table** effect (take-line squares collectively), not per-band retune.
7. Assert skip-zone omission still holds under every ON state (filters must not leak Stage 6 SKIP_MAP trades).
8. Holdout last ~20% untouched.
9. Flag any filter whose live proxy is undefined (e.g. gamma unavailable) for Stage 15 real-life WARN — do not invent a proxy.
10. Paint strips 10%…100% (APPLY: real filter chunks; PARK: honest park/scaffold chunks — no fake applied ticks); heartbeat under stack.
11. Write on/off stamps + MANIFEST + park-or-apply attestation; barrier → unlock Stage 15 CHECK (do not auto-pass; do not claim filter list locked if parked).

---

### 5. Progress / UI paint
- Four stacked blue strips; each 10 chunks (10%…100%) + timestamps
- Heartbeat every N seconds; stuck if no chunk advance or worker death
- Silent Zero / fake tick / percent paint without jobs → fail this section
- PARK path: strips may advance on scaffold/park work only — label chunks `PARK` / `scaffold`, never `filter_applied` without a real list
- Orange Stage 15 CHECK locked until every strip 100% green

---

### 6. Success stamps
- `onoff/PARKED.json` — present when list absent: ask_David_later=true, list_not_invented=true, illustrative_examples_non_authoritative=[trend/range, gamma, calendar, half-days]
- `onoff/FILTER_LIST.json` — present when supplied: filter_ids, definitions, source_session, list_hash (**David-authored only**)
- `onoff/CELL/{cell}.json` — table-wide ON vs OFF deltas per filter (APPLY) or park note (PARK)
- `onoff/TABLE_WIDE_EFFECT.json` — book-level how filters move the whole take-table (not band surgery)
- `onoff/SKIP_OMISSION_UNDER_FILTERS.json` — proof skip zones stay omitted under ON states
- `onoff/MANIFEST.json` — mode=`PARKED|APPLIED`, entry_set_id, lock_state, dual_lamp intact, no_ORB / no_doubles, workers_used, hashes, NEW_BANDING note, deadwood_poi_list=`NOT_INVENTED`, filter_list_invented=false
- `onoff/SMOKE_IDENTITY.json` — one-core vs multi-core (APPLY) or park-smoke hash (PARK)
- Strip paint 100% × 4 cells
- What CHECK will read: park-or-apply honesty, no invented list, table-wide (not band) scope, skip omission, no ORB/no doubles, dual-lamp intact, holdout virgin

---

### 7. What NOT to do
- **Do not invent the on/off filter list** — ask David / other session
- Do not run band-style sweep / wide→narrow on filters
- Do not treat filters as continuous lines or per-band surgery
- Do not silently re-enable skip-zone trades
- Do not reintroduce ORB/session junk as “calendar filter”
- Do not reopen boost search or re-litigate take rule
- Do not invent deadwood POI keep/cut list
- Do not conflate Band-find 3-of-4 labeling confluence with boost-count confluence
- Do not sweep doubles/pairs (DEFUNCT)
- Do not include orb_* (ORB DEAD)
- Do not claim Continuation LOCKED
- Do not shard CHECK / barrier / take decision
- Do not edit factory code from this room
- Do not contaminate holdout
- Do not unlock CHECK until all strips green
- Do not pretend PARKED work was APPLY (fake ticks)

---

### 8. Heartbeat / stuck
- Heartbeat: under stack — last filter × cell × state (APPLY) or park chunk (PARK) + ETA
- Stuck: no chunk advance / worker death / identity mismatch / invented-list smell
- Recovery: restart Stage 14 only; preserve caches; if take-line wrong → loop Stage 12/13; **never invent filters to “unstick”**

---

### 9. Cheap loops KEEP
- One-cell smoke before fleet (APPLY)
- Cost model before PF / table deltas
- Park honesty (no fake applied jobs)
- Skip-omission under every ON state
- Table-wide scope check (not band surgery)
- Cache never re-walk
- Live-proxy availability flag (gamma etc.) for CHECK
- Holdout virgin
- Dual-lamp intact; boost job count stays zero
- Deadwood POI list not invented; filter list not invented
- RTH vs overnight / half-day calendar sanity on sample when calendar filters exist

---

### 10. Handoff to CHECK
- Feed Stage 15 bullets in CHECK_ASSAULT_OUTLINE.md / `15_ONOFF_FILTERS_CHECK.md`
- Give agents: PARKED or FILTER_LIST + CELL + TABLE_WIDE_EFFECT + SKIP_OMISSION_UNDER_FILTERS + SMOKE_IDENTITY + MANIFEST, Stage 13 GREEN, dual-lamp proof, no invented-list attestation, no ORB/no doubles, NEW BANDING / deadwood-not-invented attestation

---

## Author checklist
- [x] All 10 template sections filled
- [x] MUST-SHARD vs MUST-NOT respected (incl. do-not-invent list)
- [x] ORB DEAD + doubles DEFUNCT stated
- [x] Fleet 4 cells + 10% strips + heartbeat + CHECK barrier stated
- [x] Hash-first reuse stated
- [x] OPEN David items named (filter list parked), not invented
- [x] Handoff points at matching CHECK assault bullets
- [x] Cross-cell band confluence ≠ boost-count confluence noted
- [x] NEW BANDING / deadwood noted
