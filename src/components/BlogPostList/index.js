import { StyledBlogPostList } from './styles';
import PostDate from '../Post/PostDate';
import PostExcerpt from '../Post/PostExcerpt';
import { resolveImageDomain } from '../../utils/common';

export default function BlogPostList({ frontMatter, type }) {
  return (
    <StyledBlogPostList className="h-full" type={type}>
      {type !== 'compact' && (
        <StyledBlogPostList.Header>
          <StyledBlogPostList.Image
            src={`${resolveImageDomain('cloudinary')}${
              frontMatter.cover_image
            }`}
            alt={frontMatter.title}
            type="rounded"
            layout="fill"
            className="card-image"
          />
        </StyledBlogPostList.Header>
      )}
      <StyledBlogPostList.Body>
        <StyledBlogPostList.Title>{frontMatter.title}</StyledBlogPostList.Title>
        <PostDate postDate={frontMatter.date} />
        <PostExcerpt excerpt={frontMatter.excerpt} />
      </StyledBlogPostList.Body>
    </StyledBlogPostList>
  );
}
