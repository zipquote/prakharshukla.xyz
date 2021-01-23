import { motion } from 'framer-motion';
import classNames from 'classnames';

export default function WorkItemCompact({
  project,
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
    >
      <motion.h3 className="font-butler-bold worklist__title">
        {project.project_name}
      </motion.h3>
      <motion.p className="font-poppins worklist__description">
        {project.project_description}
      </motion.p>
    </motion.div>
  );
}
