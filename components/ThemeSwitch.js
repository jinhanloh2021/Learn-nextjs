import { useState, useEffect } from 'react';
import DarkTheme from './DarkTheme.styled';

function loadTheme() {
  if (typeof localStorage === 'undefined') {
    return false;
  }

  const value = localStorage.getItem('darkMode') ?? 'false';
  return JSON.parse(value);
}

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const loadedTheme = loadTheme();
    setDarkMode(loadedTheme);
  }, []);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  console.log('[ThemeSwitch] dark mode: ', darkMode);

  const handleSwitch = () => {
    setDarkMode((prev) => {
      localStorage.setItem('darkMode', JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <>
      <button onClick={handleSwitch}>{text}</button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}
