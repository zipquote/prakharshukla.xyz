import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NavLink } from '../';
import catbutton from '../../../public/snippets/html/catbutton.html';

function CatButton() {
  return (
    <div
      className="w-80 mx-auto my-5"
      dangerouslySetInnerHTML={{ __html: catbutton }}
    />
  );
}

const CodeBlock = dynamic(() => import('../CodeBlock'));

const MDXComponents = {
  NavLink,
  Head,
  code: CodeBlock,
  CatButton,
};

export default MDXComponents;
