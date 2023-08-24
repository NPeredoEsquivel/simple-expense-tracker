import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import classes from "./ExpenseItem.module.scss";
import Card from "../../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card className={classes["expense-item"]}>
      <ExpenseDate date={date} />
      <div className={classes["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={classes["expense-item__price"]}>${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
