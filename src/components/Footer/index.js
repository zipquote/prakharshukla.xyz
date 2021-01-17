import { Layout } from '../';

export default function Footer() {
  return (
    <footer className="p-2 bg-black dark:bg-white text-white dark:text-black">
      <Layout.FullWidth>
        <div>© 2019 - {new Date().getFullYear()} Prakhar Shukla</div>
      </Layout.FullWidth>
    </footer>
  );
}
