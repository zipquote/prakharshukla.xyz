import { styled } from '@linaria/react';
import Image from 'next/image';
import classNames from 'classnames';

const StyledCardImage = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: none;

  &.rounded {
    border-radius: 0.25rem;

    @media (min-width: 640px) {
      border-radius: 0.375rem;
    }

    @media (min-width: 768px) {
      border-radius: 0.75rem;
    }
  }

  &.circle {
    border-radius: 9999px;
  }

  &.default {
    border-radius: 0;
  }
`;

export default function CardImage({ type, className, ...otherProps }) {
  return (
    <StyledCardImage
      className={classNames(className, {
        rounded: type === 'rounded',
        circle: type === 'circle',
        default: type === 'default',
      })}
    >
      <Image {...otherProps} />
    </StyledCardImage>
  );
}
