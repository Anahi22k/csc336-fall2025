import { motion } from "framer-motion";

export default function Mirror({ selectedItems = [] }) {
  return (
    <div className="mirror-wrapper">
      <motion.div
        className="mirror-frame"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mirror-glass">
          <div className="mirror-avatar">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className={`mirror-item mirror-item--${item.category}`}
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="mirror-item-img"
                  />
                ) : (
                  <span className="mirror-item-emoji">{item.emoji}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
