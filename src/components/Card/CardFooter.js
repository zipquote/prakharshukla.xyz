import classNames from 'classnames';

export default function CardFooter({ children, className, ...otherProps }) {
  return (
    <div className={classNames('mt-4', className)} {...otherProps}>
      {children}
    </div>
  );
}
