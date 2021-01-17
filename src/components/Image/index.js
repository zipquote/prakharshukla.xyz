import classNames from 'classnames';

export default function Image({ src, alt, type }) {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        'shadow max-w-full h-auto align-middle border-none',
        {
          'rounded sm:rounded-md md:rounded-xl': type === 'rounded',
          'rounded-full': type === 'circle',
          'rounded-none': type === 'default',
        }
      )}
    />
  );
}

Image.defaultProps = {
  type: 'default',
};
