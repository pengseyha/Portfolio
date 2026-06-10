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

export interface Capability {
  id: string;
  title: string;
  premise: string;
  evidence: string[];
  proof: string;
  tools: string[];
}

export interface LabSystem {
  id: string;
  name: string;
  role: string;
  evidence: string;
  image: string;
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
    role: "Computer Science Student | SOC Analyst Aspirant",
    headline: "I turn security events into actionable intelligence.",
    subheading:
      "I build practical systems for monitoring, detection, investigation, and response across a hands-on SOC lab.",
    location: "Phnom Penh, Cambodia",
    availability: "Open to Cybersecurity, SOC Analyst, and IT Security internships",
    summary:
      "My work connects SOC fundamentals with clean engineering: log collection, detection logic, analyst workflows, APIs, and documentation that another security teammate can review.",
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
    { label: "Specialty", value: "SOC Operations" },
    { label: "Flagship", value: "Monitoring Platform" },
    { label: "Lab Stack", value: "Splunk, pfSense, Snort" },
  ] as Metric[],
  operatingSignals: [
    { label: "Primary workflow", value: "Logs to incidents" },
    { label: "Analyst habits", value: "Triage, evidence, notes" },
    { label: "Engineering layer", value: "NestJS, PostgreSQL, Vue" },
    { label: "Security lens", value: "Detection and response" },
  ] as Metric[],
  principles: [
    "Security work should be clear, evidence-based, and easy to review.",
    "Every project should show a decision, not only a technology list.",
  ],
  skills: [
    {
      title: "Security",
      description: "SOC thinking, detection workflows, and incident documentation.",
      skills: [
        "Log Analysis",
        "MITRE ATT&CK",
        "Threat Hunting",
        "IOC Tracking",
        "Incident Response",
      ],
    },
    {
      title: "Networking",
      description: "Network fundamentals, segmentation, and traffic investigation.",
      skills: ["TCP/IP", "Subnetting", "VLANs", "Routing", "Packet Analysis"],
    },
    {
      title: "Tools",
      description: "Security tools used across labs and case studies.",
      skills: ["Splunk SIEM", "Snort", "pfSense", "Wireshark", "Nmap", "Cisco Packet Tracer"],
    },
    {
      title: "Operating Systems",
      description: "Linux environments for security practice and lab work.",
      skills: ["Kali Linux", "Ubuntu", "Linux Administration", "Shell"],
    },
    {
      title: "Soft Skills",
      description: "Clear communication and structured problem solving.",
      skills: ["Analytical Thinking", "Problem-Solving", "Documentation", "Teamwork"],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "cyber-shield-checker",
      title: "SOC Monitoring Platform",
      eyebrow: "Flagship Case Study",
      year: "2026",
      type: "Featured",
      tags: ["SOC", "SIEM", "Detection", "Incident Response"],
      summary:
        "A product-style SOC platform for turning firewall, IDS, and authentication events into structured analyst work.",
      role: "Product thinking, backend architecture, detection workflow design, database modeling, and technical documentation",
      image: splunkSiemImage,
      stack: ["Splunk", "pfSense", "Snort", "NestJS", "PostgreSQL", "Linux"],
      metrics: [
        { label: "Pipeline", value: "Logs to incidents" },
        { label: "Coverage", value: "Auth, firewall, IDS" },
        { label: "Status", value: "Active Build" },
      ],
      features: [
        "Security monitoring dashboard for analyst visibility",
        "Alert management with severity and status workflow",
        "Failed login detection with investigation context",
        "Firewall monitoring for allowed and blocked traffic",
        "IDS alert tracking for Snort events",
        "Incident workflow from triage to documentation",
      ],
      challenge:
        "Security teams do not need another isolated tool demo. They need repeatable workflows that move from noisy events to evidence, prioritization, and action.",
      solution:
        "I designed the platform like an analyst workspace: collect logs, normalize events, surface detections, create alerts, investigate evidence, and document incidents.",
      architecture: [
        "pfSense, Snort, Linux, and Windows generate network, IDS, and authentication telemetry",
        "Logs are collected and searched in Splunk for investigation and detection logic",
        "NestJS exposes structured APIs for alerts, incidents, status, notes, and evidence",
        "PostgreSQL stores normalized analyst records for repeatable case review",
        "The interface presents dashboards, queues, and incident workflow states",
      ],
      lessons: [
        "Useful SOC tools need clear state transitions, not only dashboards.",
        "Detection quality depends on understanding the log source and expected behavior.",
        "Security interfaces should prioritize evidence, ownership, and the next action.",
        "A case is only useful if another analyst can understand the timeline quickly.",
      ],
      nextSteps: [
        "Add authentication, role-based access, and audit history",
        "Publish full dashboard screenshots and detection examples",
        "Create sample incident reports from lab investigations",
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
      summary: "A Splunk lab for search, triage, and investigation notes.",
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
      summary: "A segmented network lab for VLANs, routing, and firewall decisions.",
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
      summary: "REST APIs with validation, database design, and clean service structure.",
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
  capabilities: [
    {
      id: "threat-detection",
      title: "Threat Detection & Analysis",
      premise:
        "I look for suspicious behavior by asking what changed, what evidence supports it, and what risk it creates.",
      evidence: [
        "Failed login patterns reviewed through SIEM searches",
        "IDS alerts validated against packet evidence",
        "MITRE notes used to explain behavior, not decorate reports",
      ],
      proof: "Shown through the SOC platform, Splunk lab, and Snort IDS rule work.",
      tools: ["Splunk", "Snort", "MITRE ATT&CK", "Wireshark"],
    },
    {
      id: "siem-engineering",
      title: "SIEM Engineering",
      premise:
        "I treat a SIEM as an operational system: collect usable logs, search with intent, visualize signals, and document findings.",
      evidence: [
        "Search workflows for triage and timeline building",
        "Dashboard concepts for severity, source, and analyst workload",
        "Structured alert fields that can move into incident workflow",
      ],
      proof: "Shown through Splunk-focused lab work and the monitoring platform architecture.",
      tools: ["Splunk", "Linux", "PostgreSQL", "NestJS"],
    },
    {
      id: "incident-response",
      title: "Incident Response",
      premise:
        "I practice the analyst flow from alert to evidence, scope, severity, containment notes, and handoff.",
      evidence: [
        "Incident states designed for triage, investigation, containment, and closure",
        "Evidence-first report structure for repeatable case review",
        "Clear next-action thinking inside alert and case workflows",
      ],
      proof: "Shown through the flagship platform's alert and incident management design.",
      tools: ["Case Workflow", "Documentation", "MITRE ATT&CK"],
    },
    {
      id: "network-security",
      title: "Network Security",
      premise:
        "I connect network fundamentals to security monitoring so firewall and IDS data are easier to reason about.",
      evidence: [
        "pfSense firewall monitoring concepts",
        "Segmented network lab and topology documentation",
        "Packet captures used to validate suspicious traffic patterns",
      ],
      proof: "Shown through pfSense, Snort, packet analysis, and network infrastructure labs.",
      tools: ["pfSense", "Snort", "VLANs", "Wireshark"],
    },
  ] as Capability[],
  labSystems: [
    {
      id: "splunk",
      name: "Splunk",
      role: "SIEM workspace",
      evidence: "Searches, dashboards, alert review, and investigation notes.",
      image: splunkSiemImage,
    },
    {
      id: "pfsense",
      name: "pfSense",
      role: "Firewall layer",
      evidence: "Traffic boundaries, allow and block decisions, network visibility.",
      image: pfsenseNetworkImage,
    },
    {
      id: "snort",
      name: "Snort",
      role: "IDS sensor",
      evidence: "Detection rules, alert validation, and suspicious traffic tracking.",
      image: snortIdsImage,
    },
    {
      id: "linux",
      name: "Linux",
      role: "Host telemetry",
      evidence: "Logs, services, shell workflows, and analyst environment setup.",
      image: mitreAttackImage,
    },
    {
      id: "kali",
      name: "Kali",
      role: "Security testing",
      evidence: "Controlled scanning, validation traffic, and lab exercises.",
      image: mitreAttackImage,
    },
    {
      id: "windows",
      name: "Windows",
      role: "Endpoint source",
      evidence: "Authentication events, user activity, and investigation examples.",
      image: vueTailwindImage,
    },
  ] as LabSystem[],
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
