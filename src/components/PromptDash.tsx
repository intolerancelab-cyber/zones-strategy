"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STAGES, CHUNK_LABELS, type StageDef } from "../lib/stages";
import {
  ASSAULT_AGENTS,
  FLEET,
  PROMOTE_GATE_TEXT,
  SCORECARD_COLUMNS,
  TALK_BOX_LABELS,
  TALK_BOX_STAGE_IDS,
  WF_STAGE_IDS,
  allStripsComplete,
  assaultAllPass,
  assaultHasFail,
  defaultState,
  emptyAssault,
  emptyScorecardRow,
  emptyStage2Scorecard,
  emptyTalkNote,
  emptyWalkForward,
  emptyWork,
  formatTime,
  isStuckStatus,
  loadState,
  overseerBlocksPaint,
  overseerLabel,
  saveState,
  walkForwardBlocksSeal,
  workIdForCheck,
  type AssaultAgentId,
  type AssaultVerdict,
  type CheckAssault,
  type DashState,
  type EntryMode,
  type OverseerStatus,
  type ScorecardColumn,
  type ScorecardRow,
  type ScorecardShelf,
  type Stage2Scorecard,
  type TalkNote,
  type WalkForwardStamp,
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
    // Q5 demo: weak walk-forward blocks take-related CHECK seal
    if (walkForwardBlocksSeal(state.walkForward[checkId])) {
      setToast(`Walk-forward WEAK @ stage ${checkId} — blocks take seal (demo)`);
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

  const updateWalkForward = (
    stageId: number,
    fn: (w: WalkForwardStamp) => WalkForwardStamp,
  ) => {
    setState((s) => {
      const cur = s.walkForward[stageId] || emptyWalkForward();
      return {
        ...s,
        walkForward: { ...s.walkForward, [stageId]: fn(cur) },
      };
    });
  };

  const stampWalkForward = (stageId: number) => {
    setState((s) => {
      const cur = s.walkForward[stageId] || emptyWalkForward();
      if (cur.weakBlocks) {
        return {
          ...s,
          toast: `Walk-forward WEAK @ stage ${stageId} — blocks take seal / move-forward (demo)`,
          walkForward: {
            ...s.walkForward,
            [stageId]: {
              ...cur,
              stamped: true,
              stampedAt: new Date().toISOString(),
            },
          },
        };
      }
      if (!cur.heldBack) {
        return {
          ...s,
          toast: "Hold back unseen data first (Q5) — demo lamp",
        };
      }
      return {
        ...s,
        walkForward: {
          ...s.walkForward,
          [stageId]: {
            ...cur,
            stamped: true,
            stampedAt: new Date().toISOString(),
          },
        },
        toast: `Walk-forward score stamped @ stage ${stageId} (demo — not live PF)`,
      };
    });
  };

  const updateStage2Scorecard = (fn: (board: Stage2Scorecard) => Stage2Scorecard) => {
    setState((s) => ({
      ...s,
      stage2Scorecard: fn(s.stage2Scorecard || emptyStage2Scorecard()),
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
          Demo UI only — paper seals ≠ live permission. KEEP label only if PF &gt; 1.2 (LOCKED). Q4+Q5 locked; Q6 FOR NOW. No ORB / doubles.
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
    <div className="mx-auto max-w-5xl px-3 pb-36 pt-6 sm:px-4 sm:pb-28 sm:pt-8">
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
        <GrillLocksStrip />

        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
          STRATEGY INPUT note: <strong>KEEP only if PF &gt; 1.2</strong> · sweep gate <strong>≥0.75</strong> · <strong>Q4 take geometry LOCKED</strong> · <strong>Q5 walk-forward LOCKED</strong> · <strong>Q6 FOR NOW</strong> borrow-single (OPEN to revise). Band-find cross-cell ≠ Stage-12 dual-lamp confluence. ORB dead · doubles defunct.
        </p>

        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          PARKED — other session drops these four together (not now). Do not invent lists.
        </p>
        <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <PlaceholderCard
            title="Full baseline recipe"
            status="PARKED"
            body="Other session will fill. PARKED until the four-pack lands. Do not invent baseline recipe text or numbers."
          />
          <PlaceholderCard
            title="Full POI sweep recipe"
            status="PARKED"
            body="Other session will fill. PARKED until the four-pack lands. Do not invent POI sweep recipes."
          />
          <PlaceholderCard
            title="Full banding structure"
            status="PARKED"
            body="Tighter near-level bands (THE STRATEGY branch). PARKED — other session will fill. Do not invent bin counts or band maps."
          />
          <PlaceholderCard
            title="POI list"
            status="PARKED — DANGEROUSLY SILENT"
            body="Cleaned POI keep/cut list not admitted. Other session will fill with the four-pack. Do not invent a POI list — silent if used for live."
          />
        </div>
        <p className="mt-3 rounded-lg border border-dashed border-slate-300 bg-white/70 px-3 py-2 text-xs text-slate-600">
          Also parked (ask later): on/off filters · final holy-grail table numbers. Tick ideas are tested elsewhere — not on this dash.
        </p>
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
              {stage.id === 2 && (
                <Stage2ScorecardPanel
                  board={state.stage2Scorecard || emptyStage2Scorecard()}
                  onChange={updateStage2Scorecard}
                />
              )}
              {WF_STAGE_IDS.includes(stage.id as (typeof WF_STAGE_IDS)[number]) && (
                <WalkForwardLamp
                  stageId={stage.id}
                  wf={state.walkForward[stage.id] || emptyWalkForward()}
                  onToggleHeld={() =>
                    updateWalkForward(stage.id, (w) => ({ ...w, heldBack: !w.heldBack }))
                  }
                  onToggleWeak={() =>
                    updateWalkForward(stage.id, (w) => ({ ...w, weakBlocks: !w.weakBlocks }))
                  }
                  onNote={(note) => updateWalkForward(stage.id, (w) => ({ ...w, note }))}
                  onStamp={() => stampWalkForward(stage.id)}
                />
              )}
              {/* H1: talk box on Stage 12 (take-table / Q4; keep line LOCKED >1.2) */}
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
                canPass={canPass && !walkForwardBlocksSeal(state.walkForward[stage.id])}
                assault={assault}
                wfBlocks={walkForwardBlocksSeal(state.walkForward[stage.id])}
                promptOpen={openPromptId === stage.id}
                onTogglePrompt={() => togglePrompt(stage.id)}
                onSetAssault={(agent, verdict) => setAssault(stage.id, agent, verdict)}
                onPass={() => passCheck(stage.id)}
                onFail={() => failCheck(stage.id)}
              />
              {WF_STAGE_IDS.includes(stage.id as (typeof WF_STAGE_IDS)[number]) && (
                <WalkForwardLamp
                  stageId={stage.id}
                  wf={state.walkForward[stage.id] || emptyWalkForward()}
                  onToggleHeld={() =>
                    updateWalkForward(stage.id, (w) => ({ ...w, heldBack: !w.heldBack }))
                  }
                  onToggleWeak={() =>
                    updateWalkForward(stage.id, (w) => ({ ...w, weakBlocks: !w.weakBlocks }))
                  }
                  onNote={(note) => updateWalkForward(stage.id, (w) => ({ ...w, note }))}
                  onStamp={() => stampWalkForward(stage.id)}
                />
              )}
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
        four-agent assault (demo toggles). Stage 20 Final Assault required before Done. Dual-lamp =
        boost-alone (10–11) then Stage-12 confluence (12–13) — Q6 FOR NOW borrow-single.
      </div>

      <section className="mb-6 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
        <h3 className="font-bold text-slate-900">Operator docs</h3>
        <p className="mt-1">
          Monday operator skeleton:{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
            docs/MONDAY_OPERATOR_RUNBOOK.md
          </code>{" "}
          (mirrored from <code className="text-xs">/workspace/prompt-dash/</code>). Paper seal ≠
          live_permission. See also README → Docs.
        </p>
      </section>

      <OverseerPanel
        status={state.overseer}
        activeWorkId={state.activeWorkId}
        onMoving={() => setState((s) => ({ ...s, overseer: "moving", toast: null }))}
        onNeedPower={setNeedPower}
        onStall={injectStall}
      />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-amber-400 bg-white/95 px-2 py-2 backdrop-blur sm:px-4 sm:py-3">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1.5 sm:gap-3">
          <span
            className="inline-flex items-center rounded-full border-2 border-amber-500 bg-amber-400 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-950 sm:px-3 sm:py-1 sm:text-xs"
            title="Non-dismissible: demo only — local setInterval, not factory"
          >
            DEMO — NOT LIVE
          </span>
          <button
            onClick={startSimulate}
            className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 sm:px-4 sm:py-2 sm:text-base"
          >
            Simulate (demo)
          </button>
          <button
            onClick={stopSimulate}
            className="rounded-lg bg-slate-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-500 sm:px-4 sm:py-2 sm:text-base"
          >
            Pause
          </button>
          <button
            onClick={injectStall}
            className="rounded-lg bg-orange-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-orange-500 sm:px-4 sm:py-2 sm:text-base"
          >
            Stall
          </button>
          <button
            onClick={setNeedPower}
            className="rounded-lg bg-amber-500 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-amber-400 sm:px-4 sm:py-2 sm:text-base"
          >
            Need power
          </button>
          <button
            onClick={resetDemo}
            className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:px-4 sm:py-2 sm:text-base"
          >
            Reset
          </button>
        </div>
        <p className="mx-auto mt-1 hidden max-w-5xl text-center text-xs font-medium text-amber-900 sm:mt-2 sm:block">
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
  const parked = status.startsWith("PARKED") || status.includes("PARKED");
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
  wfBlocks = false,
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
  wfBlocks?: boolean;
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
      {wfBlocks && (
        <p className="px-4 pb-2 text-center text-sm font-semibold text-rose-800">
          Walk-forward WEAK (demo) — Q5 blocks take seal / Pass CHECK until weak lamp cleared.
        </p>
      )}
      {unlocked && !allPass && !hasFail && !wfBlocks && (
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


function GrillLocksStrip() {
  const locks = [
    { k: "KEEP", v: "PF > 1.2 only" },
    { k: "SWEEP", v: "≥0.75 · <0.75 no sweep" },
    { k: "Q4", v: "S≥B / B−S==1 hard no · B−S≥2 sweep" },
    { k: "Q5 WF", v: "score never-seen · weak blocks" },
    { k: "Q6", v: "FOR NOW borrow-single · OPEN revise" },
  ];
  return (
    <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50/80 px-3 py-3">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-900">
          Grill locks summary
        </h3>
        <span className="rounded bg-emerald-700 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
          LOCKED · paper
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {locks.map((L) => (
          <div
            key={L.k}
            className="min-w-[9.5rem] shrink-0 rounded-lg border border-emerald-200 bg-white px-3 py-2 shadow-sm"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-700">
              {L.k}
            </div>
            <div className="mt-0.5 text-xs font-medium leading-snug text-slate-800">{L.v}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-emerald-900/80">
        Take geometry + walk-forward are real bearing (not cosmetic). No invented POI/banding numbers
        here — see DAVID_GRILL_LOCKS.
      </p>
    </div>
  );
}

/** Q5 walk-forward lamp / stamp — demo toggles on take-related stages 11–13 */
function WalkForwardLamp({
  stageId,
  wf,
  onToggleHeld,
  onToggleWeak,
  onNote,
  onStamp,
}: {
  stageId: number;
  wf: WalkForwardStamp;
  onToggleHeld: () => void;
  onToggleWeak: () => void;
  onNote: (n: string) => void;
  onStamp: () => void;
}) {
  const lamp =
    wf.weakBlocks
      ? "bg-rose-500"
      : wf.stamped
        ? "bg-emerald-500"
        : wf.heldBack
          ? "bg-amber-400"
          : "bg-slate-300";
  const lampLabel = wf.weakBlocks
    ? "WEAK — blocks seal"
    : wf.stamped
      ? "STAMPED"
      : wf.heldBack
        ? "HELD BACK"
        : "UNSET";
  return (
    <section className="mb-8 -mt-4 rounded-b-2xl border border-t-0 border-indigo-200 bg-indigo-50 px-5 py-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`inline-block h-3 w-3 rounded-full ${lamp}`} title={lampLabel} />
        <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-900">
          Walk-forward (Q5) · stage {stageId}
        </h3>
        <span className="rounded bg-indigo-800 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
          {lampLabel} · demo
        </span>
      </div>
      <p className="mt-1 text-sm text-indigo-800">
        Hold back unseen while picking recipe; score never-seen before take seal / move-forward.
        Weak score blocks seal (real bearing). Demo toggles only — not live PF.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onToggleHeld}
          className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
            wf.heldBack
              ? "bg-amber-500 text-slate-950"
              : "bg-white text-indigo-800 ring-1 ring-indigo-300"
          }`}
        >
          {wf.heldBack ? "Held back ✓" : "Hold back unseen"}
        </button>
        <button
          type="button"
          onClick={onToggleWeak}
          className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
            wf.weakBlocks
              ? "bg-rose-600 text-white"
              : "bg-white text-rose-800 ring-1 ring-rose-300"
          }`}
        >
          {wf.weakBlocks ? "Weak blocks ON" : "Toggle weak blocks"}
        </button>
        <button
          type="button"
          onClick={onStamp}
          className="rounded-lg bg-indigo-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-600"
        >
          Stamp WF score (demo)
        </button>
        {wf.stampedAt && (
          <span className="self-center text-xs text-indigo-700">
            Stamped: {new Date(wf.stampedAt).toLocaleString()}
          </span>
        )}
      </div>
      <textarea
        className="mt-3 w-full rounded-xl border border-indigo-200 bg-white p-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-indigo-400"
        rows={2}
        placeholder="Optional demo note (no invented scores)…"
        value={wf.note}
        onChange={(e) => onNote(e.target.value)}
      />
    </section>
  );
}


/** Stage-2 §4 Phase1 scorecard — Soft KEEP shelf ≠ promote/paper green. */
function Stage2ScorecardPanel({
  board,
  onChange,
}: {
  board: Stage2Scorecard;
  onChange: (fn: (b: Stage2Scorecard) => Stage2Scorecard) => void;
}) {
  const valueCols = SCORECARD_COLUMNS.filter((c) => c !== "soft_keep_or_promote");

  const softRows = board.rows.filter((r) => r.shelf === "soft_keep");
  const promoteRows = board.rows.filter((r) => r.shelf === "promote");
  const unsetRows = board.rows.filter((r) => r.shelf === "unset");

  const setHoldout = (holdoutCut: string) =>
    onChange((b) => ({ ...b, holdoutCut }));

  const addRow = () =>
    onChange((b) => ({ ...b, rows: [...b.rows, emptyScorecardRow("ES 15m")] }));

  const removeRow = (id: string) =>
    onChange((b) => ({ ...b, rows: b.rows.filter((r) => r.id !== id) }));

  const patchRow = (id: string, patch: Partial<ScorecardRow>) =>
    onChange((b) => ({
      ...b,
      rows: b.rows.map((r) => (r.id === id ? { ...r, ...patch } : r)),
    }));

  const setCellValue = (id: string, col: ScorecardColumn, val: string) =>
    onChange((b) => ({
      ...b,
      rows: b.rows.map((r) =>
        r.id === id
          ? {
              ...r,
              values: { ...r.values, [col]: val },
            }
          : r,
      ),
    }));

  const setShelf = (id: string, shelf: ScorecardShelf) =>
    onChange((b) => ({
      ...b,
      rows: b.rows.map((r) =>
        r.id === id
          ? {
              ...r,
              shelf,
              values: {
                ...r.values,
                soft_keep_or_promote:
                  shelf === "soft_keep"
                    ? "SOFT_KEEP"
                    : shelf === "promote"
                      ? "PROMOTE"
                      : "",
              },
            }
          : r,
      ),
    }));

  const renderRow = (row: ScorecardRow) => (
    <tr key={row.id} className="border-t border-slate-200 align-top">
      <td className="p-1.5">
        <select
          className="w-full rounded border border-slate-300 bg-white px-1 py-1 text-xs"
          value={row.cell}
          onChange={(e) => patchRow(row.id, { cell: e.target.value })}
        >
          {FLEET.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </td>
      <td className="p-1.5">
        <input
          className="w-28 rounded border border-slate-300 bg-white px-1 py-1 text-xs"
          placeholder="arm id"
          value={row.armId}
          onChange={(e) => patchRow(row.id, { armId: e.target.value })}
        />
      </td>
      {valueCols.map((col) => (
        <td key={col} className="p-1.5">
          <input
            className="min-w-[4.5rem] w-full rounded border border-slate-300 bg-white px-1 py-1 font-mono text-[10px]"
            placeholder="—"
            value={row.values[col] ?? ""}
            onChange={(e) => setCellValue(row.id, col, e.target.value)}
            title={col}
          />
        </td>
      ))}
      <td className="p-1.5">
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={() => setShelf(row.id, "soft_keep")}
            className={`rounded px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide ${
              row.shelf === "soft_keep"
                ? "bg-amber-500 text-slate-950 ring-2 ring-amber-700"
                : "bg-amber-100 text-amber-900 ring-1 ring-amber-300"
            }`}
            title="Research shelf — never promote green"
          >
            Soft KEEP
          </button>
          <button
            type="button"
            onClick={() => setShelf(row.id, "promote")}
            className={`rounded px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide ${
              row.shelf === "promote"
                ? "bg-emerald-600 text-white ring-2 ring-emerald-800"
                : "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-300"
            }`}
            title="Full promote gate only"
          >
            Promote
          </button>
          <button
            type="button"
            onClick={() => setShelf(row.id, "unset")}
            className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
              row.shelf === "unset"
                ? "bg-slate-400 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            unset
          </button>
        </div>
      </td>
      <td className="p-1.5">
        <button
          type="button"
          onClick={() => removeRow(row.id)}
          className="rounded bg-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-700 hover:bg-rose-100"
        >
          Remove
        </button>
      </td>
    </tr>
  );

  return (
    <section className="mb-8 -mt-4 rounded-b-2xl border border-t-0 border-violet-200 bg-violet-50 px-5 py-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-sm font-bold uppercase tracking-wide text-violet-950">
          Stage-2 §4 scorecard · Phase1
        </h3>
        <span className="rounded bg-violet-800 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
          Soft KEEP ≠ promote
        </span>
      </div>
      <p className="mt-1 text-sm text-violet-900">
        Binding columns only — fill lamps from measures; do not invent numbers. Paper champ /
        live configs untouched.
      </p>

      <div className="mt-3 rounded-xl border border-violet-200 bg-white px-3 py-2">
        <div className="text-[10px] font-bold uppercase tracking-wide text-violet-800">
          Promote gate
        </div>
        <code className="mt-1 block whitespace-pre-wrap break-words text-[11px] text-slate-800">
          {PROMOTE_GATE_TEXT}
        </code>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="text-xs font-semibold text-violet-900">
          Holdout cut (entry_time ≥)
          <input
            type="date"
            className="ml-2 rounded border border-violet-300 bg-white px-2 py-1 text-sm"
            value={board.holdoutCut || "2022-02-09"}
            onChange={(e) => setHoldout(e.target.value)}
          />
        </label>
        <span className="text-[11px] text-violet-700">Default 2022-02-09</span>
        <button
          type="button"
          onClick={addRow}
          className="rounded-lg bg-violet-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-violet-600"
        >
          Add arm row
        </button>
      </div>

      {/* Two visually distinct shelves */}
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-amber-500 px-2 py-0.5 text-[10px] font-extrabold uppercase text-slate-950">
              Soft KEEP shelf
            </span>
            <span className="text-[11px] text-amber-900">
              Research only — never paper green
            </span>
          </div>
          <p className="mt-1 text-[11px] text-amber-950">
            {softRows.length === 0
              ? "No Soft KEEP rows tagged yet."
              : softRows
                  .map((r) => `${r.cell}${r.armId ? ` · ${r.armId}` : ""}`)
                  .join(" · ")}
          </p>
        </div>
        <div className="rounded-xl border-2 border-emerald-600 bg-emerald-50 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
              Promote shelf
            </span>
            <span className="text-[11px] text-emerald-900">
              Full gate only — paper talk later
            </span>
          </div>
          <p className="mt-1 text-[11px] text-emerald-950">
            {promoteRows.length === 0
              ? "Empty — Soft KEEP must not land here."
              : promoteRows
                  .map((r) => `${r.cell}${r.armId ? ` · ${r.armId}` : ""}`)
                  .join(" · ")}
          </p>
        </div>
      </div>
      {unsetRows.length > 0 && (
        <p className="mt-2 text-[11px] text-slate-600">
          Unset shelf rows: {unsetRows.length} (tag Soft KEEP or Promote after lamps).
        </p>
      )}

      <div className="mt-3 overflow-x-auto rounded-xl border border-violet-200 bg-white">
        <table className="min-w-full border-collapse text-left text-xs">
          <thead className="bg-violet-100 text-[10px] uppercase tracking-wide text-violet-950">
            <tr>
              <th className="p-1.5">cell</th>
              <th className="p-1.5">arm</th>
              {valueCols.map((c) => (
                <th key={c} className="p-1.5 font-mono normal-case">
                  {c}
                </th>
              ))}
              <th className="p-1.5">shelf</th>
              <th className="p-1.5" />
            </tr>
          </thead>
          <tbody>
            {board.rows.length === 0 ? (
              <tr>
                <td
                  colSpan={valueCols.length + 4}
                  className="p-4 text-center text-slate-500"
                >
                  No rows yet — Add arm row, then fill §4 lamps (no invented measures).
                </td>
              </tr>
            ) : (
              board.rows.map(renderRow)
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
