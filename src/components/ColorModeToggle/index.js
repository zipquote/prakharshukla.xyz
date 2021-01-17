import Button from '../Button';
import WeatherSunIcon from '../../assets/icons/weather/sun.svg';
import WeatherMoonIcon from '../../assets/icons/weather/moon.svg';
import { useDarkMode } from '../../hooks';

export default function ColorModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <Button onClick={() => toggleDarkMode()}>
      {isDarkMode ? <WeatherSunIcon /> : <WeatherMoonIcon />}
    </Button>
  );
}
