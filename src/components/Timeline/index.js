import TimelineEvent from './TimelineEvent';

export default function Timeline({ works }) {
  return (
    <div className="flex flex-col align-start my-10 px-5 xl:px-0">
      {works.map(({ frontMatter }) => (
        <div key={frontMatter.slug} className="w-full md:w-1/2 xl:w-2/3">
          <TimelineEvent data={frontMatter} />
        </div>
      ))}
    </div>
  );
}
