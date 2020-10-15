/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 15 2020 21:45:01 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 4, 5, 2],
        borderColor: [
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
          ],
          backgroundColor: [
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
            "rgba(0, 0, 255, 0.7)",
          ],
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 2, 6, 3],
        borderColor: [
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
        ],
        backgroundColor: [
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(255, 0, 0, 0.7)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
