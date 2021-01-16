import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';
import { Layout, MDXComponents } from '../../../src/components';
import { API } from '../../../src/utils';

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents });
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>{content}</main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { frontMatter, mdxSource } = await API.getDocumentBySlug(params);

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = API.getFilePaths();

  return {
    paths,
    fallback: false,
  };
};
