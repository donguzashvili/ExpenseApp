import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((el) => (
        <ExpenseItem key={el.id} expense={el} />
      ))}
    </ul>
  );
}
