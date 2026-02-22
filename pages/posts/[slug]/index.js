import { MDXRemote } from 'next-mdx-remote';
import { Layout, MDXComponents, SEO } from '../../../src/components';
import { API } from '../../../src/utils';

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
        <article className="px-2 md:p-0 w-full mb-20">
          <h1 className="font-butler-extra-bold text-xl md:text-6xl mt-10 dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="mt-10 blog">
            <MDXRemote {...source} components={MDXComponents} />
          </div>
        </article>
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
