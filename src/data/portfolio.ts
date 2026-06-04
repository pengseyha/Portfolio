import type { Component } from "vue";
import { Briefcase, FileText, GitBranch, Mail } from "@lucide/vue";

import laravelImg from "@/assets/projects/laravel_nestjs.png";
import mitreImg from "@/assets/projects/mitre_attack.png";
import pfsenseImg from "@/assets/projects/pfsense_network.png";
import snortImg from "@/assets/projects/snort_ids.png";
import splunkImg from "@/assets/projects/splunk_siem.png";
import vueImg from "@/assets/projects/vue_tailwind.png";

export type ProjectTag = "All" | "Cyber" | "Web" | "Research";

export type Project = {
  title: string;
  desc: string;
  problem: string;
  solution: string;
  result: string;
  achievements: string[];
  tech: string[];
  tag: Exclude<ProjectTag, "All">;
  image: string;
};

export type Certification = {
  title: string;
  provider: string;
  year: string;
  url?: string;
};

export type JourneyItem = {
  period: string;
  title: string;
  desc: string;
};

export type Contact = {
  icon: Component;
  label: string;
  value: string;
  href: string;
};

export const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive interfaces with clean structure and accessible UI patterns.",
    items: ["Vue", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description: "API design, validation flows, database-backed services, and maintainable code.",
    items: ["Laravel", "NestJS", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Cybersecurity",
    description: "Practical monitoring labs, network defense, detection logic, and SIEM workflows.",
    items: ["Splunk", "Snort", "pfSense", "MITRE ATT&CK", "SIEM Monitoring"],
  },
];

export const projects: Project[] = [
  {
    title: "Splunk SIEM Lab",
    tag: "Cyber",
    desc: "Centralized endpoint logs and built practical detections for investigation practice.",
    problem: "Windows and Linux activity was difficult to review across separate lab systems.",
    solution:
      "Forwarded endpoint logs into Splunk, organized the data, and created focused searches.",
    result: "Created a clearer SIEM workflow for monitoring, triage, and security learning.",
    achievements: [
      "Ingested Windows and Linux logs",
      "Created detection searches",
      "Built monitoring dashboards",
    ],
    tech: ["Splunk", "Sysmon", "Linux"],
    image: splunkImg,
  },
  {
    title: "pfSense Network Defense",
    tag: "Cyber",
    desc: "Built a segmented lab network with firewall rules and controlled remote access.",
    problem: "Lab services needed safer boundaries instead of sharing one flat network.",
    solution: "Configured pfSense rules, VLAN separation, and VPN access for controlled traffic.",
    result: "Improved traffic control and made the lab easier to defend and test.",
    achievements: [
      "Configured firewall rules",
      "Separated traffic with VLANs",
      "Enabled VPN access",
    ],
    tech: ["pfSense", "VLAN", "VPN"],
    image: pfsenseImg,
  },
  {
    title: "Snort IDS Rules",
    tag: "Cyber",
    desc: "Created IDS rules to detect suspicious scan and brute-force behavior.",
    problem: "Network traffic needed alerting logic that could identify common attack patterns.",
    solution: "Wrote Snort rules and tested detection behavior with PCAP traffic.",
    result: "Produced working alerts for scan and brute-force scenarios in the lab.",
    achievements: [
      "Wrote custom IDS rules",
      "Tested against PCAP files",
      "Detected scan and brute-force behavior",
    ],
    tech: ["Snort", "Rules", "PCAP"],
    image: snortImg,
  },
  {
    title: "MITRE ATT&CK Mapping",
    tag: "Research",
    desc: "Mapped attack behavior to ATT&CK techniques for clearer detection planning.",
    problem: "Detection notes needed a structured way to explain attacker behavior.",
    solution: "Connected observed behavior to ATT&CK techniques and organized coverage notes.",
    result: "Made detection gaps easier to explain and prioritize.",
    achievements: [
      "Mapped techniques to ATT&CK",
      "Organized detection coverage",
      "Improved threat communication",
    ],
    tech: ["MITRE", "Threat Intel"],
    image: mitreImg,
  },
  {
    title: "Vue + Tailwind UI",
    tag: "Web",
    desc: "Built responsive Vue interfaces with reusable Tailwind component patterns.",
    problem: "Frontend screens needed consistent spacing, states, and responsive behavior.",
    solution: "Created Vue components with reusable Tailwind styling and clean layout rules.",
    result: "Improved interface consistency and reduced repeated styling work.",
    achievements: [
      "Built reusable Vue components",
      "Implemented responsive layouts",
      "Used Tailwind design patterns",
    ],
    tech: ["Vue", "Tailwind"],
    image: vueImg,
  },
  {
    title: "Laravel & NestJS APIs",
    tag: "Web",
    desc: "Developed REST APIs with validation, routing, and database-backed structure.",
    problem: "Full-stack apps needed reliable backend services and predictable API behavior.",
    solution: "Built structured Laravel and NestJS endpoints with validation flows.",
    result: "Created maintainable backend foundations for full-stack development.",
    achievements: [
      "Designed REST endpoints",
      "Added validation flows",
      "Structured backend services",
    ],
    tech: ["Laravel", "NestJS", "PostgreSQL"],
    image: laravelImg,
  },
];

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
  },
];

export const journey: JourneyItem[] = [
  {
    period: "2025",
    title: "Google Cybersecurity Professional Certificate",
    desc: "Completed training in cybersecurity fundamentals, incident response, and defensive workflows.",
  },
  {
    period: "2025",
    title: "Built Splunk SIEM Lab",
    desc: "Built log collection, detection searches, and dashboards for Windows and Linux lab systems.",
  },
  {
    period: "2025",
    title: "Built Laravel & NestJS APIs",
    desc: "Created REST endpoints, validation, and maintainable backend service structure.",
  },
  {
    period: "2022 – Now",
    title: "Computer Science Student at ITC",
    desc: "Year 4 Computer Science student focused on full-stack development and cybersecurity practice.",
  },
];

export const contacts: Contact[] = [
  {
    icon: Mail,
    label: "Email",
    value: "pengseyha2005@gmail.com",
    href: "mailto:pengseyha2005@gmail.com",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/pengseyha",
    href: "https://github.com/pengseyha",
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "peng-seyha",
    href: "https://www.linkedin.com/in/peng-seyha-725ba7298/",
  },
  {
    icon: Briefcase,
    label: "Facebook",
    value: "seyha.peng.520",
    href: "https://www.facebook.com/seyha.peng.520",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Available on request",
    href: "mailto:pengseyha2005@gmail.com?subject=Resume%20Request",
  },
];
