import Head from 'next/head';
import {
  NavLink,
  PostListSection,
  Image,
  Card,
  PostDate,
  PostExcerpt,
} from '../../src/components';
import { API } from '../../src/utils';

export default function Index({ posts }) {
  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>
      <PostListSection>
        <h1 className="mb-4 text-2xl leading-8 font-extrabold sm:text-3xl md:text-5xl">
          Blog Posts
        </h1>
        <ul className="my-10 flex flex-wrap sm:-mx-4">
          {posts.map(({ frontMatter }) => {
            return (
              <li
                key={frontMatter.slug}
                className="w-full sm:w-1/2 lg:w-1/3 mb-5"
              >
                <NavLink as={`/posts/${frontMatter.slug}`} href="/posts/[slug]">
                  <Card className="h-full">
                    <Card.Header>
                      <div className="card-image">
                        <Image
                          src={`${frontMatter.coverImage}`}
                          alt={frontMatter.title}
                          type="rounded"
                        />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{frontMatter.title}</Card.Title>
                      <PostDate postDate={frontMatter.date} />
                      <PostExcerpt excerpt={frontMatter.excerpt} />
                    </Card.Body>
                  </Card>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </PostListSection>
    </div>
  );
}

export function getStaticProps() {
  const posts = API.getPostsData();

  return { props: { posts } };
}
