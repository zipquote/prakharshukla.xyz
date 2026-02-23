import { styled } from '@linaria/react';

export const LayoutWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    max-width: 1024px;
  }
`;

export const LayoutInner = styled.div`
  padding: 0.5rem;
`;

export const Main = styled.main`
  &.hero__wrapper {
    padding-top: 20rem;
  }
`;
