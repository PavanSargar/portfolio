import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./index.module.css";

type Props = {};

const Loader = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            layout
            className={`${styles.container}`}
          >
            <motion.div
              className={styles.box}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
  );
};

export default Loader;
