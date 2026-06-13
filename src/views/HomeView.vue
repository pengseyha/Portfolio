<script setup lang="ts">
import {
  Award,
  BookOpenCheck,
  Code2,
  Cpu,
  Download,
  ExternalLink,
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
} from "lucide-vue-next";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import Navbar from "@/components/layout/Navbar.vue";
import RevealOnScroll from "@/components/layout/RevealOnScroll.vue";
import AnimatedCounter from "@/components/ui/AnimatedCounter.vue";
import { featuredProject, portfolioData } from "@/data/portfolio";

const trustCards = [
  { label: "Computer Science", icon: Cpu },
  { label: "SOC Focus", icon: ShieldCheck },
  { label: "Phnom Penh", icon: MapPin },
  { label: "Internship Ready", icon: UserCheck },
];

const heroStats = [
  {
    label: "Projects",
    value: "2",
    detail: "SOC focused",
  },
  {
    label: "Certificates",
    value: String(portfolioData.certifications.length),
    detail: "Cyber training",
  },
  { label: "Core Stack", value: "SOC", detail: "SIEM + IR" },
  { label: "Status", value: "Open", detail: "Internship" },
];

const alertStream = [
  { label: "Log analysis", severity: "SIEM" },
  { label: "Alert triage", severity: "SOC" },
  { label: "MITRE mapping", severity: "ATT&CK" },
  { label: "Incident notes", severity: "IR" },
];

const flagshipStats = [
  { label: "Focus", value: "SOC", detail: "Monitoring" },
  { label: "Tools", value: "6+", detail: "Lab stack" },
  { label: "Goal", value: "IR", detail: "Response" },
];

const techMarquee = [
  "Splunk SIEM",
  "MITRE ATT&CK",
  "Incident Response",
  "Log Analysis",
  "Linux",
  "NestJS",
  "PostgreSQL",
  "Wireshark",
];

const projectItems = [
  {
    title: "Cyber Shield Checker",
    year: "2026",
    icon: ShieldCheck,
    summary: "A SOC monitoring and incident management platform for alerts, cases, and analyst workflows.",
    stack: ["NestJS", "PostgreSQL", "Linux", "MITRE ATT&CK", "IOC Tracking"],
    highlights: [
      "Alert generation and incident reporting",
      "MITRE ATT&CK mapping and IOC tracking",
      "Centralized case management",
    ],
  },
  {
    title: "SOC Analyst Lab",
    year: "2026",
    icon: Terminal,
    summary: "A hands-on lab for practicing SIEM searches, alert investigation, and incident response scenarios.",
    stack: ["Splunk SIEM", "MITRE ATT&CK", "Threat Hunting", "Incident Response"],
    highlights: [
      "Security event and log analysis",
      "Threat hunting methodology",
      "Simulated response procedures",
    ],
  },
];

const coreStrengths = [
  {
    title: "SOC Monitoring",
    detail: "Reading logs, identifying suspicious activity, and turning alerts into notes.",
    icon: ShieldCheck,
  },
  {
    title: "Incident Response",
    detail: "Following investigation steps, documenting evidence, and practicing response flow.",
    icon: Terminal,
  },
  {
    title: "Security Engineering",
    detail: "Building backend and database features for alerts, incidents, and case tracking.",
    icon: Code2,
  },
];

const skillMatrix = [
  {
    title: "Security Operations",
    icon: ShieldCheck,
    skills: ["SOC Monitoring", "Log Analysis", "Alert Triage", "Incident Response", "MITRE ATT&CK"],
  },
  {
    title: "Networking & Systems",
    icon: RadioTower,
    skills: ["TCP/IP", "Subnetting", "VLANs", "Routing", "Linux Administration"],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Splunk SIEM", "pfSense", "Wireshark", "Nmap", "Kali Linux"],
  },
  {
    title: "Development",
    icon: Code2,
    skills: ["Python", "JavaScript", "Vue.js", "NestJS", "Laravel", "PostgreSQL"],
  },
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
    description: "Splunk, pfSense, Wireshark, and Linux practice.",
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

    <section id="home" class="hero-section relative scroll-mt-24 overflow-hidden border-b border-border pb-14 pt-28 md:pb-20 md:pt-32">
      <div class="hero-grid" aria-hidden="true"></div>
      <div
        class="container-page relative z-1 grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(390px,0.78fr)] xl:gap-14"
      >
        <div class="animate-reveal-up max-w-2xl">
          <div
            class="hero-pill inline-flex items-center gap-2 rounded-[6px] border border-brand/25 px-3 py-1.5 text-xs font-semibold uppercase text-brand"
          >
            <span class="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Cyber Shield Labs · by Peng Seyha
          </div>

          <p class="mono mt-5 text-sm font-medium text-muted">Hi, I&apos;m Peng Seyha.</p>

          <h1
            class="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] text-display sm:text-5xl xl:text-6xl"
          >
            SOC analyst aspirant building practical security labs.
          </h1>

          <p class="mt-4 max-w-xl text-base leading-7 text-muted md:mt-5 md:text-lg">
            I turn classroom fundamentals into hands-on SOC projects: monitoring, log analysis,
            incident tracking, and clear investigation notes.
          </p>

          <p class="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted md:mt-6">
            <Transition name="role" mode="out-in">
              <span
                :key="displayedRole"
                class="mono inline-flex min-h-7 items-center rounded-[6px] border border-brand/25 bg-brand-soft px-2.5 text-brand"
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

          <div class="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
            <a href="#projects" class="button-primary w-full sm:w-auto">
              View Projects
              <ExternalLink class="h-4 w-4" />
            </a>
            <a :href="portfolioData.contact.resumeUrl" class="button-secondary w-full sm:w-auto">
              <Download class="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div class="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-9">
            <div v-for="stat in heroStats" :key="stat.label" class="hero-stat">
              <p class="mono text-xl font-bold text-display sm:text-2xl">
                <AnimatedCounter :value="stat.value" />
              </p>
              <p class="mt-1 text-[11px] uppercase text-muted sm:text-xs">
                {{ stat.label }}
              </p>
              <p class="mt-1 text-[11px] text-muted/80">{{ stat.detail }}</p>
            </div>
          </div>
        </div>

        <div class="min-w-0 lg:pt-4">
          <RevealOnScroll :delay="120" class="hero-visual hero-command motion-card">
            <div class="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p class="text-xs font-semibold uppercase text-brand">
                  Analyst Workspace
                </p>
                <h2 class="mt-1 text-xl font-bold text-display">Cyber Shield Checker</h2>
              </div>
              <span class="badge">
                <span class="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Monitoring: Active
              </span>
            </div>

            <div class="grid gap-4 p-4">
              <div class="relative overflow-hidden rounded-[8px] border border-border">
                <img
                  :src="featuredProject.image"
                  :alt="`${featuredProject.title} preview`"
                  class="aspect-[16/9] w-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent"
                ></div>
                <div class="scan-line" aria-hidden="true"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-xs font-semibold uppercase text-brand">
                    Featured Build
                  </p>
                  <h3 class="mt-1 text-2xl font-bold text-display">Alerts to incident notes</h3>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div v-for="stat in flagshipStats" :key="stat.label" class="stat-tile">
                  <p class="text-[11px] uppercase text-muted">{{ stat.label }}</p>
                  <p class="mono mt-1 text-2xl font-bold text-display">
                    <AnimatedCounter :value="stat.value" />
                  </p>
                  <p class="mt-1 text-[11px] text-muted">{{ stat.detail }}</p>
                </div>
              </div>

              <div class="surface-panel p-4">
                <div class="mb-3 flex items-center justify-between">
                  <p class="text-xs font-medium uppercase text-muted">
                    What I practice
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
                    class="flex items-center justify-between rounded-[6px] border px-3 py-2.5 transition-colors duration-300"
                    :class="
                      index === activeAlertIndex ? 'border-brand/30 bg-brand-soft' : 'border-border'
                    "
                  >
                    <span class="text-sm text-body">{{ item.label }}</span>
                    <span class="tag text-[11px]">{{ item.severity }}</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div class="container-page relative z-1 mt-10">
        <div class="tech-marquee" aria-label="Core technologies">
          <div class="tech-marquee-track">
            <span v-for="(tech, index) in [...techMarquee, ...techMarquee]" :key="`${tech}-${index}`">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <RevealOnScroll
            v-for="(item, index) in trustCards"
            :key="item.label"
            :delay="index * 50"
            class="surface-panel flex items-center gap-3 px-4 py-3.5"
          >
            <component :is="item.icon" class="h-4.5 w-4.5 shrink-0 text-brand" />
            <p class="text-sm font-medium text-display">{{ item.label }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="section-panel scroll-mt-24 border-b border-border py-16 md:py-24"
    >
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">01</span>About Me</p>
          <div class="mt-4 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h2 class="section-title">About Me</h2>
              <p class="section-copy mt-4">
                I&apos;m a Computer Science student in Phnom Penh focused on SOC monitoring,
                incident response, and security tooling. I like building small, practical systems
                that show how alerts become evidence, decisions, and documentation.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="surface-panel p-5">
                <p class="section-kicker text-xs">Focus</p>
                <p class="mt-3 text-base font-semibold text-display">
                  SOC monitoring and incident response
                </p>
              </div>
              <div class="surface-panel p-5">
                <p class="section-kicker text-xs">Availability</p>
                <p class="mt-3 text-base font-semibold text-display">
                  {{ portfolioData.identity.availability }}
                </p>
              </div>
              <div class="surface-panel p-5">
                <p class="section-kicker text-xs">Location</p>
                <p class="mt-3 text-base font-semibold text-display">
                  {{ portfolioData.identity.location }}
                </p>
              </div>
              <div class="surface-panel p-5">
                <p class="section-kicker text-xs">Mindset</p>
                <p class="mt-3 text-base font-semibold text-display">
                  Practical labs, clear notes, and steady improvement
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section
      id="projects"
      class="scroll-mt-24 border-b border-border py-16 md:py-24"
    >
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">02</span>Projects</p>
          <div class="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-copy">Two focused projects showing SOC practice, alert workflow, and security tooling.</p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-5 lg:grid-cols-2">
          <RevealOnScroll
            v-for="(project, index) in projectItems"
            :key="project.title"
            :delay="index * 80"
            class="project-card card group flex h-full flex-col p-6 md:p-7"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="section-kicker text-xs">{{ project.year }}</p>
                <h3 class="mt-3 text-2xl font-bold leading-tight text-display">
                  {{ project.title }}
                </h3>
                <p class="mt-3 text-sm leading-6 text-muted">
                  {{ project.summary }}
                </p>
              </div>
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-105"
              >
                <component :is="project.icon" class="h-5 w-5" />
              </div>
            </div>

            <ul class="mt-6 grid gap-3">
              <li
                v-for="highlight in project.highlights"
                :key="highlight"
                class="flex items-center gap-3 rounded-[6px] border border-border bg-surface-raised/60 px-3 py-2.5 text-sm font-medium text-display"
              >
                <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              <span v-for="tech in project.stack" :key="tech" class="tag">
                {{ tech }}
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="skills"
      class="section-panel scroll-mt-24 border-b border-border py-14 md:py-20"
    >
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">03</span>Skills</p>
          <div class="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 class="section-title">Professional Skill Set</h2>
            <p class="section-copy">A focused mix of SOC operations, networking, systems, and secure application development.</p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <RevealOnScroll class="card p-6 md:p-7">
            <p class="section-kicker text-xs">Core Strengths</p>
            <h3 class="mt-3 text-2xl font-bold text-display">Where I add value</h3>

            <div class="mt-7 grid gap-4">
              <div
                v-for="(strength, index) in coreStrengths"
                :key="strength.title"
                class="skill-strength"
                :style="{ '--strength-delay': `${index * 110}ms` }"
              >
                <div class="skill-strength-icon">
                  <component :is="strength.icon" class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="text-sm font-bold text-display">{{ strength.title }}</h4>
                  <p class="mt-1 text-sm leading-6 text-muted">{{ strength.detail }}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <div class="grid gap-4 md:grid-cols-2">
            <RevealOnScroll
              v-for="(group, index) in skillMatrix"
              :key="group.title"
              :delay="index * 70"
              class="skill-matrix-card"
            >
              <div class="flex items-center gap-3">
                <div class="skill-matrix-icon">
                  <component :is="group.icon" class="h-5 w-5" />
                </div>
                <h3 class="text-base font-bold text-display">{{ group.title }}</h3>
              </div>

              <div class="mt-5 grid gap-2">
                <div v-for="skill in group.skills" :key="skill" class="skill-row">
                  <span>{{ skill }}</span>
                  <span class="skill-row-line"></span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll class="mt-6" :delay="220">
          <div class="surface-panel flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-sm font-bold text-display">Professional habits</p>
              <p class="mt-1 text-sm text-muted">Analytical thinking, documentation, teamwork, and clear communication.</p>
            </div>
            <span class="tag w-fit">Ready for internship collaboration</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section
      id="achievements"
      class="scroll-mt-24 border-b border-border py-16 md:py-24"
    >
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">04</span>Achievements</p>
          <div class="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 class="section-title">Achievements</h2>
            <p class="section-copy">Highlights from learning, labs, certifications, and practical cybersecurity work.</p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <RevealOnScroll
            v-for="(achievement, index) in achievements"
            :key="achievement.title"
            :delay="index * 60"
            class="card p-6"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-[8px] bg-brand-soft text-brand"
            >
              <component :is="achievement.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 text-base font-semibold text-display">{{ achievement.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-muted">{{ achievement.description }}</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll class="mt-14" :delay="120">
          <div class="flex flex-col justify-between gap-4 border-t border-border pt-10 lg:flex-row lg:items-end">
            <div>
              <p class="section-kicker text-xs">Certificates</p>
              <h3 class="mt-3 text-2xl font-bold text-display">Certifications</h3>
            </div>
            <p class="section-copy">
              Cybersecurity, SOC, Linux, networking, and programming training completed through
              focused online study.
            </p>
          </div>
        </RevealOnScroll>

        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <RevealOnScroll
            v-for="(certificate, index) in portfolioData.certifications"
            :key="certificate.id"
            :delay="index * 50"
            class="surface-panel p-5"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-soft text-brand"
              >
                <Award class="h-5 w-5" />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase text-muted">
                  {{ certificate.provider }} · {{ certificate.year }}
                </p>
                <h4 class="mt-2 text-base font-bold leading-snug text-display">
                  {{ certificate.title }}
                </h4>
                <p class="mt-2 text-sm leading-6 text-muted">{{ certificate.focus }}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section id="contact" class="scroll-mt-24 py-16 md:py-24">
      <div class="container-page">
        <RevealOnScroll class="surface-panel p-6 md:p-10">
          <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p class="section-kicker"><span class="section-index">05</span>Contact</p>
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
                <p class="mt-4 text-xs font-medium uppercase text-muted">
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
