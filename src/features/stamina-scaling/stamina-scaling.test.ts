import { describe, expect, it } from "vitest";
import {
  calculateAllConfigs,
  calculateStaminaByLevel,
  DEFAULT_GLOBAL_RULES,
} from "./stamina-scaling";
import { loadPreset, TWEAKED_PRESET, VANILLA_PRESET } from "./presets";

describe("calculateStaminaByLevel", () => {
  it("matches tweaked defaults for Kit +6, Echelon +0", () => {
    const config = {
      id: "test",
      name: "Kit +6, Echelon +0",
      startingStamina: 30,
      perLevelStamina: 3,
      kit: 6,
      echelon: 0,
    };

    const results = calculateStaminaByLevel(config, DEFAULT_GLOBAL_RULES);

    expect(results[0]?.stamina).toBe(36);
    expect(results[3]?.stamina).toBe(57);
    expect(results[6]?.stamina).toBe(78);
    expect(results[9]?.stamina).toBe(102);
  });

  it("matches vanilla Kit +6 at level 10", () => {
    const config = {
      id: "test",
      name: "Kit +6",
      startingStamina: 18,
      perLevelStamina: 9,
      kit: 6,
      echelon: 0,
    };

    const results = calculateStaminaByLevel(config, DEFAULT_GLOBAL_RULES);
    expect(results[9]?.stamina).toBe(144);
  });

  it("returns breakdown components that sum to rounded total", () => {
    const config = {
      id: "test",
      name: "Kit +3, Echelon +6",
      startingStamina: 30,
      perLevelStamina: 3,
      kit: 3,
      echelon: 6,
    };

    const results = calculateStaminaByLevel(config, DEFAULT_GLOBAL_RULES);

    for (const result of results) {
      const { breakdown } = result;
      const raw =
        breakdown.starting +
        breakdown.perLevel +
        breakdown.kitEchelon +
        breakdown.bonusEchelon +
        breakdown.armor;
      expect(result.stamina).toBe(Math.round(raw));
    }
  });
});

describe("preset output parity with stamina-scaling.js", () => {
  const tweakedLevel1 = [30, 36, 33, 39, 36, 42, 39, 45, 42, 48];
  const tweakedLevel10 = [78, 102, 90, 114, 102, 126, 114, 138, 126, 150];

  it("matches tweaked matrix at levels 1 and 10", () => {
    const { configs, globalRules } = loadPreset(TWEAKED_PRESET);
    const results = calculateAllConfigs(configs, globalRules);

    results.forEach((result, index) => {
      expect(result.levels[0]?.stamina).toBe(tweakedLevel1[index]);
      expect(result.levels[9]?.stamina).toBe(tweakedLevel10[index]);
    });
  });

  const vanillaLevel1 = [18, 21, 21, 24, 24, 27, 27, 30, 30, 33];
  const vanillaLevel10 = [120, 150, 132, 162, 144, 174, 156, 186, 168, 198];

  it("matches vanilla matrix at levels 1 and 10", () => {
    const { configs, globalRules } = loadPreset(VANILLA_PRESET);
    const results = calculateAllConfigs(configs, globalRules);

    results.forEach((result, index) => {
      expect(result.levels[0]?.stamina).toBe(vanillaLevel1[index]);
      expect(result.levels[9]?.stamina).toBe(vanillaLevel10[index]);
    });
  });
});
