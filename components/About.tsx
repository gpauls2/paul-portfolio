"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Digital Disciplines" },
  { value: "AU + PH", label: "Work Experience" },
  { value: "∞", label: "Always Learning" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">ABOUT ME</span>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-title"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Technical thinking.
            <br />
            <span>Creative execution.</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-lead">
            I&apos;m Paul, a multidisciplinary digital professional working
            across web development, IT systems and social media.
          </p>

          <p>
            My background allows me to approach digital work from more than one
            perspective understanding how something should look, how it
            should work, and how people will actually use it.
          </p>

          <p>
            From developing websites and digital platforms to troubleshooting
            systems and creating engaging content, I enjoy turning ideas and
            problems into practical digital experiences.
          </p>

          <a href="#contact" className="about-link">
            Let&apos;s work together <span>↗</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {stats.map((stat) => (
          <div className="about-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}