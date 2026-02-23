import { styled } from '@linaria/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface ICardBodyProps {
  children: ReactNode;
  className?: string;
}

const StyledCardBody = styled.div`
  flex: 1;
  margin: 0.5rem 0;
`;

export default function CardBody({
  children,
  className,
  ...otherProps
}: ICardBodyProps) {
  return (
    <StyledCardBody className={classNames(className)} {...otherProps}>
      {children}
    </StyledCardBody>
  );
}
