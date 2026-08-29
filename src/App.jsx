import { useState, useEffect } from 'react';
import { Plus, Check, Trash2, ListTodo } from 'lucide-react';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, text: 'Master modern React design', completed: true },
      { id: 2, text: 'Build a beautiful to-do app', completed: false },
      { id: 3, text: 'Add smooth animations', completed: false }
    ];
  });
  
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false
    };
    
    setTodos([newTodo, ...todos]);
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
    <div className="glass-container">
      <header>
        <h1 className="title">TaskFlow</h1>
        <p className="subtitle">Your tasks, beautifully organized.</p>
      </header>

      <form onSubmit={handleSubmit} className="input-wrapper">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-btn" aria-label="Add task">
          <Plus size={24} strokeWidth={2.5} />
        </button>
      </form>

      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <ListTodo className="empty-state-icon" />
            <p>You're all caught up!<br/>Enjoy your free time.</p>
          </div>
        ) : (
          todos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <div 
                className="checkbox-wrapper" 
                onClick={() => toggleComplete(todo.id)}
              >
                <div className="checkbox-custom">
                  <Check className="checkbox-icon" strokeWidth={3} />
                </div>
              </div>
              
              <span className="todo-text">{todo.text}</span>
              
              <button 
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete task"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
