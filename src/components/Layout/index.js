import FullWidthLayout from './FullWidthLayout';

export default function Layout({ children }) {
  return (
    <div className="max-w-full xl:max-w-5xl mx-auto">
      <div className="p-2">{children}</div>
    </div>
  );
}

Layout.FullWidth = FullWidthLayout;
