import Link from 'next/link';
import { ReactNode } from 'react';

interface INavLinkProps {
  children: ReactNode;
  href?: string;
  className?: string;
  [key: string]: any;
}

export default function NavLink({
  children,
  href = '/',
  className,
  ...otherProps
}: INavLinkProps) {
  return (
    <Link href={href} className={className} {...otherProps}>
      {children}
    </Link>
  );
}
