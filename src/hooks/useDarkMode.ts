import { useContext } from 'react';
import { DarkModeContext } from '../context';

export default function useDarkMode(): [boolean, () => void] {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return [isDarkMode, toggleDarkMode];
}
