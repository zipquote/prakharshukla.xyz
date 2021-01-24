import classNames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '../../context';

export default function Hero() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className="hero__image">
      <img
        src={`/images/${isDarkMode ? 'pitch-black.png' : 'hero.png'}`}
        alt="Homepage banner"
      />
      <div className="hero__content absolute w-full px-10 py-4 mt-20">
        <div
          className={classNames('w-full md:w-1/2', {
            'mx-auto': isDarkMode,
          })}
        >
          <h1 className="font-butler-extra-bold text-5xl text-white mb-3">
            Hi! I'm Prakhar
          </h1>
          <p className="font-poppins text-xl text-white mb-3">
            I am a Frontend Web Developer.
            <br />
            Striving to build mesmerising experiences on the web.
          </p>
        </div>
      </div>
    </div>
  );
}
