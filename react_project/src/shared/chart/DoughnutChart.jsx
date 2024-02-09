import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, Title, Tooltip, ArcElement, Legend } from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { getAdminApi } from "../../api";

// Register the necessary components
Chart.register(Title, Tooltip, ArcElement, Legend);

function DoughnutChart() {
  const { data: getAdminData } = useQuery(["getData"], getAdminApi);
  const [hobby, setHobby] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    if (getAdminData) {
      for (let i = 0; i < getAdminData.length; i++) {
        setHobby((oldhobby) => [...oldhobby, getAdminData[i].hobby]);

        setYear((oldyear) => [...oldyear, getAdminData[i].year]);
      }
    }
  }, [getAdminData]);

  return (
    <div className="responsive-chart">
      <h1 className="ml-7 font-bold"> 3. DoughnutChart :- years</h1>
      <Doughnut
        data={{
          datasets: [
            {
              data: year,
              backgroundColor: [
                "rgba(255, 159, 64, 0.7)",
                "rgba(255, 99, 132, 0.7)",
                "rgba(255, 205, 86, 0.7)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(153, 102, 255, 0.7)",
              ],
            },
          ],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: year,
        }}
      />
    </div>
  );
}

export default DoughnutChart;
