'use client';

import { styled } from '@linaria/react';
import Layout from '../../src/components/Layout';
import NavLink from '../../src/components/NavLink';
import BlogPostList from '../../src/components/BlogPostList';

const PostsPage = styled.div`
  padding: 0.5rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 800;
  color: #000;

  .dark & {
    color: #fff;
  }

  @media (min-width: 640px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const PostList = styled.ul`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1280px) {
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

const PostListItem = styled.li`
  width: 100%;
  margin-bottom: 1.25rem;

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33.333333%;
  }
`;

export default function Posts({ posts }) {
  return (
    <div>
      <Layout.FullWidth>
        <PostsPage>
          <Title>Blog Posts</Title>
          <PostList>
            {posts.map(({ frontMatter }) => {
              return (
                <PostListItem key={frontMatter.slug}>
                  <NavLink
                    as={`/posts/${frontMatter.slug}`}
                    href="/posts/[slug]"
                  >
                    <BlogPostList frontMatter={frontMatter} />
                  </NavLink>
                </PostListItem>
              );
            })}
          </PostList>
        </PostsPage>
      </Layout.FullWidth>
    </div>
  );
}
