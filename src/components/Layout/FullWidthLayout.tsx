import { styled } from '@linaria/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface IFullWidthLayoutProps {
  children: ReactNode;
  className?: string;
}

const FullWidthSection = styled.section`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    max-width: 1024px;
  }
`;

export default function FullWidthLayout({
  children,
  className,
  ...otherProps
}: IFullWidthLayoutProps) {
  return (
    <FullWidthSection className={classNames(className)} {...otherProps}>
      {children}
    </FullWidthSection>
  );
}
