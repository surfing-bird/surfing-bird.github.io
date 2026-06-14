import type { GlobalRules, StaminaState } from "./types";
import { DEFAULT_GLOBAL_RULES } from "./stamina-scaling";
import { getDefaultState } from "./presets";

type SerializedState = {
  g: GlobalRules;
  c: StaminaState["configs"];
  f: string | null;
  p: string | null;
};

function normalizeArmorBonuses(
  armorBonuses: Record<string | number, number>
): Record<number, number> {
  return Object.fromEntries(
    Object.entries(armorBonuses).map(([level, bonus]) => [Number(level), bonus])
  );
}

function normalizeGlobalRules(rules: GlobalRules): GlobalRules {
  return {
    ...DEFAULT_GLOBAL_RULES,
    ...rules,
    armorBonuses: normalizeArmorBonuses(rules.armorBonuses),
    kitEchelonLevels: [...rules.kitEchelonLevels].sort((a, b) => a - b),
  };
}

export function encodeStaminaState(state: StaminaState): string {
  const payload: SerializedState = {
    g: state.globalRules,
    c: state.configs,
    f: state.focusedId,
    p: state.lastPresetId,
  };

  const json = JSON.stringify(payload);
  return btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodeStaminaState(encoded: string | undefined): StaminaState {
  if (!encoded) {
    return {
      ...getDefaultState(),
      lastPresetId: "tweaked",
    };
  }

  try {
    const padded = encoded
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(encoded.length / 4) * 4, "=");
    const json = decodeURIComponent(atob(padded));
    const parsed = JSON.parse(json) as SerializedState;

    const configs = parsed.c ?? [];
    const focusedId =
      parsed.f && configs.some((config) => config.id === parsed.f)
        ? parsed.f
        : (configs[0]?.id ?? null);

    return {
      globalRules: normalizeGlobalRules(parsed.g),
      configs,
      focusedId,
      lastPresetId: parsed.p ?? null,
    };
  } catch {
    return {
      ...getDefaultState(),
      lastPresetId: "tweaked",
    };
  }
}

export function statesEqual(a: StaminaState, b: StaminaState): boolean {
  return encodeStaminaState(a) === encodeStaminaState(b);
}
