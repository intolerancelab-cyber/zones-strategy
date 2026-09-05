# Real-life attack foldout — Prompt Dash — 2026-09-05

**Pass:** honesty / real-life lens (demo vs live)
**Scope:** UI + docs only. No factory paths invented. No POI/banding/take locks invented.

---

## Accepted findings

1. **Enter / Simulate looked live-capable.** Splash Enter dash + Simulate progress advanced strips without a hard DEMO ONLY label. A Monday operator could read strip % and heartbeat as factory stamps.
2. **Heartbeat copy was ambiguous.** Work strips showed Heartbeat with moving timestamps from browser setInterval, not overnight factory HB.
3. **Placeholder cards said Pending** without PARKED / OPEN discipline — invited inventing banding bins, POI keep/cut lists, or final tables.
4. **POI slot is silent.** Using a blank POI card as if live-admitted is **dangerously silent** — no cleaned list exists in this product yet.
5. **Done / CHECK pass ≠ live permission.** Demo unlocks and paper seals must not be read as live_permission, emit, or auth.
6. **Operator skeleton gaps.** Machines (EPYC/Gaming), paths, stuck window N, overnight HB, auth, emit/parity were not spelled OPEN / not-implemented in a Monday runbook.
7. **README was thin** on demo-vs-live and attack-fold notes for reviewers.

---

## Fixed now (this pass)

| Item | Fix |
|------|-----|
| Splash | Hard banner: **DEMO ONLY — NOT LIVE**; Enter → **Enter (demo)**; explicit setInterval ≠ factory/overnight |
| Fixed bottom bar | Persistent non-dismissible chip **DEMO — NOT LIVE**; button **Simulate (demo)**; footer line on local sim only |
| In-dash chip | Persistent **DEMO — NOT LIVE** under header + amber honesty line |
| Strip HB | Labeled **Heartbeat (demo local)** + note: not factory overnight HB |
| Banding card | Badge **PARKED** — no invented bins |
| POI card | Badge **OPEN — DANGEROUSLY SILENT** — do not invent POI list |
| Final tables card | Badge **OPEN** — no invented numbers |
| Monday runbook | `MONDAY_OPERATOR_RUNBOOK.md` skeleton (OPEN / not-implemented fields) |
| Attack foldout | This file |
| README | Filled: what it is, how to run, demo vs live, docs link, attack notes; copied to zones-strategy-push |
| Docs sync | New docs mirrored into prompt-dash-web/docs and zones-strategy-push |

---

## Later (not this pass)

| Item | Why later |
|------|-----------|
| Real factory stamps / worker wiring | Out of scope — do not invent |
| Overnight heartbeat implementation | Explicitly **not implemented** |
| Auth | **Not implemented** |
| Emit / parity | **Later** |
| Stuck window N | **OPEN** — David must set |
| EPYC / Gaming paths | **OPEN** — David must set |
| Admit cleaned POI list | Wait David / other session — do not invent |
| New banding numbers | PARKED — THE STRATEGY branch elsewhere |
| Final / holy-grail tables | OPEN — land when ready |
| Git push | Parent only — this pass does **not** push |
| Fork UX beyond hooks | Decide later (locked as hooks-only) |

---

## Locks restated (do not break)

- Fleet: ES + NQ × 5m + 15m only (no 1m).
- CHECK unlock only when every strip 100% green (demo rule still applies in UI).
- Fail → same WORK section only; linear; no skip.
- ORB DEAD; doubles/pairs DEFUNCT.
- Reversal LOCKED 6; Continuation OPEN (wait David).
- Boost lean: keep if PF > 1.2.
- **Do not invent POI / banding / take locks.**

---

## Reviewer pointers

- UI: `prompt-dash-web/src/components/PromptDash.tsx`
- Brief: `ATTACK_BRIEF.md` (web + push copy)
- Operator: `MONDAY_OPERATOR_RUNBOOK.md`
- Handoff: `PROMPT_DASH_HANDOFF.md`
