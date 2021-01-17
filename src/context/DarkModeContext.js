import { useState, createContext } from 'react';

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((curr) => !curr);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
