"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type LoadRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function LoadReveal({
  children,
  className,
  delay = 0
}: LoadRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
