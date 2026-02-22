import { styled } from '@linaria/react';
import Card from '../Card';

export const StyledBlogPostList = styled(Card)`
  &.h-full {
    height: 100%;
  }

  .card-image {
    object-fit: cover;
  }
`;

StyledBlogPostList.Header = styled(Card.Header)`
  //Placeholder styles
`;

StyledBlogPostList.Image = styled(Card.Image)`
  //Placeholder styles
`;

StyledBlogPostList.Body = styled(Card.Body)`
  //Placeholder styles
`;

StyledBlogPostList.Title = styled(Card.Title)`
  //Placeholder styles
`;
