import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

let registered = false;

export function registerCharts() {
  if (registered) {
    return;
  }

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

  registered = true;
}

export function echelonLinePlugin(echelonLevels: number[]) {
  return {
    id: "echelonLines",
    afterDraw(chart: Chart) {
      const { ctx, chartArea, scales } = chart;
      const xScale = scales.x;
      if (!xScale || !chartArea) {
        return;
      }

      ctx.save();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.6)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      for (const level of echelonLevels) {
        const x = xScale.getPixelForValue(level - 1);
        if (x < chartArea.left || x > chartArea.right) {
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(x, chartArea.top);
        ctx.lineTo(x, chartArea.bottom);
        ctx.stroke();
      }

      ctx.restore();
    },
  };
}
