import Image from 'next/image';
import classNames from 'classnames';

export default function CardImage({ type, className, ...otherProps }) {
  return (
    <div
      className={classNames(
        'shadow max-w-full h-auto align-middle border-none',
        className,
        {
          'rounded sm:rounded-md md:rounded-xl': type === 'rounded',
          'rounded-full': type === 'circle',
          'rounded-none': type === 'default',
        }
      )}
    >
      <Image {...otherProps} />
    </div>
  );
}
