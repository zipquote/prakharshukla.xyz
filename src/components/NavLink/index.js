import Link from 'next/link';

const NavLink = ({ children, href, className, ...otherProps }) => {
  return (
    <Link href={href} {...otherProps}>
      <a className={className}>{children}</a>
    </Link>
  );
};

NavLink.defaultProps = {
  className: '',
  href: '/',
};

export default NavLink;
