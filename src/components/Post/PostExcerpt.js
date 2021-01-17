export default function PostExcerpt({ excerpt }) {
  if (excerpt && excerpt.length > 0) {
    return (
      <p className="mt-5 font-poppins font-light text-md text-gray-600">
        {excerpt}
      </p>
    );
  }

  return null;
}
