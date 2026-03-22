'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Template({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.4
      }}
    >
      {children}
    </motion.div>
  );
}
