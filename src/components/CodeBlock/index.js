import Prism from 'prism-react-renderer/prism';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import { DarkModeContext } from '../../context';
import { StyledCodeBlock } from './styles';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

export default function CodeBlock({ children, className }) {
  // const language = className.replace(/language-/, '');
  const language = 'js'; //TODO: Fix later

  return (
    <DarkModeContext.Consumer>
      {({ isDarkMode }) => (
        <Highlight
          {...{ ...defaultProps, theme: isDarkMode ? nightOwl : nightOwlLight }}
          code={children}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <StyledCodeBlock className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </StyledCodeBlock>
          )}
        </Highlight>
      )}
    </DarkModeContext.Consumer>
  );
}

//Langauge Support
require('prismjs/components/prism-twig');
