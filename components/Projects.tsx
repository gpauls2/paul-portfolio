"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AgentForge",
    category: "Full-Stack Development · AI SaaS",
    description:
      "An AI workforce platform for recruiting specialized agents, executing missions, building multi-agent teams, designing reusable workflows and managing credit-based usage.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Resend",
    ],
    link: "/projects/agentforge",
    image: "/projects/agentforge.png",
    status: "In Progress",
  },
  {
    number: "02",
    title: "Millennium Training",
    category: "Web Development · LMS",
    description:
      "Educational website and student portal built with WordPress, Elementor and MoodleCloud.",
    stack: [
      "WordPress",
      "Elementor",
      "MoodleCloud",
      "Forminator",
    ],
    link: "/projects/millennium-training",
    image: "/projects/millennium.png",
    status: "Completed",
  },
  {
    number: "03",
    title: "Pet Style Club",
    category: "Front-End Development · Creative",
    description:
      "Interactive web experience for a cozy detective pet comedy series.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages",
    ],
    link: "/projects/pet-style-club",
    image: "/projects/pet-style-club.png",
    status: "In Progress",
  },
  {
    number: "04",
    title: "SupportFlow AI",
    category: "Web Application · IT Support",
    description:
      "A modern IT support and ticket management platform designed to organize support requests, conversations and service workflows.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "/projects/supportflow-ai",
    image: "/projects/supportflow.png",
    status: "In Progress",
  },
  {
    number: "05",
    title: "Social Media & Creative",
    category: "Content · Branding",
    description:
      "Selected social media campaigns, branded content and creative digital work.",
    stack: [
      "Content Strategy",
      "Canva",
      "Branding",
      "Social Media",
    ],
    link: "/projects/social-media",
    image: "/projects/social-media.png",
    status: "Portfolio",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="work">
      {/* ================================= */}
      {/* HEADING */}
      {/* ================================= */}

      <motion.div
        className="projects-heading"
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
          <span className="section-eyebrow">
            SELECTED WORK
          </span>

          <h2>
            Projects built with
            <br />

            <span>
              purpose & personality.
            </span>
          </h2>
        </div>

        <p>
          A selection of full-stack applications,
          client work, technical builds and creative
          projects across web development, IT systems,
          AI platforms and digital media.
        </p>
      </motion.div>

      {/* ================================= */}
      {/* PROJECT GRID */}
      {/* ================================= */}

      <div className="projects-grid">
        {projects.map((project, index) => {
          const statusClass =
            project.status === "Completed"
              ? "completed"
              : project.status === "In Progress"
                ? "in-progress"
                : "portfolio";

          return (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
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
            >
              <Link
                href={project.link}
                className="project-card"
              >
                {/* IMAGE */}

                <div className="project-media">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay">
                    <span>
                      View Case Study
                    </span>

                    <strong>↗</strong>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="project-info">
                  <div className="project-meta">
                    <span>
                      {project.number}
                    </span>

                    <div className="project-meta-right">
                      <span
                        className={`project-status ${statusClass}`}
                      >
                        <span className="status-dot" />

                        {project.status}
                      </span>

                      <span>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ================================= */}
      {/* VIEW ALL PROJECTS */}
      {/* ================================= */}

      <motion.div
        className="projects-view-all"
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
          amount: 0.4,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <Link
          href="/projects"
          className="projects-view-all-button"
        >
          View All Projects

          <span>
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}