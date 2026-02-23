'use client';
import { useState, createContext, ReactNode } from 'react';

interface IDarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }: IDarkModeProviderProps) {
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
