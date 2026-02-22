import { styled } from '@linaria/react';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';
import CardImage from './CardImage';

const StyledCard = styled.div`
  border-radius: 0.375rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &.card--expanded {
    /* Add styles for expanded card if any */
  }

  &:hover {
    &.card--compact {
      background-color: #f3f4f6;

      .dark & {
        background-color: #4b5563;
      }
    }
  }
`;

export default function Card({ children, className, type, ...otherProps }) {
  return (
    <StyledCard
      className={classNames(className, {
        'card--compact': type === 'compact',
        'card--expanded': type !== 'compact',
      })}
      {...otherProps}
    >
      {children}
    </StyledCard>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Image = CardImage;
