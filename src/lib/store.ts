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

/** Fork stages with talk-box hooks */
export const TALK_BOX_STAGE_IDS = [3, 9, 12] as const;

export const TALK_BOX_LABELS: Record<number, string> = {
  3: "Baseline CHECK fork — champion choice (hook only)",
  9: "Post band-sweep fork — recipe choice (hook only)",
  12: "Boost keep 1.0 vs 1.2 (hook only — before confluence check)",
};

export type DashState = {
  entered: boolean;
  strategyText: string;
  entryMode: EntryMode;
  work: Record<number, WorkProgress>;
  checkAssault: Record<number, CheckAssault>;
  bankedChampions: BankedChampion[];
  talkNotes: Record<number, TalkNote>;
  overseer: OverseerStatus;
  activeWorkId: number;
  toast: string | null;
};

export const STORAGE_KEY = "prompt-dash-web-v2";

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
  return {
    entered: false,
    strategyText: "",
    entryMode: "reversal",
    work,
    checkAssault,
    bankedChampions: [],
    talkNotes,
    overseer: "moving",
    activeWorkId: 1,
    toast: null,
  };
}

export function loadState(): DashState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem("prompt-dash-web-v1");
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
