import type { GlobalRules } from "../types";
import { ParamField } from "./ParamField";
import { Section } from "./Section";

interface GlobalRulesPanelProps {
  rules: GlobalRules;
  onChange: (updater: (rules: GlobalRules) => GlobalRules) => void;
  onReset: () => void;
}

export function GlobalRulesPanel({
  rules,
  onChange,
  onReset,
}: GlobalRulesPanelProps) {
  const armorEntries = Object.entries(rules.armorBonuses)
    .map(([level, bonus]) => ({ level: Number(level), bonus }))
    .sort((a, b) => a.level - b.level);

  const updateArmorEntry = (
    index: number,
    field: "level" | "bonus",
    value: number
  ) => {
    onChange((current) => {
      const entries = Object.entries(current.armorBonuses)
        .map(([level, bonus]) => ({ level: Number(level), bonus }))
        .sort((a, b) => a.level - b.level);

      const target = entries[index];
      if (!target) {
        return current;
      }

      if (field === "level") {
        target.level = value;
      } else {
        target.bonus = value;
      }

      return {
        ...current,
        armorBonuses: Object.fromEntries(
          entries.map((entry) => [entry.level, entry.bonus])
        ),
      };
    });
  };

  const updateEchelonLevel = (index: number, value: number) => {
    onChange((current) => {
      const levels = [...current.kitEchelonLevels];
      levels[index] = value;
      return { ...current, kitEchelonLevels: levels };
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Section title="Global Rules" onReset={onReset}>
        <Section title="Base defaults (new builds)" defaultOpen={false}>
          <ParamField
            label="Starting stamina"
            value={rules.baseStartingStamina}
            min={0}
            max={60}
            onChange={(baseStartingStamina) =>
              onChange((current) => ({ ...current, baseStartingStamina }))
            }
          />
          <ParamField
            label="Per-level stamina"
            value={rules.basePerLevelStamina}
            min={0}
            max={30}
            onChange={(basePerLevelStamina) =>
              onChange((current) => ({ ...current, basePerLevelStamina }))
            }
          />
          <ParamField
            label="Kit bonus"
            value={rules.baseKitBonus}
            min={0}
            max={24}
            onChange={(baseKitBonus) =>
              onChange((current) => ({ ...current, baseKitBonus }))
            }
          />
          <ParamField
            label="Echelon bonus"
            value={rules.baseEchelonBonus}
            min={0}
            max={24}
            onChange={(baseEchelonBonus) =>
              onChange((current) => ({ ...current, baseEchelonBonus }))
            }
          />
        </Section>

        {/* <Section title="Multipliers & dividers" defaultOpen={false}>
          <ParamField
            label="Starting multiplier"
            value={rules.startingMultiplier}
            min={0}
            max={4}
            step={0.1}
            onChange={(startingMultiplier) =>
              onChange((current) => ({ ...current, startingMultiplier }))
            }
          />
          <ParamField
            label="Level scaling divider"
            value={rules.levelScalingDivider}
            min={0.1}
            max={4}
            step={0.1}
            onChange={(levelScalingDivider) =>
              onChange((current) => ({ ...current, levelScalingDivider }))
            }
          />
          <ParamField
            label="Kit bonus divider"
            value={rules.kitBonusDivider}
            min={0.1}
            max={4}
            step={0.1}
            onChange={(kitBonusDivider) =>
              onChange((current) => ({ ...current, kitBonusDivider }))
            }
          />
          <ParamField
            label="Armor bonus divider"
            value={rules.armorBonusDivider}
            min={0.1}
            max={4}
            step={0.1}
            onChange={(armorBonusDivider) =>
              onChange((current) => ({ ...current, armorBonusDivider }))
            }
          />
        </Section> */}

        <Section title="Armor bonuses" defaultOpen={false}>
          {armorEntries.map((entry, index) => (
            <div
              key={`${entry.level}-${index}`}
              className="grid grid-cols-2 gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              <ParamField
                label="At level"
                value={entry.level}
                min={1}
                max={rules.maxLevel}
                showSlider={false}
                onChange={(level) => updateArmorEntry(index, "level", level)}
              />
              <ParamField
                label="Bonus"
                value={entry.bonus}
                min={0}
                max={30}
                onChange={(bonus) => updateArmorEntry(index, "bonus", bonus)}
              />
            </div>
          ))}
        </Section>

        {/* <Section title="Echelon triggers" defaultOpen={false}>
          {rules.kitEchelonLevels.map((level, index) => (
            <ParamField
              key={index}
              label={`Trigger ${index + 1}`}
              value={level}
              min={1}
              max={rules.maxLevel}
              showSlider={false}
              onChange={(value) => updateEchelonLevel(index, value)}
            />
          ))}
        </Section> */}

        {/* <ParamField
          label="Max level"
          value={rules.maxLevel}
          min={1}
          max={20}
          showSlider={false}
          onChange={(maxLevel) =>
            onChange((current) => ({ ...current, maxLevel }))
          }
        /> */}
      </Section>
    </div>
  );
}
