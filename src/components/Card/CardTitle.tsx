import { styled } from '@linaria/react';
import { ReactNode } from 'react';

interface ICardTitleProps {
  children: ReactNode;
}

const StyledCardTitle = styled.h3`
  font-family: 'Butler-Bold', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #000;
  margin-bottom: 0.5rem;

  .dark & {
    color: #fff;
  }
`;

export default function CardTitle({ children }: ICardTitleProps) {
  return <StyledCardTitle>{children}</StyledCardTitle>;
}
