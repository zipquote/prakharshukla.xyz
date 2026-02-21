import Link from 'next/link';

const NavLink = ({ children, href, className, ...otherProps }) => {
  return (
    <Link href={href} className={className} {...otherProps}>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  className: '',
  href: '/',
};

export default NavLink;
