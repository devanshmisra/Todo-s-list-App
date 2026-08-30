import { useState } from 'react';

const CATEGORIES = ['Work', 'Personal', 'Urgent', 'Other'];

export function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('Other');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue, category, dueDate);
    setInputValue('');
    setCategory('Other');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-section">
      <div className="input-row">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </div>
      <div className="input-options">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)}
          className="date-input"
        />
      </div>
    </form>
  );
}
