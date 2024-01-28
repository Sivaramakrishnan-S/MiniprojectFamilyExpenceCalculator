import React, { useState } from 'react';
import './Mainpage.css';

function Mainpage() {
  const [familyMembers, setFamilyMembers] = useState(1); // Default number of family members is 1
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleFamilyMembersChange = (e) => {
    const numberOfMembers = parseInt(e.target.value, 10) || 1; // Ensure it's a valid number, default to 1
    setFamilyMembers(numberOfMembers);
  };

  const handleExpenseChange = (e, index) => {
    const newExpenses = [...expenses];
    newExpenses[index] = {
      ...newExpenses[index],
      amount: parseFloat(e.target.value) || 0, // Ensure it's a valid number, default to 0
    };
    setExpenses(newExpenses);
  };

  const addExpense = () => {
    setExpenses([...expenses, { name: `Family Member ${expenses.length + 1}`, amount: 0 }]);
  };

  const calculateTotal = () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpense(total.toFixed(2));
  };

  return (
    <div className="Mainpage">
      <div className="Mainpage-container">
        <div className="card">
          <label>
            <h1>Family Expense Tracker</h1>
            Number of Family Members:
            <input
              type="number"
              value={familyMembers}
              onChange={handleFamilyMembersChange}
              min="1"
            />
          </label>
          {Array.from({ length: familyMembers }).map((_, index) => (
            <div key={index}>
              <label>
                {`Expense for Family Member ${index + 1}: `}
                <input
                  type="number"
                  value={expenses[index] ? expenses[index].amount : 0}
                  onChange={(e) => handleExpenseChange(e, index)}
                />
              </label>
            </div>
          ))}
          <button onClick={calculateTotal}>Calculate Total</button>
        </div>
        <div className="card">
          <h2>Expenses:</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.name}: ₹{expense.amount.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total Expenses: ₹{totalExpense}</h3>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
