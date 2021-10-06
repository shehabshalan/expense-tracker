import React from "react";
import AddTransaction from "./AddTransaction";
import "./App.css";
import Balance from "./Balance";
import Header from "./Header";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import { ExpenseProvider } from "./context/ExpenseContext";
function App() {
  return (
    <ExpenseProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseProvider>
  );
}

export default App;
