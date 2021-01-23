export default function TimelineEvent() {
  return (
    <div className="timeline relative pl-10 border-l border-gray-600 dark:border-white">
      <span className="timeline__year mb-2 xl:absolute xl:-left-20 dark:text-white">
        2020
      </span>
      <div className="timeline__event-details">
        <h3 className="font-butler-bold text-2xl text-black dark:text-white mb-2">
          Joined Pubmatic
        </h3>
        <p className="mt-3 font-poppins font-light text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </div>
    </div>
  );
}
