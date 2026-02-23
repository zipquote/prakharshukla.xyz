import { styled } from '@linaria/react';

interface ITimelineEventExcerptProps {
  excerpt: string;
}

const Excerpt = styled.p`
  margin-top: 0.75rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #4a5568;

  .dark & {
    color: #d1d5db;
  }
`;

export default function TimelineEventExcerpt({
  excerpt,
}: ITimelineEventExcerptProps) {
  return <Excerpt>{excerpt}</Excerpt>;
}
