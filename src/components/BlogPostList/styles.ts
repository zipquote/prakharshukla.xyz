import { styled } from '@linaria/react';
import Card from '../Card';

export const StyledBlogPostList = styled(Card)`
  &.h-full {
    height: 100%;
  }

  .card-image {
    object-fit: cover;
  }

  &.compact {
    // compact styles
  }
`;

StyledBlogPostList.Header = Card.Header;

StyledBlogPostList.Image = Card.Image;

StyledBlogPostList.Body = Card.Body;

StyledBlogPostList.Title = Card.Title;
