export type EntryMode = "reversal" | "continuation";

export type OverseerStatus = "moving" | "stall" | "need_power";

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

export type DashState = {
  entered: boolean;
  strategyText: string;
  entryMode: EntryMode;
  work: Record<number, WorkProgress>;
  overseer: OverseerStatus;
  activeWorkId: number;
  toast: string | null;
};

export const STORAGE_KEY = "prompt-dash-web-v1";

export const FLEET = ["NQ 5m", "ES 5m", "NQ 15m", "ES 15m"] as const;

export function emptyStrip(): StripProgress {
  return { chunks: 0, times: Array.from({ length: 10 }, () => "--:--") };
}

export function emptyWork(): WorkProgress {
  const strips: Record<string, StripProgress> = {};
  for (const c of FLEET) strips[c] = emptyStrip();
  return { strips, heartbeat: "idle", checkPassed: false, checkUnlockedOnce: false };
}

export function defaultState(): DashState {
  const work: Record<number, WorkProgress> = {};
  for (const id of [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]) {
    work[id] = emptyWork();
  }
  return {
    entered: false,
    strategyText: "",
    entryMode: "reversal",
    work,
    overseer: "moving",
    activeWorkId: 1,
    toast: null,
  };
}

export function loadState(): DashState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as DashState;
    const base = defaultState();
    return { ...base, ...parsed, work: { ...base.work, ...(parsed.work || {}) } };
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

