import React, { createContext, useReducer } from "react";
import expenseReducer from "./expenseReducer";

// initial state

const initalState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context
export const ExpenseContext = createContext(initalState);

// create provider

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initalState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const handleAdd = (transaction) => {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{ transactions: state.transactions, handleDelete, handleAdd }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
