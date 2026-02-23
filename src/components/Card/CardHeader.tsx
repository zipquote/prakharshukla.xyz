import { styled } from '@linaria/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface ICardHeaderProps {
  children: ReactNode;
  className?: string;
}

const StyledCardHeader = styled.div`
  margin-bottom: 1rem;
`;

export default function CardHeader({
  children,
  className,
  ...otherProps
}: ICardHeaderProps) {
  return (
    <StyledCardHeader className={classNames(className)} {...otherProps}>
      {children}
    </StyledCardHeader>
  );
}
