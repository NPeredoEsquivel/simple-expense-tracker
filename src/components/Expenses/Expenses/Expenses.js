import React, { useState } from "react";
import classes from "./Expenses.module.scss";
import Card from "../../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpenseChart/ExpenseChart";

export default function Expenses({ expenses }) {
  const [yearToFilter, setYearToFilter] = useState("2023");
  const onSelectYearHandler = (year) => {
    setYearToFilter(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearToFilter;
  });

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpenseFilter
          selectedYear={yearToFilter}
          onSelectYear={onSelectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
