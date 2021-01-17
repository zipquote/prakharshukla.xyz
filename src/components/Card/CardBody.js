import classNames from 'classnames';

export default function CardBody({ children, className, ...otherProps }) {
  return (
    <div className={classNames('flex-1 my-2', className)} {...otherProps}>
      {children}
    </div>
  );
}
