import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function PageFrame({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.main
      className={`bg-background text-foreground overflow-x-clip ${className}`}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -28 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
