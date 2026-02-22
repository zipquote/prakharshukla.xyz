import { styled } from '@linaria/react';

export const StyledCard = styled.div`
  border-radius: 0.375rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &.card--expanded {
    /* Add styles for expanded card if any */
  }

  &:hover {
    &.card--compact {
      background-color: #f3f4f6;

      .dark & {
        background-color: #4b5563;
      }
    }
  }
`;

export const StyledCardHeader = styled.div`
  margin-bottom: 1rem;
`;

export const StyledCardBody = styled.div`
  flex: 1;
  margin: 0.5rem 0;
`;

export const StyledCardFooter = styled.div`
  margin-top: 1rem;
`;

export const StyledCardTitle = styled.h3`
  font-family: 'Butler-Bold', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #000;
  margin-bottom: 0.5rem;

  .dark & {
    color: #fff;
  }
`;

export const StyledCardImage = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: none;

  &.rounded {
    border-radius: 0.25rem;

    @media (min-width: 640px) {
      border-radius: 0.375rem;
    }

    @media (min-width: 768px) {
      border-radius: 0.75rem;
    }
  }

  &.circle {
    border-radius: 9999px;
  }

  &.default {
    border-radius: 0;
  }
`;
