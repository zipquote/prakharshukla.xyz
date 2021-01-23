import { Canvas, Layout, ListOfWork } from '../src/components';

export default function Work() {
  return (
    <div className="relative">
      <Canvas.SPLASH className="absolute" />
      <div className="absolute w-full">
        <Layout.FullWidth>
          <ListOfWork />
        </Layout.FullWidth>
      </div>
    </div>
  );
}
