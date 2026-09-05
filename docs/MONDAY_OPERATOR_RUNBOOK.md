# Monday operator runbook — Prompt Dash (skeleton)

**Date skeleton:** 5 Sep 2026 (London)
**Audience:** David / Monday operator
**Honesty:** This is a paper/demo UI + prompts pack. **Paper seal ≠ live_permission.**

---

## Machines

| Machine | Role | Status |
|---------|------|--------|
| EPYC | Heavy compute / shard host | **OPEN** — David must confirm path + availability |
| Gaming | Companion / overflow cores | **OPEN** — David must confirm path + availability |

Do not invent hostnames, SSH targets, or core counts here.

---

## Paths

| Path | Purpose | Status |
|---------|---------|--------|
| Factory / data roots | Live stamps, overnight HB | **OPEN** — David must set |
| Prompt packs (`prompt-dash/`) | Paper WORK/CHECK prompts | Present (docs + `/prompts`) |
| Web demo (`prompt-dash-web/`) | Next.js localhost UI | Present |
| Push staging (`zones-strategy-push/`) | Sync copy for parent push | Present — **do not git push from this pass** |

---

## Branch note

- New banding / deadwood POI work referenced from THE STRATEGY branch `codex/rty-replay-parity-20260702`.
- Prompt-dash **admits** cleaned POI later; it does **not** invent keep/cut lists.
- Active web demo branch / push branch: **OPEN** — parent decides; this room does not push.

---

## Stuck window N

- Stuck / stall detection window **N** = **OPEN**
- **David must set N** before treating any stall toast as operational.
- Current UI "Inject stall" / Overseer STALL = **demo toggles only**.

---

## Overnight heartbeat (HB)

- **Not implemented.**
- Demo heartbeats are **local setInterval** in the browser.
- They are **NOT** factory stamps or overnight HB.

---

## Auth

- **Not implemented.**
- No login and no factory auth bridge in this UI.

---

## Emit / parity

- Emit path and parity checks = **later**.
- Do not treat demo CHECK pass or Done green as emit-ready.

---

## How to run the demo

Use the Next.js app under prompt-dash-web (or the zones-strategy-push sync copy).
- Run the local dev server on port 3000.
- Splash + fixed bar show DEMO — NOT LIVE.
- Button Simulate (demo) fills fleet strips locally — not factory.
- Build must succeed before any parent push.
- Do not invent POI / banding / take locks.

---

## What Done means

| Claim | Meaning |
|-------|---------|
| Stage 21 Done green (demo) | UI unlocked after demo fleet + CHECK path — **paper seal** |
| Research book seal (prompt text) | Paper readiness language in prompts |
| **live_permission** | **NOT granted by Done.** Requires David + real factory path, auth, HB, emit/parity |

**Paper seal ≠ live_permission.**

---

## Placeholders (do not fill with invented lists)

| Card | Badge |
|------|--------|
| New banding | **PARKED** |
| Cleaned POI list | **OPEN — DANGEROUSLY SILENT** if used for live (no list admitted) |
| Final tables | **OPEN** |

---

## Related docs

- `REAL_LIFE_ATTACK_FOLDOUT_2026-09-05.md` — accepted honesty findings
- `PROMPT_DASH_HANDOFF.md` — product handoff
- `docs/` copies inside `prompt-dash-web` / `zones-strategy-push`
