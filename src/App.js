import { Provider } from "react-redux";
import React from "react";
import AppRouter from "./routers/AppRounter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
// import getVisibleExpenses from "./selectors/expenses";
import "./playground/redux-reducer";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: "Water bill", amount: 500 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 400, createdAt: 1200 }));
store.dispatch(addExpense({ description: "Rent", amount: 1500 }));

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
