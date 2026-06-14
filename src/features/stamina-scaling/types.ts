export type GlobalRules = {
  baseStartingStamina: number;
  basePerLevelStamina: number;
  baseKitBonus: number;
  baseEchelonBonus: number;
  startingMultiplier: number;
  levelScalingDivider: number;
  kitBonusDivider: number;
  armorBonusDivider: number;
  armorBonuses: Record<number, number>;
  kitEchelonLevels: number[];
  maxLevel: number;
};

export type ComparisonConfig = {
  id: string;
  name: string;
  startingStamina: number;
  perLevelStamina: number;
  kit: number;
  echelon: number;
};

export type StaminaBreakdown = {
  starting: number;
  perLevel: number;
  kitEchelon: number;
  bonusEchelon: number;
  armor: number;
  total: number;
};

export type LevelResult = {
  level: number;
  breakdown: StaminaBreakdown;
  stamina: number;
};

export type ConfigResult = {
  config: ComparisonConfig;
  levels: LevelResult[];
};

export type SummaryStat = {
  configId: string;
  name: string;
  level1: number;
  levelMax: number;
  growth: number;
  growthPercent: number;
};

export type StaminaState = {
  globalRules: GlobalRules;
  configs: ComparisonConfig[];
  focusedId: string | null;
  lastPresetId: string | null;
};

export type PresetId = "tweaked" | "vanilla";

export type PresetDefinition = {
  id: PresetId;
  label: string;
  globalRules?: Partial<GlobalRules>;
  configs: Array<Omit<ComparisonConfig, "id"> & { id?: string }>;
};
