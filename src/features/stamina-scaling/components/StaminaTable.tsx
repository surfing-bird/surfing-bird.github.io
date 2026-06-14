import type { ConfigResult } from "../types";

interface StaminaTableProps {
  results: ConfigResult[];
  echelonLevels: number[];
}

export function StaminaTable({ results, echelonLevels }: StaminaTableProps) {
  if (results.length === 0) {
    return null;
  }

  const levels = results[0]?.levels ?? [];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-gray-900">
          Level Comparison Table
        </h2>
      </div>
      <div className="max-h-[420px] overflow-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-[#f3f3ee]">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Level</th>
              {results.map((result) => (
                <th
                  key={result.config.id}
                  className="px-3 py-2 text-right font-semibold"
                >
                  {result.config.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {levels.map((levelRow, rowIndex) => {
              const isEchelonRow = echelonLevels.includes(levelRow.level);

              return (
                <tr
                  key={levelRow.level}
                  className={
                    isEchelonRow
                      ? "bg-amber-50/70"
                      : rowIndex % 2 === 0
                        ? "bg-[#f3f3ee]/60"
                        : "bg-white"
                  }
                >
                  <td className="px-3 py-2 font-medium">{levelRow.level}</td>
                  {results.map((result) => (
                    <td
                      key={result.config.id}
                      className="px-3 py-2 text-right tabular-nums"
                    >
                      {result.levels[rowIndex]?.stamina ?? "—"}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
