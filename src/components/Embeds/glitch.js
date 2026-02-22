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
    border-radius: 0;
    border: 1px solid #ebebeb;
  }
`;

export default function Glitch({ embedUrl, title, allow }) {
  return (
    <EmbedWrapper>
      <iframe
        src={embedUrl}
        title={title}
        allow={allow}
        style={{ height: '100%', width: '100%', border: 0 }}
      ></iframe>
    </EmbedWrapper>
  );
}
