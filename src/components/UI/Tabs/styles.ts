import { styled } from '@linaria/react';

export const StyledTabs = styled.div`
  .flex {
    display: flex;
  }

  .flex-row {
    flex-direction: row;
  }

  .justify-items-start {
    justify-items: start;
  }
`;

export const StyledTab = styled.button`
  padding: 0.25rem 0.5rem;

  &.active {
    border-bottom: 2px solid #000;
  }
`;

export const StyledTabPane = styled.div`
  padding: 0.25rem 0.5rem;

  &.hidden {
    display: none;
  }
`;
