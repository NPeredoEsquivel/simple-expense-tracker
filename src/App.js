import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const defaultExpenses = [
  {
    id: "id0",
    date: new Date(2023, 2, 28),
    title: "Car Insurance",
    amount: "344",
  },
  {
    id: "id1",
    date: new Date(2023, 1, 28),
    title: "Car Insurance",
    amount: "246",
  },
  {
    id: "id2",
    date: new Date(2023, 4, 28),
    title: "Car Insurance",
    amount: "145",
  },
];

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const appendExpenseToArray = (expenseObject) => {
    setExpenses((prevState) => {
      return [...prevState, expenseObject];
    });
  };
  return (
    <>
      <NewExpense onSaveExpense={appendExpenseToArray} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
