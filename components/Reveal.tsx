"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
};

const variants = {
  up: { opacity: 0, y: 28, x: 0, scale: 1 },
  left: { opacity: 0, x: -36, y: 0, scale: 1 },
  right: { opacity: 0, x: 36, y: 0, scale: 1 },
  scale: { opacity: 0, x: 0, y: 0, scale: 0.95 }
};

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up"
}: RevealProps) {
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
      initial={variants[from]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
