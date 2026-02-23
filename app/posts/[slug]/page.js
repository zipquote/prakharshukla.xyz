import { serialize } from 'next-mdx-remote/serialize';
import { API } from '../../../src/utils';
import PostPage from './client';

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { frontMatter } = await API.getDocumentBySlug.posts(awaitedParams);
  const website = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return {
    title: frontMatter.title,
    description: frontMatter.excerpt || frontMatter.title,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.excerpt || frontMatter.title,
      url: `${website}/posts/${awaitedParams.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { frontMatter, content } = await API.getDocumentBySlug.posts(params);
  const mdxSource = await serialize(content);

  return <PostPage source={mdxSource} frontMatter={frontMatter} />;
}

export async function generateStaticParams() {
  const paths = API.getDocumentPaths.posts();
  return paths.map((p) => p.params);
}
