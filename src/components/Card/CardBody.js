import { styled } from '@linaria/react';
import classNames from 'classnames';

const StyledCardBody = styled.div`
  flex: 1;
  margin: 0.5rem 0;
`;

export default function CardBody({ children, className, ...otherProps }) {
  return (
    <StyledCardBody className={classNames(className)} {...otherProps}>
      {children}
    </StyledCardBody>
  );
}
