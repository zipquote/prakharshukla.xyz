'use client';
import { useState, useRef, useEffect } from 'react';
import Canvas from '../../src/components/Canvas';
import Layout from '../../src/components/Layout';
import Timeline from '../../src/components/Timeline';
import { styled } from '@linaria/react';

const WorkContainer = styled.div`
  position: relative;
`;

const TimelineContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export default function WorkClient({ works }) {
  const [height, setHeight] = useState(0);
  const eventRef = useRef(null);

  useEffect(() => {
    const element = eventRef.current;
    if (element) {
      const dimensions = element.getBoundingClientRect();
      setHeight(dimensions.height + 10);
    }
  }, []);

  return (
    <WorkContainer style={{ height }}>
      <Canvas.SPLASH className="absolute" />
      <TimelineContainer ref={eventRef}>
        <Layout.FullWidth>
          <Timeline works={works} />
        </Layout.FullWidth>
      </TimelineContainer>
    </WorkContainer>
  );
}
