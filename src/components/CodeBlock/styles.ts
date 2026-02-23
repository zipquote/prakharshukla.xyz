import { styled } from '@linaria/react';

export const StyledCodeBlock = styled.pre`
  font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;
  border: 2px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1.25rem;
  width: 100%;
  overflow: auto;
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, var(--tw-border-opacity));

  .dark & {
    border-color: #e5e7eb;
    box-shadow: 6px 6px 0 0 rgba(255, 255, 255, var(--tw-border-opacity));
  }
`;
