import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

enum ContentTypes {
  POSTS = 'POSTS',
  WORKS = 'WORKS',
}

interface IPostFrontMatter {
  [key: string]: any;
}

interface IWorkFrontMatter {
  project_timeframe: {
    project_start_date: string;
  };
  [key: string]: any;
}

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, '/content/posts');
const WORKS_PATH = path.join(ROOT_PATH, '/content/work');

function getPaths(type: ContentTypes) {
  if (type === ContentTypes.WORKS) return WORKS_PATH;

  return POSTS_PATH;
}

function getContentPath(type: ContentTypes) {
  return fs.readdirSync(getPaths(type)).filter((path) => /\.mdx?$/.test(path));
}

function getContent(type: ContentTypes) {
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

getContent.works = () => {
  const data = getContent(ContentTypes.WORKS);
  return data.sort((a, b) => {
    const firstObjProjectStartDate = (
      a.frontMatter as unknown as IWorkFrontMatter
    ).project_timeframe.project_start_date;
    const secondObjProjectStartDate = (
      b.frontMatter as unknown as IWorkFrontMatter
    ).project_timeframe.project_start_date;
    if (firstObjProjectStartDate > secondObjProjectStartDate) return -1;
    if (firstObjProjectStartDate < secondObjProjectStartDate) return 1;
    return 0;
  });
};

getContent.posts = () => getContent(ContentTypes.POSTS);

function getDocumentPaths(type: ContentTypes) {
  const paths = getContentPath(type)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return paths;
}

getDocumentPaths.posts = () => getDocumentPaths(ContentTypes.POSTS);
getDocumentPaths.works = () => getDocumentPaths(ContentTypes.WORKS);

async function getDocumentBySlug(params: { slug: string }, type: ContentTypes) {
  const awaitedParams = await params;
  const postFilePath = path.join(getPaths(type), `${awaitedParams.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return {
    content,
    frontMatter: data,
  };
}

getDocumentBySlug.posts = (params: { slug: string }) =>
  getDocumentBySlug(params, ContentTypes.POSTS);
getDocumentBySlug.works = (params: { slug: string }) =>
  getDocumentBySlug(params, ContentTypes.WORKS);

export default {
  getContent: getContent,
  getDocumentPaths: getDocumentPaths,
  getDocumentBySlug: getDocumentBySlug,
};
