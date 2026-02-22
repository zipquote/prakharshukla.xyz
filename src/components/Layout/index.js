import { styled } from '@linaria/react';
import FullWidthLayout from './FullWidthLayout';

const LayoutWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    max-width: 1024px;
  }
`;

const LayoutInner = styled.div`
  padding: 0.5rem;
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <LayoutInner>{children}</LayoutInner>
    </LayoutWrapper>
  );
}

Layout.FullWidth = FullWidthLayout;
