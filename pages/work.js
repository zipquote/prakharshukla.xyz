import { useState, useRef, useEffect } from 'react';
import { Canvas, Layout, Timeline } from '../src/components';
import { API } from '../src/utils';

export default function Work({ works }) {
  const [height, setHeight] = useState(0);
  const eventRef = useRef(null);

  useEffect(() => {
    const element = eventRef.current;
    const dimensions = element.getBoundingClientRect();
    setHeight(dimensions.height + 10);
  }, []);

  return (
    <div className="relative" style={{ height }}>
      <Canvas.SPLASH className="absolute" />
      <div className="absolute w-full" ref={eventRef}>
        <Layout.FullWidth>
          <Timeline works={works} />
        </Layout.FullWidth>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const works = API.getContent.works();

  return { props: { works } };
}
