import Image from 'next/image';
import { NavLink } from '../src/components';

export default function Custom404() {
  return (
    <div className="sm:w-3/5 lg:w-2/4 mx-auto mb-10">
      <Image
        src={`/images/404.png`}
        alt="Page Not Found"
        width={750}
        height={500}
      />
      <h3 className="font-jetbrains text-lg w-full text-center">
        You Lost Buddy? Go{' '}
        <NavLink className="hover:text-blue-600 hover:underline" href="/">
          home
        </NavLink>
      </h3>
    </div>
  );
}
