'use client';
import { styled } from '@linaria/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Brand from '../Brand';
import Button from '../Button';
import ColorModeToggle from '../ColorModeToggle';
import Layout from '../Layout';
import HeaderMenu from './HeaderMenu';
import HamburgerIcon from '../../assets/icons/interfaces/hamburger-menu.svg';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  z-index: 10;

  .dark & {
    background-color: transparent;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  height: 100%;
`;

const HeaderMenuWrapper = styled.div`
  margin: 0 1rem;
  display: none;

  @media (min-width: 640px) {
    display: block;
    margin-left: auto;
  }
`;

const MobileMenuButton = styled(Button)`
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    display: none;
  }
`;

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Layout.FullWidth className="">
        <HeaderInner>
          <Brand />
          <HeaderMenuWrapper>
            <HeaderMenu />
          </HeaderMenuWrapper>
          <ColorModeToggle />
          <MobileMenuButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setMenuOpen((curr) => !curr)
            }
          >
            <HamburgerIcon />
          </MobileMenuButton>
        </HeaderInner>
        {/* @ts-ignore */}
        <motion.div
          style={{ overflow: 'hidden' }}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          initial={{ height: 0 }}
          transition={{ height: { duration: 0.5 } }}
        >
          <HeaderMenu />
        </motion.div>
      </Layout.FullWidth>
    </HeaderWrapper>
  );
}
