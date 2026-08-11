"use client";

import { motion } from "framer-motion";

const education = [
  {
    period: "2024 — 2026",
    qualification:
      "Advanced Diploma of Information Technology",
    specialization: "Telecommunications Network Engineering",
    institution: "Blue Lotus College",
    location: "Melbourne, Australia",
  },
  {
    period: "2023 — 2024",
    qualification:
      "Diploma of Information Technology",
    specialization: "Telecommunications Network Engineering",
    institution: "Blue Lotus College",
    location: "Melbourne, Australia",
  },
  {
  period: "2016 — 2021",
  qualification: "Bachelor of Information Technology",
  specialization: "Undergraduate Studies",
  institution: "Saint Louis University",
  location: "Baguio City, Philippines",
},
];

const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    provider: "Coursera · Google",
    category: "IT SUPPORT",
  },
  {
    name: "Setting Up Computer Servers",
    provider: "TESDA",
    category: "SYSTEMS",
  },
  {
    name: "Digital Marketing Fundamentals",
    provider: "Google",
    category: "MARKETING",
  },
  {
    name: "Graphic Design with Canva",
    provider: "Kurso PH",
    category: "CREATIVE",
  },
  {
    name: "Social Media Management",
    provider: "Kurso PH",
    category: "SOCIAL",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">EDUCATION & CERTIFICATIONS</span>

        <h2>
          Learning that
          <br />
          <span>supports the work.</span>
        </h2>
      </motion.div>

      <div className="education-layout">
        <div className="education-column">
          <span className="education-column-label">EDUCATION</span>

          {education.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.qualification}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <span className="education-period">
                {item.period}
              </span>

              <h3>{item.qualification}</h3>

              <p className="education-specialization">
                {item.specialization}
              </p>

              <div className="education-school">
                <span>{item.institution}</span>
                <span>{item.location}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="certifications-column">
          <span className="education-column-label">
            CERTIFICATIONS
          </span>

          {certifications.map((certificate, index) => (
            <motion.div
              className="certificate-row"
              key={certificate.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ x: 6 }}
            >
              <div>
                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.name}</h3>

                <p>{certificate.provider}</p>
              </div>

              <span className="certificate-arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}