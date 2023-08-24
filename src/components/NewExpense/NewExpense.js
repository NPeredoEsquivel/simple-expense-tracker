import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.scss";

export default function NewExpense({ onSaveExpense }) {
  const saveExpenseDataHandler = (expenseObject) => {
    const expenseData = {
      ...expenseObject,
      id: Math.random().toString(36).substring(2, 9),
    };
    onSaveExpense(expenseData);
  };
  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
