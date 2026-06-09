import laravelNestjsImage from "@/assets/projects/laravel_nestjs.png";
import mitreAttackImage from "@/assets/projects/mitre_attack.png";
import pfsenseNetworkImage from "@/assets/projects/pfsense_network.png";
import snortIdsImage from "@/assets/projects/snort_ids.png";
import splunkSiemImage from "@/assets/projects/splunk_siem.png";
import vueTailwindImage from "@/assets/projects/vue_tailwind.png";

export interface Metric {
  label: string;
  value: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  year: string;
  type: "Featured" | "Lab" | "Build";
  tags: string[];
  summary: string;
  role: string;
  image: string;
  stack: string[];
  metrics: Metric[];
  features: string[];
  challenge: string;
  solution: string;
  architecture: string[];
  lessons: string[];
  nextSteps: string[];
  githubUrl?: string;
  reportUrl?: string;
}

export interface LabEntry {
  id: string;
  title: string;
  focus: string;
  summary: string;
  tools: string[];
  outcomes: string[];
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  year: string;
  focus: string;
}

export interface GithubActivity {
  label: string;
  value: string;
  detail: string;
}

export const portfolioData = {
  identity: {
    name: "Peng Seyha",
    role: "Cybersecurity student focused on SOC operations and secure systems",
    headline: "SOC analyst mindset. Secure systems builder.",
    subheading:
      "Year 4 Computer Science student at ITC building SOC labs, detection workflows, and practical security tools.",
    location: "Phnom Penh, Cambodia",
    availability: "Open to Cybersecurity, SOC Analyst, and IT Security internships",
    summary:
      "I connect security fundamentals with clean engineering: logs, detection logic, network defense, APIs, and clear documentation.",
  },
  contact: {
    email: "pengseyha2005@gmail.com",
    github: "github.com/pengseyha",
    githubUrl: "https://github.com/pengseyha",
    linkedin: "peng-seyha",
    linkedinUrl: "https://linkedin.com/in/peng-seyha",
    facebook: "seyha.peng.520",
    facebookUrl: "https://facebook.com/seyha.peng.520",
    phone: "097 565 4849",
    resumeUrl: "/resume.pdf",
  },
  snapshot: [
    { label: "Track", value: "SOC Analyst" },
    { label: "Labs", value: "Splunk + Snort" },
    { label: "Build", value: "Vue + NestJS" },
  ] as Metric[],
  principles: [
    "Security work should be clear, evidence-based, and easy to review.",
    "Every project should show a decision, not only a technology list.",
  ],
  skills: [
    {
      title: "Security Operations",
      description: "Alert triage, log review, MITRE mapping, and incident notes.",
      skills: [
        "Splunk SIEM",
        "Log Analysis",
        "MITRE ATT&CK",
        "Threat Hunting",
        "IOC Tracking",
        "Incident Response",
      ],
    },
    {
      title: "Network & Systems",
      description: "Network labs, packet analysis, Linux, and defensive controls.",
      skills: ["pfSense", "Snort", "Wireshark", "Nmap", "Linux", "Cisco Packet Tracer"],
    },
    {
      title: "Secure Development",
      description: "Clean interfaces, APIs, validation, and database-backed systems.",
      skills: ["Vue.js", "TypeScript", "Tailwind CSS", "NestJS", "Laravel", "PostgreSQL"],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "cyber-shield-checker",
      title: "Cyber Shield Checker",
      eyebrow: "Main Case Study",
      year: "2026",
      type: "Featured",
      tags: ["SOC", "Cyber", "Backend"],
      summary:
        "A SOC monitoring and incident management platform designed to turn raw alerts into structured analyst work.",
      role: "Product design, backend architecture, detection workflow, and technical documentation",
      image: mitreAttackImage,
      stack: ["NestJS", "PostgreSQL", "Linux", "MITRE ATT&CK"],
      metrics: [
        { label: "Modules", value: "6" },
        { label: "Focus", value: "SOC Workflow" },
        { label: "Status", value: "Active Build" },
      ],
      features: [
        "Centralized incident and case tracking",
        "IOC management for suspicious IPs, hashes, domains, and URLs",
        "MITRE ATT&CK technique mapping for analyst context",
        "Alert generation and investigation status workflow",
        "Structured reporting for repeatable SOC handoff",
      ],
      challenge:
        "Most student security projects stop at isolated tools. This project focuses on the operational layer: how an analyst receives, classifies, tracks, and documents security events.",
      solution:
        "I designed a backend-driven workflow with normalized entities for alerts, incidents, IOCs, techniques, and reports so security data can move from detection to decision.",
      architecture: [
        "Event sources and analyst input create alert records",
        "Alert enrichment connects IOCs and MITRE techniques",
        "Cases group related evidence, status, severity, and notes",
        "Reports summarize investigation history and response actions",
      ],
      lessons: [
        "A useful SOC tool needs clear state transitions, not just dashboards.",
        "Data modeling affects how quickly analysts can explain an incident.",
        "Security interfaces should prioritize evidence, ownership, and next action.",
      ],
      nextSteps: [
        "Add authentication and role-based access",
        "Create dashboard views for severity and analyst workload",
        "Publish screenshots and a technical write-up",
      ],
      githubUrl: "https://github.com/pengseyha",
    },
    {
      id: "soc-analyst-lab",
      title: "SOC Analyst Lab",
      eyebrow: "Detection Lab",
      year: "2026",
      type: "Lab",
      tags: ["SOC", "Splunk", "Research"],
      summary:
        "A Splunk-based lab for practicing log search, alert investigation, and analyst documentation.",
      role: "Lab design, query writing, investigation workflow, and report notes",
      image: splunkSiemImage,
      stack: ["Splunk", "Linux", "MITRE ATT&CK"],
      metrics: [
        { label: "Workflows", value: "3" },
        { label: "Focus", value: "Triage" },
        { label: "Output", value: "Notes" },
      ],
      features: [
        "Search workflows for suspicious activity",
        "Alert investigation and timeline building",
        "MITRE-aligned notes for analyst reporting",
      ],
      challenge:
        "Learning Splunk is easy to make tool-focused, but SOC work needs repeatable reasoning and evidence handling.",
      solution:
        "I organized the lab around analyst questions: what happened, what evidence supports it, what severity fits, and what should happen next.",
      architecture: [
        "Linux host logs feed the SIEM workspace",
        "Searches isolate suspicious behavior and event patterns",
        "Findings are mapped to tactics, techniques, and response notes",
      ],
      lessons: [
        "Clear search intent matters more than long queries.",
        "Timeline quality improves incident communication.",
        "MITRE mapping is strongest when linked to concrete evidence.",
      ],
      nextSteps: [
        "Add sample datasets and screenshots",
        "Create a public investigation report template",
      ],
      githubUrl: "https://github.com/pengseyha",
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure & Design",
      eyebrow: "Security Architecture",
      year: "2025",
      type: "Lab",
      tags: ["Network", "Cyber"],
      summary:
        "A segmented network design lab covering VLANs, DHCP, routing, and firewall-minded topology decisions.",
      role: "Network design, segmentation planning, and topology documentation",
      image: pfsenseNetworkImage,
      stack: ["Cisco Packet Tracer", "pfSense", "VLAN"],
      metrics: [
        { label: "Domains", value: "Network" },
        { label: "Controls", value: "Segmentation" },
        { label: "Status", value: "Documented" },
      ],
      features: [
        "VLAN segmentation for safer traffic separation",
        "DHCP and routing configuration practice",
        "Topology documentation for review and troubleshooting",
      ],
      challenge:
        "A network can look correct while still being difficult to reason about during a security review.",
      solution:
        "I designed the topology around zones and traffic boundaries, then documented the decisions clearly enough for another reviewer to inspect.",
      architecture: [
        "User and service segments separated by VLAN",
        "Routing rules define controlled communication paths",
        "Firewall layer acts as the policy checkpoint",
      ],
      lessons: [
        "Good diagrams reduce troubleshooting time.",
        "Segmentation decisions should map to risk, not convenience.",
        "Network fundamentals directly support SOC investigations.",
      ],
      nextSteps: ["Add packet captures", "Document test cases for blocked and allowed traffic"],
    },
    {
      id: "snort-ids-rules",
      title: "Snort IDS Rules",
      eyebrow: "Detection Engineering",
      year: "2025",
      type: "Lab",
      tags: ["IDS", "Cyber"],
      summary: "Custom IDS rules for scan and brute-force detection with PCAP-driven validation.",
      role: "Rule writing, test traffic planning, and detection validation",
      image: snortIdsImage,
      stack: ["Snort", "PCAP", "Wireshark"],
      metrics: [
        { label: "Focus", value: "Detection" },
        { label: "Input", value: "PCAP" },
        { label: "Output", value: "Rules" },
      ],
      features: [
        "Detection rules for suspicious scan behavior",
        "Brute-force pattern investigation",
        "PCAP review to validate rule behavior",
      ],
      challenge:
        "IDS rules must be precise enough to catch behavior without creating noisy alerts.",
      solution:
        "I tested rule logic against traffic samples and refined conditions around observable network patterns.",
      architecture: [
        "Traffic sample reviewed in Wireshark",
        "Snort rule created from observed indicators",
        "Alert output checked against expected behavior",
      ],
      lessons: [
        "False positives are a design problem, not only a tuning problem.",
        "Readable rules are easier to validate and maintain.",
      ],
      nextSteps: ["Publish example rule set", "Add before-and-after alert screenshots"],
    },
    {
      id: "laravel-nestjs-apis",
      title: "Laravel & NestJS APIs",
      eyebrow: "Secure Backend",
      year: "2024",
      type: "Build",
      tags: ["Web", "Backend"],
      summary:
        "REST API backends with validation, database design, and maintainable service structure.",
      role: "API design, database schema planning, and implementation",
      image: laravelNestjsImage,
      stack: ["Laravel", "NestJS", "PostgreSQL"],
      metrics: [
        { label: "Layer", value: "API" },
        { label: "Focus", value: "Validation" },
        { label: "Database", value: "SQL" },
      ],
      features: [
        "Request validation and structured responses",
        "Database-backed resource models",
        "Service-based organization for maintainability",
      ],
      challenge:
        "Backend code needs to stay understandable as features expand and data contracts change.",
      solution:
        "I practiced separating controllers, services, validation, and persistence concerns across Laravel and NestJS implementations.",
      architecture: [
        "HTTP routes receive validated requests",
        "Service layer handles business rules",
        "PostgreSQL stores normalized application data",
      ],
      lessons: [
        "Validation is a security and UX feature.",
        "Clear API contracts make frontend work faster.",
      ],
      nextSteps: ["Add OpenAPI documentation", "Add auth and audit logging examples"],
    },
    {
      id: "vue-tailwind-ui",
      title: "Vue + Tailwind UI System",
      eyebrow: "Frontend Craft",
      year: "2024",
      type: "Build",
      tags: ["Web", "Frontend"],
      summary: "Reusable Vue components and responsive layouts for clean, maintainable interfaces.",
      role: "Frontend component design, responsive implementation, and UI polish",
      image: vueTailwindImage,
      stack: ["Vue", "TypeScript", "Tailwind CSS"],
      metrics: [
        { label: "Layer", value: "UI" },
        { label: "Focus", value: "Responsive" },
        { label: "Pattern", value: "Components" },
      ],
      features: [
        "Reusable section and card components",
        "Responsive layout patterns",
        "Consistent spacing and typography",
      ],
      challenge:
        "Student portfolios often look inconsistent because every section is designed separately.",
      solution:
        "I built shared UI primitives and design tokens so new sections can stay visually aligned.",
      architecture: [
        "Data-driven sections feed reusable components",
        "Tailwind tokens keep spacing and color consistent",
        "Responsive grids adapt across mobile and desktop",
      ],
      lessons: [
        "Design consistency is easier when structure is reusable.",
        "Small typography decisions affect perceived quality.",
      ],
      nextSteps: ["Extract more reusable primitives", "Add visual regression screenshots"],
    },
  ] as Project[],
  labs: [
    {
      id: "mitre-research",
      title: "MITRE ATT&CK Mapping Notes",
      focus: "Threat mapping",
      summary: "Mapping suspicious activity to tactics and techniques for clearer investigations.",
      tools: ["MITRE ATT&CK", "Splunk", "Documentation"],
      outcomes: ["Clearer incident summaries", "Reusable investigation notes"],
    },
    {
      id: "packet-analysis",
      title: "Packet Analysis Practice",
      focus: "Network evidence",
      summary: "Reviewing packet captures to identify suspicious traffic and useful indicators.",
      tools: ["Wireshark", "PCAP", "Nmap"],
      outcomes: ["Better alert validation", "Cleaner evidence capture"],
    },
    {
      id: "linux-security",
      title: "Linux Security Operations",
      focus: "Host basics",
      summary: "Practicing Linux services, permissions, logs, and command-line workflows.",
      tools: ["Ubuntu", "Kali Linux", "Shell"],
      outcomes: ["Faster triage workflow", "Cleaner lab setup"],
    },
  ] as LabEntry[],
  experience: [
    {
      id: "soc-course",
      period: "2025 - Present",
      title: "SOC Analyst Short Course",
      organization: "ThinkCyber India / ANT Training Center",
      description:
        "Building practical knowledge in alert triage, threat investigation, SIEM workflows, and analyst reporting.",
    },
    {
      id: "google-cyber",
      period: "2025",
      title: "Google Cybersecurity Professional Certificate",
      organization: "Google / Coursera",
      description:
        "Completed structured training across security foundations, network defense, Linux, SQL, and incident response.",
    },
    {
      id: "bachelor",
      period: "2023 - Present",
      title: "Bachelor of Computer Science",
      organization: "Institute of Technology of Cambodia",
      description:
        "Studying software engineering and computer science fundamentals while specializing portfolio work around security.",
    },
  ] as Experience[],
  certifications: [
    {
      id: "google-cyber-cert",
      title: "Google Cybersecurity Professional Certificate",
      provider: "Google / Coursera",
      year: "2025",
      focus: "Security foundations and incident response",
    },
    {
      id: "soc-analyst",
      title: "SOC Analyst",
      provider: "ThinkCyber India",
      year: "2025",
      focus: "SOC workflows and analyst fundamentals",
    },
    {
      id: "network-research",
      title: "Network Research",
      provider: "ThinkCyber India",
      year: "2025",
      focus: "Network security and research practice",
    },
    {
      id: "linux-fundamentals",
      title: "Linux Fundamentals",
      provider: "ThinkCyber India",
      year: "2025",
      focus: "Linux administration basics",
    },
    {
      id: "python-fundamentals",
      title: "Python Fundamentals",
      provider: "ThinkCyber India",
      year: "2025",
      focus: "Programming foundations",
    },
    {
      id: "intro-cyber",
      title: "Intro to Cyber",
      provider: "ThinkCyber India",
      year: "2025",
      focus: "Cybersecurity fundamentals",
    },
  ] as Certification[],
  githubActivity: [
    {
      label: "Focus",
      value: "Cyber Shield Checker",
      detail: "Main SOC platform and case-study work.",
    },
    {
      label: "Theme",
      value: "Security Labs + Web Systems",
      detail: "Analyst practice connected to maintainable code.",
    },
  ] as GithubActivity[],
};

export const featuredProject = portfolioData.projects[0];

export const getProjectById = (id: string) =>
  portfolioData.projects.find((project) => project.id === id);
