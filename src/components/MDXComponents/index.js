import Head from 'next/head';
import dynamic from 'next/dynamic';
import { CustomLink } from '../';

const MDXComponents = {
  a: CustomLink,
  TestComponent: dynamic(() => import('../TestComponent')),
  Head,
};

export default MDXComponents;
