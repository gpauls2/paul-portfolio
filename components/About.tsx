"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "3",
    label: "Digital Disciplines",
    detail: "Web · IT · Creative",
  },
  {
    value: "AU + PH",
    label: "Work Experience",
    detail: "Cross-market perspective",
  },
  {
    value: "∞",
    label: "Always Learning",
    detail: "Building through curiosity",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      {/* ========================= */}
      {/* SECTION LABEL */}
      {/* ========================= */}

      <motion.div
        className="about-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <div className="about-label-row">
          <span className="section-eyebrow">
            ABOUT ME
          </span>

          <motion.span
            className="about-label-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          />
        </div>
      </motion.div>

      {/* ========================= */}
      {/* MAIN GRID */}
      {/* ========================= */}

      <div className="about-grid">
        {/* LEFT */}

        <motion.div
          className="about-title"
          initial={{
            opacity: 0,
            x: -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <h2>
            Technical thinking.
            <br />

            <motion.span
              className="about-gradient-text"
              initial={{
                backgroundPosition: "0% 50%",
              }}
              whileInView={{
                backgroundPosition: "100% 50%",
              }}
              viewport={{ once: false }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              Creative execution.
            </motion.span>
          </h2>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            delay: 0.08,
          }}
        >
          <p className="about-lead">
            I&apos;m Paul, a multidisciplinary digital professional
            working across web development, IT systems and creative
            digital work.
          </p>

          <p>
            My background lets me approach digital work from more
            than one angle understanding how something should look,
            how it should function, and how people will actually use it.
          </p>

          <p>
            From building websites and full-stack platforms to
            troubleshooting systems and creating engaging content,
            I enjoy turning ideas and problems into practical digital
            experiences.
          </p>

          <motion.a
            href="#contact"
            className="about-link"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            Let&apos;s work together

            <span>↗</span>
          </motion.a>
        </motion.div>
      </div>

      {/* ========================= */}
      {/* STATS */}
      {/* ========================= */}

      <motion.div
        className="about-stats"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            className="about-stat"
            key={stat.label}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
          >
            <div className="about-stat-glow" />

            <strong>
              {stat.value}
            </strong>

            <span>
              {stat.label}
            </span>

            <small>
              {stat.detail}
            </small>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}