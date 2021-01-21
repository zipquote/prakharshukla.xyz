import Button from '../Button';
import classNames from 'classnames';
import WeatherSunIcon from '../../assets/icons/weather/sun.svg';
import WeatherMoonIcon from '../../assets/icons/weather/moon.svg';
import { useDarkMode } from '../../hooks';

const ICON_MARGIN = 4;
const ICON_STYLE = {
  marginRight: ICON_MARGIN,
  marginLeft: ICON_MARGIN,
};
const BUTTON_SIDE_LENGTH = 36;
const DARK_MODE_LEFT = -1 * (BUTTON_SIDE_LENGTH - ICON_MARGIN);

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
        <WeatherMoonIcon style={ICON_STYLE} />
        <WeatherSunIcon style={ICON_STYLE} />
      </div>
    </Button>
  );
}
