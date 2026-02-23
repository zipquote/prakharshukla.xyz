import FullWidthLayout from './FullWidthLayout';
import { LayoutWrapper, LayoutInner } from './styles';
import { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <LayoutWrapper>
      <LayoutInner>{children}</LayoutInner>
    </LayoutWrapper>
  );
}

Layout.FullWidth = FullWidthLayout;
