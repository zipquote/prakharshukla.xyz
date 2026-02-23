import { styled } from '@linaria/react';
import NavLink from '../NavLink';

const buttonStyles = `
  padding: 0.25rem;
  margin: 0 0.25rem 0.25rem;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 6px 0 0 rgba(0, 0, 0, var(--tw-border-opacity));
  position: relative;

  &:focus,
  &:hover {
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, var(--tw-border-opacity));
    top: 3px;
  }

  .dark & {
    border-color: #fff;
    background-color: #000;
    color: #fff;
    box-shadow: 0 6px 0 0 rgba(255, 255, 255, var(--tw-bg-opacity));

    &:hover,
    &:focus {
      box-shadow: 0 3px 0 0 rgba(255, 255, 255, var(--tw-bg-opacity));
      top: 3px;
    }

    & svg {
      fill: rgba(255, 255, 255, var(--tw-bg-opacity));
    }
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const StyledNavLink = styled(NavLink)`
  ${buttonStyles}
`;
