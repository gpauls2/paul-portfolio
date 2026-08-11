"use client";

import { motion } from "framer-motion";

const builds = [
  {
    title: "SupportFlow AI",
    category: "IT Support · Web Application",
    description:
      "A modern help-desk platform focused on ticket management, support conversations and service workflows.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    progress: "In Progress",
    image: "/projects/supportflow.png",
    link: "https://github.com/gpauls2/supportflow-ai",
  },
  {
    title: "Pet Style Club",
    category: "Front-End · Creative",
    description:
      "An interactive web experience for a cozy detective pet comedy series with custom styling and character-driven pages.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    progress: "In Progress",
    image: "/projects/pet-style-club.png",
    link: "https://gpauls2.github.io/pet-style-club/",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="currently-building" id="building">
      <motion.div
        className="building-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="section-eyebrow">CURRENTLY BUILDING</span>

          <h2>
            Work that&apos;s still
            <br />
            <span>moving forward.</span>
          </h2>
        </div>

        <p>
          Active projects I&apos;m continuing to develop, refine and expand as
          part of my ongoing technical and creative work.
        </p>
      </motion.div>

      <div className="building-grid">
        {builds.map((build, index) => (
          <motion.a
            key={build.title}
            href={build.link}
            target="_blank"
            rel="noopener noreferrer"
            className="building-card"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="building-image">
              <img src={build.image} alt={build.title} />

              <div className="building-status">
                <span className="building-dot" />
                {build.progress}
              </div>
            </div>

            <div className="building-content">
              <span className="building-category">
                {build.category}
              </span>

              <h3>{build.title}</h3>

              <p>{build.description}</p>

              <div className="building-stack">
                {build.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="building-link">
                View project <span>↗</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}