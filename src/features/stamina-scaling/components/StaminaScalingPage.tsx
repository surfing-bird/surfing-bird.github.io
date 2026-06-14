import { useMemo, useState } from "react";
import {
  calculateAllConfigs,
  computeSummaryStats,
} from "../stamina-scaling";
import { useStaminaState } from "../hooks/useStaminaState";
import { BreakdownChart } from "./BreakdownChart";
import { ComparisonPanel } from "./ComparisonPanel";
import { ConfigEditor } from "./ConfigEditor";
import { GlobalRulesPanel } from "./GlobalRulesPanel";
import { PresetLoader } from "./PresetLoader";
import { StaminaTable } from "./StaminaTable";
import { SummaryStats } from "./SummaryStats";
import { TotalStaminaChart } from "./TotalStaminaChart";

interface StaminaScalingPageProps {
  initialEncoded?: string;
}

export function StaminaScalingPage({ initialEncoded }: StaminaScalingPageProps) {
  const {
    state,
    setGlobalRules,
    updateConfig,
    addConfig,
    duplicateConfig,
    deleteConfig,
    setFocusedId,
    applyPreset,
    resetGlobalRules,
    resetConfig,
    resetAll,
    hasEditsSincePreset,
  } = useStaminaState(initialEncoded);

  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const results = useMemo(
    () => calculateAllConfigs(state.configs, state.globalRules),
    [state.configs, state.globalRules],
  );

  const summaryStats = useMemo(() => computeSummaryStats(results), [results]);

  const focusedConfig =
    state.configs.find((config) => config.id === state.focusedId) ??
    state.configs[0];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyMessage("Link copied");
      window.setTimeout(() => setCopyMessage(null), 2000);
    } catch {
      setCopyMessage("Could not copy link");
    }
  };

  const handleResetAll = () => {
    if (
      window.confirm(
        "Reset all rules and builds to the default Tweaked Matrix?",
      )
    ) {
      resetAll();
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Stamina Scaling Visualizer
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-600 sm:text-base">
            Compare Draw Steel stamina curves across builds, tweak every scaling
            parameter, and share your setup via URL.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <button
            type="button"
            onClick={handleCopyLink}
            className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            Copy link
          </button>
          <button
            type="button"
            onClick={handleResetAll}
            className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            Reset all
          </button>
          {copyMessage && (
            <span className="text-sm text-green-700">{copyMessage}</span>
          )}
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <aside className="flex flex-col gap-4 print:hidden lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
          <PresetLoader
            onLoad={applyPreset}
            hasEdits={hasEditsSincePreset}
          />
          <GlobalRulesPanel
            rules={state.globalRules}
            onChange={setGlobalRules}
            onReset={resetGlobalRules}
          />
          <ComparisonPanel
            configs={state.configs}
            focusedId={state.focusedId}
            onFocus={setFocusedId}
            onDuplicate={duplicateConfig}
            onDelete={deleteConfig}
            onAdd={addConfig}
            onRename={(id, name) =>
              updateConfig(id, (config) => ({ ...config, name }))
            }
          />
          {focusedConfig && (
            <ConfigEditor
              config={focusedConfig}
              onChange={(updater) => updateConfig(focusedConfig.id, updater)}
              onReset={() => resetConfig(focusedConfig.id)}
            />
          )}
        </aside>

        <main className="flex min-w-0 flex-col gap-6">
          <TotalStaminaChart
            results={results}
            echelonLevels={state.globalRules.kitEchelonLevels}
          />
          <BreakdownChart
            results={results}
            focusedId={state.focusedId}
            configs={state.configs}
            onFocusChange={setFocusedId}
          />
          <SummaryStats stats={summaryStats} />
          <StaminaTable
            results={results}
            echelonLevels={state.globalRules.kitEchelonLevels}
          />
        </main>
      </div>
    </div>
  );
}
