import classNames from 'classnames';
import { StyledButton, StyledNavLink } from './styles';
import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  [key: string]: any;
}

export default function Button({
  children,
  className,
  ...otherProps
}: IButtonProps) {
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
