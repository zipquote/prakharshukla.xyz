import { API } from '../src/utils';
import IndexClient from './client';

export default function Page() {
  const posts = API.getContent.posts();
  return <IndexClient posts={posts} />;
}
