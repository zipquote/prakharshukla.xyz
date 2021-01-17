import { useState } from 'react';
import classNames from 'classnames';
import { Brand, Button, ColorModeToggle, Layout } from '../../components';
import HeaderMenu from './HeaderMenu';
import HamburgerIcon from '../../assets/icons/interfaces/hamburger-menu.svg';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white dark:bg-transparent bg-opacity-50 backdrop-blur">
      <Layout.FullWidth>
        <div className="flex justify-between p-2">
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
      </Layout.FullWidth>
    </header>
  );
}
