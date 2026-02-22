import { styled } from '@linaria/react';
import Button from '../Button';

export const ColorModeButton = styled(Button)`
  .colormode__icons {
    transition: all 0.3s ease;
  }

  .colormode__icons--dark {
    transform: translateY(-100%);
    transition: all 0.3s ease;
  }
`;
