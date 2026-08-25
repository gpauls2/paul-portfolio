"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setStatus("sending");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Unable to send message.");
            }

            setStatus("success");
            form.reset();
        } catch (error) {
            console.warn("Contact form failed:", error);
            setStatus("error");
        }
    }

    return (
        <main className="portfolio-contact-page">
            {/* ================================= */}
            {/* NAV */}
            {/* ================================= */}

            <nav className="portfolio-contact-nav">
                <Link
                    href="/"
                    className="portfolio-contact-logo"
                >
                    PAUL<span>.</span>
                </Link>

                <Link
                    href="/"
                    className="portfolio-contact-back"
                >
                    ← Back Home
                </Link>
            </nav>

            {/* ================================= */}
            {/* HERO */}
            {/* ================================= */}

            <section className="portfolio-contact-hero">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <span className="section-eyebrow">
                        LET&apos;S CONNECT
                    </span>

                    <h1>
                        HAVE AN IDEA?
                        <br />

                        <span>
                            LET&apos;S TALK.
                        </span>
                    </h1>

                    <p>
                        Whether it&apos;s a web project,
                        technical role, IT support opportunity
                        or creative collaboration, I&apos;d love
                        to hear what you&apos;re working on.
                    </p>
                </motion.div>
            </section>

            {/* ================================= */}
            {/* CONTACT GRID */}
            {/* ================================= */}

            <section className="portfolio-contact-grid">
                {/* LEFT */}

                <motion.div
                    className="portfolio-contact-details"
                    initial={{
                        opacity: 0,
                        x: -35,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <span className="portfolio-contact-label">
                        CONTACT
                    </span>

                    <h2>
                        Tell me what
                        <br />
                        you&apos;re building.
                    </h2>

                    <p>
                        Share a little about the project,
                        opportunity or problem you&apos;re trying
                        to solve. I&apos;ll get back to you as
                        soon as I can.
                    </p>

                    <div className="portfolio-contact-mini-links">
                        <a
                            href="https://github.com/gpauls2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>GitHub</span>
                            <strong>gpauls2 ↗</strong>
                        </a>

                        <a
                            href="mailto:gpaulsray2@gmail.com"
                        >
                            <span>Email</span>
                            <strong>
                                Send an email ↗
                            </strong>
                        </a>
                    </div>
                </motion.div>

                {/* FORM */}

                <motion.form
                    className="portfolio-contact-form"
                    onSubmit={handleSubmit}
                    initial={{
                        opacity: 0,
                        x: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div className="portfolio-form-row">
                        <label>
                            <span>Name</span>

                            <input
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </label>

                        <label>
                            <span>Email</span>

                            <input
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </label>
                    </div>

                    <label>
                        <span>
                            What can I help with?
                        </span>

                        <select
                            name="subject"
                            defaultValue=""
                            required
                        >
                            <option
                                value=""
                                disabled
                            >
                                Select an option
                            </option>

                            <option value="Web Development">
                                Web Development
                            </option>

                            <option value="IT Support">
                                IT Support
                            </option>

                            <option value="Job Opportunity">
                                Job Opportunity
                            </option>

                            <option value="Creative Project">
                                Creative Project
                            </option>

                            <option value="Collaboration">
                                Collaboration
                            </option>

                            <option value="Other">
                                Other
                            </option>
                        </select>
                    </label>

                    <label>
                        <span>Message</span>

                        <textarea
                            name="message"
                            rows={8}
                            placeholder="Tell me about your project, opportunity or idea..."
                            required
                        />
                    </label>

                    <div className="portfolio-contact-form-footer">
                        <div>
                            {status === "success" && (
                                <p className="portfolio-form-success">
                                    Message sent successfully.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="portfolio-form-error">
                                    Unable to send your message.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                        >
                            <span>
                                {status === "sending"
                                    ? "Sending..."
                                    : "Send Message"}
                            </span>

                            <strong>↗</strong>
                        </button>
                    </div>
                </motion.form>
            </section>

            {/* ================================= */}
            {/* FOOT */}
            {/* ================================= */}

            <footer className="portfolio-contact-footer">
                <span>
                    Available for opportunities &
                    collaborations
                </span>

                <Link href="/">
                    Portfolio © 2026
                </Link>
            </footer>
        </main>
    );
}