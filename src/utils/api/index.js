import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { MDXComponents } from '../../../src/components';

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, '/content/posts');

const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

function getPostsData() {
  return postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      frontMatter: data,
      filePath,
    };
  });
}

function getFilePaths() {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return paths;
}

async function getDocumentBySlug(params) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    mdxSource,
    frontMatter: data,
  };
}

export default {
  getPostsData: getPostsData,
  getFilePaths: getFilePaths,
  getDocumentBySlug: getDocumentBySlug,
};
