import { styled } from '@linaria/react';
import classNames from 'classnames';

const StyledCardFooter = styled.div`
  margin-top: 1rem;
`;

export default function CardFooter({ children, className, ...otherProps }) {
  return (
    <StyledCardFooter className={classNames(className)} {...otherProps}>
      {children}
    </StyledCardFooter>
  );
}
