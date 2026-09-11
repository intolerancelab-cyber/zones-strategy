export type EntryMode = "reversal" | "continuation";

/** moving | stuck (stall) | need_power — stall kept for legacy localStorage */
export type OverseerStatus = "moving" | "stall" | "stuck" | "need_power";

export type AssaultVerdict = "unset" | "pass" | "fail";

export type AssaultAgentId =
  | "mistake_hunter"
  | "number_auditor"
  | "real_life_lens"
  | "claim_refuter";

export const ASSAULT_AGENTS: {
  id: AssaultAgentId;
  label: string;
  question: string;
}[] = [
  {
    id: "mistake_hunter",
    label: "Mistake hunter",
    question: "Was a mistake made?",
  },
  {
    id: "number_auditor",
    label: "Number auditor",
    question: "Are these numbers legit?",
  },
  {
    id: "real_life_lens",
    label: "Real-life lens",
    question: "Would it work in real life?",
  },
  {
    id: "claim_refuter",
    label: "Claim refuter",
    question: "What have we done wrong?",
  },
];

export type StripProgress = {
  chunks: number;
  times: string[];
};

export type WorkProgress = {
  strips: Record<string, StripProgress>;
  heartbeat: string;
  checkPassed: boolean;
  checkUnlockedOnce: boolean;
};

export type CheckAssault = Record<AssaultAgentId, AssaultVerdict>;

export type BankedChampion = {
  id: string;
  label: string;
  fromStageId: number;
  note: string;
  bankedAt: string;
};

/** Talk-box fork hooks (David choice notes) — no invented answers */
export type TalkNote = {
  text: string;
  stampedAt: string | null;
};

/** Q5 walk-forward demo stamp — lamp + seal affordance (not live scores) */
export type WalkForwardStamp = {
  /** Hold back unseen while picking recipe (demo lamp) */
  heldBack: boolean;
  /** Demo stamp that never-seen chunk was scored */
  stamped: boolean;
  stampedAt: string | null;
  /** Demo: weak walk-forward score blocks take seal / move-forward */
  weakBlocks: boolean;
  note: string;
};

/** Fork stages with talk-box hooks */
export const TALK_BOX_STAGE_IDS = [3, 9, 12] as const;

export const TALK_BOX_LABELS: Record<number, string> = {
  3: "Baseline CHECK fork — champion choice (hook only)",
  9: "Post band-sweep fork — recipe choice (hook only)",
  12: "Take-table / Q4+Q5 grill (keep PF>1.2; WF stamp; Q6 FOR NOW borrow-single)",
};

/**
 * Take-related stages showing walk-forward lamp/stamp (Q5).
 * 11 = hold-back reminder; 12/13 = stamp before take seal.
 */
export const WF_STAGE_IDS = [11, 12, 13] as const;

/* ─── Stage-2 §4 scorecard (Phase1 first-sweep) ─── */

/** Binding scorecard columns — do not invent measures; operators fill lamps. */
export const SCORECARD_COLUMNS = [
  "pf_honest",
  "sumR_honest",
  "n",
  "dual_vs_noTP",
  "dual_vs_FT_or_CW_entry",
  "holdout_dual",
  "year_2020_dR",
  "year_2016_dual",
  "soft_hole_2020",
  "early_cut_n_dR",
  "adverse_slip_green",
  "commission_status",
  "soft_keep_or_promote",
  "notes",
] as const;

export type ScorecardColumn = (typeof SCORECARD_COLUMNS)[number];

/** Soft KEEP ≠ promote — never paint Soft KEEP as paper/promote green. */
export type ScorecardShelf = "unset" | "soft_keep" | "promote";

export const DEFAULT_HOLDOUT_CUT = "2022-02-09";

/** Short promote-gate text (Stage-2 §4 / Phase1 plan §5.3). */
export const PROMOTE_GATE_TEXT =
  "dual_vs_noTP ∧ holdout_dual ∧ ¬soft_hole_only_juice ∧ year_meat_ok ∧ commission≠NA ∧ ¬ES_ONLY_if_policy_requires_NQ ∧ honesty PASS";

export type ScorecardRow = {
  id: string;
  cell: string;
  armId: string;
  /** Column values as operator-entered strings — no invented numbers. */
  values: Partial<Record<ScorecardColumn, string>>;
  shelf: ScorecardShelf;
};

/** Re-lamp / import overlap gate (Attack A11) — board-level strip. */
export type RelampImportGate = {
  /** Operator-entered import pack size n */
  importN: string;
  /** Operator-entered overlapping trade-id count */
  overlapN: string;
  /** Explicit "ids overlap verified" checkbox */
  importVerified: boolean;
  /**
   * When true, Soft KEEP / Promote require re-lamp overlap gate.
   * Operators must enable before importing CW+FR packs.
   */
  enforcePath: boolean;
};

/** Minimum overlap/n ratio when not using verified checkbox path. */
export const RELAMP_OVERLAP_FLOOR = 0.8;

export function emptyRelampImportGate(): RelampImportGate {
  return {
    importN: "",
    overlapN: "",
    importVerified: false,
    enforcePath: false,
  };
}

export type Stage2Scorecard = {
  holdoutCut: string;
  rows: ScorecardRow[];
  relamp: RelampImportGate;
};

export function emptyScorecardRow(
  cell = "ES 15m",
  id?: string,
): ScorecardRow {
  return {
    id: id ?? `row_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    cell,
    armId: "",
    values: {},
    shelf: "unset",
  };
}

export function emptyStage2Scorecard(): Stage2Scorecard {
  return {
    holdoutCut: DEFAULT_HOLDOUT_CUT,
    rows: [],
    relamp: emptyRelampImportGate(),
  };
}

/** Normalize operator lamp text for case-insensitive checks. */
export function lampNorm(v: string | undefined | null): string {
  return (v ?? "").trim().toUpperCase();
}

/** PASS/YES/TRUE/GREEN/OK style — not empty / FAIL / NO. */
export function lampLooksPass(v: string | undefined | null): boolean {
  const t = lampNorm(v);
  if (!t) return false;
  if (
    t === "FAIL" ||
    t === "NO" ||
    t === "FALSE" ||
    t === "RED" ||
    t === "LOSE" ||
    t.startsWith("FAIL") ||
    t.startsWith("NO ") ||
    t.includes(" FAIL")
  ) {
    return false;
  }
  return (
    t === "PASS" ||
    t === "YES" ||
    t === "TRUE" ||
    t === "GREEN" ||
    t === "OK" ||
    t.startsWith("PASS") ||
    t.startsWith("YES") ||
    t.startsWith("TRUE") ||
    t.startsWith("GREEN") ||
    t.startsWith("OK") ||
    /\b(PASS|YES|TRUE|GREEN|OK)\b/.test(t)
  );
}

function lampEmpty(v: string | undefined | null): boolean {
  return lampNorm(v) === "";
}

function lampLooksFailOrEmpty(v: string | undefined | null): boolean {
  const t = lampNorm(v);
  if (!t) return true;
  return (
    t === "FAIL" ||
    t === "NO" ||
    t === "FALSE" ||
    t === "RED" ||
    t === "LOSE" ||
    t.startsWith("FAIL")
  );
}

function softHoleIndicatesYes(v: string | undefined | null): boolean {
  const t = lampNorm(v);
  if (!t) return false;
  return (
    t === "YES" ||
    t === "SOFT" ||
    t === "TRUE" ||
    t === "SOFT_HOLE" ||
    t.startsWith("YES") ||
    t.startsWith("SOFT") ||
    t.includes("SOFT_HOLE")
  );
}

function softHoleOnlyStyle(v: string | undefined | null): boolean {
  const t = lampNorm(v);
  if (!t) return false;
  return (
    t.includes("ONLY") ||
    t.includes("SOFT_HOLE_ONLY") ||
    t.includes("HOLE_ONLY") ||
    t.includes("SOLE")
  );
}

export type PromoteGateResult = {
  ok: boolean;
  missing: string[];
  warnings: string[];
};

/**
 * Practical UI promote gate from operator-entered §4 column strings.
 * Never auto-promotes — caller must still confirm Soft KEEP→Promote.
 */
export function evaluatePromoteGate(row: ScorecardRow): PromoteGateResult {
  const v = row.values || {};
  const missing: string[] = [];
  const warnings: string[] = [];

  if (!lampLooksPass(v.dual_vs_noTP)) {
    missing.push("dual_vs_noTP (need PASS/YES/TRUE/GREEN/OK)");
  }
  if (!lampLooksPass(v.holdout_dual)) {
    missing.push("holdout_dual (need PASS/YES/TRUE/GREEN/OK)");
  }

  const comm = lampNorm(v.commission_status);
  if (
    !comm ||
    comm === "NA" ||
    comm === "COMMISSION_NA" ||
    comm === "N/A" ||
    comm.startsWith("COMMISSION_NA")
  ) {
    missing.push("commission_status (present and ≠ COMMISSION_NA/NA)");
  }

  // ¬soft_hole_only_juice
  if (softHoleOnlyStyle(v.soft_hole_2020)) {
    missing.push("soft_hole_only_juice (soft_hole_2020 looks sole-juice / ONLY)");
  } else if (
    softHoleIndicatesYes(v.soft_hole_2020) &&
    lampLooksFailOrEmpty(v.year_2016_dual) &&
    lampLooksFailOrEmpty(v.year_2020_dR)
  ) {
    missing.push(
      "soft_hole_only_juice (soft_hole YES/SOFT with year lamps empty/FAIL)",
    );
  }

  // year_meat_ok — prefer year_2016_dual not empty FAIL
  if (lampLooksFailOrEmpty(v.year_2016_dual)) {
    missing.push("year_meat_ok (year_2016_dual empty/FAIL)");
  }

  // honesty PASS — pf_honest required; fantasy-only / honesty FAIL blocks
  if (lampEmpty(v.pf_honest)) {
    missing.push("honesty (pf_honest empty)");
  }
  const notes = lampNorm(v.notes);
  const honestyBlob = `${lampNorm(v.pf_honest)} ${notes}`;
  if (
    honestyBlob.includes("FANTASY-ONLY") ||
    honestyBlob.includes("FANTASY ONLY") ||
    honestyBlob.includes("HONESTY FAIL") ||
    honestyBlob.includes("HONESTY_FAIL") ||
    (/\bFANTASY\b/.test(honestyBlob) && honestyBlob.includes("ONLY"))
  ) {
    missing.push("honesty PASS (fantasy-only / honesty FAIL in lamps/notes)");
  }

  // ¬ES_ONLY_if_policy_requires_NQ — block explicit ES_ONLY tags in notes/lamps
  const esOnlyBlob = `${notes} ${lampNorm(v.dual_vs_noTP)} ${lampNorm(
    v.soft_keep_or_promote,
  )}`;
  if (
    esOnlyBlob.includes("ES_ONLY") ||
    esOnlyBlob.includes("ES-ONLY") ||
    /\bES ONLY\b/.test(esOnlyBlob)
  ) {
    missing.push("¬ES_ONLY_if_policy_requires_NQ (clear ES_ONLY tag or ASK DAVID)");
  }

  // adverse_slip_green — optional warn, not hard block
  if (lampEmpty(v.adverse_slip_green)) {
    warnings.push("adverse_slip_green empty (warn only)");
  } else if (lampLooksFailOrEmpty(v.adverse_slip_green) && !lampLooksPass(v.adverse_slip_green)) {
    warnings.push("adverse_slip_green not GREEN (warn only)");
  }

  return { ok: missing.length === 0, missing, warnings };
}

/** Soft KEEP with empty dual or honesty lamps needs confirm. */
export function softKeepNeedsEmptyLampConfirm(row: ScorecardRow): boolean {
  const v = row.values || {};
  return lampEmpty(v.dual_vs_noTP) || lampEmpty(v.pf_honest);
}

export type RelampGateResult = {
  ok: boolean;
  reason: string;
};

/**
 * Re-lamp import overlap gate: both n and overlap filled AND
 * (overlap/n ≥ RELAMP_OVERLAP_FLOOR OR importVerified).
 */
export function evaluateRelampOverlapGate(
  relamp: RelampImportGate | undefined | null,
): RelampGateResult {
  const g = relamp || emptyRelampImportGate();
  const nStr = (g.importN ?? "").trim();
  const oStr = (g.overlapN ?? "").trim();
  if (!nStr || !oStr) {
    return {
      ok: false,
      reason:
        "Re-lamp gate: fill import n and overlap n (operators must verify before importing CW+FR packs — Attack A11)",
    };
  }
  const n = Number(nStr);
  const o = Number(oStr);
  if (!Number.isFinite(n) || !Number.isFinite(o) || n <= 0) {
    return {
      ok: false,
      reason: "Re-lamp gate: import n and overlap must be finite numbers with n > 0",
    };
  }
  if (o < 0 || o > n) {
    return {
      ok: false,
      reason: "Re-lamp gate: overlap must be in [0, n]",
    };
  }
  const ratio = o / n;
  if (ratio >= RELAMP_OVERLAP_FLOOR) {
    return { ok: true, reason: `overlap/n=${ratio.toFixed(3)} ≥ ${RELAMP_OVERLAP_FLOOR}` };
  }
  if (g.importVerified) {
    return {
      ok: true,
      reason: `verified checkbox with n=${n} overlap=${o} (ratio ${ratio.toFixed(3)} < ${RELAMP_OVERLAP_FLOOR})`,
    };
  }
  return {
    ok: false,
    reason: `Re-lamp gate: overlap/n=${ratio.toFixed(3)} < ${RELAMP_OVERLAP_FLOOR} — raise overlap or check "ids overlap verified"`,
  };
}

export type DashState = {
  entered: boolean;
  strategyText: string;
  entryMode: EntryMode;
  work: Record<number, WorkProgress>;
  checkAssault: Record<number, CheckAssault>;
  bankedChampions: BankedChampion[];
  talkNotes: Record<number, TalkNote>;
  walkForward: Record<number, WalkForwardStamp>;
  /** Stage-2 §4 Phase1 scorecard board (Soft KEEP ≠ promote). */
  stage2Scorecard: Stage2Scorecard;
  overseer: OverseerStatus;
  activeWorkId: number;
  toast: string | null;
};

export const STORAGE_KEY = "prompt-dash-web-v3";

export const FLEET = ["NQ 5m", "ES 5m", "NQ 15m", "ES 15m"] as const;

export const WORK_IDS = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] as const;

/** CHECK stage ids + Stage 20 Final Assault (WORK with assault gate) */
export const ASSAULT_STAGE_IDS = [3, 5, 7, 9, 11, 13, 15, 17, 19, 20] as const;

export function emptyStrip(): StripProgress {
  return { chunks: 0, times: Array.from({ length: 10 }, () => "--:--") };
}

export function emptyWork(): WorkProgress {
  const strips: Record<string, StripProgress> = {};
  for (const c of FLEET) strips[c] = emptyStrip();
  return { strips, heartbeat: "idle", checkPassed: false, checkUnlockedOnce: false };
}

export function emptyAssault(): CheckAssault {
  return {
    mistake_hunter: "unset",
    number_auditor: "unset",
    real_life_lens: "unset",
    claim_refuter: "unset",
  };
}

export function emptyTalkNote(): TalkNote {
  return { text: "", stampedAt: null };
}

export function emptyWalkForward(): WalkForwardStamp {
  return {
    heldBack: false,
    stamped: false,
    stampedAt: null,
    weakBlocks: false,
    note: "",
  };
}

export function defaultState(): DashState {
  const work: Record<number, WorkProgress> = {};
  for (const id of WORK_IDS) {
    work[id] = emptyWork();
  }
  const checkAssault: Record<number, CheckAssault> = {};
  for (const id of ASSAULT_STAGE_IDS) {
    checkAssault[id] = emptyAssault();
  }
  const talkNotes: Record<number, TalkNote> = {};
  for (const id of TALK_BOX_STAGE_IDS) {
    talkNotes[id] = emptyTalkNote();
  }
  const walkForward: Record<number, WalkForwardStamp> = {};
  for (const id of WF_STAGE_IDS) {
    walkForward[id] = emptyWalkForward();
  }
  return {
    entered: false,
    strategyText: "",
    entryMode: "reversal",
    work,
    checkAssault,
    bankedChampions: [],
    talkNotes,
    walkForward,
    stage2Scorecard: emptyStage2Scorecard(),
    overseer: "moving",
    activeWorkId: 1,
    toast: null,
  };
}

export function loadState(): DashState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem("prompt-dash-web-v2") ??
      localStorage.getItem("prompt-dash-web-v1");
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as Partial<DashState>;
    const base = defaultState();
    return {
      ...base,
      ...parsed,
      work: { ...base.work, ...(parsed.work || {}) },
      checkAssault: { ...base.checkAssault, ...(parsed.checkAssault || {}) },
      bankedChampions: parsed.bankedChampions || [],
      talkNotes: { ...base.talkNotes, ...(parsed.talkNotes || {}) },
      walkForward: { ...base.walkForward, ...(parsed.walkForward || {}) },
      stage2Scorecard: {
        ...base.stage2Scorecard,
        ...(parsed.stage2Scorecard || {}),
        holdoutCut:
          parsed.stage2Scorecard?.holdoutCut || base.stage2Scorecard.holdoutCut,
        rows: parsed.stage2Scorecard?.rows ?? base.stage2Scorecard.rows,
        relamp: {
          ...emptyRelampImportGate(),
          ...(parsed.stage2Scorecard?.relamp || {}),
        },
      },
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state: DashState) {
  if (typeof window === "undefined") return;
  const { toast, ...rest } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
}

export function allStripsComplete(wp: WorkProgress): boolean {
  return FLEET.every((c) => (wp.strips[c]?.chunks ?? 0) >= 10);
}

/** All four assault roles must be PASS (any fail/unset → not ready). */
export function assaultAllPass(assault: CheckAssault | undefined): boolean {
  if (!assault) return false;
  return ASSAULT_AGENTS.every((a) => assault[a.id] === "pass");
}

/** Any role FAIL → CHECK fail / cannot Pass. */
export function assaultHasFail(assault: CheckAssault | undefined): boolean {
  if (!assault) return false;
  return ASSAULT_AGENTS.some((a) => assault[a.id] === "fail");
}

export function formatTime(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Prior WORK id for a CHECK stage (CHECK is always workId + 1). */
export function workIdForCheck(checkId: number): number {
  return checkId - 1;
}

/** Fleet should not paint while stalled/stuck/need_power. */
export function overseerBlocksPaint(status: OverseerStatus): boolean {
  return status === "stall" || status === "stuck" || status === "need_power";
}

export function isStuckStatus(status: OverseerStatus): boolean {
  return status === "stall" || status === "stuck" || status === "need_power";
}

export function overseerLabel(status: OverseerStatus): string {
  if (status === "moving") return "MOVING";
  if (status === "need_power") return "NEED POWER";
  return "STUCK"; // stall | stuck
}

/** Demo helper: take seal blocked when weak WF lamp is on after stamp attempt. */
export function walkForwardBlocksSeal(wf: WalkForwardStamp | undefined): boolean {
  if (!wf) return false;
  return wf.weakBlocks === true;
}
