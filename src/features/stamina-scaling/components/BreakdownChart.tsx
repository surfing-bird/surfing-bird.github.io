import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import type { ComparisonConfig, ConfigResult } from "../types";
import {
  BREAKDOWN_COLORS,
  BREAKDOWN_LABELS,
  breakdownToSeries,
} from "../stamina-scaling";
import { registerCharts } from "./chart-setup";
import "chart.js/auto";

interface BreakdownChartProps {
  results: ConfigResult[];
  focusedId: string | null;
  configs: ComparisonConfig[];
  onFocusChange: (id: string) => void;
}

export function BreakdownChart({
  results,
  focusedId,
  configs,
  onFocusChange,
}: BreakdownChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  const focusedResult =
    results.find((result) => result.config.id === focusedId) ?? results[0];

  useEffect(() => {
    registerCharts();
    const canvas = canvasRef.current;
    if (!canvas || !focusedResult) {
      return;
    }

    const labels = focusedResult.levels.map((level) => String(level.level));

    chartRef.current?.destroy();
    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: BREAKDOWN_LABELS.map((label, index) => ({
          label,
          data: focusedResult.levels.map(
            (level) => breakdownToSeries(level.breakdown)[index]
          ),
          backgroundColor: BREAKDOWN_COLORS[index],
          stack: "stamina",
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              footer: (items) => {
                const levelIndex = items[0]?.dataIndex ?? 0;
                const total = focusedResult.levels[levelIndex]?.stamina ?? 0;
                return `Total: ${total}`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: "Level",
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            title: {
              display: true,
              text: "Stamina components",
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [focusedResult]);

  if (!focusedResult) {
    return null;
  }

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      aria-label="Stamina component breakdown chart"
    >
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-semibold text-gray-900">
          Component Breakdown
        </h2>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <span>Breakdown for</span>
          <select
            value={focusedResult.config.id}
            onChange={(event) => onFocusChange(event.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            {configs.map((config) => (
              <option key={config.id} value={config.id}>
                {config.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="h-[320px]">
        <canvas id="breakdown-chart" ref={canvasRef} />
      </div>
    </div>
  );
}
