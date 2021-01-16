import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { API } from '../../src/utils';

export default function Index({ posts }) {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>
        Click the link below to navigate to a page generated by{' '}
        <code>next-mdx-remote</code>.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = API.getPostsData();

  return { props: { posts } };
}
