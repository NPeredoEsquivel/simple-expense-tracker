import React from "react";
import classes from "./ExpenseDate.module.scss";

export default function ExpenseDate({ date }) {
  const dateMonth = date.toLocaleString("en-US", { month: "long" });
  const dateDay = date.toLocaleString("en-US", { day: "2-digit" });
  const dateYear = date.getFullYear();
  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}> {dateMonth}</div>
      <div className={classes["expense-date__year"]}>{dateYear}</div>
      <div className={classes["expense-date__day"]}>{dateDay}</div>
    </div>
  );
}
