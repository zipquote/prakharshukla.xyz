import classNames from 'classnames';
import { NavLink } from '../';

export default function Button({ children, className, ...otherProps }) {
  const baseClass =
    'p-1 mx-1 mb-1 border-2 border-black dark:border-white bg-white dark:bg-black dark:text-white rounded shadow-btn relative';
  if (otherProps.href) {
    return (
      <NavLink className={classNames(baseClass, className)} {...otherProps}>
        {children}
      </NavLink>
    );
  } else {
    return (
      <button className={classNames(baseClass, className)} {...otherProps}>
        {children}
      </button>
    );
  }
}
