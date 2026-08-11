"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <motion.div
        className="orb orb-one"
        animate={{
          x: [0, 80, -20, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="orb orb-two"
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="grid-overlay" />
    </div>
  );
}