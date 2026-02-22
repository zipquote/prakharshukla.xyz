import { styled } from '@linaria/react';
import NavLink from '../NavLink';

export const StyledButton = styled.button`
  padding: 0.25rem;
  margin: 0 0.25rem 0.25rem;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 0 #000;
  position: relative;

  .dark & {
    border-color: #fff;
    background-color: #000;
    color: #fff;
    box-shadow: 0 2px 0 #fff;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.25rem;
  margin: 0 0.25rem 0.25rem;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 0 #000;
  position: relative;

  .dark & {
    border-color: #fff;
    background-color: #000;
    color: #fff;
    box-shadow: 0 2px 0 #fff;
  }
`;
