export type CaseStudyProject = {
    slug: string;
    number: string;
    title: string;
    shortTitle: string;
    category: string;
    eyebrow: string;
    year: string;
    role: string;
    status: string;

    description: string;
    intro: string;

    image: string;

    stack: string[];

    liveUrl?: string;
    githubUrl?: string;

    features: {
        number: string;
        title: string;
        description: string;
    }[];

    challenges: {
        number: string;
        title: string;
        text: string;
    }[];

    architecture?: {
        number: string;
        title: string;
        detail: string;
    }[];

    designGallery?: {
        title: string;
        type: string;
        blueprint?: string;
        design: string;
    }[];

    result: string;

    accent: "cyan" | "violet" | "blue" | "gold" | "pink";
};

export const projects: CaseStudyProject[] = [
    /* ======================================================
       01 — AGENTFORGE
    ====================================================== */

    {
        slug: "agentforge",
        number: "01",
        title: "AgentForge",
        shortTitle: "AGENTFORGE.",
        category: "Full-Stack Development · AI SaaS",
        eyebrow: "FEATURED CASE STUDY · 2026",

        year: "2026",
        role: "Full-Stack Developer",
        status: "Active Development",

        description:
            "An AI workforce platform for recruiting specialized agents, executing missions, building multi-agent teams, designing reusable workflows and managing credit-based usage.",

        intro:
            "AgentForge explores a different way of working with artificial intelligence: instead of relying on one generic assistant, users can build a configurable workforce of specialized AI agents.",

        image: "/projects/agentforge.png",

        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Vercel",
            "Resend",
            "Framer Motion",
            "Sentry",
        ],

        liveUrl:
            "https://agent-forge-zeta-one.vercel.app",

        githubUrl:
            "https://github.com/gpauls2",

        features: [
            {
                number: "01",
                title: "AI Agent Marketplace",
                description:
                    "Explore and recruit specialized AI agents with different roles, strengths and execution capabilities.",
            },
            {
                number: "02",
                title: "Mission Execution",
                description:
                    "Create structured missions, assign specialists and manage AI execution through a dedicated workflow.",
            },
            {
                number: "03",
                title: "Multi-Agent Teams",
                description:
                    "Combine recruited specialists into teams designed for collaborative AI execution.",
            },
            {
                number: "04",
                title: "Agent Flows",
                description:
                    "Build reusable multi-stage workflows where outputs can move between specialized agents.",
            },
            {
                number: "05",
                title: "Credit System",
                description:
                    "Manage credit-based execution with balance validation, mission costs and transaction tracking.",
            },
            {
                number: "06",
                title: "Authentication & Accounts",
                description:
                    "Supabase-powered authentication, protected dashboard areas and user account management.",
            },
        ],

        architecture: [
            {
                number: "01",
                title: "User",
                detail: "Defines objective",
            },
            {
                number: "02",
                title: "Agent",
                detail: "Specialist selected",
            },
            {
                number: "03",
                title: "Mission",
                detail: "Execution planned",
            },
            {
                number: "04",
                title: "Credits",
                detail: "Cost validated",
            },
            {
                number: "05",
                title: "Result",
                detail: "Output stored",
            },
        ],

        challenges: [
            {
                number: "01",
                title: "Designing a clear AI workforce model",
                text:
                    "Agents, missions, teams and workflows needed to feel like parts of one connected product rather than unrelated AI tools.",
            },
            {
                number: "02",
                title: "Keeping execution predictable",
                text:
                    "Mission costs, credit checks and execution states needed to remain understandable before users committed resources.",
            },
            {
                number: "03",
                title: "Building for future expansion",
                text:
                    "The interface needed to support the initial specialist roster while leaving room for larger marketplaces, teams and workflow systems.",
            },
        ],

        result:
            "AgentForge evolved from an AI workforce concept into a working full-stack product combining product design, authentication, database systems, credit logic, workflow concepts, observability and production deployment.",

        accent: "cyan",
    },

    /* ======================================================
       02 — MILLENNIUM TRAINING
    ====================================================== */

    {
        slug: "millennium-training",
        number: "02",
        title: "Millennium Training",
        shortTitle: "MILLENNIUM.",
        category: "Web Development · LMS",
        eyebrow: "CLIENT PROJECT · EDUCATION",

        year: "2026",
        role: "Web Developer · LMS Administrator",
        status: "Completed",

        description:
            "Educational website and student portal integrating WordPress, Elementor, MoodleCloud and digital student workflows.",

        intro:
            "Millennium Training required more than a marketing website. The project brought together public-facing information, student services, forms, orientation access and LMS functionality into a clearer digital experience.",

        image: "/projects/millennium.png",

        stack: [
            "WordPress",
            "Elementor",
            "MoodleCloud",
            "Forminator",
            "WP-Members",
            "HTML",
            "CSS",
        ],

        githubUrl:
            "https://github.com/gpauls2/millennium-training-website",

        features: [
            {
                number: "01",
                title: "Student Portal",
                description:
                    "Centralized access to student resources, forms, policies and training-related information.",
            },
            {
                number: "02",
                title: "LMS Integration",
                description:
                    "Connected the website experience with MoodleCloud for course and orientation access.",
            },
            {
                number: "03",
                title: "Student Forms",
                description:
                    "Built structured digital forms for enrollment, support, refunds, transcripts, appeals and other student requests.",
            },
            {
                number: "04",
                title: "Orientation Workflow",
                description:
                    "Created gated orientation access and completion logic for the student experience.",
            },
            {
                number: "05",
                title: "Member Access",
                description:
                    "Implemented account and content access functionality using WordPress membership tools.",
            },
            {
                number: "06",
                title: "Responsive Website",
                description:
                    "Developed a modern responsive experience across the institution's major website sections.",
            },
        ],

        challenges: [
            {
                number: "01",
                title: "Connecting multiple platforms",
                text:
                    "WordPress and MoodleCloud had different capabilities, requiring practical workflows between the public site and learning environment.",
            },
            {
                number: "02",
                title: "Organizing student services",
                text:
                    "A large number of forms, policies and resources needed to remain understandable and accessible.",
            },
            {
                number: "03",
                title: "Creating controlled access",
                text:
                    "Student-specific resources and orientation content required access rules without making the experience unnecessarily complicated.",
            },
        ],

        result:
            "The project developed into a broader education platform combining the public website, student portal, digital forms, orientation workflows and LMS access.",

        accent: "violet",
    },

    /* ======================================================
       03 — PET STYLE CLUB
    ====================================================== */

    {
        slug: "pet-style-club",
        number: "03",
        title: "Pet Style Club",
        shortTitle: "PET STYLE.",
        category: "Front-End Development · Creative",
        eyebrow: "CREATIVE PROJECT · INTERACTIVE",

        year: "2026",
        role: "Designer · Front-End Developer",
        status: "In Progress",

        description:
            "An interactive web experience built around a cozy detective comedy series featuring an original cast of pet characters.",

        intro:
            "Pet Style Club combines storytelling, character design and front-end experimentation. The website acts as a digital home for episodes, characters and playful interactive experiences.",

        image: "/projects/pet-style-club.png",

        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "GitHub Pages",
            "Responsive Design",
            "Creative Direction",
        ],

        liveUrl:
            "https://gpauls2.github.io/pet-style-club/",

        features: [
            {
                number: "01",
                title: "Episode Reader",
                description:
                    "A web-based experience for presenting sequential illustrated episodes.",
            },
            {
                number: "02",
                title: "Character Showcase",
                description:
                    "Introduces the recurring Pet Style Club cast and their distinct personalities.",
            },
            {
                number: "03",
                title: "Interactive Elements",
                description:
                    "Small playful interactions extend the project beyond a traditional static comic site.",
            },
            {
                number: "04",
                title: "Responsive Layout",
                description:
                    "Designed to keep illustrated content readable across desktop and mobile screens.",
            },
            {
                number: "05",
                title: "Visual Storytelling",
                description:
                    "Combines web design with an established visual language for the series.",
            },
            {
                number: "06",
                title: "Expandable Series",
                description:
                    "The structure allows additional episodes and experiences to be added as the series grows.",
            },
        ],

        challenges: [
            {
                number: "01",
                title: "Maintaining visual consistency",
                text:
                    "Characters, environments and episode presentation needed a recognizable identity across an expanding series.",
            },
            {
                number: "02",
                title: "Balancing story and interface",
                text:
                    "The website needed to support the comic rather than distract users from the storytelling.",
            },
            {
                number: "03",
                title: "Designing for expansion",
                text:
                    "The project needed enough flexibility for future episodes, characters and interactive experiments.",
            },
        ],

        result:
            "Pet Style Club became an ongoing creative playground combining front-end development, interactive storytelling, character design and digital content production.",

        accent: "pink",
    },

    /* ======================================================
       04 — SUPPORTFLOW AI
    ====================================================== */

    {
        slug: "supportflow-ai",
        number: "04",
        title: "SupportFlow AI",
        shortTitle: "SUPPORTFLOW AI.",
        category: "Web Application · IT Support",
        eyebrow: "FULL-STACK PROJECT · IT OPERATIONS",

        year: "2026",
        role: "Full-Stack Developer",
        status: "In Progress",

        description:
            "A modern IT support and ticket management platform designed to organize requests, conversations and service workflows.",

        intro:
            "SupportFlow AI explores how a modern service desk can provide a cleaner experience for support teams while keeping ticket information, conversations and operational priorities organized.",

        image: "/projects/supportflow.png",

        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Responsive UI",
        ],

        liveUrl:
            "https://supportflow-ai-tan.vercel.app",

        features: [
            {
                number: "01",
                title: "Ticket Dashboard",
                description:
                    "Centralized interface for viewing and managing support requests.",
            },
            {
                number: "02",
                title: "Ticket Details",
                description:
                    "Dedicated ticket views containing request information and support conversations.",
            },
            {
                number: "03",
                title: "Priority Workflows",
                description:
                    "Interface patterns for identifying high-priority and time-sensitive support work.",
            },
            {
                number: "04",
                title: "Conversation View",
                description:
                    "Organized communication history within each support request.",
            },
            {
                number: "05",
                title: "Operational UI",
                description:
                    "A dashboard-oriented visual system designed around IT support workflows.",
            },
            {
                number: "06",
                title: "Responsive Experience",
                description:
                    "Designed to remain usable across different screen sizes and support environments.",
            },
        ],

        challenges: [
            {
                number: "01",
                title: "Managing information density",
                text:
                    "Support dashboards contain significant information, so hierarchy needed to remain clear without overwhelming the user.",
            },
            {
                number: "02",
                title: "Designing realistic workflows",
                text:
                    "Ticket states, priorities and conversations needed to resemble practical IT support operations.",
            },
            {
                number: "03",
                title: "Keeping components reusable",
                text:
                    "Dashboard, ticket and conversation interfaces were structured as reusable components for continued development.",
            },
        ],

        result:
            "SupportFlow AI developed into a modern portfolio-scale IT service platform demonstrating dashboard design, reusable React architecture and support workflow thinking.",

        accent: "blue",
    },

    /* ======================================================
       05 — SOCIAL MEDIA & CREATIVE
    ====================================================== */

    {
        slug: "social-media",
        number: "05",
        title: "Social Media & Creative",
        shortTitle: "CREATIVE.",
        category: "Content · Branding",
        eyebrow: "CREATIVE PORTFOLIO · DIGITAL MEDIA",

        year: "2026",
        role: "Designer · Content Creator",
        status: "Portfolio",

        description:
            "A collection of selected social campaigns, branded content and visual digital work.",

        intro:
            "This collection explores the creative side of my work across social content, branding, visual communication and digital campaign design.",

        image: "/projects/social-media.png",

        stack: [
            "Canva",
            "Branding",
            "Social Media",
            "Content Strategy",
            "Graphic Design",
        ],

        liveUrl:
            "https://gpauls2.github.io/myportfolio/",

        features: [
            {
                number: "01",
                title: "Social Campaigns",
                description:
                    "Digital campaign assets created for social platforms and online audiences.",
            },
            {
                number: "02",
                title: "Brand Content",
                description:
                    "Visual materials designed around consistent brand identity and messaging.",
            },
            {
                number: "03",
                title: "Graphic Design",
                description:
                    "Creative digital compositions for promotional and communication needs.",
            },
            {
                number: "04",
                title: "Content Strategy",
                description:
                    "Visual content planned around platform, audience and communication goals.",
            },
            {
                number: "05",
                title: "Digital Media",
                description:
                    "A range of assets created for online publishing and social engagement.",
            },
            {
                number: "06",
                title: "Creative Direction",
                description:
                    "Experimentation with layout, typography, visual hierarchy and branded storytelling.",
            },
        ],

        challenges: [
            {
                number: "01",
                title: "Maintaining brand consistency",
                text:
                    "Different pieces of content needed to remain recognizable while serving different communication goals.",
            },
            {
                number: "02",
                title: "Designing for fast attention",
                text:
                    "Social content needs immediate visual hierarchy while remaining clear on smaller screens.",
            },
            {
                number: "03",
                title: "Adapting across formats",
                text:
                    "Creative concepts needed to translate across different digital dimensions and content types.",
            },
        ],

        result:
            "The collection demonstrates my ability to combine visual communication, branding and digital content production alongside technical web development work.",

        accent: "gold",
    },

    /* ======================================================
       06 — STRAYVERSE
    ====================================================== */

    {
        slug: "strayverse",
        number: "06",
        title: "Strayverse",
        shortTitle: "STRAYVERSE.",
        category: "Front-End Development · Creative Web Experience",
        eyebrow: "FEATURED PROJECT · INTERACTIVE UNIVERSE",
        year: "2026",
        role: "Creator · UI Designer · Front-End Developer",
        status: "Live",
        description:
            "An immersive original universe combining interactive storytelling, five elemental clans, the Bound and Stray character system, and a growing archive of 100 characters.",
        intro:
            "Strayverse transforms an original story world into an explorable digital experience. The interface brings its lore, clan identities, character relationships and expanding roster together in one cinematic destination.",
        image: "/projects/strayverse.png",
        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Responsive Design",
            "Vercel",
        ],
        liveUrl: "https://strayverse.vercel.app/",
        features: [
            {
                number: "01",
                title: "Interactive Worldbuilding",
                description:
                    "Presents the Strayverse mythology and story through a structured, immersive web experience.",
            },
            {
                number: "02",
                title: "Five-Clan System",
                description:
                    "Introduces Aerwyn, Vulkara, Neravia, Terraven and Noctyra through distinct identities and elemental themes.",
            },
            {
                number: "03",
                title: "Bound Archive",
                description:
                    "Organizes a roster of 100 original Bound and Stray pairings into a discoverable character collection.",
            },
            {
                number: "04",
                title: "Soulbond Concept",
                description:
                    "Explains the relationship system connecting human Bounds with their animal Strays and abilities.",
            },
            {
                number: "05",
                title: "Cinematic Interface",
                description:
                    "Uses motion, atmospheric styling and bold composition to give the original universe a distinctive digital identity.",
            },
            {
                number: "06",
                title: "Responsive Exploration",
                description:
                    "Keeps lore, characters and navigation accessible across desktop and mobile screens.",
            },
        ],
        challenges: [
            {
                number: "01",
                title: "Turning lore into navigation",
                text:
                    "A large fictional universe needed a clear information structure so new visitors could explore without being overwhelmed.",
            },
            {
                number: "02",
                title: "Maintaining visual continuity",
                text:
                    "Clan identities, character profiles and cinematic sections needed to feel distinct while belonging to one design system.",
            },
            {
                number: "03",
                title: "Supporting a large roster",
                text:
                    "The character experience needed to accommodate 100 entries while remaining discoverable and expandable.",
            },
        ],
        result:
            "Strayverse became a live creative web experience that demonstrates original product thinking, large-scale content organization, UI design and front-end implementation.",
        accent: "violet",
    },

    /* ======================================================
       07 — UI/UX DESIGN
    ====================================================== */

    {
        slug: "ui-ux-design",
        number: "07",
        title: "UI/UX Design",
        shortTitle: "UI/UX DESIGN.",
        category: "Product Design · Interface Design",
        eyebrow: "DESIGN COLLECTION · FIGMA",
        year: "2026",
        role: "UI/UX Designer",
        status: "Portfolio",
        description:
            "A focused collection of product interfaces created in Figma, covering user flows, wireframes, responsive layouts, reusable components and interactive prototypes.",
        intro:
            "This collection highlights the design work behind digital products before development begins: clarifying user needs, organizing information and translating workflows into consistent, usable interfaces.",
        image: "/projects/ui-ux-design.png",
        stack: [
            "Figma",
            "Wireframing",
            "Prototyping",
            "Design Systems",
            "User Flows",
            "Responsive Design",
        ],
        designGallery: [
            {
                title: "POLI ATELIER",
                type: "Fashion & Editorial",
                blueprint: "/projects/uiux/poli-atelier-blueprint.png",
                design: "/projects/uiux/poli-atelier-design.png",
            },
            {
                title: "Poli Dental Studio",
                type: "Healthcare",
                blueprint: "/projects/uiux/poli-dental-blueprint.png",
                design: "/projects/uiux/poli-dental-design.png",
            },
            {
                title: "Poli Fitness",
                type: "Fitness & Analytics",
                blueprint: "/projects/uiux/poli-fitness-blueprint.png",
                design: "/projects/uiux/poli-fitness-design.png",
            },
            {
                title: "Poli Ramen House",
                type: "Restaurant & Hospitality",
                blueprint: "/projects/uiux/poli-ramen-blueprint.png",
                design: "/projects/uiux/poli-ramen-design.png",
            },
            {
                title: "Poli Residences",
                type: "Real Estate",
                blueprint: "/projects/uiux/poli-residences-blueprint.png",
                design: "/projects/uiux/poli-residences-design.png",
            },
            {
                title: "POLILEX",
                type: "Legal Services",
                blueprint: "/projects/uiux/polilex-blueprint.png",
                design: "/projects/uiux/polilex-design.png",
            },
            {
                title: "POLIMOTION",
                type: "Creative Studio",
                blueprint: "/projects/uiux/polimotion-blueprint.png",
                design: "/projects/uiux/polimotion-design.png",
            },
            {
                title: "POLIPAY",
                type: "Fintech",
                blueprint: "/projects/uiux/polipay-blueprint.png",
                design: "/projects/uiux/polipay-design.png",
            },
            {
                title: "POLIVOY",
                type: "Travel & Booking",
                blueprint: "/projects/uiux/polivoy-blueprint.png",
                design: "/projects/uiux/polivoy-design.png",
            },
            {
                title: "FlowPilot AI",
                type: "AI Operations Dashboard · Final Design",
                design: "/projects/uiux/flowpilot-design.png",
            },
        ],
        features: [
            {
                number: "01",
                title: "User Flows",
                description:
                    "Maps practical paths through key tasks before detailed screens are produced.",
            },
            {
                number: "02",
                title: "Wireframes",
                description:
                    "Explores hierarchy, content structure and interaction patterns at an early stage.",
            },
            {
                number: "03",
                title: "High-Fidelity UI",
                description:
                    "Translates product requirements into polished interfaces with deliberate typography, color and spacing.",
            },
            {
                number: "04",
                title: "Interactive Prototypes",
                description:
                    "Connects screens and states to demonstrate intended journeys and interaction behavior.",
            },
            {
                number: "05",
                title: "Component Systems",
                description:
                    "Builds reusable interface patterns that improve consistency and make iteration faster.",
            },
            {
                number: "06",
                title: "Responsive Design",
                description:
                    "Adapts layouts and priorities across desktop, tablet and mobile experiences.",
            },
        ],
        challenges: [
            {
                number: "01",
                title: "Balancing clarity and personality",
                text:
                    "Each concept needed a distinct visual character without weakening usability or hierarchy.",
            },
            {
                number: "02",
                title: "Designing realistic workflows",
                text:
                    "Screens were organized around practical user tasks rather than isolated visual compositions.",
            },
            {
                number: "03",
                title: "Creating scalable foundations",
                text:
                    "Components, patterns and responsive rules needed to support continued iteration and eventual development.",
            },
        ],
        result:
            "The collection demonstrates an end-to-end UI/UX process—from early structure and interaction planning to polished, development-ready product interfaces.",
        accent: "cyan",
    },
];

export function getProject(
    slug: string
) {
    return projects.find(
        (project) =>
            project.slug === slug
    );
}
