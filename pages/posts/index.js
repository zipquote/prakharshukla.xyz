import Head from 'next/head';
import { NavLink, Layout, BlogPostList } from '../../src/components';
import { API } from '../../src/utils';

export default function Index({ posts }) {
  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>
      <Layout.FullWidth>
        <div className="p-2">
          <h1 className="mb-4 text-2xl leading-8 font-extrabold sm:text-3xl md:text-5xl text-black dark:text-white">
            Blog Posts
          </h1>
          <ul className="my-10 flex flex-wrap xl:-mx-4">
            {posts.map(({ frontMatter }) => {
              return (
                <li
                  key={frontMatter.slug}
                  className="w-full sm:w-1/2 lg:w-1/3 mb-5"
                >
                  <NavLink
                    as={`/posts/${frontMatter.slug}`}
                    href="/posts/[slug]"
                  >
                    <BlogPostList frontMatter={frontMatter} />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout.FullWidth>
    </div>
  );
}

export function getStaticProps() {
  const posts = API.getContent.posts();

  return { props: { posts } };
}
