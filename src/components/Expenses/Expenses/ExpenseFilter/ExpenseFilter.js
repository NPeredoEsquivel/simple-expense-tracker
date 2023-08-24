import React from "react";
import classes from "./ExpenseFilter.module.scss";

const ExpenseFilter = ({ selectedYear, onSelectYear }) => {
  const onSelectHandler = (event) => {
    onSelectYear(event.target.value);
  };
  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={onSelectHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
