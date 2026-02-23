import classNames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '../../context';
import {
  HeroWrapper,
  HeroImage,
  HeroContent,
  HeroContentInner,
  HeroTitle,
  HeroSubtitle,
} from './styles';

export default function Hero() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <HeroWrapper>
      <HeroImage>
        <img
          src={`/images/${isDarkMode ? 'pitch-black.png' : 'hero.png'}`}
          alt="Homepage banner"
        />
      </HeroImage>
      <HeroContent>
        <HeroContentInner
          className={classNames({
            'dark-mode': isDarkMode,
          })}
        >
          <HeroTitle>Hi! I'm Prakhar</HeroTitle>
          <HeroSubtitle>
            I am a Frontend Web Developer.
            <br />
            Striving to build mesmerising experiences on the web.
          </HeroSubtitle>
        </HeroContentInner>
      </HeroContent>
    </HeroWrapper>
  );
}
