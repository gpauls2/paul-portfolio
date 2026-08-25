"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    value: "gpauls2",
    href: "https://github.com/gpauls2",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    external: true,
  },
  {
    label: "Email",
    value: "Send me a message",
    href: "/contact",
    external: false,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* ========================= */}
      {/* TOP */}
      {/* ========================= */}

      <motion.div
        className="contact-top"
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
        }}
      >
        <span className="section-eyebrow">
          LET&apos;S CONNECT
        </span>

        <h2>
          Have a project,
          <br />
          opportunity or <span>idea?</span>
        </h2>

        <p>
          I&apos;m open to opportunities across web development,
          IT support, digital systems and creative work.
          If you think we could build something great together,
          I&apos;d love to hear from you.
        </p>

        <Link
          href="/contact"
          className="contact-main-button"
        >
          <span>Get in touch</span>
          <strong>↗</strong>
        </Link>
      </motion.div>

      {/* ========================= */}
      {/* LINKS */}
      {/* ========================= */}

      <motion.div
        className="contact-links"
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
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
      >
        {socials.map((social) =>
          social.external ? (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div>
                <span>{social.label}</span>
                <strong>{social.value}</strong>
              </div>

              <span className="contact-arrow">↗</span>
            </a>
          ) : (
            <Link
              key={social.label}
              href={social.href}
              className="contact-link"
            >
              <div>
                <span>{social.label}</span>
                <strong>{social.value}</strong>
              </div>

              <span className="contact-arrow">↗</span>
            </Link>
          )
        )}
      </motion.div>
    </section>
  );
}