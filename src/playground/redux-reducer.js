// import { createStore, combineReducers } from "redux";
// import { v1 } from "uuid";
// // expenses reducer

// const expensesReducerDefaultState = [];

// const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

// const editExpence = ({ id, updates } = {}) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

// const setTextFilter = (text = "") => ({
//   type: "SET_TEXT_FILTER",
//   text,
// });

// const sortByDate = () => ({
//   type: "SORT_BY_DATE",
// });

// const sortByAmount = () => ({
//   type: "SORT_BY_AMOUNT",
// });

// const setStartDate = (startDate = undefined) => ({
//   type: "START_DATE",
//   startDate,
// });

// const setEndDate = (endDate = undefined) => ({
//   type: "END_DATE",
//   endDate,
// });

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.expense];
//     case "REMOVE_EXPENSE":
//       return state.filter(({ id }) => id !== action.id);
//     case "EDIT_EXPENSE":
//       return state.map((expense) => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates,
//           };
//         } else {
//           return state;
//         }
//       });
//     default:
//       return state;
//   }
// };

// const filtersReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined,
// };

// const filtersReducerState = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case "SET_TEXT_FILTER":
//       return {
//         ...state,
//         text: action.text,
//       };
//     case "SORT_BY_AMOUNT":
//       return {
//         ...state,
//         sortBy: "amount",
//       };
//     case "SORT_BY_DATE":
//       return {
//         ...state,
//         sortBy: "date",
//       };
//     case "START_DATE":
//       return {
//         ...state,
//         startDate: action.startDate,
//       };
//     case "END_DATE":
//       return {
//         ...state,
//         endDate: action.endDate,
//       };
//     default:
//       return state;
//   }
// };

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter((expense) => {
//       const startDateMatch =
//         typeof startDate !== "number" || expense.createdAt >= startDate;
//       const endDateMatch =
//         typeof endDate !== "number" || expense.createdAt <= endDate;
//       const textMatch = expense.description
//         .toLowerCase()
//         .includes(text.toLowerCase());

//       return startDateMatch && endDateMatch && textMatch;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return a.createdAt < b.createdAt ? 1 : -1;
//       } else if (sortBy === "amount") {
//         return a.amount < b.amount ? 1 : -1;
//       }
//     });
// };

// // store creation

// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filtersReducerState,
//   })
// );

// const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: v1(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(
//   addExpense({ description: "Rent", amount: 50, createdAt: 1000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Cow", amount: 210, createdAt: -1000 })
// );

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // store.dispatch(
// //   editExpence({ id: expenseTwo.expense.id, updates: { amount: 340 } })
// // );

// // store.dispatch(setTextFilter("rent"));
// // store.dispatch(setTextFilter());

// // store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// // store.dispatch(setStartDate(2100));
// // store.dispatch(setStartDate());
// // store.dispatch(setEndDate(0));

// // const demoState = {
// //   expenses: [
// //     {
// //       id: "001",
// //       description: "Rent",
// //       note: "Rent duh",
// //       amount: 50,
// //       createdAt: 0,
// //     },
// //   ],
// //   filters: {
// //     text: "rent",
// //     sortBy: "amount",
// //     startDate: undefined,
// //     endDate: undefined,
// //   },
// // };
