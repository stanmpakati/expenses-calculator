import { createStore } from "redux";

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({count}) => ({
  type: "SET",
  count,
});

const Store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: (state.count = 0),
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

Store.subscribe(() => {
  console.log(Store.getState());
});

Store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

Store.dispatch(decrementCount({ decrementBy: 7 }));

Store.dispatch(resetCount());

Store.dispatch(setCount({ count: -10 }));

// const book ={
//     title: 'A Song of Ice and Fire',
//     author: 'George Martin',
//     publisher: {
//         name: 'Collins',
//         year: 2002
//     }
// }

// const {year = 2009} = book.publisher
// const {author} = book
// console.log(`${author} wrote book in ${year}`)

export default Store;
