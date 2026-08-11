"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "WordPress",
      "Elementor",
      "Tailwind CSS",
      "REST APIs",
      "Bootstrap",
      "Git",
      "GitHub",
      "Version Control",
      "MySQL",
    ],
  },
  {
    title: "IT & Systems",
    items: [
      "IT Support",
      "Networking",
      "Troubleshooting",
      "Windows",
      "Linux",
      "System Administration",
      "Google Workspace",
      "LMS Administration",
      "VLANs",
      "Network Security",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Port Security",
      "Network Monitoring",
      "User Management",
      "Technical Support",
      "Virtual Machines",
      "Cybersecurity",
      "Network Troubleshooting",
      "Moodle",
    ],
  },
  {
    title: "Creative",
    items: [
      "Social Media Management",
      "Content Creation",
      "Content Strategy",
      "Branding",
      "Visual Design",
      "Canva",
      "Campaign Planning",
      "Social Media Graphics",
      "Creative Direction",
      "Digital Content",
      "Photoshop",
      "Graphic Design",
      "Video Editing",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "GitHub",
      "VS Code",
      "Hostinger",
      "MoodleCloud",
      "Monday.com",
      "Zapier",
      "phpMyAdmin",
      "Wireshark",
      "Nmap",
      "Nessus",
      "Trello",
      "Slack",
      "Jira",
      "Google Analytics",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="section-eyebrow">SKILLS & TOOLS</span>

          <h2>
            Built across
            <br />
            <span>multiple disciplines.</span>
          </h2>
        </div>

        <p>
          A mix of development, infrastructure, platform and creative tools
          used across real projects and ongoing technical work.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: groupIndex * 0.1,
            }}
          >
            <span className="skill-group-number">
              0{groupIndex + 1}
            </span>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.items.map((item, index) => (
                <motion.span
                  key={item}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}