import { Moon, Sun } from 'lucide-react';

export function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="header">
      <h1>To-Do List App</h1>
      <button
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
