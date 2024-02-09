import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      type: "bar",
      label: "Bar Dataset",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      type: "line",
      label: "Line Dataset",
      data: [10, 50, 30, 50],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

function BarLineChart() {
  return (
    <div className="responsive-chart responsive-chart_other">
      <Bar data={data} />
    </div>
  );
}

export default BarLineChart;
