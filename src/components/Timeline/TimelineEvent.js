import tinytime from 'tinytime';
import TimelineEventMeta from './TimelineEventMeta';
import TimelineEventTitle from './TimelineEventTitle';
import TimelineEventTimeframe from './TimelineEventTimeframe';
import TimelineEventExcerpt from './TimelineEventExcerpt';

export default function TimelineEvent({ data }) {
  const {
    project_name: title,
    project_description: description,
    project_timeframe: timeframe,
    services = [],
    site_link: link,
    technologies_and_tools: tools,
  } = data;

  return (
    <div className="timeline relative pl-10 pb-10 border-l border-gray-600 dark:border-white">
      <span className="timeline__year font-jetbrains mb-2 hidden xl:block xl:absolute xl:-left-20 dark:text-white">
        {tinytime('{YYYY}').render(timeframe.project_start_date)}
      </span>
      <div className="timeline__event-details">
        <TimelineEventTitle link={link} title={title} />
        <TimelineEventTimeframe timeframe={timeframe} />
        <TimelineEventExcerpt excerpt={description} />
        <TimelineEventMeta title="Services" tags={services} />
        <TimelineEventMeta title="Tech & Tools" tags={tools} />
      </div>
    </div>
  );
}
