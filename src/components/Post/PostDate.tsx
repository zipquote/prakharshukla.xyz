import { styled } from '@linaria/react';
import tinytime from 'tinytime';

interface IPostDateProps {
  postDate: string;
}

const StyledTime = styled.time`
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #9ca3af;
  margin: 0.25rem 0;

  .dark & {
    color: #e5e7eb;
  }
`;

export default function PostDate({ postDate }: IPostDateProps) {
  if (!postDate) return null;
  return (
    <StyledTime>
      {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(postDate))}
    </StyledTime>
  );
}
