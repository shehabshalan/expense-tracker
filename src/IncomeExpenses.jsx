import React, { useContext } from "react";
import { ExpenseContext } from "./context/ExpenseContext";

function IncomeExpenses() {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((x) => x > 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  const expenses = amounts
    .filter((x) => x < 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(parseInt(expenses))}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
