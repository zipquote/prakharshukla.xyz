'use client';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';
import classNames from 'classnames';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Main } from '../src/components/Layout/styles';
import { DarkModeProvider, DarkModeContext } from '../src/context';

function SiteWrapper({ children }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div
      className={classNames({
        dark: isDarkMode,
      })}
      style={{
        height: '100%',
      }}
    >
      <div className="site-wrapper dark:bg-black">
        <Header />
        <Main
          className={'main dark:bg-black'}
          style={isHome ? undefined : { paddingTop: '4rem' }}
        >
          {children}
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          <SiteWrapper>{children}</SiteWrapper>
        </DarkModeProvider>
      </body>
    </html>
  );
}
