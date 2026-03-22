"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, direction = "up", className = "", once = true }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: once, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
