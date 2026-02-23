import { styled } from '@linaria/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface ICardFooterProps {
  children: ReactNode;
  className?: string;
}

const StyledCardFooter = styled.div`
  margin-top: 1rem;
`;

export default function CardFooter({
  children,
  className,
  ...otherProps
}: ICardFooterProps) {
  return (
    <StyledCardFooter className={classNames(className)} {...otherProps}>
      {children}
    </StyledCardFooter>
  );
}
