import tinytime from 'tinytime';

export default function PostDate({ postDate }) {
  if (!postDate) return null;
  return (
    <time className="font-poppins font-light text-sm text-gray-400 dark:text-gray-200 my-1">
      {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(postDate))}
    </time>
  );
}
