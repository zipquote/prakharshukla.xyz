import { motion } from 'framer-motion';

export default function WorkItemExpanded({
  projects,
  selectedItemId,
  closeWorkItem,
  layoutId,
}) {
  const selectedItem = projects.find(
    (project) => project.frontMatter.slug === selectedItemId
  );

  return (
    <motion.div className="worklist" layoutId={layoutId}>
      <div className="worklist__dialog--expanded">
        <div className="p-4 mr-2 mb-2">
          <motion.button
            transition={{ delay: 0.5 }}
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            className="worklist__reset-button"
            onClick={closeWorkItem}
          >
            &#10005;
          </motion.button>
          <motion.h3 className="font-butler-bold worklist__title--expanded">
            {selectedItem.frontMatter.project_name}
          </motion.h3>
          <motion.p className="font-poppins worklist__description--expanded">
            {selectedItem.frontMatter.project_description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
