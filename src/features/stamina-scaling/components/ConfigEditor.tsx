import type { ComparisonConfig } from "../types";
import { ParamField } from "./ParamField";
import { Section } from "./Section";

interface ConfigEditorProps {
  config: ComparisonConfig;
  onChange: (updater: (config: ComparisonConfig) => ComparisonConfig) => void;
  onReset: () => void;
}

export function ConfigEditor({ config, onChange, onReset }: ConfigEditorProps) {
  return (
    <Section title={`Edit: ${config.name}`} onReset={onReset}>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
          Name
        </span>
        <input
          type="text"
          value={config.name}
          onChange={(event) =>
            onChange((current) => ({ ...current, name: event.target.value }))
          }
          className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        />
      </label>

      <ParamField
        label="Starting stamina"
        value={config.startingStamina}
        min={0}
        max={60}
        onChange={(startingStamina) =>
          onChange((current) => ({ ...current, startingStamina }))
        }
      />
      <ParamField
        label="Per-level stamina"
        value={config.perLevelStamina}
        min={0}
        max={30}
        onChange={(perLevelStamina) =>
          onChange((current) => ({ ...current, perLevelStamina }))
        }
      />
      <ParamField
        label="Kit bonus"
        value={config.kit}
        min={0}
        max={24}
        onChange={(kit) => onChange((current) => ({ ...current, kit }))}
      />
      <ParamField
        label="Echelon bonus"
        value={config.echelon}
        min={0}
        max={24}
        onChange={(echelon) => onChange((current) => ({ ...current, echelon }))}
      />
    </Section>
  );
}
