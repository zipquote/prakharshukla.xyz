'use client';

import { styled } from '@linaria/react';

const EmbedWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 4px;

  @media (min-width: 960px) {
    padding-bottom: 50%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid #ebebeb;
  }
`;

interface ISandpackProps {
  example: 'tabs' | 'typewriter';
}

const tabsSrcDoc = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tabs Demo</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          sans-serif;
      }

      .tab {
        margin: 1rem;
      }

      .tab-nav span {
        padding: 4px 4px 0 4px;
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
        margin-right: 2px;
        background: azure;
        cursor: pointer;
      }

      .tab-nav span.active {
        background-color: aquamarine;
      }

      .tab-pane {
        border: 1px solid black;
        padding: 1rem;
        background-color: white;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script>
      const { useState, Children, isValidElement, cloneElement } = React;

      function Tabs({ children, activeTabDefault, ...otherProps }) {
        const [activeTab, setActiveTab] = useState(activeTabDefault);

        return React.createElement(
          'div',
          { className: 'tab', ...otherProps },
          Children.map(children, (child) => {
            if (child.type === 'TabNav') {
              return React.createElement(
                'div',
                { className: 'tab-nav' },
                Children.map(child.props.children, (navChild) => {
                  if (isValidElement(navChild)) {
                    return cloneElement(navChild, {
                      className:
                        (navChild.props.className || '') +
                        (navChild.props.id === activeTab ? ' active' : ''),
                      onClick: () => {
                        setActiveTab(navChild.props.id);
                        if (navChild.props.onClick) {
                          navChild.props.onClick();
                        }
                      },
                    });
                  }
                  return navChild;
                })
              );
            } else {
              return React.createElement(
                'div',
                { className: 'tab-pane' },
                Children.toArray(child.props.children).filter((paneChild) => {
                  if (
                    isValidElement(paneChild) &&
                    paneChild.props.id === activeTab
                  ) {
                    return cloneElement(paneChild, {
                      className:
                        (paneChild.props.className || '') +
                        (paneChild.props.id === activeTab ? ' active' : ''),
                    });
                  }
                  return null;
                })
              );
            }
          })
        );
      }

      function TabNav(props) {
        return React.createElement('TabNav', props, props.children);
      }

      function TabPane(props) {
        return React.createElement('TabPane', props, props.children);
      }

      function App() {
        return React.createElement(
          'div',
          null,
          React.createElement('h1', null, 'Basic Tabs Example'),
          React.createElement(
            Tabs,
            { activeTabDefault: 'tab-2' },
            React.createElement(
              TabNav,
              null,
              React.createElement('span', { id: 'tab-1' }, 'Tab 1'),
              React.createElement('span', { id: 'tab-2' }, 'Tab 2'),
              React.createElement('span', { id: 'tab-3' }, 'Tab 3')
            ),
            React.createElement(
              TabPane,
              null,
              React.createElement('div', { id: 'tab-1' }, 'Content for Tab 1'),
              React.createElement('div', { id: 'tab-2' }, 'Content for Tab 2'),
              React.createElement('div', { id: 'tab-3' }, 'Content for Tab 3')
            )
          )
        );
      }

      ReactDOM.render(
        React.createElement(App),
        document.getElementById('root')
      );
    </script>
  </body>
</html>
`;

const typewriterSrcDoc = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typewriter Effect</title>
    <style>
      .text {
        font-size: 4rem;
      }

      @keyframes blinking {
        0% {
          color: transparent;
        }
        50% {
          color: inherit;
        }
        100% {
          color: transparent;
        }
      }

      .cursor-blinking {
        animation: 1s blinking step-end infinite;
      }
    </style>
  </head>
  <body>
    <div class="text">
      <span id="typewriter"></span>
      <span class="cursor-blinking">|</span>
    </div>
    <script>
      class TypeWriter {
        constructor(words, element) {
          this.words = words;
          this.element = element;
          this.wordIndex = 0;
          this.charIndex = 0;
          this.isDeleting = false;
        }

        type() {
          const current = this.wordIndex % this.words.length;
          const fullText = this.words[current];

          if (this.isDeleting) {
            this.charIndex -= 1;
          } else {
            this.charIndex += 1;
          }

          const text = fullText.substring(0, this.charIndex);
          this.element.textContent = text;

          let typeSpeed = 250;

          if (!this.isDeleting && this.charIndex === fullText.length) {
            this.isDeleting = true;
            typeSpeed = 1000;
          } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex += 1;
            typeSpeed = 500;
          }

          setTimeout(() => this.type(), typeSpeed);
        }

        init() {
          this.type();
        }
      }

      const words = ['Bananas', 'Apples', 'Lorem Ipsum Dolor Sit Amet'];
      const typewriter = document.getElementById('typewriter');
      const writer = new TypeWriter(words, typewriter);
      writer.init();
    </script>
  </body>
</html>
`;

export default function SandpackEmbed({ example }: ISandpackProps) {
  const srcDoc = example === 'tabs' ? tabsSrcDoc : typewriterSrcDoc;

  return (
    <EmbedWrapper>
      <iframe srcDoc={srcDoc} title={example} sandbox="allow-scripts" />
    </EmbedWrapper>
  );
}
