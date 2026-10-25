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
        href: "/projects/agentforge",
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
        href: "/projects/millennium-training",
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
        href: "/projects/pet-style-club",
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
        href: "/projects/supportflow-ai",
        image: "/projects/supportflow.png",
        status: "In Progress",
    },

    {
        number: "05",
        title: "Paul Fangot – Social Media Portfolio",
        category: "Content · Branding",
        description:
            "Selected social media campaigns, branded content and creative digital work.",
        stack: [
            "Content Strategy",
            "Canva",
            "Branding",
            "Social Media",
        ],
        href: "/projects/social-media",
        image: "/projects/social-media.png",
        status: "Portfolio",
    },
    {
        number: "06",
        title: "Strayverse",
        category: "Front-End Development · Creative Web Experience",
        description:
            "An immersive original universe featuring five elemental clans, interactive storytelling and an archive of 100 Bound and Stray characters.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        href: "/projects/strayverse",
        image: "/projects/strayverse.png",
        status: "Live",
    },
    {
        number: "07",
        title: "UI/UX Design",
        category: "Product Design · Interface Design",
        description:
            "A collection of Figma projects exploring user flows, responsive interfaces, component systems and interactive prototypes.",
        stack: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
        href: "/projects/ui-ux-design",
        image: "/projects/ui-ux-design.png",
        status: "Portfolio",
    },

    {
        number: "08",
        title: "Lazy Loopin",
        category: "AI Content Creation · Digital Storytelling",
        description: "An original AI-assisted short-form entertainment project featuring cinematic storytelling, movie and series recommendations, and creative video production.",
        stack: ["AI Video", "Google Flow", "Prompt Engineering", "CapCut", "TikTok", "YouTube"],
        href: "/projects/lazy-loopin",
        image: "/projects/lazy-loopin/lazy-loopin.png",
        status: "Ongoing",
    },
    {
        number: "09",
        title: "Veronika Portfolio",
        category: "Web Development · Personal Branding",
        description: "A responsive professional portfolio showcasing business operations, marketing, client relations, and student support through an editorial golden-hour design.",
        stack: ["React", "Responsive Design", "UI/UX", "Vercel"],
        href: "/projects/veronika-portfolio",
        image: "/projects/veronika-portfolio.png",
        status: "Live",
    },
    {
        number: "10",
        title: "Rommel Jr. Portfolio",
        category: "Web Development · Creative Portfolio",
        description: "A bold, responsive journalism and creative media portfolio with a distinctive editorial layout and interactive project showcase.",
        stack: ["React", "Vite", "Responsive Design", "Vercel"],
        href: "/projects/rommel-jr-portfolio",
        image: "/projects/rommel-jr-portfolio.png",
        status: "Live",
    },
    {
        number: "11",
        title: "Jasmine Sandler Marketing (JSM)",
        category: "Lead Capture · CRM & Email Automation",
        description:
            "JSM inquiry form updates, lead segmentation and automated email workflows managed through the shared WWIB WordPress environment.",
        stack: ["Fluent Forms", "FluentCRM", "Zapier", "Mailchimp"],
        href: "/projects/jsm-wwib",
        image: "/projects/jsm-wwib/jsm-website.png",
        status: "Ongoing",
    },
    {
        number: "12",
        title: "Warrior Women in Business (WWIB)",
        category: "Marketing Automation · CRM Integration",
        description:
            "Lead capture, CRM tagging, Zapier integrations and Mailchimp confirmation and follow-up workflows for WWIB.",
        stack: ["WordPress", "Fluent Forms", "FluentCRM", "Zapier", "Mailchimp"],
        href: "/projects/jsm-wwib",
        image: "/projects/jsm-wwib/wwib-website.png",
        status: "Ongoing",
    },
];

export default function ProjectsPage() {
    return (
        <main className="all-projects-page">
            {/* ============================= */}
            {/* NAVIGATION */}
            {/* ============================= */}

            <nav className="all-projects-nav">
                <Link href="/" className="all-projects-logo">
                    PAUL<span>.</span>
                </Link>

                <Link href="/" className="all-projects-back">
                    ← Back Home
                </Link>
            </nav>

            {/* ============================= */}
            {/* HERO */}
            {/* ============================= */}

            <section className="all-projects-hero">
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
                        SELECTED WORK · 2026
                    </span>

                    <h1>
                        THINGS I&apos;VE
                        <br />
                        <span>BUILT.</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="all-projects-hero-copy"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                    }}
                >
                    <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>

                    <p>
                        A collection of full-stack applications,
                        web platforms, IT systems and creative
                        projects built through design, development
                        and experimentation.
                    </p>
                </motion.div>
            </section>

            {/* ============================= */}
            {/* PROJECT LIST */}
            {/* ============================= */}

            <section className="all-projects-list">
                {projects.map((project, index) => {
                    const statusClass =
                        project.status === "Completed"
                            ? "completed"
                            : project.status === "In Progress" || project.status === "Live" || project.status === "Ongoing"
                                ? "in-progress"
                                : "portfolio";

                    return (
                        <motion.article
                            key={project.title}
                            className="all-project-row"
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
                                delay: index * 0.05,
                            }}
                        >
                            <Link
                                href={project.href}
                                className="all-project-link"
                            >
                                {/* IMAGE */}

                                <div className="all-project-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                    <div className="all-project-image-overlay">
                                        <span>
                                            View Case Study
                                        </span>

                                        <strong>↗</strong>
                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="all-project-content">
                                    <div className="all-project-top">
                                        <span className="all-project-number">
                                            {project.number}
                                        </span>

                                        <span
                                            className={`project-status ${statusClass}`}
                                        >
                                            <span className="status-dot" />

                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="all-project-title">
                                        <span>
                                            {project.category}
                                        </span>

                                        <h2>
                                            {project.title}
                                        </h2>

                                        <p>
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="all-project-bottom">
                                        <div className="all-project-stack">
                                            {project.stack.map((item) => (
                                                <span key={item}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="all-project-arrow">
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    );
                })}
            </section>

            {/* ============================= */}
            {/* CTA */}
            {/* ============================= */}

            <section className="all-projects-cta">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
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
                    }}
                >
                    <span className="section-eyebrow">
                        WHAT&apos;S NEXT?
                    </span>

                    <h2>
                        LET&apos;S BUILD
                        <br />
                        <span>SOMETHING.</span>
                    </h2>

                    <Link
                        href="/#contact"
                        className="all-projects-contact"
                    >
                        Get In Touch
                        <span>↗</span>
                    </Link>
                </motion.div>
            </section>

            {/* ============================= */}
            {/* FOOTER */}
            {/* ============================= */}

            <footer className="all-projects-footer">
                <span>
                    Selected Work · Portfolio
                </span>

                <Link href="/">
                    © 2026
                </Link>
            </footer>
        </main>
    );
}
