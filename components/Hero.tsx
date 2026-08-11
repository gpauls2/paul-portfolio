"use client";

import { motion } from "framer-motion";

const specialties = [
  { label: "WEB DEVELOPMENT", symbol: "</>" },
  { label: "IT & SYSTEMS", symbol: "◉" },
  { label: "SOCIAL & CREATIVE", symbol: "✦" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span className="availability-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          I build digital
          <br />
          experiences that
          <br />
          <span>work & stand out.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Web Developer, IT Specialist & Social Media Manager combining
          technology, problem-solving and creativity to build meaningful
          digital experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <a href="#work" className="primary-button">
            Explore My Work
            <span>↓</span>
          </a>

          <a href="#about" className="text-button">
            More About Me <span>↗</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35 }}
      >
        <div className="visual-core">
          <motion.div
            className="core-ring"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="core-content">
            <span>PF</span>
            <small>DESIGN × TECH</small>
          </div>

          {specialties.map((specialty, index) => (
            <motion.div
              className={`specialty specialty-${index + 1}`}
              key={specialty.label}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <strong>{specialty.symbol}</strong>
              <span>{specialty.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}