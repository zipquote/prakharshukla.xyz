import { motion } from 'framer-motion';

export default function WorkItemExpanded({
  items,
  selectedItemId,
  closeWorkItem,
  layoutId,
}) {
  const selectedItem = items.filter((item) => item.id === selectedItemId)[0];
  return (
    <motion.div className="worklist" layoutId={layoutId}>
      <div className="worklist__dialog--expanded">
        <div className="p-4 mr-2 mb-2">
          <h4>{selectedItem.title}</h4>
          <p>{selectedItem.subtitle}</p>
          <motion.button
            transition={{ delay: 0.5 }}
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            className="bg-gray-100 rounded-full p-3"
            onClick={closeWorkItem}
          >
            X
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
