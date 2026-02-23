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
  const code = children.props.children;

  return (
    <DarkModeContext.Consumer>
      {({ isDarkMode }) => (
        <Highlight
          {...{ ...defaultProps, theme: isDarkMode ? nightOwl : nightOwlLight }}
          code={code}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <StyledCodeBlock className={className} style={style}>
              {tokens.map((line, i) => {
                const { key, ...lineProps } = getLineProps({ line, key: i });
                return (
                  <div key={key} {...lineProps}>
                    {line.map((token, key) => {
                      const { key: tokenKey, ...tokenProps } = getTokenProps({
                        token,
                        key,
                      });
                      return <span key={tokenKey} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </StyledCodeBlock>
          )}
        </Highlight>
      )}
    </DarkModeContext.Consumer>
  );
}

//Langauge Support
require('prismjs/components/prism-twig');
