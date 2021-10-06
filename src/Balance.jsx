import React, { useContext } from "react";
import { ExpenseContext } from "./context/ExpenseContext";

function Balance() {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
}

export default Balance;
