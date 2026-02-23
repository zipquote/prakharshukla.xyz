import { ReactNode } from 'react';

interface ITabProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Tab({ children, ...otherProps }: ITabProps) {
  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
}
