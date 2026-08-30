import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTodos } from './hooks/useTodos';
import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './index.css';

function App() {
  const {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleComplete,
    deleteTodo,
    editTodo,
    clearCompleted,
    reorderTodos
  } = useTodos();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
        }
      }} />
      <div className="app-container">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <TodoInput onAdd={addTodo} />

        <div className="filter-container">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="empty-state">
            No tasks yet. Add one above!
          </div>
        ) : filteredTodos.length === 0 ? (
          <div className="empty-state">
            No {filter} tasks found.
          </div>
        ) : (
          <TodoList 
            todos={filteredTodos} 
            onToggle={toggleComplete} 
            onDelete={deleteTodo} 
            onEdit={editTodo}
            onReorder={reorderTodos}
          />
        )}
        
        {todos.some(todo => todo.completed) && (
          <div className="clear-container">
            <button className="clear-btn" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        )}
      </div>
      <footer className="footer">
        Built by Devansh Mishra
      </footer>
    </>
  );
}

export default App;
