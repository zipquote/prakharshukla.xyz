import { styled } from '@linaria/react';
import tinytime from 'tinytime';

interface ITimelineEventTimeframeProps {
  timeframe: {
    project_start_date: string;
    project_end_date?: string;
  };
}

const Timeframe = styled.span`
  font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: #4a5568;

  .dark & {
    color: #fff;
  }
`;

export default function TimelineEventTimeframe({
  timeframe,
}: ITimelineEventTimeframeProps) {
  const duration = (t: string) => tinytime('{MM} {YYYY}').render(new Date(t));

  return (
    <Timeframe>
      {duration(timeframe.project_start_date)}
      {' - '}
      {timeframe?.project_end_date
        ? duration(timeframe.project_end_date)
        : 'Present'}
    </Timeframe>
  );
}
