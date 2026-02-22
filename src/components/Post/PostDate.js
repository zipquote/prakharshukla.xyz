import { styled } from '@linaria/react';
import tinytime from 'tinytime';

const StyledTime = styled.time`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #9ca3af;
  margin: 0.25rem 0;

  .dark & {
    color: #e5e7eb;
  }
`;

export default function PostDate({ postDate }) {
  if (!postDate) return null;
  return (
    <StyledTime>
      {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(postDate))}
    </StyledTime>
  );
}
