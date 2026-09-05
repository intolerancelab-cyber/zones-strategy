export type EntryMode = "reversal" | "continuation";

export type OverseerStatus = "moving" | "stall" | "need_power";

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

export type DashState = {
  entered: boolean;
  strategyText: string;
  entryMode: EntryMode;
  work: Record<number, WorkProgress>;
  checkAssault: Record<number, CheckAssault>;
  bankedChampions: BankedChampion[];
  overseer: OverseerStatus;
  activeWorkId: number;
  toast: string | null;
};

export const STORAGE_KEY = "prompt-dash-web-v2";

export const FLEET = ["NQ 5m", "ES 5m", "NQ 15m", "ES 15m"] as const;

export const WORK_IDS = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] as const;

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

export function defaultState(): DashState {
  const work: Record<number, WorkProgress> = {};
  for (const id of WORK_IDS) {
    work[id] = emptyWork();
  }
  const checkAssault: Record<number, CheckAssault> = {};
  for (const id of [3, 5, 7, 9, 11, 13, 15, 17, 19]) {
    checkAssault[id] = emptyAssault();
  }
  return {
    entered: false,
    strategyText: "",
    entryMode: "reversal",
    work,
    checkAssault,
    bankedChampions: [],
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

export function formatTime(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Prior WORK id for a CHECK stage (CHECK is always workId + 1). */
export function workIdForCheck(checkId: number): number {
  return checkId - 1;
}
