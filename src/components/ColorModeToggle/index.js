import classNames from 'classnames';
import WeatherSunIcon from '../../assets/icons/weather/sun.svg';
import WeatherMoonIcon from '../../assets/icons/weather/moon.svg';
import { useDarkMode } from '../../hooks';
import { ColorModeButton } from './styles';

export default function ColorModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <ColorModeButton className="colormode" onClick={() => toggleDarkMode()}>
      <div
        className={classNames({
          colormode__icons: !isDarkMode,
          'colormode__icons--dark': isDarkMode,
        })}
      >
        <WeatherMoonIcon />
        <WeatherSunIcon />
      </div>
    </ColorModeButton>
  );
}
