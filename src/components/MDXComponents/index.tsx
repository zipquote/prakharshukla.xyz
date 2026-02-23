import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavLink from '../NavLink';
import catbutton from '../../../public/snippets/html/catbutton.html';
import { Glitch, Sandpack } from '../Embeds';
import { StyledCatButton } from './styles';

function CatButton() {
  return <StyledCatButton dangerouslySetInnerHTML={{ __html: catbutton }} />;
}

const CodeBlock = dynamic(() => import('../CodeBlock'));

const MDXComponents = {
  NavLink,
  Head,
  pre: CodeBlock,
  CatButton,
  Glitch,
  Sandpack,
};

export default MDXComponents;
