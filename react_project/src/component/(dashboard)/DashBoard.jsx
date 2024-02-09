import React, { useContext } from "react";
import Header from "../../shared/header/Header";
import PieChart from "../../shared/chart/PieChart";
import BarChare from "../../shared/chart/BarChart";
import BarChart from "../../shared/chart/BarChart";
import LineChart from "../../shared/chart/LineChart";
import DoughnutChart from "../../shared/chart/DoughnutChart";

function DashBoard() {
  return (
    <div>
      <Header />
      <div className="container my-10 flex justify-between">
        <PieChart />
        <BarChart />
      </div>
      <div className="container my-10 flex justify-between">
        <DoughnutChart />
        <LineChart />
      </div>
    </div>
  );
}

export default DashBoard;
