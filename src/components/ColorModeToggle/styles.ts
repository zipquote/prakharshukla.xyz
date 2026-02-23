import { styled } from '@linaria/react';
import Button from '../Button';

export const ColorModeButton = styled(Button)`
  overflow: hidden;
  position: relative;
  padding: 0;
  width: 36px;
  height: 36px;

  svg {
    margin: 0 4px;
  }
`;

export const IconsContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 4px;
  transition: left 250ms linear;
  left: ${({ isDarkMode }) => (isDarkMode ? '-32px' : '0')};

  svg {
    margin: 0 4px;
  }
`;
