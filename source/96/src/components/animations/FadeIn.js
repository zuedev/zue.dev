"use client";

import { motion } from "motion/react";

export default ({ children, props }) => {
  const { duration = 1, delay = 0 } = props || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
