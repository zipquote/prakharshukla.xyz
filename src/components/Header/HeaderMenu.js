import { NavLink } from '../../components';

export default function HeaderMenu() {
  return (
    <div className="py-4 sm:py-0 flex flex-col sm:flex-row justify-end items-center w-full bg-white sm:bg-transparent dark:text-white border-b sm:border-0">
      <NavLink className="hover:underline px-4 py-2 mr-2" href="/posts">
        Blog
      </NavLink>
      <NavLink className="hover:underline px-4 py-2 mr-2" href="/work">
        Work
      </NavLink>
    </div>
  );
}
