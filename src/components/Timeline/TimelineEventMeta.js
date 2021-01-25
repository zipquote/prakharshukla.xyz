export default function TimelineEventMeta({ title, tags }) {
  return (
    <div className="flex flex-col my-3">
      <h5 className="font-jetbrains mb-2 uppercase text-xs dark:text-white">
        {title}
      </h5>
      <p className="flex flex-wrap items-center justify-start">
        {tags.map((tag, idx) => (
          <span
            key={`${tag.toLowerCase().replace(/[^\w-]+/g, '-')}-${idx}`}
            className="p-1 bg-gray-200 mb-2 mr-2 text-xs"
          >
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
}
