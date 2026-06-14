import {
  createConfigFromDefaults,
  DEFAULT_GLOBAL_RULES,
} from "./stamina-scaling";
import type { ComparisonConfig, PresetDefinition } from "./types";

function withIds(
  configs: Array<Omit<ComparisonConfig, "id"> & { id?: string }>,
  globalRules = DEFAULT_GLOBAL_RULES
): ComparisonConfig[] {
  return configs.map((config) =>
    createConfigFromDefaults(globalRules, {
      ...config,
      id: config.id ?? crypto.randomUUID(),
    })
  );
}

const tweakedConfigs: Array<Omit<ComparisonConfig, "id">> = [
  {
    name: "Kit +0, Echelon +0",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 0,
    echelon: 0,
  },
  {
    name: "Kit +0, Echelon +3",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 0,
    echelon: 3,
  },
  {
    name: "Kit +3, Echelon +0",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 3,
    echelon: 0,
  },
  {
    name: "Kit +3, Echelon +3",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 3,
    echelon: 3,
  },
  {
    name: "Kit +6, Echelon +0",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 6,
    echelon: 3,
  },
  {
    name: "Kit +6, Echelon +3",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 6,
    echelon: 3,
  },
  {
    name: "Kit +9, Echelon +0",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 9,
    echelon: 0,
  },
  {
    name: "Kit +9, Echelon +3",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 9,
    echelon: 3,
  },
  {
    name: "Kit +12, Echelon +0",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 12,
    echelon: 3,
  },
  {
    name: "Kit +12, Echelon +3",
    startingStamina: 30,
    perLevelStamina: 3,
    kit: 12,
    echelon: 3,
  },
];

const vanillaConfigs: Array<Omit<ComparisonConfig, "id">> = [
  {
    name: "Low Stamina, Kit +0",
    startingStamina: 18,
    perLevelStamina: 9,
    kit: 0,
    echelon: 0,
  },
  {
    name: "High Stamina, Kit +0",
    startingStamina: 21,
    perLevelStamina: 12,
    kit: 0,
    echelon: 0,
  },
  {
    name: "Low Stamina, Kit +3",
    startingStamina: 18,
    perLevelStamina: 9,
    kit: 3,
    echelon: 0,
  },
  {
    name: "High Stamina, Kit +3",
    startingStamina: 21,
    perLevelStamina: 12,
    kit: 3,
    echelon: 0,
  },
  {
    name: "Low Stamina, Kit +6",
    startingStamina: 18,
    perLevelStamina: 9,
    kit: 6,
    echelon: 0,
  },
  {
    name: "High Stamina, Kit +6",
    startingStamina: 21,
    perLevelStamina: 12,
    kit: 6,
    echelon: 0,
  },
  {
    name: "Low Stamina, Kit +9",
    startingStamina: 18,
    perLevelStamina: 9,
    kit: 9,
    echelon: 0,
  },
  {
    name: "High Stamina, Kit +9",
    startingStamina: 21,
    perLevelStamina: 12,
    kit: 9,
    echelon: 0,
  },
  {
    name: "Low Stamina, Kit +12",
    startingStamina: 18,
    perLevelStamina: 9,
    kit: 12,
    echelon: 0,
  },
  {
    name: "High Stamina, Kit +12",
    startingStamina: 21,
    perLevelStamina: 12,
    kit: 12,
    echelon: 0,
  },
];

export const TWEAKED_PRESET: PresetDefinition = {
  id: "tweaked",
  label: "Tweaked Matrix",
  configs: tweakedConfigs,
};

export const VANILLA_PRESET: PresetDefinition = {
  id: "vanilla",
  label: "Vanilla Matrix",
  configs: vanillaConfigs,
};

export const PRESETS = [TWEAKED_PRESET, VANILLA_PRESET] as const;

export function loadPreset(preset: PresetDefinition): {
  globalRules: typeof DEFAULT_GLOBAL_RULES;
  configs: ComparisonConfig[];
  focusedId: string | null;
  lastPresetId: string;
} {
  const globalRules = {
    ...DEFAULT_GLOBAL_RULES,
    ...preset.globalRules,
  };

  const configs = withIds(preset.configs, globalRules);

  return {
    globalRules,
    configs,
    focusedId: configs[0]?.id ?? null,
    lastPresetId: preset.id,
  };
}

export function getDefaultState() {
  return loadPreset(VANILLA_PRESET);
}
