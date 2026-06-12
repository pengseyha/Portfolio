<script setup lang="ts">
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileSearch,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  RadioTower,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  UserCheck,
  Users,
  Workflow,
} from "lucide-vue-next";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import Navbar from "@/components/layout/Navbar.vue";
import RevealOnScroll from "@/components/layout/RevealOnScroll.vue";
import AnimatedCounter from "@/components/ui/AnimatedCounter.vue";
import { featuredProject, portfolioData } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

const supportingProjects = computed(() =>
  portfolioData.projects.filter((project) => project.id !== featuredProject.id).slice(0, 3),
);

const cyberTags = ["SOC", "IDS", "Detection", "Incident Response", "Network", "Cyber"];
const isCyberProject = (project: Project) => project.tags.some((tag) => cyberTags.includes(tag));

const trustCards = [
  { label: "4th Year Student", icon: GraduationCap },
  { label: "Computer Science", icon: Cpu },
  { label: "Phnom Penh, Cambodia", icon: MapPin },
  { label: "Available for Internship", icon: UserCheck },
];

const heroStats = [
  {
    label: "Security Projects",
    value: String(portfolioData.projects.length),
    detail: "Case files",
  },
  {
    label: "Certifications",
    value: String(portfolioData.certifications.length),
    detail: "Verified study",
  },
  { label: "SOC Labs", value: String(portfolioData.labs.length), detail: "Hands-on systems" },
  { label: "Readiness", value: "Ready", detail: "Internship focus" },
];

const terminalLines = [
  { text: "$ tail -f /var/log/soc/activity.log", tone: "muted" },
  { text: "[INFO] pfSense ruleset loaded — 42 rules active", tone: "body" },
  { text: "[ALERT] Snort IDS: possible port scan detected", tone: "alert" },
  { text: "[OK] Case opened — INC-2026-0142 assigned", tone: "ok" },
  { text: "[INFO] Splunk indexing 3 log sources", tone: "body" },
];

const alertStream = [
  { label: "Failed login spike", severity: "High" },
  { label: "Blocked firewall traffic", severity: "Medium" },
  { label: "Snort IDS alert", severity: "High" },
  { label: "Incident note added", severity: "Info" },
];

const coverageBars = [
  { label: "Authentication", value: 92 },
  { label: "Firewall", value: 85 },
  { label: "IDS / IPS", value: 78 },
];

const socDashboardStats = [
  { label: "Threat Score", value: "92", detail: "Elevated watch" },
  { label: "Projects", value: String(portfolioData.projects.length), detail: "Security builds" },
  {
    label: "Certificates",
    value: String(portfolioData.certifications.length),
    detail: "Training proof",
  },
];

const threatFeed = [
  "[10:42] Firewall blocked suspicious IP",
  "[10:43] Failed login detected",
  "[10:45] Port scan identified",
  "[10:47] Alert escalated",
  "[10:48] Incident resolved",
];

const missionLearning = [
  "Splunk SIEM",
  "Detection Engineering",
  "Threat Hunting",
  "Incident Response",
];

const securityJourney = [
  { label: "Computer Science", icon: Cpu },
  { label: "Networking", icon: RadioTower },
  { label: "Linux", icon: Terminal },
  { label: "Cybersecurity", icon: ShieldCheck },
  { label: "SOC Monitoring", icon: FileSearch },
  { label: "Cyber Shield Checker", icon: Workflow },
  { label: "IT Security Internship", icon: UserCheck },
];

const flagshipWorkflow = [
  { label: "Firewall Logs", description: "pfSense, auth, IDS events", icon: RadioTower },
  { label: "Detection Engine", description: "Rules, searches, severity", icon: ShieldCheck },
  { label: "Alert Correlation", description: "Evidence and context", icon: Terminal },
  { label: "Incident Dashboard", description: "Triage, notes, handoff", icon: CheckCircle2 },
];

const skillGroups = [
  {
    title: "Cybersecurity & SOC",
    description: "Detection & response",
    icon: ShieldCheck,
    skills: [
      "SIEM (Splunk)",
      "Log Analysis",
      "Threat Hunting",
      "Incident Response",
      "MITRE ATT&CK",
      "IOC Tracking",
    ],
  },
  {
    title: "Networking",
    description: "Traffic & defense",
    icon: RadioTower,
    skills: ["TCP/IP", "Subnetting", "VLANs", "Routing", "pfSense", "Wireshark"],
  },
  {
    title: "Tools",
    description: "Lab & analysis",
    icon: Terminal,
    skills: ["Snort", "Nmap", "Kali Linux", "Linux Admin", "Cisco Packet Tracer", "Git"],
  },
  {
    title: "Programming / Development",
    description: "Building & securing apps",
    icon: Code2,
    skills: ["Python", "JavaScript", "Vue.js", "NestJS", "Laravel", "PostgreSQL"],
  },
  {
    title: "Soft Skills",
    description: "Analyst mindset",
    icon: Users,
    skills: [
      "Analytical Thinking",
      "Problem-Solving",
      "Documentation",
      "Teamwork",
      "Communication",
    ],
  },
];

const skillAccents = ["var(--brand)", "var(--accent-cyan)", "var(--accent-mint)"];

const educationTimeline = [
  { year: "2022", title: "Started Computer Science" },
  { year: "2023", title: "Networking and Linux Foundations" },
  { year: "2024", title: "Cybersecurity Fundamentals" },
  { year: "2025", title: "SOC and Security Monitoring" },
  { year: "2026", title: "Building Security Projects and Internship Preparation" },
];

const achievements = [
  {
    title: "Grade A Student",
    description: "Strong academic performance.",
    icon: Trophy,
  },
  {
    title: "ThinkCyber Certifications",
    description: "SOC, Linux, networking, and cyber basics.",
    icon: Award,
  },
  {
    title: "Cybersecurity Labs Completed",
    description: "Splunk, pfSense, Snort, and Linux practice.",
    icon: BookOpenCheck,
  },
  {
    title: "SOC / Security Monitoring Project",
    description: "Built Cyber Shield Checker.",
    icon: ShieldCheck,
  },
  {
    title: "Hackathon or Competition Participation",
    description: "Teamwork, pressure, and problem solving.",
    icon: Sparkles,
  },
];

const contactLinks = [
  {
    label: "Email",
    value: portfolioData.contact.email,
    href: `mailto:${portfolioData.contact.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: portfolioData.contact.linkedin,
    href: portfolioData.contact.linkedinUrl,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: portfolioData.contact.github,
    href: portfolioData.contact.githubUrl,
    icon: Github,
  },
  {
    label: "Telegram",
    value: portfolioData.contact.telegram,
    href: portfolioData.contact.telegramUrl,
    icon: Send,
  },
];

const certificationDetails: Record<
  string,
  {
    category: string;
    skills: string[];
  }
> = {
  "google-cyber-cert": {
    category: "Security Foundations",
    skills: ["Incident response", "Linux", "SQL"],
  },
  "soc-analyst": {
    category: "SOC Operations",
    skills: ["Alert triage", "SIEM workflow", "Reporting"],
  },
  "network-research": {
    category: "Network Security",
    skills: ["Traffic analysis", "Research", "Documentation"],
  },
  "linux-fundamentals": {
    category: "Systems",
    skills: ["Shell", "Permissions", "Administration"],
  },
  "python-fundamentals": {
    category: "Programming",
    skills: ["Scripting", "Logic", "Automation basics"],
  },
  "intro-cyber": {
    category: "Cyber Basics",
    skills: ["CIA triad", "Threats", "Security mindset"],
  },
};

const getCertificationDetails = (id: string) =>
  certificationDetails[id] ?? {
    category: "Training",
    skills: ["Security fundamentals"],
  };

const heroRoles = [
  "SOC Analyst Aspirant",
  "Threat Detection Builder",
  "Network Defender",
  "Incident Response Learner",
];
const currentRoleIndex = ref(0);
const displayedRole = computed(() => heroRoles[currentRoleIndex.value]);
let roleTimer: number | undefined;

const activeAlertIndex = ref(0);
let alertTimer: number | undefined;

const scrollProgress = ref(0);
const handleScroll = () => {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  scrollProgress.value = height > 0 ? scrollTop / height : 0;
};

onMounted(() => {
  roleTimer = window.setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % heroRoles.length;
  }, 2200);
  alertTimer = window.setInterval(() => {
    activeAlertIndex.value = (activeAlertIndex.value + 1) % alertStream.length;
  }, 2400);
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (roleTimer) window.clearInterval(roleTimer);
  if (alertTimer) window.clearInterval(alertTimer);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="overflow-hidden bg-background">
    <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>

    <Navbar />

    <section
      id="home"
      class="hero-lab relative scroll-mt-24 overflow-hidden border-b border-border pb-10 pt-28 md:pb-14 md:pt-32 xl:pt-32"
    >
      <div class="grid-fade" aria-hidden="true"></div>
      <div class="network-pattern" aria-hidden="true"></div>

      <div
        class="container-page relative z-1 grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] xl:gap-16"
      >
        <div class="animate-reveal-up max-w-2xl">
          <div
            class="inline-flex items-center gap-2 rounded-[8px] border border-brand/25 bg-brand-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand"
          >
            <span class="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Cyber Shield Labs · by Peng Seyha
          </div>

          <p class="mono mt-5 text-sm font-medium text-muted">
            Hi, I&apos;m <span class="text-display">Peng Seyha</span>
            <span class="blink-cursor"></span>
          </p>

          <h1
            class="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-display sm:text-5xl xl:text-6xl"
          >
            <span class="text-display">{{ portfolioData.identity.headline }}</span>
          </h1>

          <p class="mt-4 max-w-xl text-base leading-7 text-muted md:mt-5 md:text-lg">
            {{ portfolioData.identity.subheading }}
          </p>

          <p class="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted md:mt-6">
            <Transition name="role" mode="out-in">
              <span
                :key="displayedRole"
                class="mono inline-flex min-h-7 items-center rounded-[8px] border border-brand/25 bg-brand-soft px-2.5 text-brand"
              >
                {{ displayedRole }}
              </span>
            </Transition>
            <span class="hidden text-border sm:inline">•</span>
            <span class="inline-flex items-center gap-1.5">
              <MapPin class="h-3.5 w-3.5" />
              {{ portfolioData.identity.location }}
            </span>
          </p>

          <div
            class="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-border bg-border md:mt-7 md:grid-cols-4"
          >
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="bg-surface/70 px-3 py-3 sm:px-4"
            >
              <p class="mono text-xl font-bold text-display sm:text-2xl">
                <AnimatedCounter :value="stat.value" />
              </p>
              <p class="mt-1 text-[11px] uppercase tracking-[0.08em] text-muted sm:text-xs">
                {{ stat.label }}
              </p>
              <p class="mt-1 text-[11px] text-muted/80">{{ stat.detail }}</p>
            </div>
          </div>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
            <a href="#projects" class="button-primary w-full sm:w-auto">
              View Case Files
              <ExternalLink class="h-4 w-4" />
            </a>
            <a :href="portfolioData.contact.resumeUrl" class="button-secondary w-full sm:w-auto">
              <Download class="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div
            class="mt-6 grid gap-3 rounded-[14px] border border-border bg-surface/70 p-4 lg:hidden"
          >
            <div class="flex items-center justify-between gap-3">
              <p class="text-xs font-semibold uppercase tracking-[0.14em] text-brand">SOC Status</p>
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-display">
                <span class="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Active
              </span>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-[10px] border border-border bg-surface-raised p-3">
                <p class="text-[11px] uppercase tracking-[0.1em] text-muted">Threat Score</p>
                <p class="mono mt-1 text-2xl font-bold text-display">
                  <AnimatedCounter value="92" />
                </p>
              </div>
              <div class="rounded-[10px] border border-border bg-surface-raised p-3">
                <p class="text-[11px] uppercase tracking-[0.1em] text-muted">Current Focus</p>
                <p class="mt-1 text-sm font-semibold text-display">Threat Detection</p>
              </div>
            </div>
            <p class="text-xs leading-5 text-muted">
              Recent Event:
              <span class="font-semibold text-display">Firewall blocked suspicious connection</span>
            </p>
          </div>

          <p class="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-muted md:mt-10">
            Lab stack
          </p>
          <p class="mt-3 text-sm leading-7 text-body">
            <span
              v-for="(tag, index) in ['Splunk', 'pfSense', 'Snort', 'Linux', 'NestJS', 'Vue']"
              :key="tag"
            >
              {{ tag }}<span v-if="index < 5" class="px-1.5 text-border">/</span>
            </span>
          </p>
        </div>

        <div class="min-w-0 lg:pt-4">
          <RevealOnScroll :delay="120" class="soc-dashboard">
            <div class="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  SOC Status
                </p>
                <h2 class="mt-1 text-xl font-bold text-display">Cyber Shield Labs</h2>
              </div>
              <span class="badge">
                <span class="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Monitoring: Active
              </span>
            </div>

            <div class="grid gap-4 p-4">
              <div class="relative overflow-hidden rounded-[14px] border border-border">
                <img
                  :src="featuredProject.image"
                  :alt="`${featuredProject.title} preview`"
                  class="aspect-[16/9] w-full object-cover saturate-[1.08]"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    Flagship System
                  </p>
                  <h3 class="mt-1 text-2xl font-bold text-display">{{ featuredProject.title }}</h3>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div
                  v-for="stat in socDashboardStats"
                  :key="stat.label"
                  class="rounded-[10px] border border-border bg-surface-raised p-3"
                >
                  <p class="text-[11px] uppercase tracking-[0.1em] text-muted">{{ stat.label }}</p>
                  <p class="mono mt-1 text-2xl font-bold text-display">
                    <AnimatedCounter :value="stat.value" />
                  </p>
                  <p class="mt-1 text-[11px] text-muted">{{ stat.detail }}</p>
                </div>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <div class="rounded-[10px] border border-border bg-surface-raised p-4">
                  <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    Current Focus
                  </p>
                  <p class="mt-2 text-lg font-semibold text-display">Threat Detection</p>
                </div>
                <div class="rounded-[10px] border border-border bg-surface-raised p-4">
                  <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    Recent Event
                  </p>
                  <p class="mt-2 text-sm font-semibold leading-6 text-display">
                    Firewall blocked suspicious connection
                  </p>
                </div>
              </div>

              <div class="rounded-[10px] border border-border bg-background/45 p-4">
                <div class="mb-3 flex items-center justify-between">
                  <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    Signal Console
                  </p>
                  <span class="mono text-xs text-brand">live</span>
                </div>
                <div class="mono space-y-2 text-xs leading-6">
                  <p
                    v-for="(line, index) in terminalLines.slice(1, 5)"
                    :key="line.text"
                    class="animate-reveal-up truncate"
                    :class="{
                      'text-muted': line.tone === 'muted',
                      'text-body': line.tone === 'body',
                      'text-amber-500': line.tone === 'alert',
                      'text-emerald-500': line.tone === 'ok',
                    }"
                    :style="{ animationDelay: `${300 + index * 180}ms` }"
                  >
                    {{ line.text }}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div class="container-page relative z-1 mt-10">
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <RevealOnScroll
            v-for="(item, index) in trustCards"
            :key="item.label"
            :delay="index * 50"
            class="card flex items-center gap-3 px-4 py-3.5"
          >
            <component :is="item.icon" class="h-4.5 w-4.5 shrink-0 text-brand" />
            <p class="text-sm font-medium text-display">{{ item.label }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden border-b border-border py-8 md:py-10">
      <div class="container-page">
        <RevealOnScroll class="threat-feed">
          <div class="flex shrink-0 items-center gap-3 px-4 py-3">
            <span class="status-dot h-2 w-2 rounded-full bg-emerald-400"></span>
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Recent Security Activity
            </p>
          </div>
          <div
            class="min-w-0 flex-1 overflow-hidden border-t border-border md:border-l md:border-t-0"
          >
            <div class="threat-feed-track">
              <span
                v-for="(item, index) in [...threatFeed, ...threatFeed]"
                :key="`${item}-${index}`"
                class="threat-event"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="relative overflow-hidden border-b border-border py-12 md:py-16">
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker">Security Journey</p>
          <div class="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 class="section-title">From computer science to SOC readiness.</h2>
            <p class="section-copy">
              A practical path through networking, Linux, detection work, and the Cyber Shield
              Checker flagship build.
            </p>
          </div>
        </RevealOnScroll>

        <div class="journey-map mt-10">
          <RevealOnScroll
            v-for="(step, index) in securityJourney"
            :key="step.label"
            :delay="index * 60"
            class="journey-step"
          >
            <div class="journey-icon">
              <component :is="step.icon" class="h-4 w-4" />
            </div>
            <p class="mono text-[11px] text-muted">0{{ index + 1 }}</p>
            <p class="mt-2 text-sm font-semibold text-display">{{ step.label }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden border-b border-border py-10 md:py-14">
      <div class="container-page">
        <RevealOnScroll class="card p-5 md:p-6">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="section-kicker">Current Mission</p>
              <h2 class="mt-3 text-2xl font-bold leading-tight text-display md:text-3xl">
                Building practical SOC readiness through labs, detections, and analyst workflows.
              </h2>
              <p class="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                Goal: Land an IT Security / SOC Internship while turning classroom fundamentals into
                reviewable security work.
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="(item, index) in missionLearning"
                :key="item"
                class="rounded-[10px] border border-border bg-surface-raised p-4"
              >
                <p class="mono text-xs text-muted">0{{ index + 1 }}</p>
                <p class="mt-2 text-sm font-semibold text-display">{{ item }}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section
      id="skills"
      class="relative scroll-mt-24 overflow-hidden border-t border-border py-14 md:py-20"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">01</span>Security Arsenal</p>
          <div class="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 class="section-title">Security Arsenal</h2>
            <p class="section-copy">Security, networking, tools, and development fundamentals.</p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealOnScroll
            v-for="(group, index) in skillGroups"
            :key="group.title"
            :delay="index * 70"
            class="card group p-6"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] transition-transform duration-300 group-hover:scale-105"
                :style="{
                  backgroundColor: `color-mix(in srgb, ${skillAccents[index % skillAccents.length]} 14%, transparent)`,
                  color: skillAccents[index % skillAccents.length],
                }"
              >
                <component :is="group.icon" class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-display">{{ group.title }}</h3>
                <p class="mt-0.5 text-xs text-muted">
                  {{ group.description }}
                </p>
              </div>
            </div>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="(skill, skillIndex) in group.skills"
                :key="skill"
                class="skill-chip"
                :style="{ transitionDelay: `${skillIndex * 30}ms` }"
              >
                <span
                  class="skill-chip-dot h-1.5 w-1.5 shrink-0 rounded-full"
                  :style="{ backgroundColor: skillAccents[index % skillAccents.length] }"
                ></span>
                {{ skill }}
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="relative scroll-mt-24 overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">02</span>Case Files</p>
          <h2 class="section-title mt-4">Case Files</h2>
          <p class="section-copy mt-4">A SOC monitoring project for alerts, evidence, and cases.</p>
        </RevealOnScroll>

        <RevealOnScroll class="spotlight-ring mt-12" :delay="80">
          <div class="card grid gap-0 overflow-hidden lg:grid-cols-[0.86fr_1.14fr]">
            <div class="p-6 md:p-10">
              <span class="badge">FLAGSHIP PROJECT</span>
              <h3 class="mt-6 text-3xl font-bold leading-tight text-display md:text-5xl">
                {{ featuredProject.title }}
              </h3>
              <p class="mt-5 text-base leading-8 text-body md:text-lg">
                {{ featuredProject.summary }}
              </p>

              <div class="mt-8 grid gap-3">
                <div
                  v-for="(step, index) in flagshipWorkflow"
                  :key="step.label"
                  class="group grid gap-3 rounded-[12px] border border-border bg-surface-raised p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-105"
                  >
                    <component :is="step.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-display">{{ step.label }}</p>
                    <p class="mt-1 text-xs leading-5 text-muted">{{ step.description }}</p>
                  </div>
                  <ArrowUpRight
                    v-if="index < flagshipWorkflow.length - 1"
                    class="hidden h-4 w-4 rotate-90 text-muted sm:block"
                  />
                </div>
              </div>

              <div class="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p class="section-kicker text-xs">Problem</p>
                  <p class="mt-3 text-sm leading-6 text-muted">
                    Too many events become noise without triage and evidence.
                  </p>
                </div>
                <div>
                  <p class="section-kicker text-xs">Solution</p>
                  <p class="mt-3 text-sm leading-6 text-muted">
                    A simple workflow from logs to alerts, cases, and notes.
                  </p>
                </div>
              </div>

              <div class="mt-8">
                <p class="section-kicker text-xs">Technologies used</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="tech in featuredProject.stack" :key="tech" class="tag">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="mt-8">
                <p class="section-kicker text-xs">Key features</p>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  <div
                    v-for="feature in featuredProject.features.slice(0, 4)"
                    :key="feature"
                    class="flex gap-3 rounded-[10px] border border-border bg-surface-raised p-3 text-sm leading-6 text-muted"
                  >
                    <CheckCircle2 class="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  v-if="featuredProject.githubUrl"
                  :href="featuredProject.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button-primary w-full sm:w-auto"
                >
                  <Github class="h-4 w-4" />
                  Review Build
                </a>
                <RouterLink
                  :to="`/projects/${featuredProject.id}`"
                  class="button-secondary w-full sm:w-auto"
                >
                  <BookOpenCheck class="h-4 w-4 text-brand" />
                  Open Case File
                </RouterLink>
                <a
                  v-if="featuredProject.liveDemoUrl"
                  :href="featuredProject.liveDemoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button-secondary w-full sm:w-auto"
                >
                  <ExternalLink class="h-4 w-4 text-brand" />
                  Live Demo
                </a>
              </div>
            </div>

            <div
              class="border-t border-border bg-surface-raised p-4 sm:p-6 lg:border-l lg:border-t-0"
            >
              <div class="overflow-hidden rounded-[14px] border border-border bg-background">
                <div class="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <img
                    :src="featuredProject.image"
                    :alt="`${featuredProject.title} dashboard preview`"
                    class="h-full w-full object-cover"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                  ></div>
                  <div class="absolute bottom-4 left-4 right-4">
                    <p class="section-kicker text-xs">Product Preview</p>
                    <h4 class="mt-2 text-xl font-bold text-display">SOC operations workspace</h4>
                  </div>
                </div>
              </div>

              <div class="mt-6 flex items-center justify-between">
                <div>
                  <p class="section-kicker">SOC dashboard</p>
                  <h4 class="mt-2 text-lg font-semibold text-display">Security operations view</h4>
                </div>
                <RadioTower class="h-5 w-5 text-brand" />
              </div>

              <div
                class="mt-5 grid grid-cols-3 divide-x divide-border rounded-[10px] border border-border"
              >
                <div v-for="metric in featuredProject.metrics" :key="metric.label" class="p-3.5">
                  <p class="text-xs text-muted">{{ metric.label }}</p>
                  <p class="mt-1.5 text-sm font-semibold text-display">{{ metric.value }}</p>
                </div>
              </div>

              <div class="mt-5 rounded-[10px] border border-border p-4">
                <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                  Detection coverage
                </p>
                <div class="mt-3 space-y-3">
                  <div v-for="bar in coverageBars" :key="bar.label">
                    <div class="mb-1.5 flex items-center justify-between text-xs">
                      <span class="font-medium text-display">{{ bar.label }}</span>
                      <span class="mono text-muted">
                        <AnimatedCounter :value="`${bar.value}%`" />
                      </span>
                    </div>
                    <div class="severity-track">
                      <div
                        class="severity-fill"
                        :style="{ width: `${bar.value}%` }"
                        role="progressbar"
                        :aria-valuenow="bar.value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :aria-label="bar.label"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                <div class="rounded-[10px] border border-border p-4">
                  <div class="mb-3 flex items-center justify-between">
                    <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                      Alert stream
                    </p>
                    <span class="inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                      <span class="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Live
                    </span>
                  </div>
                  <div class="space-y-2">
                    <div
                      v-for="(item, index) in alertStream"
                      :key="item.label"
                      class="flex items-center justify-between rounded-[8px] border px-3 py-2.5 transition-colors duration-300"
                      :class="
                        index === activeAlertIndex
                          ? 'border-brand/30 bg-brand-soft'
                          : 'border-border'
                      "
                    >
                      <span class="text-sm text-body">{{ item.label }}</span>
                      <span class="tag text-[11px]">{{ item.severity }}</span>
                    </div>
                  </div>
                </div>

                <div class="rounded-[10px] border border-border p-4">
                  <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">Workflow</p>
                  <div class="mt-3 space-y-2.5">
                    <div
                      v-for="(step, index) in ['Collect', 'Detect', 'Triage', 'Document']"
                      :key="step"
                      class="flex items-center gap-3"
                    >
                      <span
                        class="flex h-7 w-7 items-center justify-center rounded-[8px] bg-brand-soft text-xs font-semibold text-brand"
                      >
                        {{ index + 1 }}
                      </span>
                      <span class="text-sm font-medium text-display">{{ step }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <RevealOnScroll
            v-for="(project, index) in supportingProjects"
            :key="project.id"
            :delay="index * 70"
            class="card group flex h-full flex-col overflow-hidden"
          >
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="`${project.title} preview`"
                class="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span
                v-if="isCyberProject(project)"
                class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-[6px] bg-background/85 px-2.5 py-1 text-xs font-medium text-brand backdrop-blur"
              >
                <ShieldCheck class="h-3 w-3" />
                Security
              </span>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <p class="section-kicker text-xs">{{ project.eyebrow }}</p>
              <h3
                class="mt-2 text-xl font-semibold text-display transition-colors group-hover:text-brand"
              >
                {{ project.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-muted">{{ project.summary }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="tech in project.stack.slice(0, 4)" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-4 space-y-2">
                <div
                  v-for="feature in project.features.slice(0, 2)"
                  :key="feature"
                  class="flex gap-2 text-xs leading-5 text-muted"
                >
                  <CheckCircle2 class="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  <span>{{ feature }}</span>
                </div>
              </div>

              <div class="mt-5 flex items-center gap-4 border-t border-border pt-4">
                <RouterLink
                  :to="`/projects/${project.id}`"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all duration-300 hover:gap-3"
                >
                  Case study
                  <ArrowUpRight class="h-4 w-4" />
                </RouterLink>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-auto text-muted transition hover:text-brand"
                  :aria-label="`${project.title} on GitHub`"
                >
                  <Github class="h-4 w-4" />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="education"
      class="relative scroll-mt-24 overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">03</span>Education</p>
          <h2 class="section-title mt-4">Education &amp; continuous learning</h2>
        </RevealOnScroll>

        <div class="mt-12 max-w-4xl">
          <div class="relative">
            <div class="absolute bottom-0 left-4 top-0 w-px bg-border"></div>
            <RevealOnScroll
              v-for="(item, index) in educationTimeline"
              :key="item.year"
              :delay="index * 80"
              :as="'article'"
              class="relative mb-8 pl-12 last:mb-0"
            >
              <div
                class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-[10px] border border-border bg-surface text-brand"
              >
                <span class="timeline-node h-2 w-2 rounded-full bg-brand"></span>
              </div>
              <p class="section-kicker text-xs">{{ item.year }}</p>
              <h3 class="mt-2 text-lg font-semibold text-display">{{ item.title }}</h3>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>

    <section
      id="achievements"
      class="relative scroll-mt-24 overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">04</span>Highlights</p>
          <h2 class="section-title mt-4">Highlights</h2>
        </RevealOnScroll>

        <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <RevealOnScroll
            v-for="(achievement, index) in achievements"
            :key="achievement.title"
            :delay="index * 60"
            class="card p-6"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-soft text-brand"
            >
              <component :is="achievement.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-display">{{ achievement.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-muted">{{ achievement.description }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="certificates"
      class="relative scroll-mt-24 overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">05</span>Credentials</p>
          <h2 class="section-title mt-4">Certifications &amp; training</h2>
        </RevealOnScroll>

        <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <RevealOnScroll
            v-for="(certificate, index) in portfolioData.certifications"
            :key="certificate.id"
            :delay="index * 50"
            class="card group p-6"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="section-kicker text-xs">
                  {{ getCertificationDetails(certificate.id).category }}
                </p>
                <h3 class="mt-3 text-lg font-semibold text-display">{{ certificate.title }}</h3>
              </div>
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-105"
              >
                <Award class="h-5 w-5" />
              </div>
            </div>
            <div class="mt-4 flex flex-wrap items-center gap-2">
              <span class="tag">{{ certificate.provider }}</span>
              <span class="tag">{{ certificate.year }}</span>
            </div>
            <p class="mt-4 text-sm leading-6 text-muted">{{ certificate.focus }}</p>
            <div class="mt-5">
              <p class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                Skills learned
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="skill in getCertificationDetails(certificate.id).skills"
                  :key="skill"
                  class="rounded-[8px] border border-border bg-surface-raised px-2.5 py-1 text-xs font-medium text-body"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
            <div class="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
              <span class="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                Credential
              </span>
              <a
                v-if="certificate.verifyUrl"
                :href="certificate.verifyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-medium text-brand transition hover:underline"
              >
                Verify
              </a>
              <span v-else class="text-xs font-medium text-muted"> Proof available </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="relative scroll-mt-24 overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll class="card p-6 md:p-10">
          <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p class="section-kicker"><span class="section-index">06</span>Secure Channel</p>
              <h2 class="mt-4 text-3xl font-bold leading-tight text-display md:text-4xl">
                Open a secure channel
              </h2>
              <p class="mt-5 max-w-xl text-base leading-7 text-muted">
                Open to cybersecurity, IT, SOC, and network defense internships in Cambodia.
              </p>
              <p class="mt-6 flex items-center gap-2 text-sm font-medium text-display">
                <span class="status-dot h-2 w-2 rounded-full bg-emerald-400"></span>
                Available for internship · {{ portfolioData.identity.location }}
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <a
                v-for="link in contactLinks"
                :key="link.label"
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="card p-4"
              >
                <component :is="link.icon" class="h-5 w-5 text-brand" />
                <p class="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-muted">
                  {{ link.label }}
                </p>
                <p class="mt-1.5 wrap-break-word text-sm font-semibold text-display">
                  {{ link.value }}
                </p>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>
