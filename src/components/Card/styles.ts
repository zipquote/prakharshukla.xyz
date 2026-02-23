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
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #000;
  margin-bottom: 0.5rem;

  .dark & {
    color: #fff;
  }
`;

export const StyledCardImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 100%;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
