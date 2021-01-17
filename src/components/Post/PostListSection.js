import classNames from 'classnames';

export default function PostListSection({
  children,
  className,
  ...otherProps
}) {
  return (
    <section
      className={classNames(
        'max-w-3xl xl:max-w-5xl mx-auto px-2 xl:px-0',
        className
      )}
      {...otherProps}
    >
      {children}
    </section>
  );
}
