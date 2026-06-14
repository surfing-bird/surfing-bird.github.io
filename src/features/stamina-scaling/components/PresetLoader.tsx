import { PRESETS } from "../presets";
import type { PresetId } from "../types";

interface PresetLoaderProps {
  onLoad: (presetId: PresetId) => void;
  hasEdits: boolean;
}

export function PresetLoader({ onLoad, hasEdits }: PresetLoaderProps) {
  const handleLoad = (presetId: PresetId) => {
    if (
      hasEdits &&
      !window.confirm(
        "Loading a preset will replace your current builds and rules. Continue?",
      )
    ) {
      return;
    }

    onLoad(presetId);
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-gray-900">Presets</h2>
      <div className="flex flex-col gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleLoad(preset.id)}
            className="rounded-xl border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            Load {preset.label}
          </button>
        ))}
      </div>
    </section>
  );
}
