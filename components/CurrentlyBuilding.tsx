"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const builds = [
  {
    number: "01",
    title: "AgentForge",
    category: "Full-Stack · AI SaaS",
    description:
      "An AI workforce platform for recruiting specialized agents, executing missions, building multi-agent teams and managing reusable workflows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Resend",
      "Sentry",
    ],
    progress: "In Progress",
    image: "/projects/agentforge.png",
    link: "/projects/agentforge",
  },
  {
    number: "02",
    title: "SupportFlow AI",
    category: "IT Support · Web Application",
    description:
      "A modern help-desk platform focused on ticket management, support conversations and streamlined service workflows.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    progress: "In Progress",
    image: "/projects/supportflow.png",
    link: "/projects/supportflow-ai",
  },
  {
    number: "03",
    title: "Pet Style Club",
    category: "Front-End · Creative",
    description:
      "An interactive web experience for a cozy detective pet comedy series with custom styling and character-driven pages.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages",
    ],
    progress: "In Progress",
    image: "/projects/pet-style-club.png",
    link: "/projects/pet-style-club",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section
      className="currently-building"
      id="building"
    >
      {/* ================================= */}
      {/* HEADING */}
      {/* ================================= */}

      <motion.div
        className="building-heading"
        initial={{
          opacity: 0,
          y: 30,
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
        }}
      >
        <div>
          <div className="building-heading-label">
            <span className="section-eyebrow">
              CURRENTLY BUILDING
            </span>

            <motion.span
              className="building-heading-line"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            />
          </div>

          <h2>
            Work that&apos;s still
            <br />

            <span>
              moving forward.
            </span>
          </h2>
        </div>

        <p>
          Active projects I&apos;m continuing to
          develop, refine and expand as part of my
          ongoing technical and creative work.
        </p>
      </motion.div>

      {/* ================================= */}
      {/* PROJECTS */}
      {/* ================================= */}

      <div className="building-grid">
        {builds.map((build, index) => (
          <motion.div
            key={build.title}
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
          >
            <Link
              href={build.link}
              className="building-card"
            >
              {/* IMAGE */}

              <div className="building-image">
                <img
                  src={build.image}
                  alt={build.title}
                />

                <span className="building-number">
                  {build.number}
                </span>

                <div className="building-status">
                  <span className="building-dot" />

                  {build.progress}
                </div>

                <div className="building-image-overlay">
                  <span>
                    View Case Study
                  </span>

                  <strong>↗</strong>
                </div>
              </div>

              {/* CONTENT */}

              <div className="building-content">
                <span className="building-category">
                  {build.category}
                </span>

                <h3>
                  {build.title}
                </h3>

                <p>
                  {build.description}
                </p>

                <div className="building-stack">
                  {build.stack.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="building-link">
                  View case study

                  <span>↗</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ================================= */}
      {/* ALL PROJECTS */}
      {/* ================================= */}

      <motion.div
        className="building-view-all"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
      >
        <Link
          href="/projects"
          className="building-view-all-link"
        >
          Explore All Projects

          <span>→</span>
        </Link>
      </motion.div>
    </section>
  );
}