import { styled } from '@linaria/react';
import { useState, useRef, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { splash } from '../../../experiments';
import { DarkModeContext } from '../../../context';

const StyledCanvas = styled.canvas`
  margin: 0 auto;
  background-color: #f3f4f6;

  .dark & {
    background-color: #000;
  }
`;

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
    <StyledCanvas
      id="canvas"
      width={dimensions.width}
      height={dimensions.height}
      className={classNames(className)}
      ref={canvasRef}
      {...otherProps}
    ></StyledCanvas>
  );
}
