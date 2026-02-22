import { MDXRemote } from 'next-mdx-remote';
import { styled } from '@linaria/react';
import Layout from '../../../components/Layout';
import MDXComponents from '../../../components/MDXComponents';
import SEO from '../../../components/SEO';
import { API } from '../../../utils';

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

  &.blog {
    // Add blog styles here
  }
`;

export default function PostPage({ source, frontMatter, slug }) {
  const website = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return (
    <>
      <SEO
        title={frontMatter.title}
        description={frontMatter.excerpt || frontMatter.title}
        url={`${website}/posts/${slug}`}
        frontMatter={frontMatter}
      />
      <Layout>
        <PostArticle>
          <PostTitle>{frontMatter.title}</PostTitle>
          <PostBody className="blog">
            <MDXRemote {...source} components={MDXComponents} />
          </PostBody>
        </PostArticle>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { frontMatter, mdxSource } = await API.getDocumentBySlug.posts(params);

  return {
    props: {
      source: mdxSource,
      frontMatter,
      slug: params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = API.getDocumentPaths.posts();

  return {
    paths,
    fallback: false,
  };
};
