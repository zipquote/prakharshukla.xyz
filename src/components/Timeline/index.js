import TimelineEvent from './TimelineEvent';

export default function Timeline() {
  return (
    <div className="flex flex-col align-start my-10 px-5 xl:px-0">
      <TimelineEvent />
      <TimelineEvent />
    </div>
  );
}
