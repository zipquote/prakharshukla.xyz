import { styled } from '@linaria/react';

export const HeroWrapper = styled.div`
  position: relative;
`;

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 25rem;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem 2.5rem;
  margin-top: 5rem;
`;

export const HeroContentInner = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  &.dark-mode {
    margin: 0 auto;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Butler-Extra-Bold', sans-serif;
  font-size: 3rem;
  color: #fff;
  margin-bottom: 0.75rem;
`;

export const HeroSubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.75rem;
`;
