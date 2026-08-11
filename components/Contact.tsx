"use client";

import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    value: "gpauls2",
    href: "https://github.com/gpauls2",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
  },
  {
    label: "Email",
    value: "Send me a message",
    href: "mailto:gpauslray2@gmail.com",
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-top"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">LET&apos;S CONNECT</span>

        <h2>
          Have a project,
          <br />
          opportunity or <span>idea?</span>
        </h2>

        <p>
          I&apos;m open to opportunities across web development, IT support,
          digital systems and creative work. If you think we could build
          something great together, I&apos;d love to hear from you.
        </p>

        <a
          href="mailto:gpauslray2@gmail.com"
          className="contact-main-button"
        >
          <span>Get in touch</span>
          <strong>↗</strong>
        </a>
      </motion.div>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={
              social.href.startsWith("http") ? "_blank" : undefined
            }
            rel={
              social.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="contact-link"
          >
            <div>
              <span>{social.label}</span>
              <strong>{social.value}</strong>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}