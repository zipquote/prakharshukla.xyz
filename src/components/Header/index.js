import { useState } from 'react';
import classNames from 'classnames';
import { Brand, Button, ColorModeToggle } from '../../components';
import HeaderMenu from './HeaderMenu';
import HamburgerIcon from '../../assets/icons/interfaces/hamburger-menu.svg';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white bg-opacity-50 backdrop-blur">
      <div className="p-2 flex justify-between">
        <Brand />
        <div className="mx-4 hidden sm:block sm:ml-auto">
          <HeaderMenu />
        </div>
        <ColorModeToggle />
        <Button
          className="px-2 py-1 flex items-center justify-center sm:hidden"
          onClick={() => setMenuOpen((curr) => !curr)}
        >
          <HamburgerIcon />
        </Button>
      </div>
      <div
        className={classNames('overflow-hidden', {
          'h-0': !isMenuOpen,
          'h-full': isMenuOpen,
        })}
      >
        <HeaderMenu />
      </div>
    </header>
  );
}
