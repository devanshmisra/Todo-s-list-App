import { useState, useEffect } from 'react';
import { Trash2, Moon, Sun } from 'lucide-react';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  
  const [inputValue, setInputValue] = useState('');

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to user's system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>To-Do List</h1>
        <button 
          className="theme-toggle" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="input-section">
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
      </form>

      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            No tasks yet. Add one above!
          </div>
        ) : (
          todos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <label className="todo-content">
                <input 
                  type="checkbox" 
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span className="todo-text">{todo.text}</span>
              </label>
              <button 
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete task"
              >
                <Trash2 size={16} strokeWidth={2} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
