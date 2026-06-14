import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { ComparisonConfig, GlobalRules, PresetId, StaminaState } from "../types";
import {
  createConfigFromDefaults,
  DEFAULT_GLOBAL_RULES,
  normalizeEchelonLevels,
} from "../stamina-scaling";
import {
  loadPreset,
  TWEAKED_PRESET,
  VANILLA_PRESET,
} from "../presets";
import { decodeStaminaState, encodeStaminaState } from "../url-state";

const PRESET_MAP: Record<PresetId, typeof TWEAKED_PRESET> = {
  tweaked: TWEAKED_PRESET,
  vanilla: VANILLA_PRESET,
} as const;

function isPresetId(value: string | null): value is PresetId {
  return value === "tweaked" || value === "vanilla";
}

export function useStaminaState(initialEncoded: string | undefined) {
  const navigate = useNavigate({ from: "/stamina-scaling-tweaks" });
  const [state, setState] = useState<StaminaState>(() =>
    decodeStaminaState(initialEncoded),
  );
  const skipUrlSync = useRef(true);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    skipUrlSync.current = true;
    setState(decodeStaminaState(initialEncoded));
  }, [initialEncoded]);

  useEffect(() => {
    if (skipUrlSync.current) {
      skipUrlSync.current = false;
      return;
    }

    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
    }

    debounceRef.current = window.setTimeout(() => {
      navigate({
        search: { s: encodeStaminaState(state) },
        replace: true,
      });
    }, 300);

    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }
    };
  }, [state, navigate]);

  const setGlobalRules = useCallback(
    (updater: (rules: GlobalRules) => GlobalRules) => {
      setState((current) => {
        const nextRules = updater(current.globalRules);
        const normalizedEchelons = normalizeEchelonLevels(
          nextRules.kitEchelonLevels,
          nextRules.maxLevel,
        );

        return {
          ...current,
          globalRules: {
            ...nextRules,
            kitEchelonLevels: normalizedEchelons,
            maxLevel: Math.max(1, Math.min(20, Math.round(nextRules.maxLevel))),
          },
          lastPresetId: null,
        };
      });
    },
    [],
  );

  const updateConfig = useCallback(
    (id: string, updater: (config: ComparisonConfig) => ComparisonConfig) => {
      setState((current) => ({
        ...current,
        configs: current.configs.map((config) =>
          config.id === id ? updater(config) : config,
        ),
        lastPresetId: null,
      }));
    },
    [],
  );

  const addConfig = useCallback(() => {
    setState((current) => {
      const config = createConfigFromDefaults(current.globalRules, {
        name: `Build ${current.configs.length + 1}`,
      });

      return {
        ...current,
        configs: [...current.configs, config],
        focusedId: config.id,
        lastPresetId: null,
      };
    });
  }, []);

  const duplicateConfig = useCallback((id: string) => {
    setState((current) => {
      const source = current.configs.find((config) => config.id === id);
      if (!source) {
        return current;
      }

      const copy = createConfigFromDefaults(current.globalRules, {
        ...source,
        id: crypto.randomUUID(),
        name: `${source.name} (copy)`,
      });

      return {
        ...current,
        configs: [...current.configs, copy],
        focusedId: copy.id,
        lastPresetId: null,
      };
    });
  }, []);

  const deleteConfig = useCallback((id: string) => {
    setState((current) => {
      const configs = current.configs.filter((config) => config.id !== id);
      const focusedId =
        current.focusedId === id ? (configs[0]?.id ?? null) : current.focusedId;

      return {
        ...current,
        configs,
        focusedId,
        lastPresetId: null,
      };
    });
  }, []);

  const setFocusedId = useCallback((id: string) => {
    setState((current) => ({ ...current, focusedId: id }));
  }, []);

  const applyPreset = useCallback((presetId: PresetId) => {
    setState(loadPreset(PRESET_MAP[presetId]));
  }, []);

  const resetGlobalRules = useCallback(() => {
    setState((current) => ({
      ...current,
      globalRules: { ...DEFAULT_GLOBAL_RULES },
      lastPresetId: null,
    }));
  }, []);

  const resetConfig = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      configs: current.configs.map((config) =>
        config.id === id
          ? {
              ...config,
              startingStamina: current.globalRules.baseStartingStamina,
              perLevelStamina: current.globalRules.basePerLevelStamina,
              kit: current.globalRules.baseKitBonus,
              echelon: current.globalRules.baseEchelonBonus,
            }
          : config,
      ),
      lastPresetId: null,
    }));
  }, []);

  const resetAll = useCallback(() => {
    setState(decodeStaminaState(undefined));
  }, []);

  const hasEditsSincePreset = useMemo(() => {
    if (!isPresetId(state.lastPresetId)) {
      return true;
    }

    const presetState = loadPreset(PRESET_MAP[state.lastPresetId]);

    return (
      encodeStaminaState({
        globalRules: state.globalRules,
        configs: state.configs,
        focusedId: null,
        lastPresetId: state.lastPresetId,
      }) !==
      encodeStaminaState({
        globalRules: presetState.globalRules,
        configs: presetState.configs,
        focusedId: null,
        lastPresetId: presetState.lastPresetId,
      })
    );
  }, [state]);

  return {
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
  };
}
