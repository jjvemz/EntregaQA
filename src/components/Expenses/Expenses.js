import React from "react";
import { Line } from "@ant-design/charts";

const data = [
  { year: "3/11/2020", value: 400000 },
  { year: "14/11/2020", value: 300000 },
  { year: "10/10/2020", value: 600000 },
];

export default function Expenses() {
  const config = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
}
