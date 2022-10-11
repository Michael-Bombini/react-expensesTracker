import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

const expenseSend = (expense) => {

  const submittedExpense = {
    ...expense,
  }

  console.log('sono arrivato al parent');
  console.log(submittedExpense);

  props.onAddExpense(submittedExpense);

};


  return <div className="new-expense">
    <ExpenseForm onExpenseSend={expenseSend}/>
  </div>;
};

export default NewExpense;
