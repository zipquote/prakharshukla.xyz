import '../styles/globals.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Main } from '../src/components/Layout/styles';
import Hero from '../src/components/Hero';
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
              <Main
                className={classNames('main dark:bg-black', {
                  'hero__wrapper mt-10': isIndexPage,
                  'mt-20': !isIndexPage,
                })}
              >
                {isIndexPage && <Hero />}
                <Component {...pageProps} />
              </Main>
              <Footer />
            </div>
          </div>
        )}
      </DarkModeContext.Consumer>
    </DarkModeProvider>
  );
}

export default MyApp;
