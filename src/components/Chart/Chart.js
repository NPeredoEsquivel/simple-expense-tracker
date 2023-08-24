import React from "react";
import classes from "./Chart.module.scss";
import ChartBar from "./ChartBar/ChartBar";

export default function Chart({ dataPoints }) {
  const maxValue = dataPoints.reduce((max, dataPoint) => {
    return +dataPoint.value > max ? +dataPoint.value : max;
  }, 0);
  console.log(maxValue);
  return (
    <div className={classes["chart"]}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
