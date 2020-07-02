import { v4 } from "uuid";

// Add expense
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: v4(),
    description,
    note,
    amount,
    createdAt,
  },
});

// remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// edit expense
export const editExpense = ({ id, updates } = {}) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
