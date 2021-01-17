import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';
import { Layout, MDXComponents } from '../../../src/components';
import { API } from '../../../src/utils';

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents });
  return (
    <Layout>
      <article className="px-2 md:p-0 w-full mb-20">
        <h1 className="font-butler-extra-bold text-xl md:text-6xl mt-10 dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="mt-10 blog">{content}</div>
      </article>
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
