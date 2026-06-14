import type { SummaryStat } from "../types";
import { CONFIG_COLORS } from "../stamina-scaling";

interface SummaryStatsProps {
  stats: SummaryStat[];
}

export function SummaryStats({ stats }: SummaryStatsProps) {
  if (stats.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-gray-900">Summary</h2>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.configId}
            className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-3"
          >
            <div className="mb-1 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: CONFIG_COLORS[index % CONFIG_COLORS.length],
                }}
                aria-hidden
              />
              <span className="text-sm font-semibold text-gray-900">
                {stat.name}
              </span>
            </div>
            <p className="text-sm text-gray-700 tabular-nums">
              {stat.level1} → {stat.levelMax} (+{stat.growth}, +
              {stat.growthPercent}%)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
