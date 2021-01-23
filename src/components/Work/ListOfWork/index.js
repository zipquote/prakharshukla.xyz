import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import WorkItem from '../WorkItem';

const CAT_IMAGE = `https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg`;
const DOG_IMAGE = `https://static.toiimg.com/thumb/msid-60132235,imgsize-169468,width-800,height-600,resizemode-75/60132235.jpg`;

const ITEMS = [
  {
    id: 'abc',
    title: 'Catmus Cutilius',
    subtitle: 'Catmus is greatest king of all cats ever.',
    image: CAT_IMAGE,
  },
  {
    id: 'xyz',
    title: 'Dogmu Dogaru',
    subtitle: 'Dogaru is lord of all dogs worldwide.',
    image: DOG_IMAGE,
  },
];

export default function ListOfWork({ listOfWorks }) {
  const [selectedId, setSelectedId] = useState(null);

  const reset = () => setSelectedId(null);

  return (
    <AnimateSharedLayout>
      <ul className="flex flex-wrap mx-2 2xl:-mx-4 my-10">
        {listOfWorks.map(({ frontMatter }) => (
          <li key={frontMatter.slug} className="w-full md:w-1/2 xl:w-1/3">
            <WorkItem.Compact
              project={frontMatter}
              layoutId={frontMatter.slug}
              isSelected={selectedId === frontMatter.slug}
              setAnimatedLayout={setSelectedId}
              className="mr-5"
            />
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {selectedId && (
          <motion.div animate className="worklist__overlay" onClick={reset}>
            <WorkItem.Expanded
              projects={listOfWorks}
              closeWorkItem={reset}
              selectedItemId={selectedId}
              layoutId={selectedId}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
