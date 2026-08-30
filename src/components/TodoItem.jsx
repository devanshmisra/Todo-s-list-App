import { useState } from 'react';
import { Trash2, GripVertical, Check, X, Calendar } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';

export function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim(), todo.category, todo.dueDate);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const getCategoryClass = (cat) => {
    switch (cat) {
      case 'Work': return 'cat-work';
      case 'Personal': return 'cat-personal';
      case 'Urgent': return 'cat-urgent';
      default: return 'cat-other';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      style={style}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      ref={setNodeRef}
    >
      <div 
        className="drag-handle" 
        {...attributes} 
        {...listeners}
        aria-label="Drag to reorder"
      >
        <GripVertical size={16} />
      </div>

      <div className="todo-content">
        <input 
          type="checkbox" 
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        
        {isEditing ? (
          <div className="edit-mode">
            <input 
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
            />
            <div className="edit-actions">
              <button onClick={handleSave} className="edit-btn save"><Check size={16}/></button>
              <button onClick={handleCancel} className="edit-btn cancel"><X size={16}/></button>
            </div>
          </div>
        ) : (
          <div className="todo-text-container" onDoubleClick={() => setIsEditing(true)}>
            <span className="todo-text">{todo.text}</span>
            <div className="todo-meta">
              <span className={`category-pill ${getCategoryClass(todo.category)}`}>
                {todo.category}
              </span>
              {todo.dueDate && (
                <span className="due-date">
                  <Calendar size={12} />
                  {new Date(todo.dueDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <button 
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <Trash2 size={16} strokeWidth={2} />
      </button>
    </motion.div>
  );
}
