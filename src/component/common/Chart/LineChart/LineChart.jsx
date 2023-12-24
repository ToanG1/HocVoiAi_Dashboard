import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Line Chart",
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

export function LineChart({ data }) {
  if (data) {
    const chartData = {
      labels: data.labels,
      datasets: data.datasets,
    };
    return (
      <Line
        options={options}
        data={chartData}
        width={"250px"}
        height={"200px"}
      />
    );
  }
}
