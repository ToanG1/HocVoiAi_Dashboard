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
export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "PolarArea Chart",
    },
  },
  layout: {
    padding: {
      left: 20,
      right: 20,
      bottom: 10,
      top: 10,
    },
  },
  maintainAspectRatio: false,
};
export function PolarAreaChart({ data }) {
  if (data) {
    const chartData = {
      labels: data.labels,
      datasets: data.datasets,
    };
    return (
      <PolarArea
        data={chartData}
        options={options}
        width={"280px"}
        height={"200px"}
      />
    );
  }
}
