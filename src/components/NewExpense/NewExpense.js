import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [showed , setShowed] = useState(false);

  const showAdd = () => {

    setShowed(true);

  }

  return (
    <div className='new-expense'>
      {!showed && <button onClick={showAdd}>Add new expenses</button>}
      {showed && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowed={setShowed}/> }
    </div>
  );
};

export default NewExpense;
