"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { CaseStudyProject } from "@/data/projects";
import LazyLoopinGallery from "./LazyLoopinGallery";

type Props = {
    project: CaseStudyProject;
};

export default function CaseStudy({
    project,
}: Props) {
    return (
        <main className={`case-study case-${project.accent}`}>
            {/* ========================= */}
            {/* NAV */}
            {/* ========================= */}

            <nav className="case-nav">
                <Link href="/" className="case-logo">
                    PAUL<span>.</span>
                </Link>

                <div className="case-nav-actions">
                    <Link href="/projects">
                        ← Back to Projects
                    </Link>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-live"
                        >
                            Live Project ↗
                        </a>
                    )}
                </div>
            </nav>

            {/* ========================= */}
            {/* HERO */}
            {/* ========================= */}

            <section className="case-hero">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <span className="case-eyebrow">
                        {project.eyebrow}
                    </span>

                    <h1>{project.shortTitle}</h1>

                    <p className="case-intro">
                        {project.description}
                    </p>

                    <div className="case-actions">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-primary"
                            >
                                View Live Project
                                <span>↗</span>
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-secondary"
                            >
                                GitHub ↗
                            </a>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    className="case-visual"
                    initial={{
                        opacity: 0,
                        scale: 0.88,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                    }}
                >
                    <div className="case-ring case-ring-one" />
                    <div className="case-ring case-ring-two" />

                    <div className="case-core">
                        <strong>
                            {project.number}
                        </strong>

                        <span>
                            CASE STUDY
                        </span>
                    </div>

                    <div className="case-floating-label case-label-one">
                        DESIGN
                    </div>

                    <div className="case-floating-label case-label-two">
                        BUILD
                    </div>

                    <div className="case-floating-label case-label-three">
                        DEPLOY
                    </div>
                </motion.div>
            </section>

            {/* ========================= */}
            {/* PREVIEW */}
            {/* ========================= */}

            <motion.section
                className="case-preview"
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
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                <div className="case-preview-window">
                    <div className="case-preview-bar">
                        <div className="case-preview-dots">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="case-preview-title">
                            {project.title}
                        </div>

                        <span className="case-preview-status">
                            {project.status}
                        </span>
                    </div>

                    {project.slug === "jsm-wwib" ? (
                        <div className="jsm-preview-grid">
                            <figure className="jsm-preview-item">
                                <div className="jsm-preview-label">JSM · CLIENT WEBSITE</div>
                                <img
                                    src="/projects/jsm-wwib/jsm-website.png"
                                    alt="Jasmine Sandler Marketing website homepage"
                                    loading="eager"
                                />
                            </figure>
                            <figure className="jsm-preview-item">
                                <div className="jsm-preview-label">WWIB · CLIENT WEBSITE</div>
                                <img
                                    src="/projects/jsm-wwib/wwib-website.png"
                                    alt="Warrior Women in Business website homepage"
                                    loading="eager"
                                />
                            </figure>
                        </div>
                    ) : project.slug === "lazy-loopin" ? (
                        <img
                            src="/projects/lazy-loopin/lazy-loopin.png"
                            alt="Lazy Loopin website homepage screenshot"
                            loading="lazy"
                            className="lazy-loopin-static-preview"
                        />
                    ) : (
                        <img src={project.image} alt={project.title} />
                    )}
                </div>
            </motion.section>

            {/* ========================= */}
            {/* META */}
            {/* ========================= */}

            <section className="case-meta-grid">
                <CaseMeta
                    label="Role"
                    value={project.role}
                />

                <CaseMeta
                    label="Type"
                    value={project.category}
                />

                <CaseMeta
                    label="Year"
                    value={project.year}
                />

                <CaseMeta
                    label="Status"
                    value={project.status}
                />
            </section>

            {/* ========================= */}
            {/* OVERVIEW */}
            {/* ========================= */}

            <section className="case-section case-overview">
                <SectionHeader
                    eyebrow="01 · OVERVIEW"
                    title={
                        <>
                            THE PROJECT
                            <br />
                            <span>BEHIND THE BUILD.</span>
                        </>
                    }
                />

                <div className="case-copy">
                    <p className="case-lead">
                        {project.intro}
                    </p>

                    <p>
                        {project.description}
                    </p>
                </div>
            </section>

            {project.projectGallery && project.projectGallery.length > 0 && (
                <section className="case-section jsm-gallery-section">
                    <SectionHeader
                        eyebrow="02 · PROJECT DOCUMENTATION"
                        title={
                            <>
                                WORKFLOWS &amp;
                                <br />
                                <span>PLATFORM OVERVIEW.</span>
                            </>
                        }
                    />
                    <p className="jsm-gallery-intro">
                        A closer look at the client platforms, lead capture forms,
                        CRM tagging, Zapier integrations, and Mailchimp email workflows.
                        The website screenshots provide context; my contributions
                        focused on forms and marketing automation.
                    </p>
                    <div className="jsm-gallery-grid">
                        {project.projectGallery.map((item, index) => (
                            <motion.figure
                                className="jsm-gallery-card"
                                key={item.image}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
                            >
                                <div className="jsm-gallery-image-wrap">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <figcaption className="jsm-gallery-caption">
                                    <span className="jsm-gallery-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </section>
            )}

            {project.slug !== "lazy-loopin" && project.contentGallery && project.contentGallery.length > 0 && (
                <LazyLoopinGallery images={project.contentGallery} />
            )}

            {project.designGallery && project.designGallery.length > 0 ? (
                <section className="case-section case-design-gallery">
                    <SectionHeader
                        eyebrow="02 · DESIGN PROCESS"
                        title={
                            <>
                                FROM BLUEPRINT
                                <br />
                                <span>TO FINAL DESIGN.</span>
                            </>
                        }
                    />

                    <p className="case-gallery-intro">
                        The blueprint establishes the structure, hierarchy and user journey. The final design applies the visual system, imagery, typography and brand personality.
                    </p>

                    <div className="case-gallery-list">
                        {project.designGallery.map((item, index) => (
                            <motion.article
                                className="case-gallery-project"
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.08 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="case-gallery-heading">
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.type}</p>
                                    </div>
                                </div>

                                <div className={`case-gallery-pair ${item.blueprint ? "" : "single"}`}>
                                    {item.blueprint ? (
                                        <figure>
                                            <figcaption>Blueprint · Structure</figcaption>
                                            <img src={item.blueprint} alt={`${item.title} blueprint structure`} loading="lazy" />
                                        </figure>
                                    ) : null}

                                    <figure>
                                        <figcaption>Final Design · High Fidelity</figcaption>
                                        <img src={item.design} alt={`${item.title} final interface design`} loading="lazy" />
                                    </figure>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>
            ) : null}

            {/* ========================= */}
            {/* STACK */}
            {/* ========================= */}

            <section className="case-stack-section">
                <span className="case-eyebrow">
                    TECHNOLOGY
                </span>

                <div className="case-stack">
                    {project.stack.map((item, index) => (
                        <motion.span
                            key={item}
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                            }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </section>

            {/* ========================= */}
            {/* FEATURES */}
            {/* ========================= */}

            <section className="case-section">
                <SectionHeader
                    eyebrow="02 · CORE FEATURES"
                    title={
                        <>
                            WHAT I
                            <br />
                            <span>BUILT.</span>
                        </>
                    }
                />

                <div className="case-feature-grid">
                    {project.features.map(
                        (feature, index) => (
                            <motion.article
                                key={feature.title}
                                className="case-feature-card"
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
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay:
                                        index * 0.07,
                                }}
                            >
                                <span className="case-feature-number">
                                    {feature.number}
                                </span>

                                <div>
                                    <h3>
                                        {feature.title}
                                    </h3>

                                    <p>
                                        {
                                            feature.description
                                        }
                                    </p>
                                </div>

                                <span className="case-feature-arrow">
                                    ↗
                                </span>
                            </motion.article>
                        )
                    )}
                </div>
            </section>

            {/* ========================= */}
            {/* ARCHITECTURE */}
            {/* ========================= */}

            {project.architecture &&
                project.architecture.length > 0 && (
                    <section className="case-section">
                        <SectionHeader
                            eyebrow="03 · SYSTEM FLOW"
                            title={
                                <>
                                    HOW THE
                                    <br />
                                    <span>SYSTEM CONNECTS.</span>
                                </>
                            }
                        />

                        <div className="case-architecture-flow">
                            {project.architecture.map(
                                (item, index) => (
                                    <div
                                        key={item.number}
                                        className="case-architecture-group"
                                    >
                                        <ArchitectureNode
                                            number={
                                                item.number
                                            }
                                            title={
                                                item.title
                                            }
                                            detail={
                                                item.detail
                                            }
                                        />

                                        {index <
                                            project
                                                .architecture!
                                                .length -
                                            1 && (
                                                <ArchitectureArrow />
                                            )}
                                    </div>
                                )
                            )}
                        </div>
                    </section>
                )}

            {/* ========================= */}
            {/* CHALLENGES */}
            {/* ========================= */}

            <section className="case-section">
                <SectionHeader
                    eyebrow="04 · CHALLENGES"
                    title={
                        <>
                            PROBLEMS I HAD
                            <br />
                            <span>TO SOLVE.</span>
                        </>
                    }
                />

                <div className="case-challenge-list">
                    {project.challenges.map(
                        (challenge) => (
                            <motion.div
                                key={challenge.number}
                                className="case-challenge-row"
                                initial={{
                                    opacity: 0,
                                    x: -25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                            >
                                <span>
                                    {
                                        challenge.number
                                    }
                                </span>

                                <h3>
                                    {
                                        challenge.title
                                    }
                                </h3>

                                <p>
                                    {
                                        challenge.text
                                    }
                                </p>
                            </motion.div>
                        )
                    )}
                </div>
            </section>

            {/* ========================= */}
            {/* RESULT */}
            {/* ========================= */}

            <section className="case-result">
                <motion.div
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
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <span className="case-eyebrow">
                        05 · RESULT
                    </span>

                    <h2>
                        FROM IDEA
                        <br />
                        <span>TO OUTPUT.</span>
                    </h2>

                    <p>
                        {project.result}
                    </p>

                    <div className="case-result-actions">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-primary"
                            >
                                Explore Project
                                <span>↗</span>
                            </a>
                        )}

                        <Link
                            href="/projects"
                            className="case-secondary"
                        >
                            More Projects
                        </Link>
                    </div>
                </motion.div>
            </section>


            <style jsx global>{`
                .case-preview-window:has(.lazy-loopin-static-preview) {
                    height: auto !important;
                    overflow: hidden;
                }
                .case-preview-window .lazy-loopin-static-preview {
                    display: block;
                    width: 100%;
                    height: auto !important;
                    max-height: none !important;
                    object-fit: contain !important;
                    object-position: top center;
                }
                .case-preview-window:has(.jsm-preview-grid) { height: auto !important; overflow: hidden; }
                .case-preview-window .jsm-preview-grid {
                    display: grid !important;
                    width: 100%;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 12px;
                    padding: 14px;
                    background: #101722;
                }
                .case-preview-window .jsm-preview-item {
                    min-width: 0;
                    margin: 0;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,.13);
                    border-radius: 12px;
                    background: #17212f;
                }
                .case-preview-window .jsm-preview-label {
                    padding: 12px 14px;
                    color: #c7d9ec;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .13em;
                }
                .case-preview-window .jsm-preview-item img {
                    display: block !important;
                    width: 100% !important;
                    height: auto !important;
                    max-height: none !important;
                    aspect-ratio: 16 / 9;
                    object-fit: contain !important;
                    object-position: top !important;
                    background: #fff;
                }
                .jsm-gallery-intro {
                    max-width: 780px;
                    margin: 0 0 28px;
                    color: #a9b9ca;
                    line-height: 1.8;
                }
                .jsm-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 24px;
                }
                .jsm-gallery-card {
                    min-width: 0;
                    margin: 0;
                    overflow: hidden;
                    border: 1px solid rgba(180, 207, 237, .16);
                    border-radius: 18px;
                    background: #111c2a;
                }
                .jsm-gallery-image-wrap {
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 14px;
                    background: #0c1521;
                }
                .jsm-gallery-image-wrap img {
                    display: block;
                    width: 100%;
                    height: auto;
                    max-height: 420px;
                    object-fit: contain;
                    object-position: top center;
                    border-radius: 9px;
                    background: #fff;
                }
                .jsm-gallery-caption {
                    display: flex;
                    gap: 15px;
                    padding: 22px;
                }
                .jsm-gallery-number {
                    flex: none;
                    color: #5de1f0;
                    font-size: 13px;
                    font-weight: 700;
                }
                .jsm-gallery-caption h3 {
                    margin: 0 0 8px;
                    color: #f6f9ff;
                    font-size: 18px;
                    line-height: 1.35;
                }
                .jsm-gallery-caption p {
                    margin: 0;
                    color: #b5c3d2;
                    font-size: 14px;
                    line-height: 1.7;
                }
                @media (max-width: 720px) {
                    .case-preview-window .jsm-preview-grid,
                    .jsm-gallery-grid {
                        grid-template-columns: minmax(0, 1fr);
                    }
                    .jsm-gallery-caption { padding: 18px; }
                }
            `}</style>

            {/* ========================= */}
            {/* FOOTER */}
            {/* ========================= */}

            <footer className="case-footer">
                <span>
                    {project.title} · Case Study
                </span>

                <Link href="/">
                    Portfolio © 2026
                </Link>
            </footer>
        </main>
    );
}

function SectionHeader({
    eyebrow,
    title,
}: {
    eyebrow: string;
    title: React.ReactNode;
}) {
    return (
        <motion.div
            className="case-section-heading"
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
                duration: 0.65,
            }}
        >
            <span className="case-eyebrow">
                {eyebrow}
            </span>

            <h2>{title}</h2>
        </motion.div>
    );
}

function CaseMeta({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="case-meta">
            <span>{label}</span>
            <strong>{value}</strong>
        </div>
    );
}

function ArchitectureNode({
    number,
    title,
    detail,
}: {
    number: string;
    title: string;
    detail: string;
}) {
    return (
        <div className="case-architecture-node">
            <span>{number}</span>

            <strong>{title}</strong>

            <small>{detail}</small>
        </div>
    );
}

function ArchitectureArrow() {
    return (
        <div className="case-architecture-arrow">
            →
        </div>
    );
}
