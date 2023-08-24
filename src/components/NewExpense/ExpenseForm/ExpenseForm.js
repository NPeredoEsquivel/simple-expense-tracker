import React, { useState } from "react";
import classes from "./ExpenseForm.module.scss";

const defaultExpense = {
  title: "",
  amount: "",
  date: "",
};

export default function ExpenseForm({ onSaveExpenseData }) {
  const [expenseData, setExpenseData] = useState(defaultExpense);
  const [toggleForm, setToggleForm] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setExpenseData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseObject = {
      title: expenseData.title,
      amount: +expenseData.amount,
      date: new Date(expenseData.date),
    };

    setExpenseData(defaultExpense);
    onSaveExpenseData(expenseObject);
  };

  const { title, amount, date } = expenseData;
  return (
    <div>
      {!toggleForm && (
        <button type="button" onClick={() => setToggleForm(!toggleForm)}>
          Create Expense
        </button>
      )}
      {toggleForm && (
        <form onSubmit={onSubmitHandler} action="">
          <div className={classes["new-expense__controls"]}>
            <div className={classes["new-expense__control"]}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                onChange={onChangeHandler}
                value={title}
              />
            </div>
            <div className={classes["new-expense__control"]}>
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                min="0.01"
                step="0.01"
                onChange={onChangeHandler}
                value={amount}
              />
            </div>
            <div className={classes["new-expense__control"]}>
              <label htmlFor=""></label>
              <input
                type="date"
                name="date"
                min="2019-01-01"
                max="2023-08-21"
                onChange={onChangeHandler}
                value={date}
              />
            </div>
          </div>
          <div className={classes["new-expense__actions"]}>
            <button type="button" onClick={() => setToggleForm(!toggleForm)}>
              Cancel
            </button>
            <button type="submit">Add Expense </button>
          </div>
        </form>
      )}
    </div>
  );
}
