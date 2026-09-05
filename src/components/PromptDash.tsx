"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STAGES, CHUNK_LABELS, type StageDef } from "../lib/stages";
import {
  ASSAULT_AGENTS,
  FLEET,
  WORK_IDS,
  allStripsComplete,
  defaultState,
  emptyAssault,
  emptyWork,
  formatTime,
  loadState,
  saveState,
  workIdForCheck,
  type AssaultAgentId,
  type AssaultVerdict,
  type CheckAssault,
  type DashState,
  type EntryMode,
  type OverseerStatus,
  type WorkProgress,
} from "../lib/store";

export default function PromptDash() {
  const [state, setState] = useState<DashState>(() => defaultState());
  const [hydrated, setHydrated] = useState(false);
  const [openPromptId, setOpenPromptId] = useState<number | null>(null);
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
    setOpenPromptId(null);
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
          break;
        }
      }
      wp.strips = strips;
      wp.heartbeat = advanced
        ? `hb ${new Date().toLocaleTimeString()} · moving`
        : `hb ${new Date().toLocaleTimeString()} · complete`;
      if (allStripsComplete(wp)) wp.checkUnlockedOnce = true;

      const overseer: OverseerStatus = s.overseer === "need_power" ? "need_power" : "moving";

      return {
        ...s,
        overseer,
        work: { ...s.work, [id]: wp },
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

  const setAssault = (checkId: number, agent: AssaultAgentId, verdict: AssaultVerdict) => {
    setState((s) => {
      const cur = s.checkAssault[checkId] || emptyAssault();
      return {
        ...s,
        checkAssault: {
          ...s.checkAssault,
          [checkId]: { ...cur, [agent]: verdict },
        },
      };
    });
  };

  const passCheck = (checkId: number) => {
    const workId = workIdForCheck(checkId);
    const wp = state.work[workId];
    if (!wp || !allStripsComplete(wp)) {
      setToast("CHECK locked — fleet strips must all be 100% green");
      return;
    }
    updateWork(workId, (w) => ({ ...w, checkPassed: true }));
    const idx = WORK_IDS.indexOf(workId as (typeof WORK_IDS)[number]);
    if (idx >= 0 && idx < WORK_IDS.length - 1) {
      setState((s) => ({ ...s, activeWorkId: WORK_IDS[idx + 1] }));
    }
    setToast(`Stage ${checkId} CHECK passed (demo)`);
  };

  const failCheck = (checkId: number) => {
    const workId = workIdForCheck(checkId);
    updateWork(workId, (w) => ({ ...w, checkPassed: false }));
    setToast(`Stage ${checkId} FAIL → loop same WORK section only`);
  };

  const bankChampion = (fromStageId: number) => {
    const id = `champ-${Date.now()}`;
    setState((s) => ({
      ...s,
      bankedChampions: [
        ...s.bankedChampions,
        {
          id,
          label: `Unused champion @ stage ${fromStageId}`,
          fromStageId,
          note: "Hook only — resume from this stage later with the other champion.",
          bankedAt: new Date().toISOString(),
        },
      ],
      toast: "Banked unused champion (checkpoint hook)",
    }));
  };

  const togglePrompt = (stageId: number) => {
    setOpenPromptId((cur) => (cur === stageId ? null : stageId));
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
        <p className="mt-2 text-lg text-slate-500">Trading Strategy · Stacked Flow · Full framework</p>
      </header>

      {/* STRATEGY INPUT */}
      <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-100 p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-slate-800">1. STRATEGY INPUT</h2>
        <textarea
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-base leading-relaxed text-slate-800 outline-none focus:ring-2 focus:ring-emerald-400"
          rows={5}
          placeholder="Paste strategy text / canonical handoff here… (core chord stays)"
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
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
          Note: boost keep lean <strong>PF &gt; 1.2</strong> (1.0 as sensitivity only). ORB dead · doubles
          defunct — not in this UI.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <PlaceholderCard
            title="New banding"
            status="Pending — other session"
            body="Tighter near-level bands (THE STRATEGY branch). Do not invent bin counts here."
          />
          <PlaceholderCard
            title="Cleaned POI list / deadwood cut"
            status="Pending"
            body="Admit cleaned POI set after deadwood cut. Do not invent keep/cut lists."
          />
          <PlaceholderCard
            title="Final tables"
            status="Pending"
            body="Holy-grail / take tables land here when ready. Core chord stays."
          />
        </div>
      </section>

      {/* Champion checkpoint hooks */}
      <section className="mb-8 rounded-2xl border border-violet-200 bg-violet-50 p-5 shadow-sm">
        <h2 className="text-lg font-bold text-violet-900">Champion checkpoint (hooks only)</h2>
        <p className="mt-1 text-sm text-violet-800">
          Bank an unused champion at a real fork; resume from that stage later. Full fork UX locked
          later — this is page hooks only.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => bankChampion(state.activeWorkId)}
            className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-600"
          >
            Bank unused champion
          </button>
          <span className="text-sm text-violet-700">
            Active WORK {state.activeWorkId} · banked: {state.bankedChampions.length}
          </span>
        </div>
        {state.bankedChampions.length > 0 && (
          <ul className="mt-3 space-y-2">
            {state.bankedChampions.map((c) => (
              <li
                key={c.id}
                className="rounded-lg border border-violet-200 bg-white px-3 py-2 text-sm text-violet-950"
              >
                <strong>{c.label}</strong>
                <span className="mt-0.5 block text-violet-700">{c.note}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* STAGES 1–21 — WORK and CHECK both visible */}
      {STAGES.map((stage) => {
        if (stage.kind === "WORK") {
          const wp = state.work[stage.id] || emptyWork();
          const unlocked = allStripsComplete(wp);
          return (
            <WorkBlock
              key={stage.id}
              stage={stage}
              wp={wp}
              unlocked={unlocked}
              promptOpen={openPromptId === stage.id}
              onTogglePrompt={() => togglePrompt(stage.id)}
            />
          );
        }
        if (stage.kind === "CHECK") {
          const workId = workIdForCheck(stage.id);
          const wp = state.work[workId] || emptyWork();
          const unlocked = allStripsComplete(wp);
          const assault = state.checkAssault[stage.id] || emptyAssault();
          return (
            <CheckBlock
              key={stage.id}
              stage={stage}
              workId={workId}
              wp={wp}
              unlocked={unlocked}
              assault={assault}
              promptOpen={openPromptId === stage.id}
              onTogglePrompt={() => togglePrompt(stage.id)}
              onSetAssault={(agent, verdict) => setAssault(stage.id, agent, verdict)}
              onPass={() => passCheck(stage.id)}
              onFail={() => failCheck(stage.id)}
            />
          );
        }
        if (stage.kind === "DONE") {
          // Stage 20 has no following CHECK — unlock Done when 19 CHECK passed + 20 fleet complete
          const stage19Passed = Boolean(state.work[18]?.checkPassed);
          const stage20Done = allStripsComplete(state.work[20] || emptyWork());
          const ready = stage19Passed && stage20Done;
          return (
            <section
              key={stage.id}
              className={`mb-8 rounded-2xl border-2 p-8 text-center ${
                ready ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex flex-wrap items-center justify-center gap-3">
                <h2 className="text-3xl font-bold">{stage.id}. Done</h2>
                {stage.promptFile && (
                  <button
                    type="button"
                    onClick={() => togglePrompt(stage.id)}
                    className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-600"
                  >
                    {openPromptId === stage.id ? "Hide prompt" : "Open DONE"}
                  </button>
                )}
              </div>
              <p className="mt-2 text-slate-600">
                {ready
                  ? "Research book seal ready. (Demo — not live permission.)"
                  : "Unlocks after Stage 19 CHECK pass + Stage 20 fleet complete."}
              </p>
              {openPromptId === stage.id && stage.promptFile && (
                <PromptPanel file={stage.promptFile} onClose={() => setOpenPromptId(null)} />
              )}
            </section>
          );
        }
        return null;
      })}

      <div className="mb-6 rounded-xl bg-violet-50 px-4 py-3 text-sm text-violet-900">
        Fork = page hooks only (style later). Fail → same section only. Linear — no skip. Every CHECK =
        four-agent assault (demo toggles).
      </div>

      <OverseerPanel
        status={state.overseer}
        activeWorkId={state.activeWorkId}
        onMoving={() => setState((s) => ({ ...s, overseer: "moving", toast: null }))}
        onNeedPower={setNeedPower}
        onStall={injectStall}
      />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          <button
            onClick={startSimulate}
            className="rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-500"
          >
            Simulate progress
          </button>
          <button
            onClick={stopSimulate}
            className="rounded-lg bg-slate-600 px-4 py-2 font-semibold text-white hover:bg-slate-500"
          >
            Pause sim
          </button>
          <button
            onClick={injectStall}
            className="rounded-lg bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-500"
          >
            Inject stall
          </button>
          <button
            onClick={setNeedPower}
            className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-400"
          >
            Need power
          </button>
          <button
            onClick={resetDemo}
            className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
          >
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

function PlaceholderCard({
  title,
  status,
  body,
}: {
  title: string;
  status: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-400 bg-white/80 p-4">
      <div className="text-sm font-bold uppercase tracking-wide text-slate-500">Placeholder</div>
      <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
      <span className="mt-1 inline-block rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
        {status}
      </span>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function PromptPanel({ file, onClose }: { file: string; onClose: () => void }) {
  const [md, setMd] = useState<string>("Loading…");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setMd("Loading…");
    setErr(null);
    fetch(`/prompts/${file}`)
      .then(async (r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.text();
      })
      .then((text) => {
        if (!cancelled) setMd(text);
      })
      .catch((e: Error) => {
        if (!cancelled) {
          setErr(e.message);
          setMd("");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-300 bg-slate-50 text-left">
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-slate-800 px-4 py-2 text-white">
        <span className="truncate font-mono text-sm">/prompts/{file}</span>
        <button
          type="button"
          onClick={onClose}
          className="rounded bg-slate-700 px-2 py-1 text-xs font-semibold hover:bg-slate-600"
        >
          Close
        </button>
      </div>
      {err ? (
        <p className="p-4 text-sm text-red-700">Failed to fetch prompt: {err}</p>
      ) : (
        <pre className="max-h-[28rem] overflow-auto whitespace-pre-wrap p-4 font-mono text-xs leading-relaxed text-slate-800 md:text-sm">
          {md}
        </pre>
      )}
    </div>
  );
}

function WorkBlock({
  stage,
  wp,
  unlocked,
  promptOpen,
  onTogglePrompt,
}: {
  stage: StageDef;
  wp: WorkProgress;
  unlocked: boolean;
  promptOpen: boolean;
  onTogglePrompt: () => void;
}) {
  return (
    <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-emerald-600 px-5 py-3 text-white">
        <h2 className="text-xl font-bold">
          {stage.id}. WORK — {stage.title}
        </h2>
        {stage.promptFile && (
          <button
            type="button"
            onClick={onTogglePrompt}
            className="rounded bg-emerald-700/60 px-3 py-1.5 text-sm font-semibold hover:bg-emerald-700"
          >
            {promptOpen ? "Hide WORK prompt" : "WORK — show prompt"}
          </button>
        )}
      </div>
      {stage.note && <p className="bg-emerald-50 px-5 py-2 text-sm text-emerald-900">{stage.note}</p>}

      {promptOpen && stage.promptFile && (
        <div className="px-4 pt-3">
          <PromptPanel file={stage.promptFile} onClose={onTogglePrompt} />
        </div>
      )}

      <div className="flex flex-col gap-4 p-4">
        <div className="space-y-3 rounded-xl bg-sky-50 p-4">
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
            Heartbeat:{" "}
            <span className="font-mono font-medium text-slate-800">{wp.heartbeat}</span>
            {unlocked ? " · all cells 100%" : " · waiting for fleet"}
          </div>
        </div>
        <p className="text-center text-xs text-slate-500">
          Next orange CHECK unlocks only when every cell strip is 100% green.
          {wp.checkPassed ? " · CHECK already passed." : ""}
        </p>
      </div>
    </section>
  );
}

function CheckBlock({
  stage,
  workId,
  wp,
  unlocked,
  assault,
  promptOpen,
  onTogglePrompt,
  onSetAssault,
  onPass,
  onFail,
}: {
  stage: StageDef;
  workId: number;
  wp: WorkProgress;
  unlocked: boolean;
  assault: CheckAssault;
  promptOpen: boolean;
  onTogglePrompt: () => void;
  onSetAssault: (agent: AssaultAgentId, verdict: AssaultVerdict) => void;
  onPass: () => void;
  onFail: () => void;
}) {
  return (
    <section className="mb-8 overflow-hidden rounded-2xl border-2 border-orange-300 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-orange-500 px-5 py-3 text-white">
        <h2 className="text-xl font-bold">
          {stage.id}. CHECK — {stage.title}
          {!unlocked && <span className="ml-2 text-base font-semibold">🔒 LOCKED</span>}
          {unlocked && !wp.checkPassed && <span className="ml-2 text-base font-semibold">UNLOCKED</span>}
          {wp.checkPassed && <span className="ml-2 text-base font-semibold">✓ PASSED</span>}
        </h2>
        {stage.promptFile && (
          <button
            type="button"
            onClick={onTogglePrompt}
            className="rounded bg-orange-700/50 px-3 py-1.5 text-sm font-semibold hover:bg-orange-700"
          >
            {promptOpen ? "Hide CHECK prompt" : "CHECK — show prompt"}
          </button>
        )}
      </div>
      {stage.note && <p className="bg-orange-50 px-5 py-2 text-sm text-orange-950">{stage.note}</p>}
      <p className="border-b border-orange-100 px-5 py-2 text-sm text-slate-600">
        After WORK stage {workId}. Fail → loop that same section only. Four-agent assault (demo
        toggles).
      </p>

      {promptOpen && stage.promptFile && (
        <div className="px-4 pt-3">
          <PromptPanel file={stage.promptFile} onClose={onTogglePrompt} />
        </div>
      )}

      <div className="grid gap-3 p-4 sm:grid-cols-2">
        {ASSAULT_AGENTS.map((agent) => {
          const v = assault[agent.id];
          return (
            <div
              key={agent.id}
              className={`rounded-xl border p-3 ${
                v === "pass"
                  ? "border-emerald-300 bg-emerald-50"
                  : v === "fail"
                    ? "border-red-300 bg-red-50"
                    : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="font-bold text-slate-900">{agent.label}</div>
              <div className="mt-0.5 text-sm text-slate-600">{agent.question}</div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => onSetAssault(agent.id, "pass")}
                  className={`flex-1 rounded-lg px-2 py-1.5 text-sm font-semibold ${
                    v === "pass"
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-emerald-700 ring-1 ring-emerald-300 hover:bg-emerald-50"
                  }`}
                >
                  Pass
                </button>
                <button
                  type="button"
                  onClick={() => onSetAssault(agent.id, "fail")}
                  className={`flex-1 rounded-lg px-2 py-1.5 text-sm font-semibold ${
                    v === "fail"
                      ? "bg-red-600 text-white"
                      : "bg-white text-red-700 ring-1 ring-red-300 hover:bg-red-50"
                  }`}
                >
                  Fail
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 border-t border-orange-100 bg-orange-50/60 px-4 py-4">
        <button
          type="button"
          disabled={!unlocked || wp.checkPassed}
          onClick={onPass}
          className={`rounded-xl px-6 py-3 text-lg font-bold text-white shadow ${
            wp.checkPassed
              ? "bg-emerald-600"
              : unlocked
                ? "bg-orange-500 hover:bg-orange-400"
                : "cursor-not-allowed bg-orange-300 opacity-80"
          }`}
        >
          {wp.checkPassed ? "CHECK passed ✓" : unlocked ? "Pass CHECK" : "CHECK LOCKED 🔒"}
        </button>
        <button
          type="button"
          onClick={onFail}
          className="rounded-xl border border-red-300 bg-white px-5 py-3 text-base font-semibold text-red-700 hover:bg-red-50"
        >
          Fail → same section
        </button>
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
  const label = status === "moving" ? "MOVING" : status === "stall" ? "STALL" : "NEED POWER";
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
        <button
          onClick={onMoving}
          className="rounded bg-emerald-700 px-3 py-1.5 text-sm font-medium hover:bg-emerald-600"
        >
          Mark moving
        </button>
        <button
          onClick={onStall}
          className="rounded bg-orange-700 px-3 py-1.5 text-sm font-medium hover:bg-orange-600"
        >
          Stall
        </button>
        <button
          onClick={onNeedPower}
          className="rounded bg-amber-600 px-3 py-1.5 text-sm font-medium hover:bg-amber-500"
        >
          Need power
        </button>
      </div>
    </aside>
  );
}
