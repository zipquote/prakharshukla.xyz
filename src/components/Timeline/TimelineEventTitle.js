import { useContext } from 'react';
import { DarkModeContext } from '../../context';
import LinkIcon from '../../assets/icons/interfaces/link.svg';

export default function TimelineEventTitle({ link, title }) {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <a className="hover:underline" href={link} rel="noreferrer" target="_blank">
      <h3 className="flex font-butler-bold text-2xl text-black dark:text-white mb-2">
        <span>{title}</span>
        <LinkIcon className="ml-2" fill={isDarkMode ? '#FFF' : '#000'} />
      </h3>
    </a>
  );
}
