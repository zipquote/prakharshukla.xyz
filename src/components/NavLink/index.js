import Link from 'next/link';

export default function NavLink({ children, href, className, ...otherProps }) {
  return (
    <Link href={href} className={className} {...otherProps}>
      {children}
    </Link>
  );
}

NavLink.defaultProps = {
  className: '',
  href: '/',
};
