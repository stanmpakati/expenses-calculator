import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilter'


function ExpenseRouterPage() {
  return (
    <div>
    <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}

export default ExpenseRouterPage;
