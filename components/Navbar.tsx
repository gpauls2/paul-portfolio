"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="navbar"
      >
        <a href="#top" className="logo" onClick={closeMenu}>
          PF<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#building">Currently Building</a>
        </nav>

        <a href="#contact" className="nav-contact desktop-contact">
          Let&apos;s Talk
          <span>↗</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <nav className="mobile-menu-links">
              <a href="#work" onClick={closeMenu}>
                <span>01</span>
                Work
              </a>

              <a href="#about" onClick={closeMenu}>
                <span>02</span>
                About
              </a>

              <a href="#skills" onClick={closeMenu}>
                <span>03</span>
                Skills
              </a>

              <a href="#experience" onClick={closeMenu}>
                <span>04</span>
                Experience
              </a>

              <a href="#education" onClick={closeMenu}>
                <span>05</span>
                Education
              </a>

              <a href="#building" onClick={closeMenu}>
                <span>06</span>
                Currently Building
              </a>
            </nav>

            <a
              href="#contact"
              className="mobile-contact"
              onClick={closeMenu}
            >
              Let&apos;s Talk
              <span>↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}