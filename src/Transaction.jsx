import React, { useContext } from "react";
import { ExpenseContext } from "./context/ExpenseContext";
function Transaction({ transaction }) {
  const { handleDelete } = useContext(ExpenseContext);
  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      key={transaction.id}
    >
      {transaction.text}
      <span>
        {transaction.amount > 0 && "+"} {transaction.amount}
      </span>
      <button
        className="delete-btn"
        onClick={() => handleDelete(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
