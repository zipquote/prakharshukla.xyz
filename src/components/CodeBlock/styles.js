import { styled } from '@linaria/react';

export const StyledCodeBlock = styled.pre`
  &.codeblock {
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
