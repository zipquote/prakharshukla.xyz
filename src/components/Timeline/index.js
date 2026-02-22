import { styled } from '@linaria/react';
import TimelineEvent from './TimelineEvent';

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.5rem 0;
  padding: 0 1.25rem;

  @media (min-width: 1280px) {
    padding: 0;
  }
`;

const TimelineEventWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 66.666667%;
  }
`;

export default function Timeline({ works }) {
  return (
    <TimelineWrapper>
      {works.map(({ frontMatter }) => (
        <TimelineEventWrapper key={frontMatter.slug}>
          <TimelineEvent data={frontMatter} />
        </TimelineEventWrapper>
      ))}
    </TimelineWrapper>
  );
}
