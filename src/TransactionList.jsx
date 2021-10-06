import React, { useContext } from "react";
import { ExpenseContext } from "./context/ExpenseContext";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions } = useContext(ExpenseContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
