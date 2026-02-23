import WeatherSunIcon from '../../assets/icons/weather/sun.svg';
import WeatherMoonIcon from '../../assets/icons/weather/moon.svg';
import { useDarkMode } from '../../hooks';
import { ColorModeButton, IconsContainer } from './styles';

export default function ColorModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <ColorModeButton onClick={() => toggleDarkMode()}>
      <IconsContainer isDarkMode={isDarkMode}>
        <WeatherMoonIcon />
        <WeatherSunIcon />
      </IconsContainer>
    </ColorModeButton>
  );
}
