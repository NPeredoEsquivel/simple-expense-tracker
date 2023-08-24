import React from "react";
import classes from "./ChartBar.module.scss";

export default function ChartBar({ label, value, maxValue }) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          className={classes["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={classes["chart-bar__label"]}>{label}</div>
    </div>
  );
}
