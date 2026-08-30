import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category, dueDate) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      category: category || 'Other',
      dueDate: dueDate || null
    };
    setTodos([...todos, newTodo]);
    toast.success('Task added!');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        const isCompleted = !todo.completed;
        if (isCompleted) toast.success('Task completed!');
        return { ...todo, completed: isCompleted };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.success('Task deleted');
  };

  const editTodo = (id, newText, newCategory, newDueDate) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText, category: newCategory, dueDate: newDueDate } : todo
    ));
    toast.success('Task updated');
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
    toast.success('Completed tasks cleared');
  };

  const reorderTodos = (newTodos) => {
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return {
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
  };
}
