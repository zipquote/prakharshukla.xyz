import { styled } from '@linaria/react';
import TimelineEvent from './TimelineEvent';

interface IFrontMatter {
  slug: string;
  project_name: string;
  project_description: string;
  project_timeframe: {
    project_start_date: string;
    project_end_date: string;
  };
  services: string[];
  site_link: string;
  technologies_and_tools: string[];
}

interface ITimelineProps {
  works: {
    frontMatter: IFrontMatter;
  }[];
}

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

export default function Timeline({ works }: ITimelineProps) {
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
