"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STAGES, CHUNK_LABELS, type StageDef } from "../lib/stages";
import {
  ASSAULT_AGENTS,
  FLEET,
  TALK_BOX_LABELS,
  TALK_BOX_STAGE_IDS,
  allStripsComplete,
  assaultAllPass,
  assaultHasFail,
  defaultState,
  emptyAssault,
  emptyTalkNote,
  emptyWork,
  formatTime,
  isStuckStatus,
  loadState,
  overseerBlocksPaint,
  overseerLabel,
  saveState,
  workIdForCheck,
  type AssaultAgentId,
  type AssaultVerdict,
  type CheckAssault,
  type DashState,
  type EntryMode,
  type OverseerStatus,
  type TalkNote,
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

  const stopSimulate = useCallback(() => {
    if (simRef.current) clearInterval(simRef.current);
    simRef.current = null;
  }, []);

  const resetDemo = () => {
    stopSimulate();
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

  /**
   * C1: When active WORK strips hit 100% and the next stage is WORK (no intervening CHECK),
   * auto-advance activeWorkId. When next is CHECK, stop and wait for Pass CHECK.
   */
  const simulateTick = useCallback(() => {
    setState((s) => {
      // H2: do not paint while need_power / stuck / stall
      if (overseerBlocksPaint(s.overseer)) {
        const msg =
          s.overseer === "need_power"
            ? "Overseer: need power / more cores — fleet not advancing"
            : "Overseer: STUCK — fleet not advancing";
        return { ...s, toast: s.toast || msg };
      }

      const id = s.activeWorkId;
      const wp = { ...(s.work[id] || emptyWork()) };
      const strips = { ...wp.strips };
      let advanced = false;

      // Already complete — try consecutive WORK auto-advance (C1)
      if (allStripsComplete(wp)) {
        wp.checkUnlockedOnce = true;
        const nextStage = STAGES.find((st) => st.id === id + 1);
        if (nextStage?.kind === "WORK") {
          return {
            ...s,
            activeWorkId: nextStage.id,
            work: {
              ...s.work,
              [id]: {
                ...wp,
                heartbeat: `hb ${new Date().toLocaleTimeString()} · complete → auto Stage ${nextStage.id}`,
              },
            },
            overseer: "moving",
          };
        }
        // Next is CHECK or DONE — wait (do not paint further on this WORK)
        return {
          ...s,
          work: {
            ...s.work,
            [id]: {
              ...wp,
              heartbeat: `hb ${new Date().toLocaleTimeString()} · complete · waiting CHECK/assault`,
            },
          },
        };
      }

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

      let nextActive = id;
      if (allStripsComplete(wp)) {
        wp.checkUnlockedOnce = true;
        const nextStage = STAGES.find((st) => st.id === id + 1);
        // C1: consecutive WORK with no intervening CHECK → auto-advance
        if (nextStage?.kind === "WORK") {
          nextActive = nextStage.id;
          wp.heartbeat = `hb ${new Date().toLocaleTimeString()} · complete → auto Stage ${nextStage.id}`;
        }
      }

      return {
        ...s,
        overseer: "moving",
        activeWorkId: nextActive,
        work: { ...s.work, [id]: wp },
      };
    });
  }, []);

  const startSimulate = () => {
    stopSimulate();
    setState((s) => ({ ...s, overseer: "moving", toast: null }));
    simRef.current = setInterval(simulateTick, 280);
  };

  const injectStall = () => {
    stopSimulate();
    setState((s) => ({
      ...s,
      overseer: "stuck",
      toast: "Overseer: STUCK — fleet not advancing",
    }));
  };

  // H2: need_power must stall fleet (same as injectStall)
  const setNeedPower = () => {
    stopSimulate();
    setState((s) => ({
      ...s,
      overseer: "need_power",
      toast: "Overseer: need power / more cores — fleet not advancing",
    }));
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

  /** C2: Pass CHECK requires strips + all four assault PASS. */
  const passCheck = (checkId: number) => {
    const workId = workIdForCheck(checkId);
    const wp = state.work[workId];
    if (!wp || !allStripsComplete(wp)) {
      setToast("CHECK locked — fleet strips must all be 100% green");
      return;
    }
    const assault = state.checkAssault[checkId] || emptyAssault();
    if (assaultHasFail(assault)) {
      setToast("CHECK fail — one or more assault roles FAILED (cannot Pass)");
      return;
    }
    if (!assaultAllPass(assault)) {
      setToast("CHECK locked — all four assault agents must PASS");
      return;
    }
    // After Pass CHECK, set activeWorkId to the next WORK after that CHECK (C1)
    const nextWork = STAGES.find((st) => st.id > checkId && st.kind === "WORK");
    setState((s) => ({
      ...s,
      activeWorkId: nextWork ? nextWork.id : s.activeWorkId,
      work: {
        ...s.work,
        [workId]: { ...(s.work[workId] || emptyWork()), checkPassed: true, checkUnlockedOnce: true },
      },
      toast: `Stage ${checkId} CHECK passed (demo)`,
    }));
  };

  /**
   * H7: Fail CHECK re-locks Pass — clear assault so 4× PASS required again.
   * Do not leave Pass immediately re-enabled with strips at 100%.
   */
  const failCheck = (checkId: number) => {
    const workId = workIdForCheck(checkId);
    setState((s) => ({
      ...s,
      checkAssault: {
        ...s.checkAssault,
        [checkId]: emptyAssault(),
      },
      work: {
        ...s.work,
        [workId]: {
          ...(s.work[workId] || emptyWork()),
          checkPassed: false,
        },
      },
      toast: `Stage ${checkId} FAIL → assault cleared; re-PASS all four before Pass CHECK`,
    }));
  };

  /** H9: Confirm Stage 20 Final Assault (strips + 4× PASS) → unlock Done. */
  const passFinalAssault = () => {
    const wp = state.work[20] || emptyWork();
    if (!allStripsComplete(wp)) {
      setToast("Final Assault locked — Stage 20 fleet strips must be 100%");
      return;
    }
    const assault = state.checkAssault[20] || emptyAssault();
    if (assaultHasFail(assault)) {
      setToast("Final Assault fail — one or more roles FAILED");
      return;
    }
    if (!assaultAllPass(assault)) {
      setToast("Final Assault locked — all four agents must PASS");
      return;
    }
    setState((s) => ({
      ...s,
      work: {
        ...s.work,
        [20]: { ...(s.work[20] || emptyWork()), checkPassed: true, checkUnlockedOnce: true },
      },
      toast: "Stage 20 Final Assault passed → Done unlocks",
    }));
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

  const setTalkText = (stageId: number, text: string) => {
    setState((s) => ({
      ...s,
      talkNotes: {
        ...s.talkNotes,
        [stageId]: {
          ...(s.talkNotes[stageId] || emptyTalkNote()),
          text,
        },
      },
    }));
  };

  const stampTalkNote = (stageId: number) => {
    setState((s) => {
      const cur = s.talkNotes[stageId] || emptyTalkNote();
      if (!cur.text.trim()) {
        return { ...s, toast: "Talk box empty — write a note before stamp" };
      }
      return {
        ...s,
        talkNotes: {
          ...s.talkNotes,
          [stageId]: { ...cur, stampedAt: new Date().toISOString() },
        },
        toast: `Talk note stamped @ stage ${stageId} (hook only)`,
      };
    });
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
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 px-6 text-white">
        <div className="w-full max-w-xl rounded-xl border-2 border-amber-400 bg-amber-500 px-5 py-4 text-center text-slate-950 shadow-lg">
          <div className="text-sm font-extrabold uppercase tracking-widest">DEMO ONLY — NOT LIVE</div>
          <p className="mt-2 text-sm font-semibold leading-snug">
            Enter / Simulate advances local browser strips via setInterval. NOT factory stamps, NOT real
            workers, NOT overnight heartbeats.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">Prompt Dash</h1>
          <p className="mt-3 text-lg text-slate-300">Factory stacked-flow UI demo · ES+NQ · 5m+15m</p>
        </div>
        <button
          onClick={enter}
          className="rounded-xl bg-emerald-500 px-10 py-4 text-2xl font-semibold text-white shadow-lg hover:bg-emerald-400"
        >
          Enter (demo)
        </button>
        <p className="max-w-md text-center text-sm text-slate-400">
          Demo UI only — paper seals ≠ live permission. Boost lean: keep if PF &gt; 1.2. No ORB / doubles in this product.
        </p>
      </div>
    );
  }

  // H9: Done requires Stage 19 CHECK pass + Stage 20 strips + Stage 20 assault all PASS
  const stage19Passed = Boolean(state.work[18]?.checkPassed);
  const stage20Wp = state.work[20] || emptyWork();
  const stage20Strips = allStripsComplete(stage20Wp);
  const stage20AssaultOk = assaultAllPass(state.checkAssault[20]) || stage20Wp.checkPassed;
  const doneReady = stage19Passed && stage20Strips && stage20AssaultOk;

  return (
    <div className="mx-auto max-w-5xl px-4 pb-28 pt-8">
      <div className="mb-4 flex items-center justify-center">
        <span className="inline-flex items-center rounded-full border-2 border-amber-500 bg-amber-400 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-slate-950 shadow">
          DEMO — NOT LIVE
        </span>
      </div>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">David&apos;s Prompt Dashboard</h1>
        <p className="mt-2 text-lg text-slate-500">Trading Strategy · Stacked Flow · Full framework</p>
        <p className="mt-2 text-sm font-medium text-amber-800">
          Strips / heartbeat here are local setInterval simulation — not factory stamps or overnight HB.
        </p>
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
          Note: keep lean <strong>PF &gt; 1.2</strong> (1.0 sensitivity / fork-hook only — not equal pick). Band-find cross-cell (3-of-4) ≠ Stage-12 boost-count confluence. ORB dead · doubles
          defunct — not in this UI.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <PlaceholderCard
            title="New banding"
            status="PARKED"
            body="Tighter near-level bands (THE STRATEGY branch). Status PARKED — do not invent bin counts or band maps here."
          />
          <PlaceholderCard
            title="Cleaned POI list / deadwood cut"
            status="OPEN — DANGEROUSLY SILENT"
            body="POI slot is OPEN and DANGEROUSLY SILENT if used for live — no cleaned keep/cut list admitted yet. Do not invent a POI list."
          />
          <PlaceholderCard
            title="Final tables"
            status="OPEN"
            body="Holy-grail / take tables OPEN — land here when ready. Do not invent table numbers. Core chord stays."
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
          const isFinalAssault = stage.id === 20;
          const assault = state.checkAssault[20] || emptyAssault();
          return (
            <div key={stage.id}>
              <WorkBlock
                stage={stage}
                wp={wp}
                unlocked={unlocked}
                overseer={state.overseer}
                promptOpen={openPromptId === stage.id}
                onTogglePrompt={() => togglePrompt(stage.id)}
              />
              {/* H1: talk box on Stage 12 (boost keep 1.0 vs 1.2) */}
              {TALK_BOX_STAGE_IDS.includes(stage.id as (typeof TALK_BOX_STAGE_IDS)[number]) && (
                <TalkBox
                  stageId={stage.id}
                  note={state.talkNotes[stage.id] || emptyTalkNote()}
                  onChangeText={(t) => setTalkText(stage.id, t)}
                  onStamp={() => stampTalkNote(stage.id)}
                />
              )}
              {/* H9: Stage 20 Final Assault four-agent gate */}
              {isFinalAssault && (
                <FinalAssaultBlock
                  unlocked={unlocked}
                  assault={assault}
                  passed={wp.checkPassed}
                  onSetAssault={(agent, verdict) => setAssault(20, agent, verdict)}
                  onPass={passFinalAssault}
                />
              )}
            </div>
          );
        }
        if (stage.kind === "CHECK") {
          const workId = workIdForCheck(stage.id);
          const wp = state.work[workId] || emptyWork();
          const unlocked = allStripsComplete(wp);
          const assault = state.checkAssault[stage.id] || emptyAssault();
          const canPass = unlocked && assaultAllPass(assault) && !assaultHasFail(assault);
          return (
            <div key={stage.id}>
              <CheckBlock
                stage={stage}
                workId={workId}
                wp={wp}
                unlocked={unlocked}
                canPass={canPass}
                assault={assault}
                promptOpen={openPromptId === stage.id}
                onTogglePrompt={() => togglePrompt(stage.id)}
                onSetAssault={(agent, verdict) => setAssault(stage.id, agent, verdict)}
                onPass={() => passCheck(stage.id)}
                onFail={() => failCheck(stage.id)}
              />
              {/* H1: talk boxes at Baseline CHECK (3) and post band-sweep (9) */}
              {TALK_BOX_STAGE_IDS.includes(stage.id as (typeof TALK_BOX_STAGE_IDS)[number]) && (
                <TalkBox
                  stageId={stage.id}
                  note={state.talkNotes[stage.id] || emptyTalkNote()}
                  onChangeText={(t) => setTalkText(stage.id, t)}
                  onStamp={() => stampTalkNote(stage.id)}
                />
              )}
            </div>
          );
        }
        if (stage.kind === "DONE") {
          return (
            <section
              key={stage.id}
              className={`mb-8 rounded-2xl border-2 p-8 text-center ${
                doneReady ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"
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
                {doneReady
                  ? "Research book seal ready. (Demo — not live permission.)"
                  : "Unlocks after Stage 19 CHECK pass + Stage 20 Final Assault (strips + four-agent PASS)."}
              </p>
              {!doneReady && (
                <ul className="mx-auto mt-3 max-w-md list-disc pl-5 text-left text-sm text-slate-500">
                  <li className={stage19Passed ? "text-emerald-700" : ""}>
                    Stage 19 CHECK passed: {stage19Passed ? "yes" : "no"}
                  </li>
                  <li className={stage20Strips ? "text-emerald-700" : ""}>
                    Stage 20 strips 100%: {stage20Strips ? "yes" : "no"}
                  </li>
                  <li className={stage20AssaultOk ? "text-emerald-700" : ""}>
                    Stage 20 assault 4× PASS: {stage20AssaultOk ? "yes" : "no"}
                  </li>
                </ul>
              )}
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
        four-agent assault (demo toggles). Stage 20 Final Assault required before Done.
      </div>

      <OverseerPanel
        status={state.overseer}
        activeWorkId={state.activeWorkId}
        onMoving={() => setState((s) => ({ ...s, overseer: "moving", toast: null }))}
        onNeedPower={setNeedPower}
        onStall={injectStall}
      />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-amber-400 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          <span
            className="inline-flex items-center rounded-full border-2 border-amber-500 bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-950"
            title="Non-dismissible: demo only — local setInterval, not factory"
          >
            DEMO — NOT LIVE
          </span>
          <button
            onClick={startSimulate}
            className="rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-500"
          >
            Simulate (demo)
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
        <p className="mx-auto mt-2 max-w-5xl text-center text-xs font-medium text-amber-900">
          Simulate (demo) = local setInterval strip fill only — NOT factory stamps / overnight HB.
        </p>
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
  const dangerous = status.includes("DANGEROUSLY");
  const parked = status.startsWith("PARKED");
  const badgeClass = dangerous
    ? "bg-red-600 text-white"
    : parked
      ? "bg-slate-700 text-white"
      : "bg-amber-500 text-slate-950";
  return (
    <div
      className={`rounded-xl border border-dashed bg-white/80 p-4 ${
        dangerous ? "border-red-500" : parked ? "border-slate-500" : "border-amber-400"
      }`}
    >
      <div className="text-sm font-bold uppercase tracking-wide text-slate-500">Placeholder</div>
      <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
      <span className={`mt-1 inline-block rounded px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide ${badgeClass}`}>
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

/** H1 — talk-box hooks at forks (textarea + stamp). Persist in store. No invented answers. */
function TalkBox({
  stageId,
  note,
  onChangeText,
  onStamp,
}: {
  stageId: number;
  note: TalkNote;
  onChangeText: (t: string) => void;
  onStamp: () => void;
}) {
  const label = TALK_BOX_LABELS[stageId] || `Talk box @ stage ${stageId}`;
  return (
    <section className="mb-8 -mt-4 rounded-b-2xl border border-t-0 border-sky-200 bg-sky-50 px-5 py-4 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-wide text-sky-900">Talk box (hook)</h3>
      <p className="mt-1 text-sm text-sky-800">{label}</p>
      <textarea
        className="mt-3 w-full rounded-xl border border-sky-300 bg-white p-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-sky-400"
        rows={3}
        placeholder="David choice note — hooks only, do not invent answers…"
        value={note.text}
        onChange={(e) => onChangeText(e.target.value)}
      />
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onStamp}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        >
          Stamp note
        </button>
        {note.stampedAt && (
          <span className="text-xs text-sky-700">
            Stamped: {new Date(note.stampedAt).toLocaleString()}
          </span>
        )}
      </div>
    </section>
  );
}

function WorkBlock({
  stage,
  wp,
  unlocked,
  overseer,
  promptOpen,
  onTogglePrompt,
}: {
  stage: StageDef;
  wp: WorkProgress;
  unlocked: boolean;
  overseer: OverseerStatus;
  promptOpen: boolean;
  onTogglePrompt: () => void;
}) {
  // M2: Stage 1 next is Stage 2 WORK (not orange CHECK). Stage 20 next is Done/assault.
  const nextStage = STAGES.find((s) => s.id === stage.id + 1);
  let footer: string;
  if (stage.id === 20) {
    footer = "Next: Stage 21 Done — requires Final Assault four-agent PASS + strips 100%.";
  } else if (nextStage?.kind === "WORK") {
    footer = `Next is Stage ${nextStage.id} WORK (${nextStage.title}) — auto-advances when strips hit 100%.`;
  } else if (nextStage?.kind === "CHECK") {
    footer = "Next orange CHECK unlocks only when every cell strip is 100% green.";
  } else {
    footer = "End of WORK chain.";
  }

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
            Heartbeat (demo local):{" "}
            <span className="font-mono font-medium text-slate-800">{wp.heartbeat}</span>
            {unlocked ? " · all cells 100%" : " · waiting for fleet"}
            <span className="mt-1 block text-xs text-amber-800">
              Not a factory overnight heartbeat — browser setInterval only.
            </span>
          </div>
          {/* H3: stuck / wait UI under strip stack when stalled/stuck/need_power */}
          {isStuckStatus(overseer) && (
            <div className="rounded-lg border border-orange-300 bg-orange-100 px-3 py-2 text-sm font-semibold text-orange-900">
              {overseer === "need_power"
                ? "WAIT — need power / more cores. Fleet not advancing."
                : "STUCK — fleet not advancing. Clear stall or mark moving to resume."}
            </div>
          )}
        </div>
        <p className="text-center text-xs text-slate-500">
          {footer}
          {wp.checkPassed ? " · CHECK/assault already passed." : ""}
        </p>
      </div>
    </section>
  );
}

function AssaultGrid({
  assault,
  onSetAssault,
}: {
  assault: CheckAssault;
  onSetAssault: (agent: AssaultAgentId, verdict: AssaultVerdict) => void;
}) {
  return (
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
  );
}

function CheckBlock({
  stage,
  workId,
  wp,
  unlocked,
  canPass,
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
  canPass: boolean;
  assault: CheckAssault;
  promptOpen: boolean;
  onTogglePrompt: () => void;
  onSetAssault: (agent: AssaultAgentId, verdict: AssaultVerdict) => void;
  onPass: () => void;
  onFail: () => void;
}) {
  const hasFail = assaultHasFail(assault);
  const allPass = assaultAllPass(assault);

  return (
    <section className="mb-8 overflow-hidden rounded-2xl border-2 border-orange-300 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-orange-500 px-5 py-3 text-white">
        <h2 className="text-xl font-bold">
          {stage.id}. CHECK — {stage.title}
          {!unlocked && <span className="ml-2 text-base font-semibold">🔒 LOCKED</span>}
          {unlocked && !wp.checkPassed && (
            <span className="ml-2 text-base font-semibold">
              {canPass ? "READY" : "UNLOCKED — need 4× PASS"}
            </span>
          )}
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
        After WORK stage {workId}. Fail → loop that same section only. Four-agent assault required
        before Pass CHECK (any role Fail → cannot Pass).
      </p>

      {promptOpen && stage.promptFile && (
        <div className="px-4 pt-3">
          <PromptPanel file={stage.promptFile} onClose={onTogglePrompt} />
        </div>
      )}

      <AssaultGrid assault={assault} onSetAssault={onSetAssault} />

      {hasFail && (
        <p className="px-4 pb-2 text-center text-sm font-semibold text-red-700">
          Assault has FAIL — Pass CHECK disabled until all four re-PASS (or Fail → same section).
        </p>
      )}
      {unlocked && !allPass && !hasFail && (
        <p className="px-4 pb-2 text-center text-sm text-orange-800">
          Strips unlocked — set all four assault agents to PASS to enable Pass CHECK.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3 border-t border-orange-100 bg-orange-50/60 px-4 py-4">
        <button
          type="button"
          disabled={!canPass || wp.checkPassed}
          onClick={onPass}
          className={`rounded-xl px-6 py-3 text-lg font-bold text-white shadow ${
            wp.checkPassed
              ? "bg-emerald-600"
              : canPass
                ? "bg-orange-500 hover:bg-orange-400"
                : "cursor-not-allowed bg-orange-300 opacity-80"
          }`}
        >
          {wp.checkPassed
            ? "CHECK passed ✓"
            : !unlocked
              ? "CHECK LOCKED 🔒"
              : !allPass
                ? "Need 4× assault PASS"
                : "Pass CHECK"}
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

/** H9 — Stage 20 Final Assault gate before Done */
function FinalAssaultBlock({
  unlocked,
  assault,
  passed,
  onSetAssault,
  onPass,
}: {
  unlocked: boolean;
  assault: CheckAssault;
  passed: boolean;
  onSetAssault: (agent: AssaultAgentId, verdict: AssaultVerdict) => void;
  onPass: () => void;
}) {
  const canPass = unlocked && assaultAllPass(assault) && !assaultHasFail(assault);
  return (
    <section className="mb-8 -mt-4 overflow-hidden rounded-b-2xl border-2 border-t-0 border-violet-400 bg-white shadow-sm">
      <div className="bg-violet-700 px-5 py-3 text-white">
        <h3 className="text-lg font-bold">
          Stage 20 — Final multi-agent assault
          {passed && <span className="ml-2">✓ PASSED</span>}
          {!passed && unlocked && !canPass && (
            <span className="ml-2 text-base font-semibold">need 4× PASS</span>
          )}
        </h3>
        <p className="text-sm text-violet-100">
          Required before Stage 21 Done. Same four-agent pack as CHECK stages.
        </p>
      </div>
      <AssaultGrid assault={assault} onSetAssault={onSetAssault} />
      <div className="flex justify-center border-t border-violet-100 bg-violet-50/60 px-4 py-4">
        <button
          type="button"
          disabled={!canPass || passed}
          onClick={onPass}
          className={`rounded-xl px-6 py-3 text-lg font-bold text-white shadow ${
            passed
              ? "bg-emerald-600"
              : canPass
                ? "bg-violet-600 hover:bg-violet-500"
                : "cursor-not-allowed bg-violet-300 opacity-80"
          }`}
        >
          {passed
            ? "Final Assault passed ✓"
            : !unlocked
              ? "Locked — strips first"
              : canPass
                ? "Pass Final Assault → unlock Done"
                : "Need 4× assault PASS"}
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
    status === "moving"
      ? "bg-emerald-600"
      : status === "need_power"
        ? "bg-amber-500"
        : "bg-orange-600";
  const label = overseerLabel(status);
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
          Stuck / stall
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
