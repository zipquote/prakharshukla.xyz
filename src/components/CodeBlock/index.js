import classNames from 'classnames';
import Prism from 'prism-react-renderer/prism';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import { DarkModeContext } from '../../context';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, '');

  return (
    <DarkModeContext.Consumer>
      {({ isDarkMode }) => (
        <Highlight
          {...{ ...defaultProps, theme: isDarkMode ? nightOwl : nightOwlLight }}
          code={children}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={classNames(className, {
                codeblock: true,
              })}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </DarkModeContext.Consumer>
  );
}

//Langauge Support
require('prismjs/components/prism-twig');
