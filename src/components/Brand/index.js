import Link from 'next/link';

export default function Brand() {
  return (
    <Link href="/">
      <a className="brand flex">
        <div className="relative brand__firstname relative font-anodina px-6 py-1 border-2 border-black bg-black text-white">
          <span className="invisible">Prakhar</span>
          <span className="absolute px-6 py-1 -inset-x-4 inset-y-2 sm:inset-y-3 font-zoika text-2xl">
            Prakhar
          </span>
        </div>
        <div className="relative brand__lastname font-anodina w-3/4 ml-auto px-2 py-1 text-black border-2 border-l-0 border-black bg-white">
          <span className="invisible">Shukla</span>
          <span className="absolute px-2 py-1 font-zoika -inset-x-0.5 inset-y-0 text-lg">
            Shukla
          </span>
        </div>
      </a>
    </Link>
  );
}
