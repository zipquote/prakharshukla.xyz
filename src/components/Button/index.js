import classNames from 'classnames';

export default function Button({ children, className, ...otherProps }) {
  return (
    <button
      className={classNames(
        'p-1 mx-1 mb-1 border-2 border-black dark:border-white dark:bg-black rounded shadow-btn relative',
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
