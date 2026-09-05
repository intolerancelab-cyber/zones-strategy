"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STAGES, CHUNK_LABELS, type StageDef } from "../lib/stages";
import {
  FLEET,
  allStripsComplete,
  defaultState,
  emptyWork,
  formatTime,
  loadState,
  saveState,
  type DashState,
  type EntryMode,
  type OverseerStatus,
  type WorkProgress,
} from "../lib/store";

const WORK_IDS = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function stageById(id: number): StageDef {
  return STAGES.find((s) => s.id === id)!;
}

export default function PromptDash() {
  const [state, setState] = useState<DashState>(() => defaultState());
  const [hydrated, setHydrated] = useState(false);
  const simRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveState(state);
  }, [state, hydrated]);

  const setToast = useCallback((msg: string | null) => {
    setState((s) => ({ ...s, toast: msg }));
  }, []);

  useEffect(() => {
    if (!state.toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [state.toast, setToast]);

  const enter = () => setState((s) => ({ ...s, entered: true }));

  const resetDemo = () => {
    if (simRef.current) clearInterval(simRef.current);
    const fresh = defaultState();
    fresh.entered = true;
    setState(fresh);
  };

  const updateWork = (workId: number, fn: (w: WorkProgress) => WorkProgress) => {
    setState((s) => {
      const cur = s.work[workId] || emptyWork();
      const next = fn(cur);
      if (allStripsComplete(next) && !next.checkUnlockedOnce) {
        next.checkUnlockedOnce = true;
      }
      return { ...s, work: { ...s.work, [workId]: next } };
    });
  };

  const simulateTick = useCallback(() => {
    setState((s) => {
      if (s.overseer === "stall") {
        return { ...s, toast: s.toast || "Overseer: STALL detected — fleet not advancing" };
      }
      const id = s.activeWorkId;
      const wp = { ...(s.work[id] || emptyWork()) };
      const strips = { ...wp.strips };
      let advanced = false;
      for (const cell of FLEET) {
        const strip = { ...strips[cell] };
        if (strip.chunks < 10) {
          const n = strip.chunks + 1;
          const times = [...strip.times];
          times[n - 1] = formatTime(n * 12 + Math.floor(Math.random() * 8));
          strip.chunks = n;
          strip.times = times;
          strips[cell] = strip;
          advanced = true;
          break; // one chunk per tick across fleet for readable demo
        }
      }
      wp.strips = strips;
      wp.heartbeat = advanced
        ? `hb ${new Date().toLocaleTimeString()} · moving`
        : `hb ${new Date().toLocaleTimeString()} · complete`;
      if (allStripsComplete(wp)) wp.checkUnlockedOnce = true;

      let activeWorkId = s.activeWorkId;
      let overseer: OverseerStatus = s.overseer === "need_power" ? "need_power" : "moving";

      // auto-advance active work pointer when current complete
      if (allStripsComplete(wp)) {
        const idx = WORK_IDS.indexOf(id);
        if (idx >= 0 && idx < WORK_IDS.length - 1) {
          // stay until check passed; pointer moves when check clicked
        }
      }

      return {
        ...s,
        overseer,
        activeWorkId,
        work: { ...s.work, [id]: wp },
        toast: s.toast,
      };
    });
  }, []);

  const startSimulate = () => {
    if (simRef.current) clearInterval(simRef.current);
    setState((s) => ({ ...s, overseer: "moving", toast: null }));
    simRef.current = setInterval(simulateTick, 280);
  };

  const stopSimulate = () => {
    if (simRef.current) clearInterval(simRef.current);
    simRef.current = null;
  };

  const injectStall = () => {
    stopSimulate();
    setState((s) => ({
      ...s,
      overseer: "stall",
      toast: "Overseer: STALL detected — fleet not advancing",
    }));
  };

  const setNeedPower = () => {
    setState((s) => ({ ...s, overseer: "need_power", toast: "Overseer: need power / more cores" }));
  };

  const passCheck = (workId: number) => {
    const wp = state.work[workId];
    if (!wp || !allStripsComplete(wp)) return;
    updateWork(workId, (w) => ({ ...w, checkPassed: true }));
    const idx = WORK_IDS.indexOf(workId);
    if (idx >= 0 && idx < WORK_IDS.length - 1) {
      setState((s) => ({ ...s, activeWorkId: WORK_IDS[idx + 1] }));
    }
  };

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-slate-500">
        Loading…
      </div>
    );
  }

  if (!state.entered) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-900 px-6 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">Prompt Dash</h1>
          <p className="mt-3 text-lg text-slate-300">Factory stacked-flow demo · ES+NQ · 5m+15m</p>
        </div>
        <button
          onClick={enter}
          className="rounded-xl bg-emerald-500 px-10 py-4 text-2xl font-semibold text-white shadow-lg hover:bg-emerald-400"
        >
          Enter dash
        </button>
        <p className="max-w-md text-center text-sm text-slate-400">
          Demo UI only. Boost lean: keep if PF &gt; 1.2. No ORB / doubles in this product.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-28 pt-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">David&apos;s Prompt Dashboard</h1>
        <p className="mt-2 text-lg text-slate-500">Trading Strategy · Stacked Flow</p>
      </header>

      {/* STRATEGY INPUT */}
      <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-100 p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-slate-800">1. STRATEGY INPUT</h2>
        <textarea
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-base leading-relaxed text-slate-800 outline-none focus:ring-2 focus:ring-emerald-400"
          rows={5}
          placeholder="Paste strategy text / canonical handoff here…"
          value={state.strategyText}
          onChange={(e) => setState((s) => ({ ...s, strategyText: e.target.value }))}
        />
        <label className="mt-4 flex cursor-pointer items-start gap-3 text-base text-slate-800">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-emerald-600"
            checked={state.entryMode === "continuation"}
            onChange={(e) =>
              setState((s) => ({
                ...s,
                entryMode: (e.target.checked ? "continuation" : "reversal") as EntryMode,
              }))
            }
          />
          <span>
            <span className="font-semibold">Reversal vs Continuation</span>
            <span className="mt-1 block text-sm text-slate-500">
              Unchecked = Reversal (LOCKED 6). Checked = Continuation / break-retest (OPEN — wait David).
              Pick one mode to drive the work below.
            </span>
          </span>
        </label>
        <p className="mt-3 text-sm text-amber-800 bg-amber-50 rounded-lg px-3 py-2">
          Note: boost keep lean <strong>PF &gt; 1.2</strong> (1.0 as sensitivity only). ORB dead · doubles defunct — not in this UI.
        </p>
      </section>

      {/* STAGES */}
      {STAGES.map((stage) => {
        if (stage.kind === "WORK") {
          const wp = state.work[stage.id] || emptyWork();
          const unlocked = allStripsComplete(wp);
          const check = STAGES.find((s) => s.id === stage.id + 1 && s.kind === "CHECK");
          return (
            <WorkBlock
              key={stage.id}
              stage={stage}
              check={check}
              wp={wp}
              unlocked={unlocked}
              onPassCheck={() => passCheck(stage.id)}
              promptHref={stage.promptFile ? `/prompts/${stage.promptFile}` : undefined}
            />
          );
        }
        if (stage.kind === "DONE") {
          const lastWork = state.work[20];
          const done = lastWork?.checkPassed;
          return (
            <section
              key={stage.id}
              className={`mb-8 rounded-2xl border-2 p-8 text-center ${
                done ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"
              }`}
            >
              <h2 className="text-3xl font-bold">{stage.id}. Done</h2>
              <p className="mt-2 text-slate-600">
                {done
                  ? "Research book seal ready. (Demo — not live permission.)"
                  : "Unlocks after Stage 20 check passes."}
              </p>
              {stage.promptFile && (
                <a className="mt-3 inline-block text-sm text-blue-600 underline" href={`/prompts/${stage.promptFile}`} target="_blank" rel="noreferrer">
                  Open prompt
                </a>
              )}
            </section>
          );
        }
        return null;
      })}

      <div className="mb-6 rounded-xl bg-violet-50 px-4 py-3 text-sm text-violet-900">
        Fork = page hooks only (style later). Fail → same section only. Linear — no skip.
      </div>

      {/* OVERSEER + DEMO */}
      <OverseerPanel
        status={state.overseer}
        activeWorkId={state.activeWorkId}
        onMoving={() => setState((s) => ({ ...s, overseer: "moving", toast: null }))}
        onNeedPower={setNeedPower}
        onStall={injectStall}
      />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          <button onClick={startSimulate} className="rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-500">
            Simulate progress
          </button>
          <button onClick={stopSimulate} className="rounded-lg bg-slate-600 px-4 py-2 font-semibold text-white hover:bg-slate-500">
            Pause sim
          </button>
          <button onClick={injectStall} className="rounded-lg bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-500">
            Inject stall
          </button>
          <button onClick={setNeedPower} className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-400">
            Need power
          </button>
          <button onClick={resetDemo} className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50">
            Reset demo
          </button>
        </div>
      </div>

      {state.toast && (
        <div className="fixed right-4 top-4 z-50 max-w-sm rounded-xl bg-orange-600 px-5 py-3 text-base font-semibold text-white shadow-xl">
          {state.toast}
        </div>
      )}
    </div>
  );
}

function WorkBlock({
  stage,
  check,
  wp,
  unlocked,
  onPassCheck,
  promptHref,
}: {
  stage: StageDef;
  check?: StageDef;
  wp: WorkProgress;
  unlocked: boolean;
  onPassCheck: () => void;
  promptHref?: string;
}) {
  return (
    <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-emerald-600 px-5 py-3 text-white">
        <h2 className="text-xl font-bold">
          {stage.id}. WORK — {stage.title}
        </h2>
        {promptHref && (
          <a href={promptHref} target="_blank" rel="noreferrer" className="rounded bg-emerald-700/50 px-3 py-1 text-sm underline-offset-2 hover:underline">
            Prompt
          </a>
        )}
      </div>
      {stage.note && <p className="bg-emerald-50 px-5 py-2 text-sm text-emerald-900">{stage.note}</p>}

      <div className="flex flex-col gap-4 p-4 md:flex-row">
        <div className="flex-1 space-y-3 rounded-xl bg-sky-50 p-4">
          {FLEET.map((cell) => {
            const strip = wp.strips[cell] || { chunks: 0, times: Array(10).fill("--:--") };
            return (
              <div key={cell} className="rounded-lg border border-sky-200 bg-sky-100/80 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{cell}</span>
                  <span className="text-sm text-slate-500">{strip.chunks * 10}%</span>
                </div>
                <div className="grid grid-cols-10 gap-1">
                  {CHUNK_LABELS.map((label, i) => {
                    const filled = i < strip.chunks;
                    return (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div
                          className={`h-7 w-full rounded-sm border ${
                            filled
                              ? "border-emerald-600 bg-emerald-500"
                              : "border-slate-200 bg-white"
                          }`}
                          title={`${label}%`}
                        />
                        <span className="text-[10px] font-medium text-slate-500">{label}</span>
                        <span className="text-[10px] tabular-nums text-slate-400">
                          {strip.times[i] || "--:--"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="rounded-lg bg-white/80 px-3 py-2 text-sm text-slate-600">
            Heartbeat: <span className="font-mono font-medium text-slate-800">{wp.heartbeat}</span>
            {unlocked ? " · all cells 100%" : " · waiting for fleet"}
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-3 md:w-52">
          <button
            disabled={!unlocked || wp.checkPassed}
            onClick={onPassCheck}
            className={`rounded-xl px-4 py-4 text-center text-lg font-bold text-white shadow ${
              wp.checkPassed
                ? "bg-emerald-600"
                : unlocked
                  ? "bg-orange-500 hover:bg-orange-400"
                  : "cursor-not-allowed bg-orange-300 opacity-80"
            }`}
          >
            {wp.checkPassed
              ? "CHECK passed ✓"
              : unlocked
                ? "CHECK unlocked"
                : "CHECK LOCKED 🔒"}
          </button>
          {check && (
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm text-orange-950">
              <div className="font-semibold">
                {check.id}. CHECK — {check.title}
              </div>
              {check.note && <div className="mt-1 text-orange-800/80">{check.note}</div>}
              {check.promptFile && (
                <a
                  className="mt-2 inline-block text-orange-700 underline"
                  href={`/prompts/${check.promptFile}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open check prompt
                </a>
              )}
            </div>
          )}
          <p className="text-center text-xs text-slate-500">
            Orange CHECK only when every cell strip is 100% green.
          </p>
        </div>
      </div>
    </section>
  );
}

function OverseerPanel({
  status,
  activeWorkId,
  onMoving,
  onNeedPower,
  onStall,
}: {
  status: OverseerStatus;
  activeWorkId: number;
  onMoving: () => void;
  onNeedPower: () => void;
  onStall: () => void;
}) {
  const color =
    status === "moving" ? "bg-emerald-600" : status === "stall" ? "bg-orange-600" : "bg-amber-500";
  const label =
    status === "moving" ? "MOVING" : status === "stall" ? "STALL" : "NEED POWER";
  return (
    <aside className="mb-24 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 text-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
        <div>
          <h3 className="text-lg font-bold">Overseer</h3>
          <p className="text-sm text-slate-300">Active WORK stage {activeWorkId}</p>
        </div>
        <span className={`rounded-full px-4 py-1.5 text-sm font-bold ${color}`}>{label}</span>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-slate-700 bg-slate-900/50 px-5 py-3">
        <button onClick={onMoving} className="rounded bg-emerald-700 px-3 py-1.5 text-sm font-medium hover:bg-emerald-600">
          Mark moving
        </button>
        <button onClick={onStall} className="rounded bg-orange-700 px-3 py-1.5 text-sm font-medium hover:bg-orange-600">
          Stall
        </button>
        <button onClick={onNeedPower} className="rounded bg-amber-600 px-3 py-1.5 text-sm font-medium hover:bg-amber-500">
          Need power
        </button>
      </div>
    </aside>
  );
}
