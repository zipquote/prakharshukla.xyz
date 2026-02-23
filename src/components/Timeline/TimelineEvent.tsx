import { styled } from '@linaria/react';
import tinytime from 'tinytime';
import TimelineEventMeta from './TimelineEventMeta';
import TimelineEventTitle from './TimelineEventTitle';
import TimelineEventTimeframe from './TimelineEventTimeframe';
import TimelineEventExcerpt from './TimelineEventExcerpt';

interface ITimelineEventProps {
  data: {
    project_name: string;
    project_description: string;
    project_timeframe: {
      project_start_date: string;
      project_end_date: string;
    };
    services: string[];
    site_link: string;
    technologies_and_tools: string[];
  };
}

const TimelineEventWrapper = styled.div`
  position: relative;
  padding-left: 2.5rem;
  padding-bottom: 2.5rem;
  border-left: 1px solid #a0aec0;

  .dark & {
    border-left: 1px solid #fff;
  }

  &:before {
    content: '';
    display: block;
    background-color: #4a5568;
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: -0.5rem;
  }

  .dark &:before {
    background-color: #fff;
  }

  &:not(:last-child) .timeline__event-details {
    margin-bottom: 2.5rem;
  }
`;

const TimelineYear = styled.span`
  font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;
  margin-bottom: 0.5rem;
  display: none;

  .dark & {
    color: #fff;
  }

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    left: -5rem;
  }
`;

const TimelineEventDetails = styled.div`
  .timeline__event-details {
    // Keeping this class for now to avoid breaking changes
  }
`;

export default function TimelineEvent({ data }: ITimelineEventProps) {
  const {
    project_name: title,
    project_description: description,
    project_timeframe: timeframe,
    services = [],
    site_link: link,
    technologies_and_tools: tools,
  } = data;

  return (
    <TimelineEventWrapper>
      <TimelineYear>
        {tinytime('{YYYY}').render(new Date(timeframe.project_start_date))}
      </TimelineYear>
      <TimelineEventDetails className="timeline__event-details">
        <TimelineEventTitle link={link} title={title} />
        <TimelineEventTimeframe timeframe={timeframe} />
        <TimelineEventExcerpt excerpt={description} />
        <TimelineEventMeta title="Services" tags={services} />
        <TimelineEventMeta title="Tech & Tools" tags={tools} />
      </TimelineEventDetails>
    </TimelineEventWrapper>
  );
}
