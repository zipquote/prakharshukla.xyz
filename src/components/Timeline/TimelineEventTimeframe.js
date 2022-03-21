import tinytime from 'tinytime';

export default function TimelineEventTimeframe({ timeframe }) {
  const duration = (t) => tinytime('{MM} {YYYY}').render(t);

  return (
    <span className="timeline__year font-jetbrains text-sm mb-2 text-gray-700 dark:text-white">
      {duration(timeframe.project_start_date)}
      {' - '}
      {timeframe?.project_end_date
        ? duration(timeframe.project_end_date)
        : 'Present'}
    </span>
  );
}
