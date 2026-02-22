import { styled } from '@linaria/react';
import NavLink from '../NavLink';

const MenuWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e2e8f0;

  .dark & {
    color: #fff;
  }

  @media (min-width: 640px) {
    padding: 0;
    flex-direction: row;
    background-color: transparent;
    border-bottom: 0;
  }
`;

const NavLinkWrapper = styled.div`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function HeaderMenu() {
  return (
    <MenuWrapper>
      <NavLinkWrapper>
        <NavLink href="/posts">Blog</NavLink>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavLink href="/work">Work</NavLink>
      </NavLinkWrapper>
    </MenuWrapper>
  );
}
