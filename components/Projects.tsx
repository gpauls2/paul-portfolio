
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  // Keep all existing projects, but display JSM and WWIB
  // as separate homepage cards linking to one case study.
  const displayProjects = projects.flatMap((project) => {
    if (project.slug === "jsm-wwib") {
      return [
        {
          ...project,
          slug: "jsm-home",
          number: "11",
          title: "Jasmine Sandler Marketing (JSM)",
          category: "MARKETING AUTOMATION · CRM INTEGRATION",
          description:
            "JSM inquiry form updates, lead segmentation and automated email workflows managed through the shared WWIB WordPress environment.",
          image: "/projects/jsm-wwib/jsm-website.png",
          stack: [
            "Fluent Forms",
            "FluentCRM",
            "Zapier",
            "Mailchimp",
          ],
          href: "/projects/jsm-wwib",
        },
        {
          ...project,
          slug: "wwib-home",
          number: "12",
          title: "Warrior Women in Business (WWIB)",
          category: "MARKETING AUTOMATION · CRM INTEGRATION",
          description:
            "Lead capture, CRM tagging, Zapier integrations and Mailchimp confirmation and follow-up workflows for WWIB.",
          image: "/projects/jsm-wwib/wwib-website.png",
          stack: [
            "WordPress",
            "Fluent Forms",
            "FluentCRM",
            "Zapier",
            "Mailchimp",
          ],
          href: "/projects/jsm-wwib",
        },
      ];
    }

    return [
      {
        ...project,
        href: `/projects/${project.slug}`,
      },
    ];
  });

  return (
    <section className="projects" id="work">
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="section-eyebrow">
            SELECTED WORK
          </span>

          <h2>
            Projects built with
            <br />
            <span>purpose &amp; personality.</span>
          </h2>
        </div>

        <p>
          A selection of full-stack applications, client work,
          technical builds, marketing automation, AI content
          and creative projects across web development,
          IT systems and digital media.
        </p>
      </motion.div>

      <div className="projects-grid">
        {displayProjects.map((project, index) => {
          const statusClass =
            project.status === "Completed"
              ? "completed"
              : project.status === "In Progress" ||
                project.status === "Active Development" ||
                project.status === "Ongoing"
                ? "in-progress"
                : "portfolio";

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 2) * 0.1,
              }}
            >
              <Link
                href={project.href}
                className="project-card"
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />

                  <div className="project-overlay">
                    <span>View Case Study</span>
                    <strong>↗</strong>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.number}</span>

                    <div className="project-meta-right">
                      <span
                        className={`project-status ${statusClass}`}
                      >
                        <span className="status-dot" />
                        {project.status}
                      </span>

                      <span>{project.category}</span>
                    </div>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="projects-view-all"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/projects"
          className="projects-view-all-button"
        >
          View All Projects <span>→</span>
        </Link>
      </motion.div>
    </section>
  );
}
