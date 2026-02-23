import { ReactNode } from 'react';

interface ITabPaneProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export default function TabPane({ children, ...otherProps }: ITabPaneProps) {
  return <div {...otherProps}>{children}</div>;
}
