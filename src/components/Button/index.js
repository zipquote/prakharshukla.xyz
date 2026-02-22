import classNames from 'classnames';
import { StyledButton, StyledNavLink } from './styles';

export default function Button({ children, className, ...otherProps }) {
  if (otherProps.href) {
    return (
      <StyledNavLink className={classNames(className)} {...otherProps}>
        {children}
      </StyledNavLink>
    );
  } else {
    return (
      <StyledButton className={classNames(className)} {...otherProps}>
        {children}
      </StyledButton>
    );
  }
}
