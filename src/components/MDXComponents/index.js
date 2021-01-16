import Head from 'next/head';
import dynamic from 'next/dynamic';
import { CustomLink } from '../';

const MDXComponents = {
  a: CustomLink,
  Head,
  code: dynamic(() => import('../CodeBlock')),
};

export default MDXComponents;
