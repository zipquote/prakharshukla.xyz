import { API } from '../src/utils';
import { NavLink, Layout, BlogPostList, Button } from '../src/components';

export default function Index({ posts }) {
  return (
    <Layout.FullWidth>
      <div className="sm:w-4/5 lg:w-3/4 mx-auto mb-10">
        <ul className="flex flex-wrap my-5 xl:-mx-4">
          {posts.map(({ frontMatter }) => {
            return (
              <li key={frontMatter.slug} className="w-full mb-5">
                <NavLink as={`/posts/${frontMatter.slug}`} href="/posts/[slug]">
                  <BlogPostList frontMatter={frontMatter} type="compact" />
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center">
          <Button href="/posts" className="px-3">
            More
          </Button>
        </div>
      </div>
    </Layout.FullWidth>
  );
}

export function getStaticProps() {
  const posts = API.getContent.posts();

  return { props: { posts } };
}
