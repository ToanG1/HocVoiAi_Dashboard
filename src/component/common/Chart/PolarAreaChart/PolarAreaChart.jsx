import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function PolarAreaChart({ data }) {
  if (data) {
    const chartData = {
      labels: data.labels,
      datasets: data.datasets,
    };
    return <PolarArea data={chartData} />;
  }
}
