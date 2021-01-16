import '../styles/globals.css';
import { Header, Footer } from '../src/components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="site-wrapper ">
        <Header />
        <main className="main mt-20">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
