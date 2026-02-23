import { API } from '../../src/utils';
import WorkClient from './client';

export default function Work() {
  const works = API.getContent.works();
  return <WorkClient works={works} />;
}
