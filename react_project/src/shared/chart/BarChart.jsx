import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { getAdminApi } from "../../api";

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

function BarChart() {
  const { data: getAdminData } = useQuery(["getData"], getAdminApi);

  const [age1, setAge1] = useState([]);
  const [age2, setAge2] = useState([]);
  const [age3, setAge3] = useState([]);
  const [totleAge, setTotleAge] = useState([]);

  useEffect(() => {
    if (getAdminData) {
      for (let i = 0; i < getAdminData.length; i++) {
        if (getAdminData[i].age <= 40) {
          setAge1((oldage1) => [...oldage1, getAdminData[i].age]);
        } else if (getAdminData[i].age > 40 && getAdminData[i].age <= 70) {
          setAge2((oldage2) => [...oldage2, getAdminData[i].age]);
        } else if (getAdminData[i].age > 70 && getAdminData[i].age <= 100) {
          setAge3((oldage3) => [...oldage3, getAdminData[i].age]);
        }
        setTotleAge((oldtotleage) => [...oldtotleage, getAdminData[i].age]);
      }
    }
  }, [getAdminData]);

  const getAget1 = (age1.length / totleAge.length) * 100;
  const getAget2 = (age2.length / totleAge.length) * 100;
  const getAget3 = (age3.length / totleAge.length) * 100;

  return (
    <div className="responsive-chart responsive-chart_other">
      <h1 className="ml-7 font-bold">
        2. BarChart :- Percentage of people who are from different age
      </h1>
      <Bar
        data={{
          labels: ["Age 0-40", "Age 41-70", "Age 71+"],
          datasets: [
            {
              label: "percentage of Age",
              data: [getAget1, getAget2, getAget3],
              backgroundColor: [
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
