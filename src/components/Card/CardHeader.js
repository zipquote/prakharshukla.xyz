import classNames from 'classnames';

export default function CardHeader({ children, className, ...otherProps }) {
  return (
    <div className={classNames('mb-4', className)} {...otherProps}>
      {children}
    </div>
  );
}
