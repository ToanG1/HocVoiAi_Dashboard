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
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const fakeData = [1000, 1200, 1300, 1400, 1500, 1600, 1700];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: fakeData,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: fakeData,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function VerticalChart() {
  return <Bar options={options} data={data} />;
}
