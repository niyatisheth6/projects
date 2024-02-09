import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, Title, Tooltip, ArcElement, Legend } from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { getAdminApi } from "../../api";

// Register the necessary components
Chart.register(Title, Tooltip, ArcElement, Legend);

function PieChart() {
  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);
  const [other, setOther] = useState([]);
  const [gender, setgender] = useState([]);

  const { data: getAdminData } = useQuery(["getData"], getAdminApi);
  useEffect(() => {
    if (getAdminData) {
      for (let i = 0; i < getAdminData.length; i++) {
        if (getAdminData[i].gender === "male") {
          setMale((oldmale) => [...oldmale, getAdminData[i].gender]);
        } else if (getAdminData[i].gender === "female") {
          setFemale((oldfemale) => [...oldfemale, getAdminData[i].gender]);
        } else {
          setOther((oldother) => [...oldother, getAdminData[i].gender]);
        }
        setgender((oldgender) => [...oldgender, getAdminData[i].gender]);
      }
    }
  }, [getAdminData]);
  const getMaleCount = (male.length / gender.length) * 100;
  const getFemaleCount = (female.length / gender.length) * 100;
  const getOtherCount = (other.length / gender.length) * 100;

  return (
    <div className="responsive-chart">
      <h1 className="ml-7 font-bold">1. PieChart :- Percentage of Admin</h1>
      <Pie
        data={{
          datasets: [
            {
              data: [getMaleCount, getFemaleCount, getOtherCount],
              backgroundColor: [
                "rgba(75, 192, 192, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(153, 102, 255, 0.7)",
              ],
            },
          ],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            `Male (${getMaleCount.toFixed(2)}%)`,
            `Female (${getFemaleCount.toFixed(2)}%)`,
            `Others (${getOtherCount.toFixed(2)}%)`,
          ],
        }}
      />
    </div>
  );
}

export default PieChart;
