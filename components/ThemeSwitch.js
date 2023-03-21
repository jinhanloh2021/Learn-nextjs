import { useState } from 'react';

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  console.log('[ThemeSwitch] darkmode: ', darkMode);

  return (
    <>
      <button onClick={() => setDarkMode((prev) => !prev)}>{text}</button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
