import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
      position: "left",
    },
    title: {
      display: true,
      text: "Vertical Chart",
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

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: fakeData,
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: fakeData,
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export function VerticalChart({ data }) {
  if (data) {
    const chartData = {
      labels: data.labels,
      datasets: data.datasets,
    };
    return (
      <Bar
        options={options}
        data={chartData}
        width={"300px"}
        height={"200px"}
      />
    );
  }
}
