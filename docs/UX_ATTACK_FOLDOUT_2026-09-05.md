# UX Attack Foldout — Prompt Dash (5 Sep 2026)

**Target:** `/workspace/prompt-dash-web` (sources synced to `zones-strategy-push` when present)
**Sources touched:** `PromptDash.tsx`, `store.ts` (stages.ts unchanged map; Stage 20 assault gated in UI)
**Date:** Saturday 5 Sep 2026 (London / UTC+1)

---

## CRITICAL

### C1 — Enter-dash Freeze trap (FIXED)
**Bug:** `defaultState.activeWorkId = 1` + `simulateTick` only painted `activeWorkId`. Pass CHECK advanced via `checkId - 1` to next WORK. Stage 1 WORK has **no intervening CHECK** before Stage 2 WORK, so Stage 1 never advanced to Stage 2 — freeze at Freeze/admit.

**Fix:** When strips for `activeWorkId` hit 100%:
- If next stage (`id + 1`) is **WORK** → auto-advance `activeWorkId` to that WORK.
- If next is **CHECK** → stop painting; wait for Pass CHECK.
- After Pass CHECK → set `activeWorkId` to the next WORK after that CHECK.

**Repro after fix:** Enter → Simulate → Stage 1 fills → Stage 2 fills → … until a CHECK; Pass CHECK (after 4x assault PASS) → next WORK fills.

### C2 — Pass CHECK requires four-agent assault (FIXED)
**Bug:** `passCheck` only required `allStripsComplete`. Assault toggles were cosmetic.

**Fix:**
- `assaultAllPass()` / `assaultHasFail()` helpers in `store.ts`.
- Pass CHECK disabled until strips 100% **and** all four roles PASS.
- Any role FAIL → cannot Pass (toast + button disabled).
- Fail CHECK still works (and clears assault — see H7).

---

## HIGH

### H9 — Done must not seal without Stage 20 Final Assault (FIXED)
**Bug:** Done unlocked on Stage 19 CHECK pass + Stage 20 strips only. Stage 20 is Final Assault WORK but had no four-agent gate.

**Fix:**
- `checkAssault[20]` added to default state (`ASSAULT_STAGE_IDS`).
- Final Assault UI under Stage 20 WORK (same four agents).
- Done ready = Stage 19 CHECK passed **and** Stage 20 strips 100% **and** Stage 20 assault 4x PASS (or explicit Pass Final Assault).
- Outline: PASS Stage 20 assault → 21 Done.

### H2 — need_power must stall fleet (FIXED)
**Bug:** `setNeedPower` did not stop the sim interval; `simulateTick` still painted under `need_power` (only early-returned on `stall`).

**Fix:**
- `setNeedPower` calls `stopSimulate()` (same as inject stall).
- `overseerBlocksPaint()` — `simulateTick` does **not** paint while `need_power` | `stuck` | `stall`.

### H3 — Add stuck status under stack (FIXED)
**Bug:** Overseer only showed moving / stall / need_power; no stuck/wait under strip stack.

**Fix:**
- Overseer enum adds `stuck` (`stall` kept for legacy localStorage; UI maps stall→STUCK).
- Inject stall sets `stuck`.
- Under each WORK strip stack: stuck/wait banner when `stuck` | `stall` | `need_power`.

### H1 — Talk-box hooks at forks (FIXED)
**Forks:** Baseline CHECK (~3), post band-sweep (~9), take-table / Q4 grill (~12; keep line LOCKED PF > 1.2).

**Fix:** Talk-box UI (textarea + stamp note) at stages 3, 9, 12. Persist `talkNotes` in store. Hooks only — no invented answers.

### H7 — Fail CHECK re-locks Pass (FIXED)
**Bug:** After Fail, strips still 100% → Pass immediately re-enabled without re-doing assault.

**Fix:** `failCheck` clears assault to `emptyAssault()` and sets `checkPassed: false`. Pass stays disabled until all four re-PASS.

---

## MEDIUM

### M2 — Stage 1 footer (FIXED)
**Bug:** Stage 1 footer always said next orange CHECK.

**Fix:** Footer is stage-aware:
- Stage 1 → Next is Stage 2 WORK (auto-advances when strips hit 100%).
- WORK followed by CHECK → orange CHECK unlock copy.
- Stage 20 → Done / Final Assault copy.

---

## Helpers added (store.ts)
| Helper | Role |
|--------|------|
| assaultAllPass | All four roles === pass |
| assaultHasFail | Any role === fail |
| overseerBlocksPaint | stall / stuck / need_power |
| isStuckStatus / overseerLabel | UI under stack + overseer badge |
| ASSAULT_STAGE_IDS | CHECK ids + 20 |
| TALK_BOX_STAGE_IDS / talkNotes | Fork hooks persistence |
