import { Canvas, Layout } from '../src/components';

export default function Work() {
  return (
    <div className="relative">
      <Canvas.SPLASH className="absolute" />
      <div className="absolute w-full">
        <Layout.FullWidth>
          <div>Work</div>
        </Layout.FullWidth>
      </div>
    </div>
  );
}
