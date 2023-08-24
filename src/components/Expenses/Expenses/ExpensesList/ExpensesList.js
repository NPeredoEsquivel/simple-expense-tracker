import React from "react";
import classes from "./ExpensesList.module.scss";
import ExpenseItem from "../../ExpenseItem/ExpenseItem";

export default function ExpensesList({ expenses }) {
  const expensesContent =
    expenses.length !== 0 ? (
      expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })
    ) : (
      <h2 className={classes["expenses-list__fallback"]}>Found no expenses </h2>
    );
  return <ul className={classes["expenses-list"]}>{expensesContent}</ul>;
}
