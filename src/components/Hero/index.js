import { styled } from '@linaria/react';
import classNames from 'classnames';
import { useContext } from 'react';
import { DarkModeContext } from '../../context';

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem 2.5rem;
  margin-top: 5rem;
`;

const HeroContentInner = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  &.dark-mode {
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Butler-Extra-Bold', sans-serif;
  font-size: 3rem;
  color: #fff;
  margin-bottom: 0.75rem;
`;

const HeroSubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.75rem;
`;

export default function Hero() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <HeroWrapper>
      <img
        src={`/images/${isDarkMode ? 'pitch-black.png' : 'hero.png'}`}
        alt="Homepage banner"
      />
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
