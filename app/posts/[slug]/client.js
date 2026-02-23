'use client';

import { MDXRemote } from 'next-mdx-remote';
import { styled } from '@linaria/react';
import Layout from '../../../src/components/Layout';
import MDXComponents from '../../../src/components/MDXComponents';

const PostArticle = styled.article`
  padding: 0 0.5rem;
  width: 100%;
  margin-bottom: 5rem;
`;

const PostTitle = styled.h1`
  font-family: 'Butler-Extra-Bold', sans-serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-top: 2.5rem;

  .dark & {
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`;

const PostBody = styled.div`
  margin-top: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #374151;

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: 'Butler-Bold', sans-serif;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  h2,
  h3 {
    font-family: 'Butler-Bold', sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  h4,
  h5 {
    font-family: 'Butler-Bold', sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  h6 {
    font-family: 'Butler-Bold', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  p > code {
    padding: 0.25rem 0.5rem;
    background-color: #e5e7eb;
    color: #000;
    border-radius: 0.25rem;
  }

  pre code {
    padding: 0;
    background-color: transparent;
    color: inherit;
    border-radius: 0;
  }

  .dark & {
    color: #e5e7eb;
  }
`;

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <PostArticle>
        <PostTitle>{frontMatter.title}</PostTitle>
        <PostBody className="blog">
          <MDXRemote {...source} components={MDXComponents} />
        </PostBody>
      </PostArticle>
    </Layout>
  );
}
