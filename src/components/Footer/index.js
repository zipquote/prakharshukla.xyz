import { Layout } from '../';
import EmailIcon from '../../assets/icons/interfaces/at.svg';

export default function Footer() {
  return (
    <footer className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black">
      <Layout.FullWidth>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="md:w-2/5 mb-0">
            © 2019 - {new Date().getFullYear()} Prakhar Shukla
          </p>
          <a
            href="mailto:prakhar.shukla321@gmail.com"
            className="md:w-1/5 flex justify-end hover:underline"
          >
            <EmailIcon fill="#FFFFFF" />
            &nbsp;Email
          </a>
        </div>
      </Layout.FullWidth>
    </footer>
  );
}
