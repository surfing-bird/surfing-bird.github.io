import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import type { ConfigResult } from "../types";
import { CONFIG_COLORS } from "../stamina-scaling";
import { echelonLinePlugin, registerCharts } from "./chart-setup";

interface TotalStaminaChartProps {
  results: ConfigResult[];
  echelonLevels: number[];
}

export function TotalStaminaChart({
  results,
  echelonLevels,
}: TotalStaminaChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    registerCharts();
    const canvas = canvasRef.current;
    if (!canvas || results.length === 0) {
      return;
    }

    const labels = results[0]?.levels.map((level) => String(level.level)) ?? [];

    chartRef.current?.destroy();
    chartRef.current = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: results.map((result, index) => ({
          label: result.config.name,
          data: result.levels.map((level) => level.stamina),
          borderColor: CONFIG_COLORS[index % CONFIG_COLORS.length],
          backgroundColor: CONFIG_COLORS[index % CONFIG_COLORS.length],
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.15,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: results.length > 6 ? 12 : 16,
              padding: 12,
            },
          },
          tooltip: {
            callbacks: {
              title: (items) => `Level ${items[0]?.label ?? ""}`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Level",
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
            title: {
              display: true,
              text: "Stamina",
            },
          },
        },
      },
      plugins: [echelonLinePlugin(echelonLevels)],
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [results, echelonLevels]);

  if (results.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white text-sm text-gray-500">
        Add builds or load a preset to see the chart.
      </div>
    );
  }

  return (
    <div
      className="h-[400px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      aria-label="Total stamina by level chart"
    >
      <h2 className="mb-3 text-sm font-semibold text-gray-900">
        Total Stamina by Level
      </h2>
      <div className="h-[340px]">
        <canvas id="total-stamina-chart" ref={canvasRef} />
      </div>
    </div>
  );
}
