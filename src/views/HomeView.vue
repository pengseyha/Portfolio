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
} from "lucide-vue-next";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import Header from "@/components/site/Header.vue";
import RevealOnScroll from "@/components/site/RevealOnScroll.vue";
import { featuredProject, portfolioData, type Project } from "@/data/portfolio";

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

const heroRoles = [
  "SOC Analyst Aspirant",
  "Threat Detection Builder",
  "Network Defender",
  "Incident Response Learner",
];
const currentRoleIndex = ref(0);
const displayedRole = ref("");
const typingPhase = ref<"typing" | "pausing" | "deleting">("typing");
let typingTimer: number | undefined;

const stepTyping = () => {
  const target = heroRoles[currentRoleIndex.value];
  const current = displayedRole.value;

  if (typingPhase.value === "typing") {
    if (current.length < target.length) {
      displayedRole.value = target.slice(0, current.length + 1);
      typingTimer = window.setTimeout(stepTyping, 65);
    } else {
      typingPhase.value = "pausing";
      typingTimer = window.setTimeout(() => {
        typingPhase.value = "deleting";
        stepTyping();
      }, 1600);
    }
  } else if (typingPhase.value === "deleting") {
    if (current.length > 0) {
      displayedRole.value = current.slice(0, -1);
      typingTimer = window.setTimeout(stepTyping, 32);
    } else {
      currentRoleIndex.value = (currentRoleIndex.value + 1) % heroRoles.length;
      typingPhase.value = "typing";
      typingTimer = window.setTimeout(stepTyping, 280);
    }
  }
};

const scrollProgress = ref(0);
const handleScroll = () => {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  scrollProgress.value = height > 0 ? scrollTop / height : 0;
};

const mouseX = ref(0);
const mouseY = ref(0);
const onPointerMove = (event: PointerEvent) => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  mouseX.value = (event.clientX - w / 2) / w;
  mouseY.value = (event.clientY - h / 2) / h;
};

const heroOrbStyle = computed(() => ({
  transform: `translate3d(${mouseX.value * 24}px, ${mouseY.value * 18}px, 0)`,
}));

const heroOrbStyleAlt = computed(() => ({
  transform: `translate3d(${mouseX.value * -16}px, ${mouseY.value * -12}px, 0)`,
}));

onMounted(() => {
  stepTyping();
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
});

onBeforeUnmount(() => {
  if (typingTimer) window.clearTimeout(typingTimer);
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("pointermove", onPointerMove);
});
</script>

<template>
  <div class="overflow-hidden bg-background">
    <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>

    <Header />

    <section id="home" class="relative scroll-mt-28 overflow-hidden pb-12 pt-32 md:pb-18 md:pt-40">
      <div class="aurora-bg" aria-hidden="true"></div>
      <div class="grid-fade" aria-hidden="true"></div>
      <span
        class="orb orb-1 left-[-6%] top-20 h-72 w-72"
        :style="heroOrbStyle"
        aria-hidden="true"
      ></span>
      <span
        class="orb orb-2 right-[-4%] top-40 h-80 w-80"
        :style="heroOrbStyleAlt"
        aria-hidden="true"
      ></span>
      <span class="orb orb-3 left-1/3 bottom-[-10%] h-64 w-64" aria-hidden="true"></span>

      <div
        class="container-page relative z-1 grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]"
      >
        <div class="animate-reveal-up">
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <span class="badge shimmer">
              <span class="status-dot h-2 w-2 rounded-full bg-brand"></span>
              <span class="mono">{{ displayedRole }}</span
              ><span class="blink-cursor"></span>
            </span>
            <span class="stat-pill">
              <MapPin class="h-3.5 w-3.5 text-cyan-300" />
              Cambodia internship ready
            </span>
          </div>

          <p class="section-kicker mb-4">PENG SEYHA / Computer Science Student</p>
          <h1 class="max-w-4xl text-4xl font-black leading-[1.03] md:text-6xl">
            <span class="text-display">Building Skills in</span>
            <span class="gradient-text">&nbsp;Cybersecurity&nbsp;</span>
            <span class="text-display">and</span>
            <span class="gradient-text-soft">&nbsp;Security Operations</span>
          </h1>
          <p class="mt-5 max-w-xl text-base leading-7 text-body md:text-lg">
            Computer Science student focused on SOC monitoring, threat detection, networking, and
            defensive security.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" class="button-primary w-full sm:w-auto">
              View Projects
              <ExternalLink class="h-4 w-4" />
            </a>
            <a :href="portfolioData.contact.resumeUrl" class="button-secondary w-full sm:w-auto">
              <Download class="h-4 w-4 text-brand" />
              Download CV
            </a>
          </div>

          <div class="mt-10 flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
            <span class="mono uppercase tracking-[0.18em] text-cyan-300">// Stack</span>
            <span
              v-for="tag in ['Splunk', 'pfSense', 'Snort', 'Linux', 'NestJS', 'Vue']"
              :key="tag"
              class="stat-pill !px-3 !py-1.5 !text-[11px]"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <RevealOnScroll :delay="120" class="relative">
          <div class="cyber-panel surface-panel blue-ring glow-border rounded-[28px] p-4 md:p-5">
            <div
              class="relative overflow-hidden rounded-2xl border border-border bg-background/55 p-4"
            >
              <div
                class="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/80 p-5"
              >
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">
                      Security profile
                    </p>
                    <p class="mt-2 text-sm font-semibold text-muted">SOC / IT Internship Path</p>
                  </div>
                  <ShieldCheck class="h-7 w-7 text-cyan-300 float-slow" />
                </div>

                <div class="relative mx-auto my-8 flex h-56 w-56 items-center justify-center">
                  <div
                    class="absolute inset-0 animate-[spin_22s_linear_infinite] rounded-full border border-cyan-300/25"
                  ></div>
                  <div
                    class="absolute inset-5 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-brand/30"
                  ></div>
                  <span
                    class="absolute left-2 top-10 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(6,182,212,0.75)]"
                  ></span>
                  <span
                    class="absolute bottom-8 right-5 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_22px_rgba(59,130,246,0.75)]"
                  ></span>
                  <span
                    class="absolute right-8 top-3 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.7)]"
                  ></span>
                  <div
                    class="float-slow flex h-40 w-40 items-center justify-center rounded-[2rem] border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 shadow-2xl shadow-blue-950/50"
                  >
                    <div class="text-center">
                      <p class="text-5xl font-black text-display">PS</p>
                      <p
                        class="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-200"
                      >
                        PENG SEYHA
                      </p>
                    </div>
                  </div>
                </div>

                <div class="grid gap-3 sm:grid-cols-3">
                  <div
                    class="rounded-lg border border-border bg-background/60 p-3 transition hover:border-cyan-300/40 hover:bg-background/85"
                  >
                    <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                      Focus
                    </p>
                    <p class="mt-2 text-sm font-black text-display">SOC Monitoring</p>
                  </div>
                  <div
                    class="rounded-lg border border-border bg-background/60 p-3 transition hover:border-cyan-300/40 hover:bg-background/85"
                  >
                    <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                      Stack
                    </p>
                    <p class="mt-2 text-sm font-black text-display">Splunk / pfSense</p>
                  </div>
                  <div
                    class="rounded-lg border border-border bg-background/60 p-3 transition hover:border-cyan-300/40 hover:bg-background/85"
                  >
                    <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                      Status
                    </p>
                    <p class="mt-2 text-sm font-black text-display">Open to Internships</p>
                  </div>
                </div>
              </div>

              <div
                class="float-slow absolute -right-2 top-24 hidden rounded-lg border border-border bg-surface-raised/95 p-3 shadow-2xl md:block"
              >
                <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                  Alert queue
                </p>
                <p class="mt-1 text-sm font-black text-display">12 reviewed</p>
              </div>
              <div
                class="float-slower absolute -left-2 bottom-24 hidden rounded-lg border border-border bg-surface-raised/95 p-3 shadow-2xl md:block"
              >
                <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">Network</p>
                <p class="mt-1 text-sm font-black text-display">Firewall + IDS</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div class="container-page relative z-1 mt-8">
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <RevealOnScroll
            v-for="(item, index) in trustCards"
            :key="item.label"
            :delay="index * 50"
            class="premium-card glow-border surface-panel rounded-lg p-4"
          >
            <component
              :is="item.icon"
              class="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110"
            />
            <p class="mt-3 text-sm font-black text-display">{{ item.label }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="skills"
      class="relative scroll-mt-28 overflow-hidden border-t border-border py-18 md:py-24"
    >
      <div class="aurora-bg-subtle" aria-hidden="true"></div>
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker">Skills</p>
          <div class="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 class="section-title">
              Skills for
              <span class="gradient-text-soft">SOC and IT security</span>
              work.
            </h2>
            <p class="section-copy">Security, networking, tools, and development fundamentals.</p>
          </div>
        </RevealOnScroll>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealOnScroll
            v-for="(group, index) in skillGroups"
            :key="group.title"
            :delay="index * 70"
            class="premium-card glow-border surface-panel group rounded-[20px] p-5"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110"
              >
                <component :is="group.icon" class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-base font-black text-display">{{ group.title }}</h3>
                <p class="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-cyan-300">
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
                {{ skill }}
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="relative scroll-mt-28 overflow-hidden border-t border-border py-18 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker">Featured Project</p>
          <h2 class="section-title mt-4">
            <span class="gradient-text">Cyber Shield Checker.</span>
          </h2>
          <p class="section-copy mt-4">A SOC monitoring project for alerts, evidence, and cases.</p>
        </RevealOnScroll>

        <RevealOnScroll
          class="cyber-panel surface-panel blue-ring glow-border mt-10 overflow-hidden rounded-[28px]"
          :delay="80"
        >
          <div class="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div class="p-6 md:p-8">
              <span class="badge">Main Project</span>
              <h3 class="mt-5 text-4xl font-black text-display md:text-5xl">
                {{ featuredProject.title }}
              </h3>
              <p class="mt-4 text-base leading-7 text-body">{{ featuredProject.summary }}</p>

              <div class="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <p class="section-kicker text-[11px]">Problem</p>
                  <p class="mt-3 text-sm leading-6 text-muted">
                    Too many events become noise without triage and evidence.
                  </p>
                </div>
                <div>
                  <p class="section-kicker text-[11px]">Solution</p>
                  <p class="mt-3 text-sm leading-6 text-muted">
                    A simple workflow from logs to alerts, cases, and notes.
                  </p>
                </div>
              </div>

              <div class="mt-8">
                <p class="section-kicker text-[11px]">Technologies Used</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span
                    v-for="tech in featuredProject.stack"
                    :key="tech"
                    class="rounded-full border border-border bg-background/45 px-3 py-1.5 text-xs font-bold text-body"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="mt-8">
                <p class="section-kicker text-[11px]">Key Features</p>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  <div
                    v-for="feature in featuredProject.features.slice(0, 4)"
                    :key="feature"
                    class="flex gap-3 rounded-lg border border-border bg-background/45 p-3 text-sm leading-6 text-muted"
                  >
                    <CheckCircle2 class="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
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
                  GitHub Profile
                </a>
                <RouterLink
                  :to="`/projects/${featuredProject.id}`"
                  class="button-secondary w-full sm:w-auto"
                >
                  <BookOpenCheck class="h-4 w-4 text-brand" />
                  Case Study
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

            <div class="border-t border-border bg-background/35 p-4 lg:border-l lg:border-t-0">
              <div class="h-full rounded-2xl border border-border bg-slate-950/80 p-4">
                <div class="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p class="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      SOC Dashboard
                    </p>
                    <h4 class="mt-2 text-xl font-black text-display">Security Operations View</h4>
                  </div>
                  <RadioTower class="h-6 w-6 text-brand" />
                </div>

                <div class="mt-5 grid gap-3 sm:grid-cols-3">
                  <div
                    v-for="metric in featuredProject.metrics"
                    :key="metric.label"
                    class="rounded-lg border border-border bg-white/[0.03] p-4"
                  >
                    <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                      {{ metric.label }}
                    </p>
                    <p class="mt-2 text-lg font-black text-display">{{ metric.value }}</p>
                  </div>
                </div>

                <div class="mt-5 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                  <div class="rounded-lg border border-border bg-white/[0.03] p-4">
                    <div class="mb-4 flex items-center justify-between">
                      <p class="text-xs font-black uppercase tracking-[0.14em] text-muted">
                        Alert stream
                      </p>
                      <span
                        class="rounded-full bg-cyan-400/10 px-2 py-1 text-xs font-black text-cyan-200"
                      >
                        Live queue
                      </span>
                    </div>
                    <div class="space-y-3">
                      <div
                        v-for="item in [
                          'Failed login spike',
                          'Blocked firewall traffic',
                          'Snort IDS alert',
                          'Incident note added',
                        ]"
                        :key="item"
                        class="flex items-center justify-between rounded-md border border-border bg-background/55 px-3 py-3"
                      >
                        <span class="text-sm font-bold text-body">{{ item }}</span>
                        <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-lg border border-border bg-white/[0.03] p-4">
                    <p class="text-xs font-black uppercase tracking-[0.14em] text-muted">
                      Workflow
                    </p>
                    <div class="mt-4 space-y-3">
                      <div
                        v-for="(step, index) in ['Collect', 'Detect', 'Triage', 'Document']"
                        :key="step"
                        class="flex items-center gap-3"
                      >
                        <span
                          class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-xs font-black text-brand"
                        >
                          0{{ index + 1 }}
                        </span>
                        <span class="text-sm font-bold text-display">{{ step }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <RevealOnScroll
            v-for="(project, index) in supportingProjects"
            :key="project.id"
            :delay="index * 70"
            class="premium-card glow-border surface-panel group flex h-full flex-col overflow-hidden rounded-[20px]"
          >
            <div class="image-sheen relative overflow-hidden">
              <img
                :src="project.image"
                :alt="`${project.title} preview`"
                class="aspect-video w-full object-cover opacity-82 transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                loading="lazy"
              />
              <span
                v-if="isCyberProject(project)"
                class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-background/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-cyan-200 backdrop-blur"
              >
                <ShieldCheck class="h-3 w-3" />
                Security Focus
              </span>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <p class="section-kicker text-[11px]">{{ project.eyebrow }}</p>
              <h3
                class="mt-2 text-xl font-black text-display transition-colors group-hover:text-brand"
              >
                {{ project.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-muted">{{ project.summary }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.stack.slice(0, 4)"
                  :key="tech"
                  class="rounded-full border border-border bg-background/45 px-2.5 py-1 text-[11px] font-bold text-body"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="mt-4 space-y-2">
                <div
                  v-for="feature in project.features.slice(0, 2)"
                  :key="feature"
                  class="flex gap-2 text-xs leading-5 text-muted"
                >
                  <CheckCircle2 class="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                  <span>{{ feature }}</span>
                </div>
              </div>

              <div class="mt-5 flex items-center gap-4 border-t border-border pt-4">
                <RouterLink
                  :to="`/projects/${project.id}`"
                  class="inline-flex items-center gap-2 text-sm font-black text-brand transition-all duration-300 hover:gap-3"
                >
                  Case study
                  <ArrowUpRight class="h-4 w-4" />
                </RouterLink>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-auto text-muted transition hover:text-cyan-300"
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
      class="relative scroll-mt-28 overflow-hidden border-t border-border py-18 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker">Education</p>
          <h2 class="section-title mt-4">
            A focused path from computer science to
            <span class="gradient-text-soft">SOC readiness.</span>
          </h2>
        </RevealOnScroll>

        <div class="mt-10 max-w-4xl">
          <div class="relative">
            <div
              class="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent"
            ></div>
            <RevealOnScroll
              v-for="(item, index) in educationTimeline"
              :key="item.year"
              :delay="index * 80"
              :as="'article'"
              class="relative mb-8 pl-12 last:mb-0"
            >
              <div
                class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-brand transition hover:border-cyan-300/60"
              >
                <span class="timeline-node h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
              </div>
              <p class="section-kicker text-[11px]">{{ item.year }}</p>
              <h3 class="mt-2 text-xl font-black text-display">{{ item.title }}</h3>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>

    <section
      id="achievements"
      class="relative scroll-mt-28 overflow-hidden border-t border-border py-18 md:py-24"
    >
      <div class="aurora-bg-subtle" aria-hidden="true"></div>
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker">Achievements</p>
          <h2 class="section-title mt-4">
            Achievements and
            <span class="gradient-text">momentum.</span>
          </h2>
        </RevealOnScroll>

        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          <RevealOnScroll
            v-for="(achievement, index) in achievements"
            :key="achievement.title"
            :delay="index * 60"
            class="premium-card glow-border surface-panel rounded-lg p-5"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand transition-transform duration-300 hover:scale-110 hover:rotate-6"
            >
              <component :is="achievement.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-5 text-base font-black text-display">{{ achievement.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-muted">{{ achievement.description }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="certificates"
      class="relative scroll-mt-28 overflow-hidden border-t border-border py-18 md:py-24"
    >
      <div class="container-page relative z-1">
        <RevealOnScroll>
          <p class="section-kicker">Certificates</p>
          <h2 class="section-title mt-4">
            Certificates and
            <span class="gradient-text-soft">training.</span>
          </h2>
        </RevealOnScroll>

        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <RevealOnScroll
            v-for="(certificate, index) in portfolioData.certifications"
            :key="certificate.id"
            :delay="index * 50"
            class="premium-card glow-border surface-panel rounded-lg p-5"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="section-kicker text-[11px]">{{ certificate.provider }}</p>
                <h3 class="mt-3 text-xl font-black text-display">{{ certificate.title }}</h3>
              </div>
              <Award
                class="h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 hover:rotate-12 hover:scale-110"
              />
            </div>
            <p class="mt-4 text-sm leading-6 text-muted">{{ certificate.focus }}</p>
            <div class="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
              <span class="text-sm font-black text-body">{{ certificate.year }}</span>
              <a
                v-if="certificate.verifyUrl"
                :href="certificate.verifyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-border px-3 py-1 text-xs font-black text-muted transition hover:border-cyan-300/50 hover:text-cyan-300"
              >
                Verify
              </a>
              <span
                v-else
                class="rounded-full border border-border bg-background/45 px-3 py-1 text-xs font-black text-muted"
              >
                Proof available
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="relative scroll-mt-28 overflow-hidden border-t border-border py-18 md:py-24"
    >
      <div class="aurora-bg" aria-hidden="true"></div>
      <div class="container-page relative z-1">
        <RevealOnScroll
          class="cyber-panel surface-panel blue-ring glow-border rounded-[28px] p-6 md:p-10"
        >
          <div class="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p class="section-kicker">Contact</p>
              <h2 class="mt-4 text-4xl font-black leading-tight md:text-6xl">
                <span class="text-display">Let&apos;s Build</span>
                <span class="gradient-text">Secure Systems</span>
                <span class="text-display">Together</span>
              </h2>
              <p class="mt-5 max-w-xl text-base leading-7 text-muted">
                Open to cybersecurity, IT, SOC, and network defense internships in Cambodia.
              </p>
              <div class="mt-6 flex flex-wrap items-center gap-3">
                <span class="stat-pill">
                  <span class="status-dot h-2 w-2 rounded-full bg-emerald-400"></span>
                  Available for internship
                </span>
                <span class="stat-pill">
                  <MapPin class="h-3.5 w-3.5 text-cyan-300" />
                  Phnom Penh, Cambodia
                </span>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <a
                v-for="(link, index) in contactLinks"
                :key="link.label"
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="premium-card glow-border rounded-lg border border-border bg-background/45 p-4"
                :style="{ animationDelay: `${index * 60}ms` }"
              >
                <component
                  :is="link.icon"
                  class="h-5 w-5 text-cyan-300 transition-transform duration-300 hover:scale-110"
                />
                <p class="mt-4 text-xs font-black uppercase tracking-[0.14em] text-muted">
                  {{ link.label }}
                </p>
                <p class="mt-2 wrap-break-word text-sm font-black text-display">{{ link.value }}</p>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>
