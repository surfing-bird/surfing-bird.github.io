import type { ComparisonConfig } from "../types";
import { CONFIG_COLORS } from "../stamina-scaling";

interface ComparisonPanelProps {
  configs: ComparisonConfig[];
  focusedId: string | null;
  onFocus: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  onRename: (id: string, name: string) => void;
}

export function ComparisonPanel({
  configs,
  focusedId,
  onFocus,
  onDuplicate,
  onDelete,
  onAdd,
  onRename,
}: ComparisonPanelProps) {
  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete "${name}"?`)) {
      onDelete(id);
    }
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-gray-900">
          Comparison Builds
        </h2>
        {configs.length >= 11 && (
          <p className="mt-1 text-xs text-amber-700">
            {configs.length} builds — chart legend may feel crowded.
          </p>
        )}
      </div>

      <div className="px-2 py-2">
        {configs.length === 0 ? (
          <p className="px-2 py-4 text-sm text-gray-500">
            No builds yet. Load a preset or add one.
          </p>
        ) : (
          <ul className="flex flex-col gap-1">
            {configs.map((config, index) => {
              const color = CONFIG_COLORS[index % CONFIG_COLORS.length];
              const isFocused = config.id === focusedId;

              return (
                <li
                  key={config.id}
                  className={`rounded-xl border px-2 py-2 ${
                    isFocused
                      ? "border-gray-400 bg-gray-50"
                      : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden
                    />
                    <input
                      type="text"
                      value={config.name}
                      onChange={(event) =>
                        onRename(config.id, event.target.value)
                      }
                      className="min-w-0 flex-1 rounded-md border border-transparent bg-transparent px-1 py-0.5 text-sm focus:border-gray-300 focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                    />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1 pl-5">
                    <button
                      type="button"
                      onClick={() => onFocus(config.id)}
                      className={`rounded-md px-2 py-1 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${
                        isFocused
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Focus
                    </button>
                    <button
                      type="button"
                      onClick={() => onDuplicate(config.id)}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                    >
                      Duplicate
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(config.id, config.name)}
                      className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="border-t border-gray-100 px-4 py-3">
        <button
          type="button"
          onClick={onAdd}
          className="w-full rounded-xl border border-dashed border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        >
          Add build
        </button>
      </div>
    </section>
  );
}
