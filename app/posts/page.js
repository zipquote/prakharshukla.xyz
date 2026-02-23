import { API } from '../../src/utils';
import Posts from './client';

export default function Page() {
  const posts = API.getContent.posts();
  return <Posts posts={posts} />;
}
