import classNames from 'classnames';

export default function FullWidthLayout({
  children,
  className,
  ...otherProps
}) {
  return (
    <section
      className={classNames('max-w-full xl:max-w-5xl mx-auto', className)}
      {...otherProps}
    >
      {children}
    </section>
  );
}
