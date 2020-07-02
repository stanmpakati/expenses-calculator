import { createStore } from "redux";

const incrementCount = ({ incrementby = 1 } = {}) => ({
  type: "INCREMENT",
  incrementby,
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const store = createStore((state = { count: 1 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementby };
    case 'SET':
      return {count: action.count}
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementby: 5 }));

store.dispatch({
  type: 'INCREMENT',
  incrementby: 3
})

store.dispatch(setCount({count: -2}))
