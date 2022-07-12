import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expense = () => {
  return (
    <div className="mx-[200px] bg-slate-700 p-10 rounded-xl">
      <ExpenseItem title="car" price="$56" />
      <ExpenseItem title="motor" price="$105" />
      <ExpenseItem title="baycikel" price="$96" />
    </div>
  );
};

export default Expense;
