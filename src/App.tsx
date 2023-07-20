import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 11, category: "Utilities" },
    { id: 3, description: "ccc", amount: 12, category: "Utilities" },
    { id: 4, description: "ddd", amount: 13, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses,{...expense,id:expenses.length + 1}])}></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id != id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
