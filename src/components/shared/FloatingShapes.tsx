"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -22, 0],
          x: [0, 14, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-24 h-28 w-28 rounded-[2rem] bg-red-500/10 blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          x: [0, -12, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-[6%] h-24 w-24 rounded-full bg-slate-900/5 blur-sm"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-100 blur-3xl"
      />
    </div>
  );
}