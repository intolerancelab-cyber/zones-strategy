# Phase1 Stage-2 §4 scorecard UI

**Wired:** 2026-09-11 into Prompt Dash (`/workspace/prompt-dash-web`).

## Pointers

| Source | Role |
|--------|------|
| `/workspace/tick-handoff/PHASE1_FIRST_SWEEP_PLAN_20260911.md` §5 | Binding columns + Soft KEEP ≠ promote gate |
| `/workspace/tick-handoff/HANDOFF_FACTORY_SWEEP_LESSONS_FROM_TICK_20260911.md` | KEEP/KILL + §4 fold |
| `/workspace/tick-handoff/PHASE1_FIRST_SWEEP_SOLID_20260911.md` | Phase1 SOLID stamp context |

## UI

- **Where:** Stage 2 WORK board panel (`Stage2ScorecardPanel` in `src/components/PromptDash.tsx`).
- **Store:** `stage2Scorecard` on `DashState` in `src/lib/store.ts` (persists with existing localStorage pattern).
- **Columns:** `pf_honest, sumR_honest, n, dual_vs_noTP, dual_vs_FT_or_CW_entry, holdout_dual, year_2020_dR, year_2016_dual, soft_hole_2020, early_cut_n_dR, adverse_slip_green, commission_status, soft_keep_or_promote, notes`
- **Shelves:** Soft KEEP = amber research shelf (never paper green). Promote = emerald only after full gate.
- **Holdout cut default:** `entry_time ≥ 2022-02-09`.
- **Promote gate (short):** `dual_vs_noTP ∧ holdout_dual ∧ ¬soft_hole_only_juice ∧ year_meat_ok ∧ commission≠NA ∧ ¬ES_ONLY_if_policy_requires_NQ ∧ honesty PASS`

Operators fill lamps from measured packs — **do not invent measures**. Paper champ / live configs untouched.
