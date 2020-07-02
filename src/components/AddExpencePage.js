import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useHistory } from 'react-router-dom';


function AddExpencePage(props) {
  const history = useHistory()
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          history.push('/')
        }}
      />        
    </div>
  );
}

export default connect()(AddExpencePage);
