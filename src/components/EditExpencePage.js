import React from "react";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";

const EditExpencePage = (props) => {
  const history = useHistory();
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          history.push("/");
        }}
      />
    </div>
  );
};

const matchExpense = (state, props) => {
  const expense = state.expenses.find((expense) => {
    const foundExpense = expense.id === props.match.params.id;
    return foundExpense;
  });
  return expense;
};

const mapStateToProps = (state, props) => {
  return {
    expense: matchExpense(state, props),
  };
};

export default connect(mapStateToProps)(EditExpencePage);
