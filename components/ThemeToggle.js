'use client';

import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <span className="text-gray-700">🌙</span>
      ) : (
        <span className="text-yellow-300">☀️</span>
      )}
    </button>
  );
}