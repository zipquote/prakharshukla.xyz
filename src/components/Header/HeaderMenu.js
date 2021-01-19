import { NavLink } from '../../components';
export default function HeaderMenu() {
  return (
    <div className="flex flex-col sm:flex-row justify-end items-center w-full bg-transparent dark:text-white border-b sm:border-0">
      <NavLink className="hover:underline px-4 py-2 mr-2" href="/posts">
        Blog
      </NavLink>
      <NavLink className="hover:underline px-4 py-2 mr-2" href="/posts">
        Work
      </NavLink>
    </div>
  );
}
