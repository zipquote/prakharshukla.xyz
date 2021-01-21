import { useState, useRef, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { splash } from '../../../experiments';
import { DarkModeContext } from '../../../context';

export default function Splash({ className, ...otherProps }) {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    splash(ctx, canvas);
  }, []);

  useEffect(() => {
    splash.dark(isDarkMode);
  }, [isDarkMode]);

  return (
    <canvas
      id="canvas"
      width={dimensions.width}
      height={dimensions.height}
      className={classNames(className, 'mx-auto', {
        'bg-gray': !isDarkMode,
        'bg-black': isDarkMode,
      })}
      ref={canvasRef}
      {...otherProps}
    ></canvas>
  );
}
