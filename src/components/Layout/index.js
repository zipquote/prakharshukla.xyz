import FullWidthLayout from './FullWidthLayout';
import { LayoutWrapper, LayoutInner } from './styles';

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <LayoutInner>{children}</LayoutInner>
    </LayoutWrapper>
  );
}

Layout.FullWidth = FullWidthLayout;
