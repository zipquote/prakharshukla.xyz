import { styled } from '@linaria/react';
import Image from 'next/image';
import classNames from 'classnames';
import { ComponentProps } from 'react';

interface ICardImageProps extends ComponentProps<typeof Image> {
  type?: 'rounded' | 'circle' | 'default';
  className?: string;
}

const StyledCardImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

export default function CardImage({
  type,
  className,
  ...otherProps
}: ICardImageProps) {
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
