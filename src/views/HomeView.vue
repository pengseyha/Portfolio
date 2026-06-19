<script setup lang="ts">
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Search,
  Send,
  ShieldCheck,
  Siren,
} from "lucide-vue-next";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import Navbar from "@/components/layout/Navbar.vue";
import RevealOnScroll from "@/components/layout/RevealOnScroll.vue";
import AnimatedCounter from "@/components/ui/AnimatedCounter.vue";
import { portfolioData } from "@/data/portfolio";

const identity = portfolioData.identity;
const initials = identity.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

// Map data icon keys to components.
const iconMap = {
  shield: ShieldCheck,
  search: Search,
  siren: Siren,
  code: Code2,
  network: Network,
} as const;
type IconKey = keyof typeof iconMap;

const heroStats = portfolioData.heroStats;
const signalStrip = portfolioData.signalStrip;
const focusCards = portfolioData.focusCards;
const skillGroups = portfolioData.skillGroups;
const certifications = portfolioData.certifications;

const toolMarquee = [
  "Splunk",
  "Snort",
  "pfSense",
  "Wireshark",
  "Nmap",
  "Kali Linux",
  "Linux",
  "MITRE ATT&CK",
  "NestJS",
  "PostgreSQL",
];

// Featured projects shown on the home page (full list lives in portfolio.ts).
const featuredIds = ["cyber-shield-checker", "soc-analyst-lab", "security-event-dashboard"];
const featuredProjects = featuredIds
  .map((id) => portfolioData.projects.find((project) => project.id === id))
  .filter((project): project is (typeof portfolioData.projects)[number] => Boolean(project));

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
  "Incident Response Learner",
  "Network Defender",
];
const currentRoleIndex = ref(0);
const displayedRole = computed(() => heroRoles[currentRoleIndex.value]);
let roleTimer: number | undefined;

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
  }, 2400);
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (roleTimer) window.clearInterval(roleTimer);
  window.removeEventListener("scroll", handleScroll);
});

// Cursor-following spotlight glow for cards.
type SpotlightEl = HTMLElement & { _spotlight?: (event: PointerEvent) => void };
const vSpotlight = {
  mounted(el: SpotlightEl) {
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    el._spotlight = move;
    el.addEventListener("pointermove", move);
  },
  unmounted(el: SpotlightEl) {
    if (el._spotlight) el.removeEventListener("pointermove", el._spotlight);
  },
};
</script>

<template>
  <div class="overflow-hidden bg-background">
    <div class="scroll-progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>

    <Navbar />

    <!-- ===== Hero ===== -->
    <section
      id="home"
      class="hero-section relative scroll-mt-24 overflow-hidden border-b border-border pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="container-page relative z-1">
        <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <!-- Left -->
          <div>
            <div
              class="hero-in hero-pill inline-flex items-center gap-2 rounded-full border border-brand/25 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-brand"
            >
              <span class="signal-dot"></span>
              {{ identity.label }}
            </div>

            <h1
              class="hero-in mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-display sm:text-5xl xl:text-6xl"
              style="animation-delay: 100ms"
            >
              Hi, I&apos;m <span class="gradient-text">Peng Seyha</span>
            </h1>

            <div
              class="hero-in mono mt-5 flex items-center gap-2 text-base font-semibold text-body sm:text-lg"
              style="animation-delay: 200ms"
            >
              <Transition name="role" mode="out-in">
                <span :key="displayedRole" class="text-brand">{{ displayedRole }}</span>
              </Transition>
              <span class="blink-cursor" aria-hidden="true"></span>
            </div>

            <p
              class="hero-in mt-5 max-w-xl text-base font-medium leading-7 text-display/90 sm:text-lg"
              style="animation-delay: 300ms"
            >
              {{ identity.tagline }}
            </p>
            <p
              class="hero-in mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base"
              style="animation-delay: 360ms"
            >
              {{ identity.description }}
            </p>

            <div
              class="hero-in mt-8 flex flex-col gap-3 sm:flex-row"
              style="animation-delay: 440ms"
            >
              <a href="#projects" class="button-primary w-full sm:w-auto">
                View Projects
                <ArrowUpRight class="h-4 w-4" />
              </a>
              <a href="#contact" class="button-secondary w-full sm:w-auto">
                <Mail class="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>

          <!-- Right: profile card -->
          <div class="hero-in lg:justify-self-end" style="animation-delay: 250ms">
            <RevealOnScroll v-spotlight class="profile-card w-full max-w-sm p-7">
              <span class="profile-glow" aria-hidden="true"></span>
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div
                    class="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-brand/30 bg-linear-to-br from-brand/25 to-accent-violet/25 font-mono text-2xl font-bold text-display"
                  >
                    <img
                      v-if="identity.photo"
                      :src="identity.photo"
                      :alt="identity.name"
                      class="h-full w-full object-cover"
                    />
                    <template v-else>{{ initials }}</template>
                    <div class="scan-line" aria-hidden="true"></div>
                  </div>
                  <div>
                    <p class="text-lg font-bold text-display">{{ identity.name }}</p>
                    <p class="mono text-xs text-brand">SOC Analyst Aspirant</p>
                  </div>
                </div>

                <div class="mt-6 space-y-3 text-sm">
                  <div class="flex items-center gap-2.5 text-muted">
                    <MapPin class="h-4 w-4 text-brand" />
                    {{ identity.location }}
                  </div>
                  <div class="flex items-center gap-2.5 text-muted">
                    <ShieldCheck class="h-4 w-4 text-brand" />
                    Cybersecurity · SOC Operations
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span class="amber-badge">
                    <span class="h-1.5 w-1.5 rounded-full bg-current"></span>
                    {{ identity.availability }}
                  </span>
                  <span class="mono text-[11px] text-muted">v2025</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <!-- Security Signal Strip (unique element) -->
        <RevealOnScroll :delay="120" class="mt-12">
          <div class="signal-strip sm:grid-cols-4">
            <div v-for="signal in signalStrip" :key="signal.label" class="signal-item">
              <span class="signal-dot"></span>
              {{ signal.label }}
            </div>
          </div>
        </RevealOnScroll>

        <!-- Hero stats -->
        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <RevealOnScroll
            v-for="(stat, index) in heroStats"
            :key="stat.label"
            :delay="index * 60"
            class="hero-stat text-center"
          >
            <p class="mono text-2xl font-bold text-display sm:text-3xl">
              <AnimatedCounter :value="stat.value" />
            </p>
            <p class="mt-1.5 text-[11px] uppercase tracking-wide text-muted sm:text-xs">
              {{ stat.label }}
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <!-- ===== About ===== -->
    <section id="about" class="section-panel scroll-mt-24 border-b border-border py-20 md:py-28">
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">01</span>About</p>
        </RevealOnScroll>

        <div class="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <RevealOnScroll>
            <h2 class="section-title">Focused on becoming a SOC Analyst through hands-on labs.</h2>
            <p class="section-copy mt-6 max-w-none">{{ identity.summary }}</p>
          </RevealOnScroll>

          <div class="grid gap-4">
            <RevealOnScroll
              v-for="(card, index) in focusCards"
              :key="card.title"
              v-spotlight
              :delay="index * 90"
              class="focus-card"
            >
              <span class="focus-icon">
                <component :is="iconMap[card.icon as IconKey]" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="text-base font-bold text-display">{{ card.title }}</h3>
                <p class="mt-1 text-sm leading-6 text-muted">{{ card.detail }}</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Featured Projects ===== -->
    <section id="projects" class="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">02</span>Projects</p>
          <div class="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-copy">
              Security case studies — what I built, the tech behind it, and the skills it proves.
            </p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-8">
          <RevealOnScroll
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            v-spotlight
            :delay="index * 80"
            class="card group grid overflow-hidden lg:grid-cols-[1.05fr_1.2fr]"
            :class="index % 2 === 1 ? 'lg:[&>figure]:order-2' : ''"
          >
            <figure
              class="relative aspect-[16/10] overflow-hidden border-b border-border lg:border-b-0"
            >
              <img
                :src="project.image"
                :alt="`${project.title} preview`"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-card/85 via-card/10 to-transparent"
              ></div>
              <span class="amber-badge absolute left-4 top-4">{{ project.type }}</span>
            </figure>

            <div class="flex flex-col p-6 md:p-8">
              <p class="mono text-xs text-brand">{{ project.eyebrow }} · {{ project.year }}</p>
              <h3 class="mt-2 text-2xl font-bold text-display">{{ project.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-muted">{{ project.summary }}</p>

              <p class="mono mt-6 text-[11px] uppercase tracking-wide text-muted">Tech Stack</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
              </div>

              <template v-if="project.skillsProved">
                <p class="mono mt-5 text-[11px] uppercase tracking-wide text-muted">
                  Skills Proved
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="skill in project.skillsProved"
                    :key="skill"
                    class="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand"
                  >
                    {{ skill }}
                  </span>
                </div>
              </template>

              <RouterLink
                :to="`/projects/${project.id}`"
                class="button-primary mt-7 w-full sm:w-fit"
              >
                Explore Project
                <ArrowUpRight class="h-4 w-4" />
              </RouterLink>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <!-- ===== Skills & Tools ===== -->
    <section id="skills" class="section-panel scroll-mt-24 border-b border-border py-20 md:py-28">
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">03</span>Skills</p>
          <div class="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 class="section-title">Skills &amp; Tools</h2>
            <p class="section-copy">
              Cybersecurity at the core, with development and networking as supporting strengths.
            </p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <RevealOnScroll
            v-for="(group, index) in skillGroups"
            :key="group.title"
            v-spotlight
            :delay="index * 80"
            class="card flex h-full flex-col p-6 md:p-7"
          >
            <span class="focus-icon">
              <component :is="iconMap[group.icon as IconKey]" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-display">{{ group.title }}</h3>
            <p class="mt-1.5 text-sm leading-6 text-muted">{{ group.description }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll :delay="150" class="mt-8">
          <div class="tech-marquee" aria-label="Tools practiced">
            <div class="tech-marquee-track">
              <span v-for="(tool, i) in [...toolMarquee, ...toolMarquee]" :key="`${tool}-${i}`">
                {{ tool }}
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <!-- ===== Certifications & Training ===== -->
    <section id="certifications" class="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div class="container-page">
        <RevealOnScroll>
          <p class="section-kicker"><span class="section-index">04</span>Training</p>
          <div class="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 class="section-title">Certifications &amp; Training</h2>
            <p class="section-copy">Focused cybersecurity, networking, and programming training.</p>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealOnScroll
            v-for="(cert, index) in certifications"
            :key="cert.id"
            :delay="index * 50"
            class="cert-card"
          >
            <span class="focus-icon">
              <ShieldCheck class="h-5 w-5" />
            </span>
            <div>
              <h3 class="text-base font-bold leading-snug text-display">{{ cert.title }}</h3>
              <p class="mono mt-1 text-xs text-muted">{{ cert.provider }} · {{ cert.year }}</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <!-- ===== Let's Connect ===== -->
    <section id="contact" class="scroll-mt-24 py-20 md:py-28">
      <div class="container-page">
        <RevealOnScroll class="glass p-6 md:p-10">
          <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="section-kicker"><span class="section-index">05</span>Contact</p>
              <h2 class="mt-4 text-3xl font-bold leading-tight text-display md:text-4xl">
                Let&apos;s Connect
              </h2>
              <p class="mt-5 max-w-md text-base leading-7 text-muted">
                {{ identity.availabilityLong }}. Reach out for internships or to talk security.
              </p>
              <p class="mt-6 flex items-center gap-2 text-sm font-medium text-display">
                <span class="status-dot h-2 w-2 rounded-full bg-emerald-400"></span>
                Available now · {{ identity.location }}
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <a
                v-for="link in contactLinks"
                :key="link.label"
                v-spotlight
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="card p-4"
              >
                <component :is="link.icon" class="h-5 w-5 text-brand" />
                <p class="mono mt-4 text-[11px] uppercase tracking-wide text-muted">
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
