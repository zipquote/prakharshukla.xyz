import Button from '../Button';
import classNames from 'classnames';
import WeatherSunIcon from '../../assets/icons/weather/sun.svg';
import WeatherMoonIcon from '../../assets/icons/weather/moon.svg';
import { useDarkMode } from '../../hooks';

export default function ColorModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <Button className="colormode" onClick={() => toggleDarkMode()}>
      <div
        className={classNames({
          colormode__icons: !isDarkMode,
          'colormode__icons--dark': isDarkMode,
        })}
      >
        <WeatherMoonIcon />
        <WeatherSunIcon />
      </div>
    </Button>
  );
}
