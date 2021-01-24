import { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Brand, Button, ColorModeToggle, Layout } from '../../components';
import HeaderMenu from './HeaderMenu';
import HamburgerIcon from '../../assets/icons/interfaces/hamburger-menu.svg';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white dark:bg-transparent bg-opacity-50 backdrop-blur z-10">
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
        <motion.div
          className={classNames('overflow-hidden')}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          initial={{ height: 0 }}
          transition={{ height: { duration: 0.5 } }}
        >
          <HeaderMenu />
        </motion.div>
      </Layout.FullWidth>
    </header>
  );
}
