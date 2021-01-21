import Button from '../Button';
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
    <Button
      className="overflow-hidden relative"
      onClick={() => toggleDarkMode()}
      style={{
        padding: 0,
        width: BUTTON_SIDE_LENGTH,
        height: BUTTON_SIDE_LENGTH,
      }}
    >
      <div
        className="flex align-center justify-between"
        style={{
          position: 'absolute',
          top: 4,
          left: isDarkMode ? DARK_MODE_LEFT : '0',
          transition: 'left 250ms linear',
        }}
      >
        <WeatherMoonIcon style={ICON_STYLE} />
        <WeatherSunIcon style={ICON_STYLE} />
      </div>
    </Button>
  );
}
