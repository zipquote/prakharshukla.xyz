import { styled } from '@linaria/react';

const StyledExcerpt = styled.p`
  margin-top: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #4b5563;

  .dark & {
    color: #d1d5db;
  }
`;

export default function PostExcerpt({ excerpt }) {
  if (excerpt && excerpt.length > 0) {
    return <StyledExcerpt>{excerpt}</StyledExcerpt>;
  }

  return null;
}
