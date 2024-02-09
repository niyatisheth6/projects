import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, PointElement, LineElement } from "chart.js";
import { getAdminApi } from "../../api";
import { useQuery } from "@tanstack/react-query";

// Register the necessary components
Chart.register(CategoryScale, PointElement, LineElement);

function LineChart() {
  const { data: getAdminData } = useQuery(["getData"], getAdminApi);
  const [hobby, setHobby] = useState([]);
  const [age, setAge] = useState([]);

  useEffect(() => {
    if (getAdminData) {
      for (let i = 0; i < getAdminData.length; i++) {
        setHobby((oldhobby) => [...oldhobby, getAdminData[i].hobby]);
        setAge((oldage) => [...oldage, getAdminData[i].age]);
      }
    }
  }, [getAdminData]);

  return (
    <div className="responsive-chart responsive-chart_other">
      <h1 className="ml-7 font-bold">4. LineChart :- age and hobby</h1>
      <Line
        data={{
          labels: hobby,
          datasets: [
            {
              label: "age",
              data: age,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
