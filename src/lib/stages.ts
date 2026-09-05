export type StageKind = "WORK" | "CHECK" | "DONE";

export type FleetCell = "NQ 5m" | "ES 5m" | "NQ 15m" | "ES 15m";

export const FLEET_CELLS: FleetCell[] = ["NQ 5m", "ES 5m", "NQ 15m", "ES 15m"];

export const CHUNK_LABELS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;

export interface StageDef {
  id: number;
  title: string;
  kind: StageKind;
  promptFile?: string;
  note?: string;
}

export const STAGES: StageDef[] = [
  { id: 1, title: "Freeze / admit", kind: "WORK", promptFile: "01_FREEZE_ADMIT_WORK.md", note: "Cost/session locks; no ORB in intake" },
  { id: 2, title: "Baseline alone", kind: "WORK", promptFile: "02_BASELINE_WORK.md" },
  { id: 3, title: "Baseline check", kind: "CHECK", promptFile: "03_BASELINE_CHECK.md", note: "Champion talk + checkpoint/bank if multi types" },
  { id: 4, title: "POI map", kind: "WORK", promptFile: "04_POI_MAP_WORK.md", note: "Value areas = POIs: D/W/M" },
  { id: 5, title: "POI map check", kind: "CHECK", promptFile: "05_POI_MAP_CHECK.md" },
  { id: 6, title: "Band find", kind: "WORK", promptFile: "06_BAND_FIND_WORK.md", note: "<0.75 SKIP (no normal sweep); ~0.75 REVIVAL; keep lean >1.2; cross-cell 3-of-4" },
  { id: 7, title: "Band find check", kind: "CHECK", promptFile: "07_BAND_FIND_CHECK.md" },
  { id: 8, title: "Band sweep", kind: "WORK", promptFile: "08_BAND_SWEEP_WORK.md", note: "Wide→narrow KEEP; entry set from checkbox" },
  { id: 9, title: "Band sweep check", kind: "CHECK", promptFile: "09_BAND_SWEEP_CHECK.md" },
  { id: 10, title: "Boost-alone", kind: "WORK", promptFile: "10_BOOST_ALONE_WORK.md", note: "Candidate B×S occupancy (per-boost); Stage-12 after 11" },
  { id: 11, title: "Boost-alone check", kind: "CHECK", promptFile: "11_BOOST_ALONE_CHECK.md", note: "Cost shock + trade-count floor" },
  { id: 12, title: "Stage-12 boost-count confluence", kind: "WORK", promptFile: "12_CONFLUENCE_WORK.md", note: "2/3/4 B×S allowlisted; draw-a-line take-table FOR NOW" },
  { id: 13, title: "Stage-12 boost-count confluence check", kind: "CHECK", promptFile: "13_CONFLUENCE_CHECK.md", note: "Draw-a-line take-table FOR NOW; never-1B WARN" },
  { id: 14, title: "On/off filters", kind: "WORK", promptFile: "14_ONOFF_FILTERS_WORK.md" },
  { id: 15, title: "On/off filters check", kind: "CHECK", promptFile: "15_ONOFF_FILTERS_CHECK.md" },
  { id: 16, title: "Assemble + hold/flat", kind: "WORK", promptFile: "16_ASSEMBLE_HOLD_WORK.md" },
  { id: 17, title: "Assemble check", kind: "CHECK", promptFile: "17_ASSEMBLE_HOLD_CHECK.md" },
  { id: 18, title: "Stress + luck", kind: "WORK", promptFile: "18_STRESS_LUCK_WORK.md", note: "WF/capacity/ugly + Monte Carlo" },
  { id: 19, title: "Stress + luck check", kind: "CHECK", promptFile: "19_STRESS_LUCK_CHECK.md" },
  { id: 20, title: "Final multi-agent assault", kind: "WORK", promptFile: "20_FINAL_ASSAULT_WORK.md" },
  { id: 21, title: "Done", kind: "DONE", promptFile: "21_DONE.md" },
];

export function workStages(): StageDef[] {
  return STAGES.filter((s) => s.kind === "WORK");
}

export function checkForWork(workId: number): StageDef | undefined {
  return STAGES.find((s) => s.id === workId + 1 && s.kind === "CHECK");
}
