import { Canvas, Layout, ListOfWork } from '../src/components';
import { API } from '../src/utils';

export default function Work({ works }) {
  return (
    <div className="relative">
      <Canvas.SPLASH className="absolute" />
      <div className="absolute w-full">
        <Layout.FullWidth>
          <ListOfWork listOfWorks={works} />
        </Layout.FullWidth>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const works = API.getContent.works();

  return { props: { works } };
}
