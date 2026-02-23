'use client';

import { useContext, useEffect, useState } from 'react';
import type { BundledLanguage } from 'shiki/bundle/web';
import { codeToHtml } from 'shiki/bundle/web';
import { DarkModeContext } from '../../context';

interface ICodeBlockProps {
  children: {
    props: {
      children: string;
      className?: string;
    };
  };
  className?: string;
}

export default function CodeBlock({ children }: ICodeBlockProps) {
  const [html, setHtml] = useState('');
  const { isDarkMode } = useContext(DarkModeContext);
  const { children: code, className } = children.props;
  const lang = (className?.replace('language-', '') ||
    'javascript') as BundledLanguage;
  const theme = isDarkMode ? 'github-dark' : 'github-light';

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const out = await codeToHtml(code, {
        lang,
        theme,
      });

      if (!cancelled) {
        setHtml(out);
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [code, lang, theme]);

  if (!html) {
    return (
      <pre>
        <code>{code}</code>
      </pre>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
