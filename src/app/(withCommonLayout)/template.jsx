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
      initial={{ opacity: 0, y: 20,  }}
      animate={{ opacity: 1, y: 0,  }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        duration: 0.25
      }}
    >
      {children}
    </motion.div>
  );
}
