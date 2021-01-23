import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { MDXComponents } from '../../../src/components';

const CONTENT_TYPES = {
  POSTS: 'POSTS',
  WORKS: 'WORKS',
};

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, '/content/posts');
const WORKS_PATH = path.join(ROOT_PATH, '/content/work');

function getPaths(type) {
  if (type === CONTENT_TYPES.WORKS) return WORKS_PATH;

  return POSTS_PATH;
}

function getContentPath(type) {
  return fs.readdirSync(getPaths(type)).filter((path) => /\.mdx?$/.test(path));
}

function getContent(type) {
  let allFilePaths = getContentPath(type);

  return allFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(getPaths(type), filePath));
    const { content, data } = matter(source);

    return {
      content,
      frontMatter: {
        ...data,
        slug: filePath.replace(/\.mdx?$/, ''),
      },
    };
  });
}

getContent.works = () => getContent(CONTENT_TYPES.WORKS);
getContent.posts = () => getContent();

function getDocumentPaths(type) {
  const paths = getContentPath(type)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return paths;
}

getDocumentPaths.posts = () => getDocumentPaths(CONTENT_TYPES.POSTS);
getDocumentPaths.works = () => getDocumentPaths(CONTENT_TYPES.WORKS);

async function getDocumentBySlug(params, type) {
  const postFilePath = path.join(getPaths(type), `${params.slug}.mdx`);
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

getDocumentBySlug.posts = (params) =>
  getDocumentBySlug(params, CONTENT_TYPES.POSTS);
getDocumentBySlug.works = (params) =>
  getDocumentBySlug(params, CONTENT_TYPES.WORKS);

export default {
  getContent: getContent,
  getDocumentPaths: getDocumentPaths,
  getDocumentBySlug: getDocumentBySlug,
};
