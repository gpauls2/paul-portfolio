"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "JAN 2026 — JUL 2026",
    role: "Web Developer & LMS Administrator",
    company: "Community Access & Millennium Training (CAASS)",
    location: "Part-time · Remote",
    description:
      "Designed, developed and maintained websites, web applications and learning management systems supporting training programs and internal operations.",
    highlights: [
      "Designed, developed and maintained websites and web applications",
      "Managed LMS content and user data",
      "Troubleshot website performance and technical issues",
      "Improved security, usability and accessibility",
      "Translated operational requirements into technical solutions",
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "Moodle",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    period: "JAN 2025 — APR 2026",
    role: "Product Assembly Assistant",
    company: "X-Form Metal Product Design & Fabrication",
    location: "Melbourne, Australia",
    description:
      "Supported production and day-to-day operational activities within a metal product design and fabrication environment.",
    highlights: [
      "Assisted with loading and unloading materials and products",
      "Maintained warehouse organization",
      "Supported production operations",
      "Assisted the production team with operational tasks",
    ],
    technologies: [
      "Production",
      "Operations",
      "Team Collaboration",
      "Workplace Safety",
    ],
  },

  {
    period: "DEC 2023 — JAN 2025",
    role: "Public Area Cleaner",
    company: "Silk Hospitality",
    location: "Melbourne, Australia",
    description:
      "Maintained cleanliness, hygiene and presentation standards across hotel public areas in a professional hospitality environment.",
    highlights: [
      "Maintained hotel public areas and hygiene standards",
      "Performed routine and deep cleaning",
      "Completed vacuuming, dusting and sanitation tasks",
      "Identified and reported maintenance issues",
    ],
    technologies: [
      "Hospitality",
      "Facility Care",
      "Workplace Safety",
      "Team Collaboration",
    ],
  },

  {
    period: "JUNE 2022 — JULY 2023",
    role: "Social Media Manager",
    company: "E-Precision",
    location: "Philippines",
    description:
      "Managed social media strategy, digital content and audience engagement to strengthen the company's online presence.",
    highlights: [
      "Developed and implemented social media strategies",
      "Created digital content for social platforms",
      "Monitored analytics and content performance",
      "Managed social media platforms",
      "Responded to audience interactions",
    ],
    technologies: [
      "Social Media",
      "Content Creation",
      "Digital Marketing",
      "Analytics",
      "Canva",
    ],
  },

  {
    period: "JUNE 2021 — FEB 2022",
    role: "IT Support",
    company: "Printing Park",
    location: "Philippines",
    description:
      "Provided frontline IT support covering computer systems, software, hardware and network troubleshooting.",
    highlights: [
      "Installed operating systems, applications and device drivers",
      "Diagnosed hardware, software and network issues",
      "Provided frontline technical assistance",
      "Performed system updates, backups and antivirus scans",
      "Maintained technical documentation and system records",
    ],
    technologies: [
      "Windows",
      "Hardware Support",
      "Software Support",
      "Networking",
      "Troubleshooting",
      "System Maintenance",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="section-eyebrow">EXPERIENCE</span>

          <h2>
            Where I&apos;ve
            <br />
            <span>put it into practice.</span>
          </h2>
        </div>

        <p>
          Professional and project experience across web development,
          technical support, digital systems and creative problem-solving.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <motion.article
            className="experience-item"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
            }}
          >
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-period">
              {experience.period}
            </div>

            <div className="experience-main">
              <div className="experience-title-row">
                <div>
                  <h3>{experience.role}</h3>
                  <span className="experience-company">
                    {experience.company}
                  </span>
                </div>

                <span className="experience-type">
                  {experience.location}
                </span>
              </div>

              <p>{experience.description}</p>

              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="experience-tech">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}