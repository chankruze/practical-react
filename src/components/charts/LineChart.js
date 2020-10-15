/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 15 2020 21:27:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 4, 5, 2],
        borderColor: ["rgba(255, 0, 0, 0.4)"],
        backgroundColor: ["rgba(255, 0, 0, 0.4)"],
        pointBackgroundColor: ["rgba(255, 0, 0, 0.4)"],
        pointBorderColor: ["rgba(255, 0, 0, 0.4)"],
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 2, 6, 3],
        borderColor: ["rgba(0, 255, 0, 0.4)"],
        backgroundColor: ["rgba(0, 255, 0, 0.4)"],
        pointBackgroundColor: ["rgba(0, 255, 0, 0.4)"],
        pointBorderColor: ["rgba(0, 255, 0, 0.4)"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
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
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
