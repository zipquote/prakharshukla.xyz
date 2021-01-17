import { useContext } from 'react';
import { DarkModeContext } from '../context';

export default function useDarkMode() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return [isDarkMode, toggleDarkMode];
}
