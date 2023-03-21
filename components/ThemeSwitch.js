import { useState } from 'react';
import DarkTheme from './DarkTheme.styled';

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  console.log('[ThemeSwitch] darkmode: ', darkMode);

  return (
    <>
      <button
        className='themeSwitchButton'
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {text}
      </button>
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
