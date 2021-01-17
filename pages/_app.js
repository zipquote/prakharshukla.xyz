import '../styles/main.scss';
import classNames from 'classnames';
import { Header, Footer } from '../src/components';
import { DarkModeProvider, DarkModeContext } from '../src/context';

function MyApp({ Component, pageProps }) {
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
              <main className="main mt-20 dark:bg-black">
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
