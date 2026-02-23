'use client';
import { styled } from '@linaria/react';
import NavLink from '../src/components/NavLink';
import Layout from '../src/components/Layout';
import BlogPostList from '../src/components/BlogPostList';
import Button from '../src/components/Button';
import Hero from '../src/components/Hero';

const HeroBlogList = styled.div`
  position: relative;
  top: -2.5rem;
  background-color: #fff;
  padding: 0 1rem 1.25rem;
  border-radius: 0.25rem;

  .dark & {
    background-color: #000;
  }
`;

const LatestPosts = styled.h4`
  font-family: 'Butler-Bold', sans-serif;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin: 0 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px dashed #000;

  .dark & {
    color: #fff;
    border-color: #fff;
  }
`;

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.75rem;
  margin-top: 0.75rem;

  @media (min-width: 1280px) {
    margin: 0 -1rem;
  }
`;

const PostListItem = styled.li`
  width: 100%;
  margin-bottom: 1.25rem;
  list-style-type: none;
`;

const MoreButton = styled(Button)`
  padding: 0 0.75rem;
`;

const BlogListContainer = styled.div`
  margin: 0 auto 2.5rem;

  @media (min-width: 640px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }
`;

const MoreButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function IndexClient({ posts }) {
  return (
    <>
      <Hero />
      <Layout.FullWidth>
        <BlogListContainer>
          <HeroBlogList>
            <LatestPosts>Latest Posts</LatestPosts>
            <PostList>
              {posts.map(({ frontMatter }) => {
                return (
                  <PostListItem key={frontMatter.slug}>
                    <NavLink
                      as={`/posts/${frontMatter.slug}`}
                      href="/posts/[slug]"
                    >
                      <BlogPostList frontMatter={frontMatter} type="compact" />
                    </NavLink>
                  </PostListItem>
                );
              })}
            </PostList>
            <MoreButtonContainer>
              <MoreButton href="/posts">More</MoreButton>
            </MoreButtonContainer>
          </HeroBlogList>
        </BlogListContainer>
      </Layout.FullWidth>
    </>
  );
}
