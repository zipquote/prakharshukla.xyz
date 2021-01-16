import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NavLink } from '../';

const MDXComponents = {
  a: NavLink,
  Head,
  code: dynamic(() => import('../CodeBlock')),
};

export default MDXComponents;
