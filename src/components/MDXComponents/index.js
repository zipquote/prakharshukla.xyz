import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NavLink } from '../';

const CodeBlock = dynamic(() => import('../CodeBlock'));

const MDXComponents = {
  NavLink,
  Head,
  code: CodeBlock,
};

export default MDXComponents;
