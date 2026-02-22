import { styled } from '@linaria/react';
import classNames from 'classnames';

const StyledCardHeader = styled.div`
  margin-bottom: 1rem;
`;

export default function CardHeader({ children, className, ...otherProps }) {
  return (
    <StyledCardHeader className={classNames(className)} {...otherProps}>
      {children}
    </StyledCardHeader>
  );
}
