import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ item }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (str) => {
    setFilteredYear(str);
  };

  const filteredExpenses = item.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
