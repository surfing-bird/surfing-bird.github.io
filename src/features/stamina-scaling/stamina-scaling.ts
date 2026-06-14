import type {
  ComparisonConfig,
  ConfigResult,
  GlobalRules,
  LevelResult,
  StaminaBreakdown,
  SummaryStat,
} from "./types";

export const DEFAULT_GLOBAL_RULES: GlobalRules = {
  baseStartingStamina: 30,
  basePerLevelStamina: 3,
  baseKitBonus: 6,
  baseEchelonBonus: 0,
  startingMultiplier: 1,
  levelScalingDivider: 1,
  kitBonusDivider: 1,
  armorBonusDivider: 1,
  armorBonuses: { 2: 6, 5: 6, 9: 9 },
  kitEchelonLevels: [1, 4, 7, 10],
  maxLevel: 10,
};

export const CONFIG_COLORS = [
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#9333ea",
  "#ea580c",
  "#0891b2",
  "#ca8a04",
  "#db2777",
  "#4f46e5",
  "#0d9488",
  "#b45309",
  "#7c3aed",
];

function getArmorBonus(level: number, globalRules: GlobalRules): number {
  return Object.entries(globalRules.armorBonuses)
    .filter(([threshold]) => level >= Number(threshold))
    .reduce(
      (sum, [, bonus]) => sum + bonus / globalRules.armorBonusDivider,
      0,
    );
}

function getEchelonsReached(level: number, globalRules: GlobalRules): number {
  return globalRules.kitEchelonLevels.filter(
    (echelon) => level >= echelon,
  ).length;
}

function calculateBreakdown(
  level: number,
  config: ComparisonConfig,
  globalRules: GlobalRules,
): StaminaBreakdown {
  const starting = config.startingStamina * globalRules.startingMultiplier;
  const perLevel =
    (config.perLevelStamina / globalRules.levelScalingDivider) * (level - 1);
  const echelonsReached = getEchelonsReached(level, globalRules);
  const kitEchelon =
    (config.kit / globalRules.kitBonusDivider) * echelonsReached;
  const bonusEchelon = config.echelon * echelonsReached;
  const armor = getArmorBonus(level, globalRules);
  const rawTotal = starting + perLevel + kitEchelon + bonusEchelon + armor;

  return {
    starting,
    perLevel,
    kitEchelon,
    bonusEchelon,
    armor,
    total: Math.round(rawTotal),
  };
}

export function calculateStaminaByLevel(
  config: ComparisonConfig,
  globalRules: GlobalRules,
): LevelResult[] {
  const output: LevelResult[] = [];

  for (let level = 1; level <= globalRules.maxLevel; level++) {
    const breakdown = calculateBreakdown(level, config, globalRules);
    output.push({
      level,
      breakdown,
      stamina: breakdown.total,
    });
  }

  return output;
}

export function calculateAllConfigs(
  configs: ComparisonConfig[],
  globalRules: GlobalRules,
): ConfigResult[] {
  return configs.map((config) => ({
    config,
    levels: calculateStaminaByLevel(config, globalRules),
  }));
}

export function computeSummaryStats(
  results: ConfigResult[],
): SummaryStat[] {
  return results.map(({ config, levels }) => {
    const level1 = levels[0]?.stamina ?? 0;
    const levelMax = levels[levels.length - 1]?.stamina ?? 0;
    const growth = levelMax - level1;
    const growthPercent =
      level1 === 0 ? 0 : Math.round((growth / level1) * 100);

    return {
      configId: config.id,
      name: config.name,
      level1,
      levelMax,
      growth,
      growthPercent,
    };
  });
}

export function createConfigFromDefaults(
  globalRules: GlobalRules,
  overrides: Partial<ComparisonConfig> = {},
): ComparisonConfig {
  return {
    id: crypto.randomUUID(),
    name: "New Build",
    startingStamina: globalRules.baseStartingStamina,
    perLevelStamina: globalRules.basePerLevelStamina,
    kit: globalRules.baseKitBonus,
    echelon: globalRules.baseEchelonBonus,
    ...overrides,
  };
}

export function normalizeEchelonLevels(
  levels: number[],
  maxLevel: number,
): number[] {
  const unique = [...new Set(levels.map((level) => Math.round(level)))]
    .filter((level) => level >= 1 && level <= maxLevel)
    .sort((a, b) => a - b);

  return unique.length > 0 ? unique : [1];
}

export const BREAKDOWN_LABELS = [
  "Starting",
  "Per-level",
  "Kit echelon",
  "Bonus echelon",
  "Armor",
] as const;

export const BREAKDOWN_COLORS = [
  "#94a3b8",
  "#60a5fa",
  "#34d399",
  "#fbbf24",
  "#f87171",
];

export function breakdownToSeries(breakdown: StaminaBreakdown): number[] {
  return [
    breakdown.starting,
    breakdown.perLevel,
    breakdown.kitEchelon,
    breakdown.bonusEchelon,
    breakdown.armor,
  ];
}
