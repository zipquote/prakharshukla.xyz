import { motion } from 'framer-motion';
import classNames from 'classnames';

const variants = {
  hidden: { opacity: 0, visibility: 'hidden' },
  visible: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      delay: 0.2,
    },
  },
};

export default function WorkItemCompact({
  item,
  className,
  setAnimatedLayout,
  layoutId,
  isSelected,
}) {
  return (
    <motion.div
      layoutId={layoutId}
      onClick={() => setAnimatedLayout(layoutId)}
      className={classNames('worklist__dialog p-4 mb-2', className)}
      animate={isSelected ? 'hidden' : 'visible'}
      variants={variants}
    >
      <motion.h3>{item.title}</motion.h3>
    </motion.div>
  );
}
