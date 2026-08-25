"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Web Development",
    description:
      "Building responsive, functional and visually polished websites and web experiences.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "WordPress",
      "Elementor",
      "HTML / CSS",
    ],
    accent: "cyan",
  },
  {
    number: "02",
    icon: "⌘",
    title: "IT & Systems",
    description:
      "Supporting users, systems and digital infrastructure through practical technical solutions.",
    skills: [
      "IT Support",
      "Networking",
      "LMS",
      "Troubleshooting",
      "Google Workspace",
      "System Administration",
    ],
    accent: "blue",
  },
  {
    number: "03",
    icon: "✦",
    title: "Social Media & Creative",
    description:
      "Creating content, visual experiences and digital strategies that help brands communicate effectively.",
    skills: [
      "Content Creation",
      "Social Strategy",
      "Canva",
      "Branding",
      "Creative Design",
      "Campaigns",
    ],
    accent: "pink",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      {/* ========================= */}
      {/* HEADING */}
      {/* ========================= */}

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="services-heading-label">
            <span className="section-eyebrow">
              WHAT I DO
            </span>

            <motion.span
              className="services-heading-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            />
          </div>

          <h2>
            One skill set.
            <br />

            <span className="services-gradient-text">
              Three perspectives.
            </span>
          </h2>
        </div>

        <p>
          I work across development, IT and creative digital work —
          combining technical thinking with visual communication and
          practical problem-solving.
        </p>
      </motion.div>

      {/* ========================= */}
      {/* CARDS */}
      {/* ========================= */}

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            className={`service-card service-card-${service.accent}`}
            key={service.title}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="service-card-glow" />

            <div className="service-top">
              <span className="service-number">
                {service.number}
              </span>

              <motion.div
                className="service-icon"
                whileHover={{
                  rotate: 6,
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {service.icon}
              </motion.div>
            </div>

            <div className="service-mid-orbit">
              <span />
              <span />
              <span />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-skills">
                {service.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="service-arrow">↗</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}