"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Development",
    subtitle: "Building modern web experiences",
    items: [
      "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
      "Tailwind CSS", "Bootstrap", "REST APIs", "MySQL", "WordPress", "Elementor",
      "React Native", "Expo", "Divi", "Responsive Web Design",
    ],
  },
  {
    title: "IT & Systems",
    subtitle: "Supporting infrastructure & users",
    items: [
      "IT Support", "Technical Support", "Troubleshooting", "Networking", "Windows",
      "Linux", "System Administration", "Virtual Machines", "TCP/IP", "DNS", "DHCP",
      "VLANs", "Port Security", "Network Security", "Network Monitoring",
      "Network Troubleshooting", "Cybersecurity", "User Management",
      "Google Workspace", "LMS Administration", "Moodle",
    ],
  },
  {
    title: "Creative",
    subtitle: "Designing content with purpose",
    items: [
      "Social Media Management", "Content Creation", "Content Strategy", "Branding",
      "Visual Design", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems",
      "Graphic Design", "Creative Direction", "Campaign Planning", "Social Media Graphics",
      "Digital Content", "Canva", "Photoshop", "Video Editing", "Content Scheduling",
      "AI Content Creation", "AI Video Production", "AI Storyboarding", "Prompt Engineering",
      "Short-Form Video", "CapCut",
    ],
  },
  {
    title: "Marketing Automation & CRM",
    subtitle: "Connecting lead capture, contacts and email workflows",
    items: [
      "Marketing Automation", "Email Marketing", "Email Automation", "CRM Management",
      "Lead Capture Forms", "Lead Management", "Lead Segmentation", "Contact Tagging",
      "Workflow Automation", "Webhook Integrations", "Fluent Forms", "FluentCRM",
      "Mailchimp", "Welcome Email Sequences", "Confirmation Emails",
      "Follow-Up Campaigns", "Audience Management", "Form Testing", "Campaign Monitoring",
      "Lead Generation Support", "Lead Capture & Form Optimization",
      "Inbound Lead Generation", "Lead Nurturing Automation", "CRM Integration",
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Working across modern toolchains",
    items: [
      "Supabase", "Vercel", "Resend", "Sentry", "Figma", "Git", "GitHub", "VS Code",
      "Hostinger", "MoodleCloud", "phpMyAdmin", "Wireshark", "Nmap", "Nessus",
      "Jira", "Trello", "Monday.com", "Slack", "Zapier", "Google Analytics",
      "Squarespace", "WooCommerce", "Meta Business Suite", "LinkedIn", "Microsoft Office",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      {/* HEADING */}
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="skills-heading-label">
            <span className="section-eyebrow">SKILLS &amp; TOOLS</span>
            <motion.span
              className="skills-heading-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            />
          </div>
          <h2>
            Built across
            <br />
            <span className="skills-gradient-text">multiple disciplines.</span>
          </h2>
        </div>
        <p>
          A mix of development, infrastructure, platform and creative tools used
          across real projects and ongoing technical work.
        </p>
      </motion.div>

      {/* SKILL GROUPS */}
      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            className={`skill-group skill-group-${groupIndex + 1}`}
            
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="skill-group-glow" />
            <div className="skill-group-top">
              <span className="skill-group-number">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <span className="skill-group-dot" />
            </div>
            <div className="skill-group-heading">
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
            </div>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="skill-group-footer"
              
            >
              <span>{group.items.length} skills</span>
              <span>↗</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
