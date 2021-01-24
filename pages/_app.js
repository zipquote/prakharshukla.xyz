import '../styles/main.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Header, Footer } from '../src/components';
import { DarkModeProvider, DarkModeContext } from '../src/context';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <DarkModeProvider>
      <DarkModeContext.Consumer>
        {({ isDarkMode }) => (
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
              <main
                className={classNames('main dark:bg-black', {
                  'hero-wrapper mt-10': isIndexPage,
                  'mt-20': !isIndexPage,
                })}
              >
                {isIndexPage && (
                  <div className="hero-image">
                    <img src="/images/hero.png" alt="Homepage banner" />
                  </div>
                )}
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </div>
        )}
      </DarkModeContext.Consumer>
    </DarkModeProvider>
  );
}

export default MyApp;
