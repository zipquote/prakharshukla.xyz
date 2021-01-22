---
date: 2021-01-12T18:26:37Z
title: Creating components in Twig
excerpt: How to make components in twig for DRY code and the convenience us JavaScript
  developers have become accustomed to.
cover_image: "/v1611340147/blog/twig_1_wdfasf.png"

---

    export default function CodeBlock({ children, className }) {
      const language = className.replace(/language-/, '');
      const { theme, ...highlightProps } = defaultProps;
    
      return (
        <Highlight
          {...highlightProps}
          theme={nightOwlLight}
          code={children}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '20px' }}>
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
      );
    }