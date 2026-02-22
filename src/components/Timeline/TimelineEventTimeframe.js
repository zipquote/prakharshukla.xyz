import { styled } from '@linaria/react';
import tinytime from 'tinytime';

const Timeframe = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: #4a5568;

  .dark & {
    color: #fff;
  }
`;

export default function TimelineEventTimeframe({ timeframe }) {
  const duration = (t) => tinytime('{MM} {YYYY}').render(t);

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
