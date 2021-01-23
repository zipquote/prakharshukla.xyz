import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NavLink } from '../';

const MDXComponents = {
  NavLink,
  Head,
  code: dynamic(() => import('../CodeBlock')),
};

export default MDXComponents;
